import React from 'react'
import './BackArrow.css';
import { redirect } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';



const BackArrow = () => {
  return (
    <div className="backArrow" onClick={() => window.history.go(-1)}>
        <FaArrowLeft fill='#fff'/>
    </div>


  )
}

export default BackArrow;