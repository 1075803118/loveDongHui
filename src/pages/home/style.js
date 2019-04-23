import styled from 'styled-components';


export const HomeWraper = styled.div`
	overflow:hidden;
	width:960px;
	margin:0 auto;
`;

export const HomeLeft = styled.div`
	float:left;
	padding-top:30px;
	margin-left:15px;
	width:625px;
	.banner-img{
		width:625px;
		height:270px;
		border-radius:5px;
	}
`;

export const HomeRight = styled.div`
	float:right;
	width:280px;
`;

// List中的css样式
export const ListItem = styled.div`
	overflow:hidden;
	width:625px;
	height:130px;
	margin-top:18px;
	border-bottom:1px solid #f0f0f0;
	.list-img{
		float:right;
		width:150px;
		height:100px;
		border-radius:10px;
		vertical-align:bottom;
	}
`;

export const ListInfo = styled.div`
	float:left;
	width:460px;
	.title{
		font-size:18px;
	}
	.info{
		margin-top:10px;
		color:#999999;
		font-size:13px;
		line-height:20px;
	}
`;

// recommend的css样式
export const RecommendWraper = styled.div`
	width:280px;
	margin:25px 0;
`;

export const RecommendItem = styled.div`
	width:280px;
	height:50px;
	margin:20px 0;
	background:url(${(props) => props.imgUrl});
	background-size:contain;
	border-radius:5px;
`;

// writer的css样式

export const WriterWraper = styled.div`
	width:280px;
	height:400px;
	border-radius:3px;
`;

 export const WriterTitle = styled.div`
	height:20px;
	color:#969696;
	font-size:14px;
	padding-top:10px;
	.recommend{
		display:inline-block;
		text-align:left;
	}
	.batch{
		display:inline-block;
		float:right;
		
	}
 `;

 export const WriterInfo = styled.div`
	width:280px;
	height:47px;
	margin:15px 0 0 0;
 `;

 export const ImgSwiper = styled.img`
	width:48px;
	height:48px;
	border:1px solid #ddd;
	border-radius:50%;
	vertical-align: middle;
	float:left;
	background:url(${(props)=>props.imgUrl});
	background-size:contain;
	clear:both;
 `;

 export const InfoSwiper = styled.div`
	float:left;
 `;

 export const LittleTitle = styled.p`
	height:24px;
	line-height:24px;
	padding-left:10px;
	font-size:14px;
	color:#333;
 `;

 export const Info = styled.p`
	height:24px;
	line-height:24px;
	padding-left:10px;
	font-size:12px;
	color:#969696;
 `;