import Input from '../../components/Input';

export const passwordFields = [
  {
    component: Input,
    name: 'email',
    id: 'email-address',
    type: 'email',
    'data-value': '',
    autoComplete: 'email',
    label: 'Email',
    className: 'rounded-t-md',
    validate: (value) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: Input,
    name: 'password',
    id: 'password',
    type: 'password',
    'data-value': '',
    label: 'New Password',
    validate: (value) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: Input,
    name: 'confirmPassword',
    id: 'confirmpassword',
    type: 'password',
    'data-value': '',
    // autoComplete: '',
    label: 'Confirm Password',
    className: 'rounded-b-md',
    validate: (value) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
];

export const passwordInitialValues = passwordFields.reduce(
  (p, c) => ({ ...p, [c.name]: c['data-value'] }),
  {},
);
