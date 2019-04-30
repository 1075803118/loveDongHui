import axios from 'axios';
import { constants } from '../store';

const changeLogin = () => ({
	type:constants.CHANGE_LOGIN,
	value:true
})

export const logout = () => ({
	type:constants.CHANGE_LOGOUT,
	value:false
})

export const login = (acount,password) => {
	return (dispatch) => {
		axios.get('/api/login.json?acount='+acount+'&password='+password).then((res)=>{
			if(res.data.data){
				dispatch(changeLogin())
			}else{
				alert("登录失败");
			}
		})
	}
}