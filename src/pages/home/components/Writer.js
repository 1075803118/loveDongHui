import React,{ Component } from 'react';
import { WriterWraper,WriterTitle,WriterInfo,ImgSwiper,InfoSwiper,LittleTitle,Info }from '../style'

class Writer extends Component{
	render(){
		return(
			<WriterWraper>
				<WriterTitle>
					<span className='recommend'>推荐作者</span>
					<span className='batch'>换一批</span>
				</WriterTitle>
				<WriterInfo>
					<ImgSwiper imgUrl='http://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'></ImgSwiper>
					<InfoSwiper>
						<LittleTitle>茶点故事</LittleTitle>
						<Info>写了170.3k字 · 7.1k喜欢</Info>
						<span><i className='iconfont'>&#xe601;</i></span>
					</InfoSwiper>
				</WriterInfo>
			</WriterWraper>
		)
	}
}

export default Writer;