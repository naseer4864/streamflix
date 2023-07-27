import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
 
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate()
  
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/')
  };


  return (
    <div className='profile-container'>
      {isAuthenticated && (
        <div className="profile-card">
          <h2>Welcome, {user ? user.username : 'Guest'}</h2>
          <h4>{user? user.email : 'User@gmail.com'}</h4>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
