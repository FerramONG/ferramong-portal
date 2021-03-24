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
import { DateType } from '@date-io/type';
import axios from 'axios';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

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
  const [hasVisit, setHasVisit] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<MaterialUiPickersDate>(new Date());

  const handleClickOpen = () => {
    /*const visitDate = axios.get("1231231", { params: { userId: userId } });*/
    if (hasVisit) {
      setOpenCancelVisit(true)
    } else {
      setOpenScheduleVisit(true);
    }
  };

  const handleCloseVisit = () => {
    setOpenScheduleVisit(false);
  };

  const handleCloseCancelVisit = () => {
    setOpenCancelVisit(false);
  };

  const handleConfirmVisit = () => {
    setHasVisit(true);
    console.log(hasVisit)
    setOpenScheduleVisit(false);
    /* post something */
  };

  const handleDeleteVisit = () => {
    setHasVisit(false);
    console.log(hasVisit)
    setOpenCancelVisit(false)
    /*post something */
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
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
    </div>
  );
}