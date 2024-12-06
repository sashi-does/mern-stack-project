import React, { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function FormInput({ label, error, ...props }: FormInputProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-200">
        {label}
      </label>
      <input
        {...props}
        className={`w-full px-3 py-2 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white ${
          error ? 'border-red-500' : 'border-gray-600'
        }`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}