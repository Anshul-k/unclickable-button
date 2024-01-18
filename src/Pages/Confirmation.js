import React from 'react'
import { Button, Typography } from '../Components/Components'
import "../Components/styles.css"
import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <div className='hv-100'>
        <div className='flex h-100 justify-content-space-around mobile'>
            <div className='flex flex-column'>
                <Typography>YAAYYYYY !!!!!</Typography>
                <div className='w-100 flex justify-content-space-around'>
                <Link to="/form" style={{ textDecoration: 'none', color: 'inherit' }}><Button>Let's decide a date</Button></Link>
                </div>
            </div>
            <div>
                <img className="gif" src="/images/yay-hooray.gif" alt='Please Cute Bear'/>
            </div>
        </div>
    </div>
  )
}

export default Confirmation