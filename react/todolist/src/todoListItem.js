import React,{Component} from 'react'
// 校验传值类型
import PropTypes from 'prop-types'

class TodoListItem extends Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        // 代码优化
        const { content } = this.props;
        return (
            // 子组件接收父组件传值通过props接收
            <div onClick={this.handleClick}>
                {/* {this.props.content} */}
                {/* 优化后的代码 */}
                {/* { test } */}
                -{ content }
            </div>
        )
    }
    // 接收父组件handleDeleteValue方法，对内容进行删除
    handleClick(){
        // 接收父组件传递过来的下标，通过下标进行删除数组中的数据
        // alert(this.props.index);
        // 在父组件绑定this以后就不会再提示报错了 
        // 代码优化  优化前的代码
        // this.props.deleteItem(this.props.index);
        // 优化后的代码
        const { deleteItem,index } = this.props;
        deleteItem(index);
    }
}
// 对父组件传过来的参数进行类型校验
TodoListItem.propTypes = {
    // isRequired意味着test不能传值为空
    // test:PropTypes.string.isRequired,
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
// 设置test的默认值
// TodoListItem.defaultProps = {
//     test:'abc'
// }
export default TodoListItem;