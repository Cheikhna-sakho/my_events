import React from 'react'
import { useState } from 'react';
import AuthInput from '../components/input/AuthInput';

const Register = () => {

     
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        console.log(values,"on");
    }

    const [values, setValues] = useState({
      username: "",
      email: "",
      avatar: "",
      description: "",
    });

     console.log(values, "on");
    const dataInput = [
      {
        id: "username",
        type: "text",
        name: "username",
        placeholder: "username",
        onChange: handleChange,
      },
      {
        id: "email",
        type: "email",
        name: "email",
        placeholder: "email",
        onChange: handleChange,
      },
      {
        id: "avatar",
        type: "file",
        name: "avatar",
        placeholder: "avatar",
          onChange: handleChange,
      },
    ];

    const handleSubmit = ()=>{}

  return (
    <div>
      <h1 className="bg-white">Register</h1>

      <form onSubmit={handleSubmit}>
        {dataInput.map((data) => (
          <AuthInput key={data.id} dataInput={data}  />
        ))}
      </form>
    </div>
  );
}

export default Register