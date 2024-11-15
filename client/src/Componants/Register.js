import React,{useState} from 'react'
import { FaCircleUser } from "react-icons/fa6";
import toast from 'react-hot-toast';
import axios from 'axios';
const Register = () => {
    const [username,setUserName] = useState('');
    const [useremail,setUserEmail] = useState('');
    const [password,setPassword] = useState('');
    const [conpass,setConPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(username === ''||useremail === ''||password === ''|| conpass === ''){
            toast.error("All feilds are required!");
            return;
        }else if(password !== conpass){
            toast.error("password doesn't match!");
            return;

        }else{
            axios.post("http://localhost:5000/user",{username:username,email:useremail,password:password})
            .then(result =>{
                if (result){
                    toast.success('Registration Successfull!')
                }
            })
            .then(err => console.log(err));
        }

        setUserEmail('');
        setUserName('');
        setPassword('');
        setConPass('');
    }

    return (
        <>
            <div className="container">
                <div className="register d-flex justify-content-center align-items-center">
                    <form method='post' onSubmit={handleSubmit}>
                        <div className="user-icon d-flex justify-content-center">
                        <FaCircleUser />
                        </div>
                    <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                               User Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                aria-describedby="username help"
                                onChange={(e)=> setUserName(e.target.value)}
                                value={username}
                            />
                           
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={(e)=> setUserEmail(e.target.value)}
                                value={useremail}
                            />
                           
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                onChange={(e)=> setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword2"
                                onChange={(e)=> setConPass(e.target.value)}
                                value={conpass}
                            />
                        </div>
                       
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>


            </div>
        </>
    )
}

export default Register