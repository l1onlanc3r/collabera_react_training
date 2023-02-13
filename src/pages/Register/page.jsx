import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../../components/CustomForm';
import { registerFields, registerInitialValues } from './registerFields';

function Register({ register }) {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/auth', {
      replace: true,
      // state: {
      //  user: {
      //    name: 'Sherwin',
      //    age: 30,
      //   gender: 'male',
      // },
      // },
    });
  };

  //  const { register } = useAuthContext();

  return (
    <>
      <button type="button" onClick={goToLogin}>
        Go Back
      </button>

      <CustomForm
        initialValues={registerInitialValues}
        onSubmit={register}
        fields={registerFields}
        btnText="Sign Up"
      />
    </>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;
