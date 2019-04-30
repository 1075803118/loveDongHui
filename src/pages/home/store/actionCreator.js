import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
	type:constants.CHANGE_HOME_DATA,
	articleList:result.articleList,
	recommend:result.recommend
});

const addArticleList = (list) => ({
	type:constants.ADD_ARTICLE_LIST,
	list:fromJS(list)
})

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res)=>{
			const result = res.data.data;
			dispatch(changeHomeData(result));
		}).catch((err)=>{
			console.log("err");
		})
	}
}

export const getLoadMoreList = () => {
	return (dispatch) => {
		axios.get('/api/homeList.json').then((res)=>{
			const result = res.data.data;
			dispatch(addArticleList(result));
			console.log(result)
		}).catch((err)=>{
			console.log('err');
		})

	}
}

export const getScrollTop = (show) => ({
	type:constants.SHOW_SCROLL,
	show
})