import React from 'react';
import PropTypes from 'prop-types';
import { passwordFields, passwordInitialValues } from './forgotPasswordFields';
import CustomForm from '../../components/CustomForm';

function ForgotPass({ updatepass }) {
  return (
    <CustomForm
      initialValues={passwordInitialValues}
      onSubmit={updatepass}
      fields={passwordFields}
      // state={userState}
      btnText="Change Password"
    />
  );
}

ForgotPass.propTypes = {
  updatepass: PropTypes.func.isRequired,
};

export default ForgotPass;
