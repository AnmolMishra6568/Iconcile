import React from 'react';
import Records from '../Records/Hotels';
function Booking(){
    return (
      
        <form>
          <label>
            Number of Persons:
            <input type="number" name="name" className="form-control"/>
          </label><br></br>
          <br></br>
          <br></br>
          <label>
            Rooms Type:
            <select className="form-control" >
            <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              </select>
          </label><br></br>
          <br></br>
          <br></br>
          <label>
            Date:
            <input type="date" name="date" className="form-control" />
          </label><br></br>
          <br></br>
          <br></br>
          <button type="submit">Confirm Booking</button>
        </form>
      );
    }
export default Booking