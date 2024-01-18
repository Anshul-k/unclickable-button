import React from 'react'
import { Button, Typography } from '../Components/Components'
import "../Components/styles.css"
import { Link } from "react-router-dom";

function Thanks() {
  return (
    <div className='hv-100'>
        <div className='flex h-100 justify-content-space-around mobile'>
            <div className='flex flex-column'>
                <Typography>Thank You. <br/> I will contact you soon for our DATE.</Typography>
                <div className='w-100 flex justify-content-space-around'>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><Button>Home</Button></Link>
                </div>
            </div>
            <div>
                <img className="gif" src="/images/thank-you.gif" alt='Please Cute Bear'/>
            </div>
        </div>
    </div>
  )
}

export default Thanks