import React from 'react'
import logo from "../../images/logo.jpg"

const NavigationBar = () => {
    return (
      <div>
          <nav>
              <div class="ad-logo-name">
                  <div class="ad-logo-image">
                      <a href="/allpassengers"><img src={logo} alt="logo"/></a>
                  </div>
  
                  <span class="ad-logo_name">Easy Traveller</span>
              </div>
  
              <div class="ad-menu-items">
                  <ul class="ad-nav-links">
                      <li><a href="/allpassengers">
                          <i class="uil uil-estate"></i>
                          <span class="ad-link-name">Dahsboard</span>
                      </a></li>
                      <li><a href="/allpassengers">
                          <i class="uil uil-user-plus"></i>
                          <span class="ad-link-name">Passengers</span>
                      </a></li>
                      <li><a href="/allinspectors">
                          <i class="uil uil-user-md"></i>
                          <span class="ad-link-name">Inspectors</span>
                      </a></li>
                      <li><a href="/donorappointments">
                          <i class="uil uil-map"></i>
                          <span class="ad-link-name">Routes</span>
                      </a></li>
                      <li><a href="/seekerrequests">
                          <i class="uil uil-credit-card"></i>
                          <span class="ad-link-name">Card Types</span>
                      </a></li>
                      <li><a href="/registeredinstitutions">
                          <i class="uil uil-books"></i>
                          <span class="ad-link-name">Reports</span>
                      </a></li>
                      <li><a href="/donorlist">
                          <i class="uil uil-user-square"></i>
                          <span class="ad-link-name">Users</span>
                      </a></li>
                      <li><a href="/seekerlist">
                          <i class="uil uil-table"></i>
                          <span class="ad-link-name">Timetable</span>
                      </a></li>
                  </ul>
  
                  <ul class="ad-logout-mode">
                      <li><a href="/">
                          <i class="uil uil-signout"></i>
                          <span class="ad-link-name">Logout</span>
                      </a></li>
  
                      <li class="ad-mode">
                          <a href="#">
                              <i class="uil uil-moon"></i>
                          <span class="ad-link-name">Dark Mode</span>
                      </a>
  
                      <div class="ad-mode-toggle">
                        <span class="switch"></span>
                      </div>
                      </li>
                  </ul>
              </div>
          </nav>
      </div>
    )
  }
  
export default NavigationBar