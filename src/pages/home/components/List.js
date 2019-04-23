import React,{ Component } from 'react';
import { ListItem,ListInfo } from '../style'
import { connect } from 'react-redux'

class List extends Component{
	render(){
		const { list } = this.props;
		return(
			list.map((item)=>{
				return(
					<ListItem key={item.get('id')}>
						<img className='list-img' alt='' src={item.get('ImgURL')} />
						<ListInfo>
							<h3 className='title'>{item.get('title')}</h3>
							<p className='info'>{item.get('desc')}</p>
						</ListInfo>
					</ListItem>
				)
			})	
		)
	}
}

const mapStateToMap = (state)=>({
	list:state.getIn(['home','articleList'])
})

export default connect(mapStateToMap,null)(List);