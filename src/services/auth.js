import axios from 'axios';

const authServices = {
    signUp( user ) {
        return axios.post('/api/signup', user);
    },
  }
  
export default authServices;