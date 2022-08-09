// import React from "react";
// import { useHistory } from "react-router-dom";
// const Contact = (props) => {
//   //   console.log(props);
//   const history = useHistory();
//   const redirectToAbout = () => {
//     // props.history.push("/about");//1
//     console.log(history);
//     history.push("/about"); //2
//   };


//   return (
//     <div>
//       <h1>Contact us</h1>

//       <button className="btn btn-primary" onClick={() => redirectToAbout()}>
//         Go To About Us
//       </button>
//     </div>
//   );
// };

// export default Contact;

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
export default function Login(props) {
    const [user, setuser] = useState({

        email: "",
        password: ""

    })

    let navigate = useNavigate()
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
        let response = await axios.post(`https://route-egypt-api.herokuapp.com/signin`, user);
        console.log(response);

        console.log(response.data);
        if (response.data.message === 'success') {
            localStorage.setItem('usertoken', response.data.token);
            setisloading(false);
            props.getuserdata();
            navigate('/')


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
                <h2 className="my-3" > Login now </h2>

                {error ? <div className="alert alert-danger">{error}</div> : ''}
                <form onSubmit={submitregister} className='py-4 g-3 needs-validation' noValidate>

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
                        {isloading ? <div className="spinner-border "></div> : 'Login'}
                    </button>


                </form>
            </div>
        </div>
    );
};



