import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { z } from 'zod';
import { loginSchema } from '../utils/validation';
import { FormInput } from '../components/FormInput';
import { useAuthStore } from '../store/useAuthStore';

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((state) => state.login);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    try {
      loginSchema.parse(data);
      // In a real app, you would make an API call here
      login({
        id: '1',
        email: data.email,
        name: 'Demo User',
      });
      const from = location.state?.from?.pathname || '/';
      navigate(from);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            formattedErrors[err.path[0]] = err.message;
          }
        });
        setErrors(formattedErrors);
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