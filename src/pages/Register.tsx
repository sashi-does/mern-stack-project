import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FormInput } from '../components/FormInput';
import { useAuthStore } from '../store/useAuthStore';

// Define types for the form data
interface RegisterData {
  username: string;
  email: string;
  password: string;
}
export function Register() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState<string | null>(null);

  const validateForm = (data: RegisterData) => {
    const newErrors: Record<string, string> = {};

    if (!data.username) {
      newErrors.username = 'Username is required';
    }
    if (!data.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!data.password) {
      newErrors.password = 'Password is required';
    } else if (data.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: RegisterData = {
      username: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    const validationErrors = validateForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Make API call to register endpoint
      const response = await axios.post(
          'http://localhost:5000/api/auth/signup',
          {
            username: data.username,
            email: data.email,
            password: data.password,
          },
          {
            withCredentials: true, // Ensure cookies are sent with the request
          }
      );

      // Simulate login and navigate
      const { token } = response.data; // Use the token for future requests if needed
      login({
        id: '1', // Replace with user ID from response if needed
        email: data.email,
        name: data.username,
      });
      navigate('/');
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        // Handle API errors
        setApiError(error.response?.data.message || 'Something went wrong');
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
            <h2 className="text-3xl font-bold text-white text-center">Create account</h2>
            <p className="mt-2 text-center text-gray-400">Join our farming community</p>
          </div>
          {apiError && (
              <div className="text-red-500 text-center mb-4">{apiError}</div>
          )}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <FormInput
                label="Username"
                name="name"
                type="text"
                autoComplete="name"
                error={errors.username}
                required
            />
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
                autoComplete="new-password"
                error={errors.password}
                required
            />
            <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-150"
            >
              Create account
            </button>
            <p className="text-center text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="text-green-500 hover:text-green-400">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
  );
}
