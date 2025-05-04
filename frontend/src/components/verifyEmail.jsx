import { useLazyVerifyEmailQuery } from '@/features/auth/authApi';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { toast } from 'react-toastify';

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [triggerVerify, { isSuccess, isError, error }] =
    useLazyVerifyEmailQuery();

  const params = new URLSearchParams(search);
  const token = params.get('token');

  useEffect(() => {
    if (token) {
      triggerVerify(token);
    } else {
      toast.error('Missing token in URL');
    }
  }, [token, triggerVerify]);

  useEffect(() => {
    if (isSuccess) {
      toast.success('Email verified successfully!');
      navigate('/auth/login');
    }
    if (isError) {
      toast.error(error?.data?.message || 'Something went wrong.');
    }
  }, [isSuccess, isError, error, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-700 text-lg">Verifying your email...</p>
    </div>
  );
};

export default VerifyEmail;
