import styled from 'styled-components';

export const LoginWraper = styled.div`
	z-index:0;
	position:absolute;
	left:0;
	right:0;
	bottom:0;
	top:56px;
	background:#eee;
`;

export const LoginBox = styled.div`
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
	width:400px;
	height:200px;
	margin:80px auto;
	padding-top:20px;
	background:#fff;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const Input = styled.input`
	display:block;
	width:200px;
	height:30px;
	line-height:30px;
	padding:0 10px;
	color:#777;
	margin:10px;
`;

export const Button = styled.button`
	width:220px;
	height:30px;
	line-height:30px;
	border:none;
	background:#3194d0;
	border-radius:15px;
	margin:10px;
	text-align:center;
	color:#fff;
`;