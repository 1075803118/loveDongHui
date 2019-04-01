import React,{ Component } from 'react'
//当父组件的render函数运行时，它的子组件的render都将会被重新运行一次
class Test extends Component {
    render(){
        return <div>{ this.props.content }</div>
    }
}
export default Test;