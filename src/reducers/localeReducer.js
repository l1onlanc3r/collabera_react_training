export const localeInitValue = 'English';

export const LocaleReducer = (state = localeInitValue, { type, payload }) => {
  switch (type) {
    case 'CHANGE_LOCALE':
      return state === 'English' ? 'French' : 'English';

    default:
      return state;
  }
};
