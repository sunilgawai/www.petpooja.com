import { createContext, ReactNode, useEffect, useState } from "react";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [authState, setAuthState] = useState<{
        username: string;
        jwt_token: string;
    }>({
        username: '',
        jwt_token: ''
    });

    useEffect(() => {
        // fetch('http://localhost:4000/api/auth/login')
        //     .then(response => response.json())
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        const data = localStorage.getItem('authState');
        if (data) {
            setAuthState(JSON.parse(data));
        }
    }, []);


    return <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
}

export { AuthContext, AuthContextProvider };