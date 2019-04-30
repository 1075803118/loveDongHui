import React,{ Component } from 'react';
// 通过redux提供的connect属性，把store中的数据进项连接
import { connect } from 'react-redux';
import { actionCreate } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom';
import {
    HeaderWraper,
    Logo,
    Nav,
    NavItem,
    SearchWraper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwiper,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style'
import { CSSTransition } from 'react-transition-group';

class Header extends Component{
    getListArea(){
        const { focused,list,page,mouseIn,pageTotal,handleMouseEnter,mouseLeave,changePage } = this.props;
        const newList = list.toJS();
		const pageList = [];
		if(newList.length){
			for(let i = (page-1)*10;i<page*10;i++){
				pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
			}
		}
        if (focused || mouseIn) {
            return(
				<SearchInfo>
					<SearchInfoTitle 
						onMouseEnter = { handleMouseEnter }
						onMouseLeave = { mouseLeave }					
					>
						热门搜索
						<SearchInfoSwiper onClick = { () => {changePage(page,pageTotal,this.spinIcon)} }>
							<i ref = { (icon) => { this.spinIcon = icon }} className = "iconfont spin">&#xe851;</i>换一批
						</SearchInfoSwiper>
					</SearchInfoTitle>
						<SearchInfoList>
							{pageList}
						</SearchInfoList>  
				</SearchInfo>  
            )    
        }else{
            return null;
        }
    }
    render(){
        const { focused,list,handleInputFocus,handleInputBlur,login,logout } = this.props;
        return(
            <HeaderWraper>
				<Link to='/'><Logo></Logo></Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
					{
						login?<NavItem className='right' onClick={logout}>退出</NavItem>:<Link to='/login'><NavItem className='right'>登录</NavItem></Link>
					}
                    
                    <SearchWraper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames = "fade"
                            appear = {true}
                        >
                            <NavSearch 
                                className = {focused?'focused':''}
                                onFocus = { () => {handleInputFocus(list)}}
                                onBlur = {handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused?'focused iconfont zoom':'iconfont zoom'}>&#xe637;</i>
                        {this.getListArea()}
                    </SearchWraper>                
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className='iconfont'>&#xe600;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>  
                </Addition>
            </HeaderWraper>
        )
	}
	
}

const mapStateToProps = (state) => {
    return{
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
		page:state.getIn(['header','page']),
		mouseIn:state.getIn(['header','mouseIn']),
		pageTotal:state.getIn(['header','pageTotal']),
		login:state.getIn(['login','login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        // 使input框获取焦点
        handleInputFocus(list){
			list.size === 0 && dispatch(actionCreate.getList());
            dispatch(actionCreate.inputFocuse());
        },
        //使input框失去焦点
        handleInputBlur(){
            dispatch(actionCreate.inputBlur());
        },
        // 鼠标进入显示窗口
        handleMouseEnter(){
            dispatch(actionCreate.mouseEnter());
		},
		// 鼠标退出显示窗口
		mouseLeave(){
			dispatch(actionCreate.mouseLeave());
		},
		// 点击换一批，更改显示的数据内容
		changePage(page,pageTotal,spin){
			// 更改换一批的旋转图标
			// replace替代函数：即在字符串中用一些字符串替换另一些字符串或者替换一个与正则表达式相匹配的字符串
			// 用法：stringObject.replace(regexp/substr,replacement)
			// replace(/[^0-9]/ig,''); /正则表达式的模式/i,g,m i:执行对大小写不敏感的匹配 g:执行全局匹配 m:执行多行匹配
			// replace(/[^0-9]/ig,'')即 对大小写不敏感的全局匹配替换为空字符串
			let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
			if(originAngle){
				// parseInt(string, radix)  解析一个字符串并返回一个整数  radix表示要解析的数字的基数，
				// parseInt(originAngel,10) 获取到的数字转换成十进制
				originAngle = parseInt(originAngle,10);
			}else{
				originAngle = 0;
			}
			// transform.rotate('数字deg')  一个东西要旋转的度数
			spin.style.transform = 'rotate('+(originAngle+360)+'deg)'
			if(page<pageTotal){
				dispatch(actionCreate.changePage(page+1));
			}else{
				dispatch(actionCreate.changePage(1));
			}
		},
		logout(){
			dispatch(loginActionCreators.logout())
		}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);