import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import "./admin-style.css"
import admin_profile from "../images/admin_profile.jpg"

import NavigationBar from './Components/NavigationBar'

const AllIspectors = () => {

    const addInspectors =()=>{
        window.location.href = "/addinspectors";
    } 

  // get all inspectors  
  const [inspectors, setInspectors] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {

    function inspectors() {
      axios.get(`http://localhost:8070/inspectors/search/?q=${query}`).then((res) => {
        setInspectors(res.data)
      }).catch((err) => {
          alert(err.message);
      })
    }

    if (query.length === 0 || query.length > 1) inspectors();

  }, [query]);



  // delete sample

  const deleteInspector =(id)=>{
    axios.delete(`http://localhost:8070/inspectors/delete/${id}`).then((res)=>{
        axios.get("http://localhost:8070/inspectors/").then((res) =>{
            alert("Delete Successfully");
            console.log(res.data);
            setInspectors(res.data);
        }).catch((err) => {
            alert(err.message);
        })
    })
  }


  return (
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
                <span class="text">All Inspectors</span>
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
                      <th scope="col">City</th>
                      <th scope="col">State</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>

                  <tbody>

                    {inspectors.length >0?(inspectors.map((inspector)=>(
                        <tr>
                            <td>{inspector.firstName}</td>
                            <td>{inspector.lastName}</td>
                            <td>{inspector.contactNumber}</td>
                            <td className='simple'>{inspector.email}</td>
                            <td>{inspector.nic}</td>
                            <td>{inspector.city}</td>
                            <td>{inspector.state}</td>
                            <td><span class="data-list"><button className='button-accept'><a className='button-accept-a' title='' href={`/editinspectors/${inspector._id}`}>Edit</a></button></span></td>
                            <td><span class="data-list"><button className='button-reject' onClick={()=>{deleteInspector(inspector._id)}}>Delete</button></span></td>
                        </tr>
                    ))
                    ):(
                     <h3>No details found</h3>
                    )}

                  </tbody>

                </table>
              </div>


              <div className="ad-title">
                <button class="addPassengersButton" onClick={()=>{addInspectors()}}> + Add Inspectors</button>
                <i class="uil uil-user-plus"></i>
              </div>

            </div>
            {/* All Passengers Table close */}

          </div>

        </section>
    </div>
  )
}

export default AllIspectors