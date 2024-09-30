import React from 'react'
import './BackArrow.css';
import { redirect, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';



const BackArrow = () => {
  const nav = useNavigate()
  return (
    <div className="backArrow" onClick={() => nav(-1)}>
        <FaArrowLeft fill='#fff'/>
    </div>


  )
}

export default BackArrow;