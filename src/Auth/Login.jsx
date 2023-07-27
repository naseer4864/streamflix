import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/auth-Context";

const defaultForm = {
   
    username: "",
    password: ""
}

const Login = () => {
    const [formField, setFormfield] = useState(defaultForm);
    const [error, setError] = useState(false);
    const { username, password} = formField;
    const resetForm = () => {
        setFormfield(defaultForm)
    }

    const navigate = useNavigate()

    const {Login} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(username.length <= 3) {
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
            <p>We are Happy to have you back</p>
           <form onSubmit={handleSubmit}>
            
            <label>
                USERNAME 
                <input type="text" name="username" value={username} onChange={handleChange} />
            </label>
            <label>
                PASSWORD 
                <input type="password" name="password" value={password} onChange={handleChange} />
            </label>
            {error && <p>{error}</p>}
            <button>Login</button>
            <p onClick={() => navigate('/Register')}>Not a member? Sign up in here</p>
           </form>
        </div>
     );
}
 
export default Login;