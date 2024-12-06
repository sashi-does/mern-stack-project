import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { z } from 'zod';
import { registerSchema } from '../utils/validation';
import { FormInput } from '../components/FormInput';
import { useAuthStore } from '../store/useAuthStore';

export function Register() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      confirmPassword: formData.get('confirmPassword') as string,
    };

    try {
      registerSchema.parse(data);
      // In a real app, you would make an API call here
      login({
        id: '1',
        email: data.email,
        name: data.name,
      });
      navigate('/');
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
          <h2 className="text-3xl font-bold text-white text-center">Create account</h2>
          <p className="mt-2 text-center text-gray-400">
            Join our farming community
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <FormInput
            label="Full name"
            name="name"
            type="text"
            autoComplete="name"
            error={errors.name}
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
          <FormInput
            label="Confirm password"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            error={errors.confirmPassword}
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