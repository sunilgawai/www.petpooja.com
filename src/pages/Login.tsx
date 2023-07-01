import LoginForm from "../components/auth/LoginForm";
import lockScreen from "/public/img/LockScreen.png";
const Login = () => {
    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '400px',
            // Other parent div styles
        }}>
            <div
                style={{
                    backgroundImage: `url(${lockScreen})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    height: '100vh',
                    filter: 'blur(0px)',
                    overflow: 'hidden',
                    zIndex: -1,
                    backgroundColor: 'white'
                }}
                className="d-flex justify-content-center 
            align-items-center">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login;