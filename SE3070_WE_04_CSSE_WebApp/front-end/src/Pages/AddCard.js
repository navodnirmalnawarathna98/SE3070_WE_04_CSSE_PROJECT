import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import "./admin-style.css"

import NavigationBar from './Components/NavigationBar'
import Search from './Components/Search'


const AddCard = () => {

  const [formData, setFormData] = useState({

    firstName: "",
    charge: "",
    passengerType: "",
    period: ""

  });

  const { firstName, charge, passengerType, period } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(firstName, charge, passengerType, period);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newCard = {
      firstName: firstName,
      charge: charge,
      passengerType: passengerType,
      period: period
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const body = JSON.stringify(newCard);
      await axios.post("http://localhost:8070/card/add", body, config);
      setFormData({
        firstName: "",
        charge: "",
        passengerType: "",
        period: ""
      });
      alert("Card Added Successfully");
    } catch (err) {
      console.error("error", err.response.data);
      alert("Card Not Added");
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
                <span class="text">Add Card</span>
              </div>

              {/* ******************** */}
              <div className="row">
                <div className="span6">
                  {/* add blood sample form 02 */}
                  <div className="ad-form">
                    <div className="form_wrapper">
                      <div className="form_container">

                        <div className="title_container">
                          <h2>Add Card Form</h2>
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
                                    placeholder="Card Name" 
                                    pattern="[A-Za-z]{2,20}" 
                                    title="The first name must contain letters only" 
                                    onChange={(e) => onChange(e)} 
                                    required />
                                  </div>
                                </div>

                              </div>

                              <div className="row clearfix">

                                  <div className="col_half">
                                    <div className="input_field select_option">
                                      <select id="pick" name="charge" onChange={(e) => onChange(e)} required>
                                        <option disabled selected>Charge Per KM</option>
                                        <option value="Rs 50.00" >Rs 50.00</option>
                                        <option value="Rs 80.00" >Rs 80.00</option>
                                        <option value="Rs 100.00" >Rs 100.00</option>                                       
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
                                <input type="radio" name="period" checked="checked" value={"6 Months"} onChange={(e) => onChange(e)} id="rd1" required />
                                <label for="rd1">6 Months</label>
                                <input type="radio" name="period" value={"12 Months"} onChange={(e) => onChange(e)} id="rd2" required />
                                <label for="rd2">12 Months</label>
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

export default AddCard