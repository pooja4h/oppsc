import axios from 'axios';
const LOGIN_API_BASE_URL='http://localhost:8085/api/v1';
class Login{

    getLogin(login){
       return axios.post(LOGIN_API_BASE_URL+"/login",login);
}
}
export default new Login()