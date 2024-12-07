import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { FormInput } from '../components/FormInput';
import { useAuthStore } from '../store/useAuthStore';

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((state) => state.login);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    try {
      // Send a POST request to the backend to authenticate the user
      const response = await axios.post(
          'http://localhost:5000/api/auth/login',
          {
            email: data.email,
            password: data.password,
          },
          { withCredentials: true } // Ensure cookies are sent with the request
      );

      // Assuming the response contains the user data and token
      const { token, user } = response.data;  // user contains username or other user info
      login({
        id: user.id,         // Assuming user contains an id
        email: data.email,
        name: user.username, // Using 'username' from the response
      });

      // Redirect user to the page they were trying to access
      const from = location.state?.from?.pathname || '/';
      navigate(from);
    } catch (error: any) {
      if (error.response) {
        // Handle API errors
        setApiError(error.response.data.message || 'Something went wrong');
      } else {
        // Handle unexpected errors
        setApiError('Unexpected error occurred');
      }
    }
  };


  return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg">
          <div>
            <h2 className="text-3xl font-bold text-white text-center">Welcome back</h2>
            <p className="mt-2 text-center text-gray-400">
              Please sign in to your account
            </p>
          </div>
          {apiError && (
              <div className="text-red-500 text-center mb-4">{apiError}</div>
          )}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <FormInput
                label="Email address"
                name="email"
                type="email"
                autoComplete="email"
                error={errors.email}
                required
            />
            <FormInput
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                error={errors.password}
                required
            />
            <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-150"
            >
              Sign in
            </button>
            <p className="text-center text-gray-400">
              Don't have an account?{' '}
              <Link to="/register" className="text-green-500 hover:text-green-400">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
  );
}
