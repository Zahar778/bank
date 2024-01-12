import React from 'react';
import { useNavigate } from 'react-router-dom';  

export default function BackButton() {
  const navigate = useNavigate();  

  const handleBackClick = () => {
    navigate(-1);  
  };

  return (
    <div className='back_button' onClick={handleBackClick}>
      <img src="./svg/arrow.svg" alt="<" width="24" height="24"></img>
    </div>
  );
}
