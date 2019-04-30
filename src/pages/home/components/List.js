import React,{ PureComponent } from 'react';
import { ListItem,ListInfo,LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom'

class List extends PureComponent{
	render(){
		const { list,getLoadMoreList } = this.props;
		return(
			<div>{
				list.map((item,index)=>{
					return(
						<Link to={'./detail/'+item.get('id')}>
							<ListItem key={index}>
								<img className='list-img' alt='' src={item.get('ImgURL')} />
								<ListInfo>
									<h3 className='title'>{item.get('title')}</h3>
									<p className='info'>{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
						</Link>
					)
				})}
				<LoadMore onClick = {getLoadMoreList}>加载更多</LoadMore>
			</div>
		)
	}
}

const mapStateToMap = (state)=>({
	list:state.getIn(['home','articleList'])
})
const mapDispatchToState = (dispatch) => ({
	getLoadMoreList(){
		dispatch(actionCreators.getLoadMoreList())
	}
})
export default connect(mapStateToMap,mapDispatchToState)(List);