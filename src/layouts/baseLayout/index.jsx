import { useEffect } from 'react';
import { connect } from 'react-redux';
import BaseLayout from './layout';

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => {
    useEffect(() => {
      /*
        const token = localStorage.getItem('token');
      console.log('TOKEN: ', token);
      if (token) {
        const JSONToken = JSON.parse(token);
        dispatch({ type: 'LOGIN_SUCCESS', payload: JSONToken });
      }
      */

      dispatch({ type: 'LOAD_USER' });
    }, [dispatch]);
  },
});

export default connect(null, mapDispatchToProps)(BaseLayout);
