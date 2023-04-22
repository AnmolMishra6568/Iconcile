import React from 'react';
import Records from '../Records/Hotels';
import {Link} from 'react-router-dom';

export default function Rec(){
  return(
    <>
  {Records&&Records.map(record=>{
    return(
      
      <div className="box" key={record.id}>
        <strong>{record.title}</strong><br/>
        <img src={record.icon} height={300} alt=" "/>
        <br/>
        {record.Content}<br/>
        <Link to='/Booking'><button type="submit" className="btn btn-primary">Book</button>
        </Link>
        
      
        
        <br/><br/>

      </div> 
    )
  })
}</>
)
}