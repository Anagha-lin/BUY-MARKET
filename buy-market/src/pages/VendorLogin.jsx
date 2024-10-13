import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VendorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your backend to authenticate the vendor
    // For this example, we'll just do a simple check
    if (email === 'vendor@example.com' && password === 'password') {
      console.log('Vendor logged in successfully');
      navigate('/vendor-dashboard');
    } else {
      setError('Incorrect email or password. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-green-700">Vendor Portal</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block mb-2 text-gray-700">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
          Sign In
        </button>
      </form>
      <p className="mt-6 text-center text-gray-600">
        New vendor? <a href="/vendor-signup" className="text-green-500 hover:underline">Create an account</a>
      </p>
    </div>
  );
}

export default VendorLogin;

