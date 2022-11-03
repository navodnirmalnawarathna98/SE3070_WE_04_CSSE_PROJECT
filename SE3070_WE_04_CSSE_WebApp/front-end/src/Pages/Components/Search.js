import React from 'react'
import admin_profile from "../../images/admin_profile.jpg"

const Search = () => {
    return (
      <div>
          <div class="ad-top">
              <i class="uil uil-bars sidebar-toggle"></i>
  
              <div class="ad-search-box">
                  <i class="uil uil-search"></i>
                  <input type="text" name='search' placeholder="Search here..."/>
              </div>
  
              <button type="button" class="ad-search-box-button">Search</button>
              
              <img src={admin_profile} alt="admin profile"/>
          </div>
      </div>
    )
  }
  
  export default Search