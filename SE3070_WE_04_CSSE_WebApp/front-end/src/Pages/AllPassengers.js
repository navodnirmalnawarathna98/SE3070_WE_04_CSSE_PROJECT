import React from 'react'

import "./admin-style.css"

import NavigationBar from './Components/NavigationBar'
import Search from './Components/Search'

const addPassengers =()=>{
  window.location.href = "/addpassengers";
}

const AllPassengers = () => {
  return (
    <div className='admindashboard'>

        <NavigationBar/>

        <section class="ad-dashboard">

          <Search/>

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
                      <th scope="col">Institution Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Contact No</th>
                      <th scope="col">Blood Type</th>
                      <th scope="col">Blood Amount</th>
                      <th scope="col">Due Date</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Nawaloka</td>
                      <td>nava@gmail.com</td>
                      <td>0751125986</td>
                      <td>A+</td>
                      <td>59</td>
                      <td>2022-06-12</td>
                      <td><span class="data-list"><button className='button-accept'>Accept</button></span></td>
                      <td><span class="data-list"><button className='button-reject'>Reject</button></span></td>
                    </tr>

                    <tr>
                      <td>Asiri</td>
                      <td>asiri@gmail.com</td>
                      <td>0751125986</td>
                      <td>O-</td>
                      <td>109</td>
                      <td>2022-06-24</td>
                      <td><span class="data-list"><button className='button-accept'>Accept</button></span></td>
                      <td><span class="data-list"><button className='button-reject'>Reject</button></span></td>
                    </tr>

                    <tr>
                      <td>Apallo</td>
                      <td>apallo@gmail.com</td>
                      <td>0751125986</td>
                      <td>AB+</td>
                      <td>69</td>
                      <td>2022-06-02</td>
                      <td><span class="data-list"><button className='button-accept'>Accept</button></span></td>
                      <td><span class="data-list"><button className='button-reject'>Reject</button></span></td>
                    </tr>

                    <tr>
                      <td>Golden Key</td>
                      <td>gk@gmail.com</td>
                      <td>0751125986</td>
                      <td>A-</td>
                      <td>85</td>
                      <td>2022-06-10</td>
                      <td><span class="data-list"><button className='button-accept'>Accept</button></span></td>
                      <td><span class="data-list"><button className='button-reject'>Reject</button></span></td>
                    </tr>

                    <tr>
                      <td>Ninewells</td>
                      <td>nine@gmail.com</td>
                      <td>0751125986</td>
                      <td>B+</td>
                      <td>125</td>
                      <td>2022-06-30</td>
                      <td><span class="data-list"><button className='button-accept'>Accept</button></span></td>
                      <td><span class="data-list"><button className='button-reject'>Reject</button></span></td>
                    </tr>

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
  )
}

export default AllPassengers