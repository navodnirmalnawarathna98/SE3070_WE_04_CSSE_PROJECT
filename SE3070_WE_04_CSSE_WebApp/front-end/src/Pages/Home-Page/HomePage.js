import React from 'react';
import "./Home.css";

import img1 from "../../Images/nn.jpg"

const HomePage = () => {
  return (
    <div>
        <div>
        <div class="wrapper">
            <header class="h-color">EASY TRAVELLER</header>
            <p>Log into your station</p>
            <form action="#">
              <div class="field email">
                <div class="input-area">
                  <input type="text" placeholder="Email Address" />
                  <i class="icon fas fa-envelope"></i>
                  <i class="error error-icon fas fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Email can't be blank</div>
              </div>
              <div class="field password">
                <div class="input-area">
                  <input type="password" placeholder="Password" />
                  <i class="icon fas fa-lock"></i>
                  <i class="error error-icon fas fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Password can't be blank</div>
              </div>
              <div class="pass-txt"><a href="#">Forgot password?</a></div>
              <input type="submit" value="Login" />
            </form>
            <div class="sign-txt">New to Eazy Traveller? <a href="#">Signup now</a></div>
          </div>
    </div>
    </div>
  )
}

export default HomePage