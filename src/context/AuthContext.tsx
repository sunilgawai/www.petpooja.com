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
    const [authState, setAuthState] = useState<IAuthState>({} as IAuthState);

    useEffect(() => {
        // get auth state from local storage.
        const auth = localStorage.getItem('authState');
        if (auth) {
            const _authState = JSON.parse(auth) as IAuthState;
            console.log('from local storage', _authState);
            setAuthState({
                ...authState,
                jwt_token: _authState.jwt_token,
                username: _authState.username
            });
            console.log('stored to state')
        }
        console.log('stored state not found')
    }, [])

    // useEffect(() => {
    //     // Setting the state to local storage.
    //     console.log('Setting the state to local storage.')
    //     localStorage.setItem('authState', JSON.stringify(authState));
    //     console.log('State set to local storage.', localStorage.getItem('authState'))
    // }, [authState])

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