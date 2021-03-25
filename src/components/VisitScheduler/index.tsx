import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { DialogContentText } from '@material-ui/core';
import { format } from "date-fns";
import { Container } from "./styles"

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface PropTypes {
  userId: string
}

export default function VisitSchedulerModal(props: PropTypes) {
  const { userId } = props;
  const [openScheduleVisit, setOpenScheduleVisit] = React.useState(false);
  const [openCancelVisit, setOpenCancelVisit] = React.useState(false);
  //const [hasVisit, setHasVisit] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<MaterialUiPickersDate>(new Date());

  const handleClickOpen = () => {
    axios.get('1231231', { params: { userId: userId } }).then((response) => {
      if (response.status === 200) {
        setOpenCancelVisit(true);
      } else {
        setOpenScheduleVisit(true);
        setSelectedDate(response.data.date);
      }
    }, (error) => {
      console.log(error);
      setOpenScheduleVisit(true);
    })
  };

  const handleCloseVisit = () => {
    setOpenScheduleVisit(false);
  };

  const handleCloseCancelVisit = () => {
    setOpenCancelVisit(false);
  };

  const handleConfirmVisit = () => {
    //setHasVisit(true);
    //console.log(hasVisit);
    setOpenScheduleVisit(false);
    axios.post('/saveVisit', {
      userId: userId,
      date: selectedDate,
    });
  };

  const handleDeleteVisit = () => {
    //setHasVisit(false);
    //console.log(hasVisit)
    setOpenCancelVisit(false)
    axios.post('/deleteVisit', {
      userId: userId,
    })
  }

  return (
    <Container>
      <Button className="button" variant="contained" color="primary" onClick={handleClickOpen}>
        Emprestar ferramenta
      </Button>
      <Dialog
        open={openScheduleVisit}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseVisit}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Quer emprestar suas ferramentas?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Marque aqui uma data para fazer uma visita e levar sua ferramenta à ONG
          </DialogContentText>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker
              value={selectedDate}
              onChange={(date: MaterialUiPickersDate) => setSelectedDate(date)}
              disablePast
              ampm={false}
              onError={console.log}
              format="dd/MM/yyyy HH:mm"
            />
          </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseVisit} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmVisit} color="primary">
            Marcar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openCancelVisit}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseCancelVisit}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Sua visita marcada"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Você já tem uma visita marcada para {new Date(selectedDate?.getDate()!).toLocaleDateString()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCancelVisit} color="primary">
            voltar
          </Button>
          <Button onClick={handleDeleteVisit} color="secondary">
            Cancelar visita
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}