import * as constants from './constants';
import { fromJS } from 'immutable';


const defaultData = fromJS({
	articleList:[],
	recommend:[],
	showScroll:false
})

const changeHomeData = (state,action) => {
	return state.merge({
		articleList:fromJS(action.articleList),
		recommend:fromJS(action.recommend)
	});
}

const addArticleList = (state,action) => {
	return state.set('articleList',state.get('articleList').concat(action.list));
}

export default (state = defaultData,action) => {
	switch(action.type){
		case constants.CHANGE_HOME_DATA:
			return changeHomeData(state,action);
		case constants.ADD_ARTICLE_LIST:
			return addArticleList(state,action);
		case constants.SHOW_SCROLL:
			return state.set('showScroll',action.show);
		default:
			return state;
	}
}