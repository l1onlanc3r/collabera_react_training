import React from 'react';
import { passwordFields, passwordInitialValues } from './forgotPasswordFields';
import CustomForm from '../../components/CustomForm';
import { useAuthContext } from '../../contexts/authContext';

function Login() {
  // const navigate = useNavigate();

  const { updatepass, userState } = useAuthContext();

  return (
    <CustomForm
      initialValues={passwordInitialValues}
      onSubmit={updatepass}
      fields={passwordFields}
      state={userState}
      btnText="Change Password"
    />
  );
}

export default Login;
