import React from 'react';
import { Link } from 'react-router-dom';
import { loginFields, loginInitialValues } from './loginFields';
import CustomForm from '../../components/CustomForm';
import { useAuthContext } from '../../contexts/authContext';

function Login() {
  // const navigate = useNavigate();

  const { login, userState } = useAuthContext();

  return (
    <CustomForm
      initialValues={loginInitialValues}
      onSubmit={login}
      fields={loginFields}
      state={userState}
      btnText="Sign in"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <Link
            to="changepass"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </CustomForm>
  );
}

export default Login;
