import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginDto } from '../ds/loginDto';
import { loginApiCall, setLoggedInUserName } from '../service/authService';
import './AuthForms.css'; 

export default function LoginComponent() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");
        
        const login = { username, password };
        loginApiCall(login)
            .then(res => {
                const token = 'Basic '+btoa(`${username}:${password}`);
                localStorage.setItem('token', token);
                setLoggedInUserName(username);
                navigate('/');
                window.location.reload();
            })
            .catch(err => {
                setError("Invalid username or password");
                console.log(err);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };
  
    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2>Welcome to Omelas</h2>
                    <p className="subtitle">Movie Rental Portal</p>
                </div>
                
                {error && <div className="alert alert-danger">{error}</div>}
                
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-input"
                            required
                        />
                        <div className="input-underline"></div>
                    </div>
                    
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input"
                            required
                        />
                        <div className="input-underline"></div>
                    </div>
                    
                    <button
                        type="submit"
                        className={`login-button ${isSubmitting ? 'loading' : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <span className="spinner"></span>
                        ) : (
                            'Login'
                        )}
                    </button>
                </form>
                
               
                  <div className="login-footer">
                      <p>New to Omelas? 
                          <button 
                              className="text-gradient-link p-2"
                              onClick={() => navigate('/register')}
                          >
                              Create account
                          </button>
                      </p>
                  </div>
            </div>
        </div>
    );
}