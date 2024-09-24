import React, { useState } from 'react';

function LoginForm() {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Always set the message to "Login successful!" when form is submitted
        setMessage('Login successful!');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text"
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password"
                        required 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>} {/* Always display the message after submission */}
        </div>
    );
}

export default LoginForm;
