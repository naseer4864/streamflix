import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/auth-Context";

const defaultForm = {
    firstname: "",
    lastname: "",
    username: "",
    email: "", 
    password: ""
}

const Register = () => {
    const [formField, setFormfield] = useState(defaultForm);
    const [error, setError] = useState(false);
    const {firstname, lastname, username,email, password} = formField;
    const resetForm = () => {
        setFormfield(defaultForm)
    }
    const navigate = useNavigate()

    const {Login} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (firstname.length < 3) {
          setError('Firstname is reuired. At least 3 character')
        } else if (lastname.length < 3) {
            setError('Lastname is reuired. At least 3 character')
        } else if(username.length <= 3) {
            setError('Username is reuired. At least 4 character')
        } else if (password.length <= 5) {
            setError('Password is reuired. At least 6 character')
        } else {
            console.log(formField)
            resetForm()
            Login()
            navigate('/')
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormfield({...formField, [name] : value});
        setError(false)
    }

    return ( 
        <div className="regsiter-container">
            <h1>REGISTER</h1>
           <form onSubmit={handleSubmit}>
            <label>
                FIRSTNAME 
                <input type="text" name="firstname" value={firstname} onChange={handleChange} />
            </label>
            <label>
                LASTNAME 
                <input type="text" name="lastname" value={lastname} onChange={handleChange} />
            </label>
            <label>
                USERNAME 
                <input type="text" name="username" value={username} onChange={handleChange} />
            </label>
            <label>
                EMAIL 
                <input type="email" name="email" value={email} onChange={handleChange} />
            </label>
            <label>
                PASSWORD 
                <input type="password" name="password" value={password} onChange={handleChange} />
            </label>
            {error && <p>{error}</p>}
            <button>Register</button>
            <p onClick={() => navigate('/Login')}>Already have an account? Log in here</p>
           </form>
        </div>
     );
}
 
export default Register;