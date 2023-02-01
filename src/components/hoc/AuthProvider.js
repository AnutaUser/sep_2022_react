import React, {createContext, useState} from "react";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const login = (loginUser) => {
        setUser(loginUser);
    };

    const logout = () => {
        setUser(null);
    };

    const value = {user, login, logout};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export {
    AuthContext,
    AuthProvider
};
