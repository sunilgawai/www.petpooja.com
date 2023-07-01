import { createContext, ReactNode, useEffect, useState } from "react";


interface IAuthState {
    username: string;
    jwt_token: string;
}

interface IAuthContextProps {
    authState: IAuthState
    setAuthState: React.Dispatch<React.SetStateAction<IAuthState>>
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [authState, setAuthState] = useState<IAuthState>({
        username: '',
        jwt_token: ''
    });

    useEffect(() => {
        // Check for authState,
        const data = localStorage.getItem('authState');
        // console.log('data in local', data)
        if (data == null || data == undefined) return;
        if (data) {
            const auth = JSON.parse(data) as IAuthState
            setAuthState({
                ...authState,
                username: auth.username,
                jwt_token: auth.jwt_token
            });
            // console.log('authState changed', authState)
        }
        // console.log('auth', authState)
    }, []);

    useEffect(() => {
        // Save to localStorage.
        localStorage.setItem('authState', JSON.stringify(authState));
        // console.log('auth', authState)
    }, [authState]);


    return <AuthContext.Provider value={{
        authState,
        setAuthState
    }}>
        {
            children
        }
    </AuthContext.Provider>
}

export { AuthContext, AuthContextProvider };