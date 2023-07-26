import { Fragment,  useContext } from "react";
import { Link , Outlet, useNavigate} from "react-router-dom";
import Auth from "../pages/auth";
import Search from "../pages/Search";
import CartItems from "../pages/cartItems";
import { AuthContext } from "../Context/auth-Context";





const Navbar = () => {
    const {isAuthOpen, setisAuthOpen, 
           openSearch, setSearch, 
           isMobile, setIsmobile,
            isCartOpen, setIsCartOpen} = 
           useContext(AuthContext)
    const navigate = useNavigate()
   
    const handleNav = () => {
        navigate('/')
    }
    const handleOpenMenu = () => {
        setIsmobile(!isMobile)
        setSearch(false)
        setisAuthOpen(false)
        setIsCartOpen(false) 
    
    }

    const handleAuth = () => {
        setisAuthOpen(!isAuthOpen)
        setSearch(false)
        setIsmobile(false)
        setIsCartOpen(false) 
    }

    const handleSearch = () => {
        setSearch(!openSearch)
        setisAuthOpen(false)
        setIsmobile(false)
        setIsCartOpen(false)  
    }

    const handleCart = () => {
        setIsCartOpen(!isCartOpen)
        setIsmobile(false)
        setisAuthOpen(false)
        setSearch(false)
    }
    return ( 
       <Fragment>
        <div className="navbar-container">
            
                <img src="https://i.ibb.co/ZXmV9pt/Screenshot-2023-07-26-at-6-47-12-PM-removebg-preview.png" alt="logo" onClick={handleNav}  />

            <div className={isMobile ? "mobile-nav" : "nav-links"} onClick={() => setIsmobile(false)}>
                <Link to='/' className="Link">Home</Link>
                <Link to='/Genres' className="Link">Genres</Link>
                <Link to='/Contact' className="Link">Contact</Link>
                <Link to='/Shop' className="Link">Shop</Link>
            </div>

            <div className="icons-container">
            <i className="fa-solid fa-magnifying-glass" onClick={handleSearch}></i>
            <i className="fa-regular fa-user" onClick={handleAuth}></i>
            <i className="fa-solid fa-cart-shopping" onClick={handleCart}></i>
            <div className="mobile-menu" onClick={handleOpenMenu}>
                {
                    isMobile ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-cubes-stacked"></i>
                }
            
            </div>
            </div>
        {
            isAuthOpen && (<Auth/>)
        }

        {
            openSearch && (<Search/>)
        }

        {
            isCartOpen && (<CartItems/>)
        }
        </div>
        <Outlet/>
       </Fragment>
     );
}
 
export default Navbar;