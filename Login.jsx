import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";
import axios from "axios"

const App = () => {
  const [values, setValues] = useState({
    
    email: "",
    password: "",
    
  })

  const inputs = [
    
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: " Invalid email address!",
      label: "Email",
      required: true,
    },
  
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Invalid password",
      label: "Password",
      
      required: true,
    },
    
  
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[1].value
    
    const password = e.target[2].value
   
    const data = {email,password}
    console.log(data)
    axios.post('http://localhost:5000/Login', data)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
      console.log(error.response.data.message);
    });
  
    
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
 

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))};
        <button>Login</button>
        <p className="mt-3">Don't have an account?<a href="/src/Signup">Signup</a></p>
     
      </form>

      

    </div>
  );
};

export default App;
