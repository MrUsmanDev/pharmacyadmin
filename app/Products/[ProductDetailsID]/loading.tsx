"use client"
import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';

const Loading = () => {
 
  return (
    <>
  
    <div className="page-wrapper">
    <div className="content container-fluid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <LinearProgress style={{ width: '250px', height:'7px', borderRadius:'15px' }} /> 
    </div>
  </div>
  </>
  )
}

export default Loading