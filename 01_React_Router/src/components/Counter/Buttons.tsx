// Buttons.tsx
// import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

type ButtonsProps = {
  buttonName: string;
  onClick: () => void;
  value: number
};

function Buttons({ buttonName, onClick, value}: ButtonsProps) {
  return <Button variant="dark" onClick={onClick} style={{marginBottom: "20px", marginRight: "10px"}}>{buttonName}: {value}</Button>;
}

export default Buttons;
