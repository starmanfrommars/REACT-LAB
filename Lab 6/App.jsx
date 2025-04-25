import React, { useState } from 'react'
import './App.css'

const Form = () => {
    const [formData, setFormData] = useState({name: "", email: "", password: ""});
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateEmail = (email)=> {
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const validateForm = ()=> {
        let newerrors = {};
        if(!formData.name.trim()) newerrors.name= "Name is Required";
        if(!formData.email.trim() || validateEmail(formData.email)) newerrors.email= "Valid email is Required";
        if(formData.password.length < 6) newerrors.password = "Password must be atleast 6 characters long";
        setErrors(newerrors);
        return Object.keys(newerrors).length ===0;
    }

    const handleChange = (e)=> {
        setFormData({...formData, [e.target.name]: e.target.value});
        setErrors((prevErrors)=>{
            const newErrors = {...prevErrors};
            if(e.target.value.trim()){
                delete newErrors[e.target.name];
            }
            return newErrors;
        })
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(validateForm()){
            console.log("Form data Submitted : ",formData);
            alert("Form submitted succesfully!");
            setFormData({name: "", email: "", password: ""});
            setErrors({});
        }
    }
    return (
        <div className="form-container">
            <h2 className="form-title">User Registration</h2>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className={`form-input ${errors.name?"error":""}`} />
                    {errors.name || <p className="error-text">{errors.name}</p>}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className={`form-input ${errors.email?"error":""}`} />
                    {errors.email || <p className="error-text">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <div className="password-wrapper">
                        <input type={showPassword?"text":"password"} name="password" value={formData.password} onChange={handleChange} className={`form-input ${errors.password?"error":""}`} />
                        <button type="button" onClick={()=> setShowPassword(!showPassword)} className="toggle-button">{showPassword?"Hide":"Show"}</button>
                    </div>
                        {errors.password || <p className="error-text">{errors.password}</p>}
                </div>

                <button type="submit" className="submit-button">Submit</button>

            </form>
        </div>
    )
}

export default Form
