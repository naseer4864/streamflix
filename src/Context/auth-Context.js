import { useState, createContext, useCallback} from "react";


export const AuthContext = createContext({
    isMobile: false,
    isCartOpen: false,
    isAuthOpen : false,
    isLoggedIn : false,
    openSearch : false,
    Login : () => {},
    Logout: () => {}
})

export const AuthProvider = ({children}) => {
    const [isAuthOpen, setisAuthOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [openSearch, setSearch] = useState(false);
    const [isMobile, setIsmobile] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false)

    const Login = useCallback(() => {
        setIsLoggedIn(true)
    },[])

    const Logout = useCallback(() => {
        setIsLoggedIn(false)
    }, [])
    

    const value = {isAuthOpen, setisAuthOpen, isLoggedIn, Login, Logout, openSearch, setSearch, isMobile, setIsmobile, isCartOpen, setIsCartOpen}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}