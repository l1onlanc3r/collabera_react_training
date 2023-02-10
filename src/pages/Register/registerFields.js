import CheckboxGroup from '../../components/CheckboxGroup';
import Input from '../../components/Input';
import Select from '../../components/Select';

export const registerFields = [
  {
    component: Input,
    name: 'name',
    id: 'name',
    'data-value': '',
    label: 'Name',
    className: 'rounded-t-md',
    validate: (value) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: Select,
    name: 'gender',
    id: 'gender',
    'data-value': '',
    label: 'Gender',
    options: [
      {
        label: 'Male',
        value: 'male',
      },
      {
        label: 'Female',
        value: 'female',
      },
      {
        label: 'Other',
        value: 'other',
      },
    ],
    validate: (value) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: CheckboxGroup,
    name: 'hobbies',
    id: 'hobbies',
    'data-value': [],
    label: 'Hobbies',
    options: [
      {
        id: 'football',
        text: 'Football',
      },
      {
        id: 'volleyball',
        text: 'Volleyball',
      },
      {
        id: 'basketball',
        text: 'Basketball',
      },
    ],
    validate: (value) => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    component: Input,
    name: 'email',
    id: 'email-address',
    type: 'email',
    'data-value': '',
    autoComplete: 'email',
    label: 'Email',
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
    autoComplete: 'current-password',
    label: 'Password',
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
    id: 'confirm-password',
    type: 'password',
    'data-value': '',
    autoComplete: 'current-password',
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

export const registerInitialValues = registerFields.reduce(
  (p, c) => ({ ...p, [c.name]: c['data-value'] }),
  {},
);
