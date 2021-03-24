import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { DateTimePicker, KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';

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
  const [selectedDate, handleDateChange] = React.useState(new Date());

  const visitDate = axios.get("1231231", { params: { userId: userId } });

  const handleClickOpen = () => {
    if (userId === "123") {
      setOpenScheduleVisit(true);
    }else {
      setOpenCancelVisit(true)
    }    
  };

  const handleCloseVisit = () => {
    setOpenScheduleVisit(false);
  };

  const handleCloseCancelVisit = () => {
    setOpenCancelVisit(false);
  };

  const handleConfirm = () => {
    setOpenScheduleVisit(false);
    axios.post("123123123");
  };

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
              onChange={newDate => handleDateChange}
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
          <Button onClick={handleConfirm} color="primary">
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
          <Button onClick={handleCloseCancelVisit} color="secondary">
            Cancelar visita
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}