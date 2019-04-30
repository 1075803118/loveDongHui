import React,{ PureComponent } from 'react';
import { connect } from 'react-redux'
import { RecommendWraper, RecommendItem } from '../style'

class Recommend extends PureComponent{
	render(){
		const { recommend } = this.props;
		return(
			recommend.map((item)=>{
				return (
					<RecommendWraper key = { item.get('id')}>
						<RecommendItem imgUrl = { item.get('imgUrl')} />
					</RecommendWraper>
				)
			})
		)
	}
}

const mapStateToProps = (state) => ({
	recommend:state.getIn(['home','recommend'])
})
export default connect(mapStateToProps,null)(Recommend);