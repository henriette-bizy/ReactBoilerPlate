
const storeToken = token => localStorage.setItem("token", token);
const getToken = () => localStorage.getItem('token');


const auth = {
    storeToken,
    getToken
}
export default auth;