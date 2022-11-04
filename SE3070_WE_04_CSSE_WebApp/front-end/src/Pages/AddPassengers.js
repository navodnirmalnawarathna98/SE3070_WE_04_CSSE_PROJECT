import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import "./admin-style.css"

import NavigationBar from './Components/NavigationBar'
import Search from './Components/Search'


const AddPassengers = () => {

  const [formData, setFormData] = useState({

    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    nic: "",
    cardType: "",
    passengerType: "",
    state: ""

  });

  const { firstName, lastName, contactNumber, email, nic, cardType, passengerType, state } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(firstName, lastName, contactNumber, email, nic, cardType, passengerType, state);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newPassengers = {
      firstName: firstName,
      lastName: lastName,
      contactNumber: contactNumber,
      email: email,
      nic: nic,
      cardType: cardType,
      passengerType: passengerType,
      state: state
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const body = JSON.stringify(newPassengers);
      await axios.post("http://localhost:8070/passengers/add", body, config);
      setFormData({
        firstName: "",
        lastName: "",
        contactNumber: "",
        email: "",
        nic: "",
        cardType: "",
        passengerType: "",
        state: ""
      });
      alert("Passenger Added Successfully");
    } catch (err) {
      console.error("error", err.response.data);
      alert("Passenger Not Added");
    }
  };

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
                <span class="text">Add Passengers</span>
              </div>

              {/* ******************** */}
              <div className="row">
                <div className="span6">
                  {/* add blood sample form 02 */}
                  <div className="ad-form">
                    <div className="form_wrapper">
                      <div className="form_container">

                        <div className="title_container">
                          <h2>Add Blood Sample Form</h2>
                        </div>

                        <div className="row clearfix">
                          <div className="">

                            <form onSubmit={(e) => onSubmit(e)}>

                              <div className="row clearfix">

                                <div className="col_half">
                                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                    <input 
                                    type="text" 
                                    name="firstName" 
                                    value={firstName} 
                                    placeholder="First Name" 
                                    pattern="[A-Za-z]{2,20}" 
                                    title="The first name must contain letters only" 
                                    onChange={(e) => onChange(e)} 
                                    required />
                                  </div>
                                </div>

                                <div className="col_half">
                                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                    <input 
                                    type="text" 
                                    name="lastName" 
                                    value={lastName} 
                                    placeholder="Last Name" 
                                    pattern="[A-Za-z]{2,20}" 
                                    title="The last name must contain letters only" 
                                    onChange={(e) => onChange(e)} 
                                    required />
                                  </div>
                                </div>

                              </div>

                              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                                <input 
                                type="text" 
                                name="contactNumber" 
                                value={contactNumber} 
                                placeholder="Contact Number" 
                                pattern="[0-9]{11}" 
                                title="Enter valid contact number (ex - 94757713501)" 
                                onChange={(e) => onChange(e)} 
                                required />
                              </div>

                              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                <input 
                                type="email" 
                                name="email" 
                                value={email} 
                                placeholder="Email" 
                                onChange={(e) => onChange(e)} 
                                required />
                              </div>

                              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-id-card-o"></i></span>
                                <input 
                                type="text" 
                                name="nic" 
                                value={nic} 
                                placeholder="NIC Number" 
                                pattern="[Vv0-9]{10}" 
                                title="Enter valid NIC number (ex - 982742978V)" 
                                onChange={(e) => onChange(e)} 
                                required />
                              </div>

                              <div className="row clearfix">

                                  <div className="col_half">
                                    <div className="input_field select_option">
                                      <select id="pick" name="cardType" onChange={(e) => onChange(e)} required>
                                        <option disabled selected>Card Type</option>
                                        <option value="Standard" >Standard</option>
                                        <option value="Family" >Family</option>
                                        <option value="Student" >Student</option>                                       
                                      </select>
                                      <div className="select_arrow"></div>
                                    </div>
                                  </div>

                                <div className="col_half">
                                  <div className="input_field select_option">
                                    <select id="pick" name="passengerType" onChange={(e) => onChange(e)} required>
                                      <option disabled selected>Passenger Type</option>
                                      <option value="Local" >Local</option>
                                      <option value="Foreign" >Foreign</option>
                                    </select>
                                    <div className="select_arrow"></div>
                                  </div>
                                </div>

                              </div>

                              <div className="input_field radio_option">
                                <input type="radio" name="state" checked="checked" value={"Active"} onChange={(e) => onChange(e)} id="rd1" required />
                                <label for="rd1">Active</label>
                                <input type="radio" name="state" value={"Not-Active"} onChange={(e) => onChange(e)} id="rd2" required />
                                <label for="rd2">Not-Active</label>
                              </div>

                              <div className="input_field checkbox_option">
                                <input type="checkbox" id="cb1" />
                                <label for="cb1">I agree with terms and conditions</label>
                              </div>

                              <button className="button" type="submit">Submit</button>

                            </form>

                          </div>
                        </div>

                      </div>
                    </div>
                    <p className="credit">Developed by <a href="/" target="_blank">Admin Panel Add Blood</a></p>
                  </div>
                  {/* end add blood sample form 02 */}
                </div>
              </div>
              {/* ******************** */}
  

            </div>
            {/* All Passengers Table close */}

          </div>

        </section>
    </div>
  )
}

export default AddPassengers