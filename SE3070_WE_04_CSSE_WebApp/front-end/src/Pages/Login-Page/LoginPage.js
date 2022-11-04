import React, { useState } from 'react';
import "./LoginPage.css";

const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function Login() {
        let Username = "admin";
        let Password = "123";

        if(username===Username && password===Password){
            window.location.href = "/allpassengers";
        }else{
            alert("Username or Password not correct");
            window.location.reload();
        }

        
    }

    return (
        <div>
            <div class="nova">
                <div class="wrapper">
                    <header class="h-color">EASY TRAVELLER</header>
                    <p>Log into your station</p>
                    <form action="#">
                        <div class="field email">
                            <div class="input-area">
                                <input type="text" placeholder="Email Address" onChange={(e) => { setUsername(e.target.value); }} />
                                <i class="icon fas fa-envelope"></i>
                                <i class="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                            <div class="error error-txt">Email can't be blank</div>
                        </div>
                        <div class="field password">
                            <div class="input-area">
                                <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value); }} />
                                <i class="icon fas fa-lock"></i>
                                <i class="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                            <div class="error error-txt">Password can't be blank</div>
                        </div>
                        <div class="pass-txt"><a href="#">Forgot password?</a></div>
                        {/* <input type="submit" onClick={Login} value="Login" /> */}
                        
                    </form>
                    
                    <button type='submit'><a class='button-a' onClick={Login}>Log in</a></button>

                    <div class="sign-txt">New to Eazy Traveller? <a href="#">Signup now </a></div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage