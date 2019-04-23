import * as constants from './constants';
import { fromJS} from 'immutable';
import axios from 'axios';
export const inputFocuse = () => ({
    type:constants.INPUT_FOCUSED
});
export const inputBlur = () => ({
    type:constants.INPUT_BLUR
});
export const mouseEnter = () => ({
    type:constants.MOUSE_ENTER
});
export const mouseLeave = () => ({
	type:constants.MOUSE_LEAVE
});
export const changePage = (page) => ({
	type:constants.CHANGE_PAGE,
	page 
})

const changeList = (data) => ({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    pageTotal:Math.ceil(data.length/10)
})
export const getList = () => {
    return (dispatch) => {
        axios.get('api/headerList.json').then((res)=>{
            const data = res.data.data;
            dispatch(changeList(data));
        }).catch((err)=>{
            console.log("error");
        })
    }
}