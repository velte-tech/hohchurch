import React from 'react'
import { Link } from "react-router-dom"
import "./Notfound.css"

function NotFound() {
  return (
    <div id='not_found'>
    <h2>Ooops sorry 😞😞😞</h2>
    <p className='main'>Page Not Found</p>
    <p>This page you are accessing right now is not in our database or you do not have authaurization..Thank you.</p>
    <p>Please go back to the <Link to="/">Hompage</Link></p>
</div>
  )
}

export default NotFound
