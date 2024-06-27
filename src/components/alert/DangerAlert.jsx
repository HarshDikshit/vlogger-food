// DangerAlert.jsx
import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const DangerAlert = ({ title, message, className, click }) => {
  return (
    <div className={`fixed  w-full h-full top-0 left-0 bg-opacity-60 backdrop-blur-sm bg-black justify-center items-center flex ${className}`}>
          <div onClick={click} className=' absolute left-0 top-0 w-full h-full z-[11]'></div>

    <Alert className=' z-[30] md:w-[30%] mx-3 h-56 text-3xl justify-center items-center flex ' severity="error">
      {title && <AlertTitle>{title}</AlertTitle>}
      {message}
    </Alert>
    </div>
  );
};

export default DangerAlert;
