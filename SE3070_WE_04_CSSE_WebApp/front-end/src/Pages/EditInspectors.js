import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

import NavigationBar from './Components/NavigationBar'
import Search from './Components/Search'

const EditInspectors = () => {

    const [inspector, setInspector] = useState({});
    const { id } = useParams();


    const getSampleData = async (id) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const res = await axios.get(`http://localhost:8070/inspectors/get/${id}`, config);
            setInspector(res.data.inspectors);
            console.log(res.data.inspectors);
        } catch (err) {
            console.error("error", err);
            console.log("Traking ID Wrong");
        }
    };


    useEffect(() => { 
        try {
            getSampleData(id);
            console.log(id);
          }catch (err) {
            console.error("error", err);
          }
    }, [id]);


    /*  Get Input value & Store in setCurrentPackage */
    const handleInputChange = (event) => {
        setInspector({
          ...inspector,
          [event.target.name]: event.target.value,
      });
    };


    /*  UPDATE DATA */
    const updateData = async (id) => {

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        
        alert("your inspector details successfully updated");    
        // toast.success(`your package details successfully updated`);
        await axios.put(
          `http://localhost:8070/inspectors/update/${id}`,
          inspector,
          config
        );
        setInspector({
            firstName: inspector.firstName,
            lastName: inspector.lastName,
            contactNumber: inspector.contactNumber,
            email: inspector.email,
            nic: inspector.nic,
            city: inspector.city,
            gender: inspector.state
          });
          // toast.success(`your package details successfully updated`);
          window.location.href = "/allinspectors";
  
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
                    <span class="text">Edit Inspector</span>
                  </div>
    
                  {/* ******************** */}
                  <div className="row">
                    <div className="span6">
                      {/* add blood sample form 02 */}
                      <div className="ad-form">
                        <div className="form_wrapper">
                          <div className="form_container">
    
                            <div className="title_container">
                              <h2>Edit Inspector Details</h2>
                            </div>
    
                            <div className="row clearfix">
                              <div className="">
    
                            <form>
    
                                <div className="row clearfix">

                                  <div className="col_half">
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                      <input type="text" 
                                      name="firstName" 
                                      value={inspector.firstName} 
                                      placeholder="First Name" 
                                      pattern="[A-Za-z]{2,20}" 
                                      title="The first name must contain letters only" 
                                      onChange={handleInputChange} 
                                      required />
                                    </div>
                                  </div>

                                  <div className="col_half">
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                      <input type="text" 
                                      name="lastName" 
                                      value={inspector.lastName} 
                                      placeholder="Last Name" 
                                      pattern="[A-Za-z]{2,20}" 
                                      title="The last name must contain letters only" 
                                      onChange={handleInputChange}
                                      required />
                                    </div>
                                  </div>

                                </div>

                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                                  <input type="text" 
                                  name="contactNumber" 
                                  value={inspector.contactNumber} 
                                  placeholder="Contact Number" 
                                  pattern="[0-9]{11}" 
                                  title="Enter valid contact number (ex - 94757713501)" 
                                  onChange={handleInputChange}
                                  required />
                                </div>

                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                  <input type="email" 
                                  name="email" 
                                  value={inspector.email} 
                                  placeholder="Email" 
                                  onChange={handleInputChange}
                                  required />
                                </div>

                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-id-card-o"></i></span>
                                  <input type="text" 
                                  name="nic" 
                                  value={inspector.nic}
                                  placeholder="NIC Number" 
                                  pattern="[Vv0-9]{10}" 
                                  title="Enter valid NIC number (ex - 982742978V)" 
                                  onChange={handleInputChange}
                                  required />
                                </div>

                                <div className="row clearfix">

                                    <div className="col_half">
                                        <div className="input_field select_option">
                                          <select id="pick" 
                                          name="city" 
                                          onChange={handleInputChange}
                                          required>
                                            <option disabled selected>{inspector.city}</option>
                                            <option value="Colombo" >Colombo</option>
                                            <option value="Gampaha" >Gampaha</option>
                                            <option value="Kaluthara" >Kaluthara</option>
                                            <option value="Kandy" >Kandy</option>
                                            <option value="Galle" >Galle</option>
                                            <option value="Anuradapura" >Anuradapura</option>
                                            <option value="Rathnapura" >Rathnapura</option>
                                            <option value="Mathara" >Mathara</option>
                                            <option value="Kurunagala" >Kurunagala</option> 
                                          </select>
                                          <div className="select_arrow"></div>
                                        </div>
                                    </div>

                                </div>

                                <div className="input_field radio_option">

                                  <input type="radio" 
                                  name="state"

                                  checked="checked" 
                                  value={"Active"} 
                                  onChange={handleInputChange}
                                  id="rd1" 
                                  required />
                                  <label for="rd1">Active</label>

                                  <input type="radio" 
                                  name="state" 
                                  value={"Not-Active"} 
                                  onChange={handleInputChange} 
                                  id="rd2" 
                                  required />
                                  <label for="rd2">Not-Active</label>

                                </div>

                                <div className="input_field checkbox_option">
                                  <input type="checkbox" id="cb1" />
                                  <label for="cb1">I agree with terms and conditions</label>
                                </div>

                                <button className="button" type="submit" onClick={() => updateData(id)}>Update</button>
                                <button className="button" type="submit"><a class="cancel-button" href="/allinspectors">Cancel</a></button>

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

export default EditInspectors