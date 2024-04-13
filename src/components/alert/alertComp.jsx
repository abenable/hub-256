import { useState } from "react";
import { Alert } from "@material-tailwind/react";

const AlertComp = ({ message }) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="mt-24 relative mx-auto w-2/3 items-center flex justify-center">
      {showAlert && (
        <Alert color="green" close onClose={handleAlertClose} iconSide="right">
          {message}
        </Alert>
      )}
    </div>
  );
};

export default AlertComp;
