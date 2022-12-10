import { toast } from 'react-toastify';

const Notification = value => {
  toast.error(`Please enter the transaction ${value}!!`, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export default Notification;
