import { Fragment,  useContext } from "react";
import { Link , Outlet} from "react-router-dom";
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
            <Link to='/' className="logo">
                <img src="https://i.ibb.co/4PhDDm9/Screenshot-2023-07-25-at-1-13-47-PM-removebg-preview.png" alt="logo" />
            </Link>

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