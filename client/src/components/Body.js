import React from "react";
import {Link} from "react-router-dom";

export default function Body() {
    return (
        <><h1>BOOK HOTELS AT YOUR OWN CONVENIENCE</h1>
        <strong><p>With HRecRooms </p></strong>
        <p>Kindly Register Yourself To Book A Hotel</p>
        <Link to='/Register'><button type="submit" className="btn btn-primary">Register</button>
        </Link>
        </>
        
    )
}