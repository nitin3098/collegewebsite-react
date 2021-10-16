import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'



const Err = () => {
    return (
        <>
        <div id="main">
    	<div class="fof">
        		<h1>Ooops!!!!!!! Error 404 page</h1>
                <NavLink to='/'  className="backbtn" >Return To Home Page</NavLink>
    	</div>
</div>
        </>
    )
}

export default Err
