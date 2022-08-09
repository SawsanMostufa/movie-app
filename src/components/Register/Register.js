import axios from "axios";
import React, { useState } from "react";
// import * from 'react-navigation-hooks'
 import {useNavigate} from "react-router-dom"
// import {useNavigate} from 'react-dom'
 // import {useNavigate} from 'react-router-dom'
export default function Register() {
    const [user, setuser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        age: 0
    })

    
    
    
     let navigate= useNavigate()
    const [error, seterror] = useState('');
    const [isloading, setisloading] = useState('');


    function getuser(e) {
        let myuser = { ...user }
        myuser[e.target.name] = e.target.value;
        setuser(myuser);
        console.log(user);
    }


    async function submitregister(e) {
        e.preventDefault();
        setisloading(true);
        let response = await axios.post(`https://route-egypt-api.herokuapp.com/signup`, user);
        console.log(response);
        
        console.log(response.data);
        if (response.data.message === 'success') {
            setisloading(false);
           navigate('/Login')
        //   return goTo('/Login')

        }
        else {
            seterror(response.data.message)
            setisloading(false);

        }
    }

    (function () {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
              form.classList.add('was-validated')
            }, false)
          })
      })()

    return (
        <div className="" >
            <div className="container background">
                <h2 className="my-3" > Register now </h2>

                {error ? <div className="alert alert-danger">{error}</div> : ''}
                <form onSubmit={submitregister} className='py-4 g-3 needs-validation' noValidate>
                    <label htmlFor="frist_name"> frist_name :</label>
                    <input onChange={getuser} type="text" className="form-control mb-3" name="frist_name" id="frist_name" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        Please insert a fristname.
                    </div>

                    <label htmlFor="last_name"> last_name :</label>
                    <input onChange={getuser} type="text" className="form-control mb-3" name="last_name" id="last_name" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        Please insert a lastname.
                    </div>

                    <label htmlFor="age"> age :</label>
                    <input onChange={getuser} type="number" className="form-control mb-3" name="age" id="age" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        Please insert a age.
                    </div>

                    <label htmlFor="email"> email :</label>
                    <input onChange={getuser} type="email" className="form-control mb-3" name="email" id="email" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        Please insert a email.
                    </div>

                    <label htmlFor="password"> password :</label>
                    <input onChange={getuser} type="password" className="form-control mb-3" name="password" id="password" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <div className="invalid-feedback">
                        Please insert a password.
                    </div>

                    {/* <button className="btn btn-outline-info" type="submit" >Register</button> */}
                    <button className="btn btn-outline-info" type="submit" >
                        {isloading?<div className="spinner-border "></div>:'Register'}
                        </button>


                </form>
            </div>
        </div>
    );
};
