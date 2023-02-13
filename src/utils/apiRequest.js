import axiosInstance from './axiosInstance';

export default async ({ dispatch, apiData, type, meta }) => {
  try {
    dispatch({
      type: `${type}_REQUEST`,
      meta,
    });

    const res = await axiosInstance(apiData);

    console.log(`RESULT FOR ${type}: `, res);

    dispatch({
      type: `${type}_SUCCESS`,
      payload: apiData.method === 'delete' ? apiData.data : res,
      meta,
    });

    switch (type) {
      case 'CHECK_EMAIL':
        return res;
      case 'UPDATE_USER':
        window.location.replace('/auth');
        break;
      default:
        return true;
    }
  } catch (error) {
    dispatch({
      type: `${type}_FAIL`,
      payload: {
        message: error.message,
        title: `${type
          .split('_')
          .map((x, i) => {
            if (i === 0) {
              return `${x[0].toUpperCase()}${x.slice(1).toLocaleLowerCase()}`;
            }
            return x.toLocaleLowerCase();
          })
          .join(' ')} fail`,
      },
      meta,
    });
  }

  return true;
};
