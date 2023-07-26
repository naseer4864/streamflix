import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/auth-Context";


const Auth = () => {
    const {setisAuthOpen} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSIgnUp = () => {
        navigate('/Register')
        setisAuthOpen(false)
    }

    const handleLogin = () => {
        navigate('/Login')
        setisAuthOpen(false)
    }
    return ( 
        <div className="auth-container">
            <span onClick={handleSIgnUp}>
            <i className="fa-solid fa-user-plus"></i>
            <h5>Register</h5>
            </span>
            <span onClick={handleLogin}> 
            <i className="fa-solid fa-right-to-bracket"></i>
            <h5>Login</h5>
            </span>
        </div>
     );
}
 
export default Auth;