import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerApiCall } from "../service/authService";
import { registerDto } from "../ds/registerDto";
import './AuthForms.css'; // Share the same CSS as LoginComponent
import axios from "axios";

export default function RegisterComponent() {
    const [formData, setFormData] = useState<registerDto>({
        username: '',
        password: '',
        email: '',
        address: ''
    });
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const registerHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");
    
        try {
            const response = await registerApiCall(formData);
            
            // Check for successful response (2xx status)
            if (response.status >= 200 && response.status < 300) {
                navigate('/login', {
                    state: { 
                        registrationSuccess: true,
                        message: "Registration successful! Please login." 
                    }
                });
                return;
            }
    
            // Handle non-2xx responses
            setError(response.data?.message || "Registration completed but with unexpected response");
    
        } catch (err: unknown) {
            // Type-safe error handling
            if (axios.isAxiosError(err)) {
                // Server responded with error status (4xx/5xx)
                if (err.response) {
                    setError(
                        err.response.data?.message ||
                        err.response.data?.error ||
                        `Registration failed (${err.response.status})`
                    );
                } 
                // No response received
                else if (err.request) {
                    setError("Network error - please check your connection");
                } 
                // Request setup error
                else {
                    setError("Request configuration error");
                }
            } 
            // Non-Axios errors
            else if (err instanceof Error) {
                setError(err.message);
            } 
            // Unknown error type
            else {
                setError("An unknown error occurred");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2>Join Omelas</h2>
                    <p className="subtitle">Create your movie rental account</p>
                </div>
                
                {error && <div className="alert alert-danger">{error}</div>}
                
                <form className="login-form" onSubmit={registerHandler}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                        <div className="input-underline"></div>
                    </div>
                    
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                        <div className="input-underline"></div>
                    </div>
                    
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
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
                            'Create Account'
                        )}
                    </button>
                </form>
                
                <div className="login-footer">
                    <p>Already have an account? 
                        <button 
                            className="text-gradient-link p-2"
                            onClick={() => navigate('/login')}
                        >
                            Sign in
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}