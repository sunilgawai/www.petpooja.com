import { useState } from "react";
import { useAuthContex } from "../../context";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const { setAuthState, authState } = useAuthContex();
    const [form, setForm] = useState<{
        username: string;
        password: string;
    }>({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch('http://localhost:4000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }).then(data => data.json())
            .then(response => {
                setAuthState({
                    ...authState,
                    username: response.data.username,
                    jwt_token: response.data.jwt_token
                })
                console.log('auth state changed', authState);
                navigate('/');
                return;
                // if (!response.ok) {
                //     setError(response.message)
                //     setForm({ username: '', password: '' });
                //     setError('')
                // }
                // if (response.ok) {
                //     setAuthState(response.data)
                //     console.log('auth state changed', authState);
                //     navigate('/');
                //     return;
                // }

            })
            .catch(err => setError(err));
        console.log(form);
    }

    return (
        <>
            <div className="wrap bg-white border border-primary">
                <div className="login-wrap p-4 p-md-5">
                    <div className="d-flex">
                        <div className="w-100">
                            <h3 className="mb-4 text-center">LogIn</h3>
                        </div>
                    </div>
                    <form onSubmit={(e) => submitForm(e)} className="signin-form">
                        <div className="form-group mt-3">
                            <input
                                value={form.username}
                                onChange={(e) => setForm({
                                    ...form,
                                    username: e.target.value
                                })}
                                placeholder="Enter username..."
                                required
                                autoComplete="false"
                                type="text"
                                className="form-control" />
                            {error ? error : ""}
                            <label className="form-control-placeholder my-2 mr-2" htmlFor="username">Username</label>
                        </div>
                        <div className="form-group">
                            <input
                                value={form.password}
                                onChange={(e) => setForm({
                                    ...form,
                                    password: e.target.value
                                })}
                                placeholder="Enter password..."
                                id="password-field"
                                type="password"
                                className="form-control"
                                required={true} />
                            {error ? error : ""}
                            <label className="form-control-placeholder my-2" htmlFor="password">
                                Password
                            </label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control btn btn-primary rounded submit px-3">
                                Log In
                            </button>
                            {/* <button className="btn btn-primary" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </button> */}

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginForm;