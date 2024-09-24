import React from 'react';
import ImageFetcher from './ImageFetcher';
import LoginForm from './LoginForm';
import './App.css'; // Import the CSS file

function App() {
    return (
        <div className="App">
            <div className="login-container">
                <h1>Login Form</h1>
                <LoginForm />
            </div>
            <div className="image-fetcher-container">
                <h1>Image Fetcher</h1>
                <ImageFetcher />
            </div>
        </div>
    );
}

export default App;
