import { useState, createContext, useCallback} from "react";


export const AuthContext = createContext({
    isMobile: false,
    isLoggedIn : false,
    Login : () => {},
    Logout: () => {}
})

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMobile, setIsmobile] = useState(false);
   
    const Login = useCallback(() => {
        setIsLoggedIn(true)
    },[])

    const Logout = useCallback(() => {
        setIsLoggedIn(false)
    }, [])
    

    const value = { isLoggedIn, Login, Logout, isMobile, setIsmobile}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}