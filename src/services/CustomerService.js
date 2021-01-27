import axios from 'axios';
const CUSTOMER_API_BASE_URL='http://localhost:8085/api/v1';
class CustomerService{

    getCustomers(){
       return axios.get(CUSTOMER_API_BASE_URL + '/customers' );
    }
    getByUserName(userName)
    {
        return axios.get(CUSTOMER_API_BASE_URL + '/' +userName)
    }
   
}
export default new CustomerService()