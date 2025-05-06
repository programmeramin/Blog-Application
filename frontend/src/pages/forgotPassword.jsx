import { useState } from 'react';
import { useForgotPasswordMutation } from '@/features/auth/authApi';
import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/input';
import { useNavigate } from 'react-router';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const validateEmail = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateEmail()) return;

    try {
      await forgotPassword(email).unwrap();
      navigate('/verify-email-notice');
    } catch (err) {
      setErrors({
        apiError: err.data?.message || 'Something went wrong.',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Forgot Password
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your email and we'll send you a link to reset your password.
          </p>
        </div>

        {errors.apiError && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span>{errors.apiError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email address"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
              if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
            }}
            required
            error={errors.email}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </Button>
        </form>

        <div className="text-sm text-center mt-4">
          <a
            href="/auth/login"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Back to login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
