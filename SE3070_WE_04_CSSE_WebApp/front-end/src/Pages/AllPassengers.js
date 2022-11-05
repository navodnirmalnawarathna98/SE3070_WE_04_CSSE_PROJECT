import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./admin-style.css"
import admin_profile from "../images/admin_profile.jpg"
import NavigationBar from './Components/NavigationBar'

const AllPassengers = () => {

  // add new passenger
  const addPassengers =()=>{
    window.location.href = "/addpassengers";
  }


  // get all passengers and search using first name
  const [passengers, setPassengers] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    function passengers() {
      axios.get(`http://localhost:8070/passengers/search/?q=${query}`).then((res) => {
        setPassengers(res.data)
      }).catch((err) => {
          alert(err.message);
      })
    }
    if (query.length === 0 || query.length > 1) passengers();
  }, [query]);


  // delete sample
  const deletePassenger =(id)=>{
    axios.delete(`http://localhost:8070/passengers/delete/${id}`).then((res)=>{
        axios.get("http://localhost:8070/passengers/").then((res) =>{
            alert("Delete Successfully");
            console.log(res.data);
            setPassengers(res.data);
        }).catch((err) => {
            alert(err.message);
        })
    })
  }


  return (
    <React.Fragment>

    <div className='admindashboard'>

        <NavigationBar/>

        <section class="ad-dashboard">

          <div>
              <div class="ad-top">
                  <i class="uil uil-bars sidebar-toggle"></i>

                  <div class="ad-search-box">
                      <i class="uil uil-search"></i>
                      <input type="text" name='search' placeholder="Search here..." onChange={(e) => setQuery(e.target.value)} />
                  </div>

                  <button type="submit" class="ad-search-box-button">Search</button>

                  <img src={admin_profile} alt="admin profile"/>
              </div>
          </div>

          <div class="ad-dash-content">

            {/* All Passengers Table */}
            <div className="activity">

              <div className="ad-title">
                <i class="uil uil-clock-three"></i>
                <span class="text">All Passengers</span>
              </div>

              <div className="activity-data">
                <table class="table table-hover">

                  <thead>
                    <tr>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Contact No</th>
                      <th scope="col">Email</th>
                      <th scope="col">NIC No</th>
                      <th scope="col">Card Type</th>
                      <th scope="col">Passenger Type</th>
                      <th scope="col">State</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>

                  <tbody>

                    {passengers.length >0?(passengers.map((passenger)=>(
                        <tr>
                            <td>{passenger.firstName}</td>
                            <td>{passenger.lastName}</td>
                            <td>{passenger.contactNumber}</td>
                            <td className='simple'>{passenger.email}</td>
                            <td>{passenger.nic}</td>
                            <td>{passenger.cardType}</td>
                            <td>{passenger.passengerType}</td>
                            <td>{passenger.state}</td>
                            <td><span class="data-list">
                              <button className='button-accept'>
                                {/* use template literals */}
                              <a className='button-accept-a' title='' href={`/editpassengers/${passenger._id}`}>Edit</a>
                              </button>
                              </span></td>
                            <td><span class="data-list">
                              <button className='button-reject' onClick={()=>{deletePassenger(passenger._id)}}>Delete</button>
                              </span></td>
                        </tr>
                    ))
                    ):(
                     <h3>No details found</h3>
                    )}

                  </tbody>

                </table>
              </div>


              <div className="ad-title">
                <button class="addPassengersButton" onClick={()=>{addPassengers()}}> + Add Passengers</button>
                <i class="uil uil-user-plus"></i>
              </div>

            </div>
            {/* All Passengers Table close */}

          </div>

        </section>
    </div>

    </React.Fragment>
  )
}

export default AllPassengers