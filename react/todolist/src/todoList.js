import React,{Component,Fragment} from 'react'
import TodoListItem from './todoListItem'
import Test from './test'
import './style.css'

class todoList extends Component {
    // 构造函数
    constructor(props) {
        super(props);
        // 当组件的state或者props发生改变的时候，render函数会被重新执行
        this.state = {
            inputValue:'',
            list:[]
        };
        // 一般this在这里进行绑定
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDeleteValue = this.handleDeleteValue.bind(this);
    }

    render() {
        return(
            <Fragment>
                <label htmlFor = "inserArea">输入内容</label>
                <div><input
                    id = "inserArea"
                    className = 'inputColor'
                    value = {this.state.inputValue}
                    // 值改变的时候更改input的值的显示
                    onChange = {this.handleInputChange}
                />
                <button onClick = {this.handleBtnClick}>提交</button> </div>
                <ul>
                    {/* 通过map函数对li标签进行循环，map函数中需要传入两个参数 分别是传入的内容，内容的下标 */}
                    {   this.getTodolistItem()
                        // this.state.list.map((item,index)=>{
                        // // 如果key值不存在，会有警告提示或者错误提示
                        // return(
                        //     <div>
                        //         {/* 父组件对组件进行传值 通过属性进行传值 */}
                        //         <TodoListItem
                        //             content = {item} 
                        //             index = {index} 
                        //             // 父组件向子组件传递方法的时候一定要绑定this，否则在子组件会报错 此方法不是一个函数
                        //             deleteItem = {this.handleDeleteValue}
                        //          />
                        //     </div>
                        // ) 
                        // <li
                        //     key = {index}
                        //     onClick = {this.handleDeleteValue.bind(this,index)}
                        //     // 不让标签转义
                        //     dangerouslySetInnerHTML = {{__html:item}}
                        // >
                        // </li>
                    // })
                    }
                </ul>
                <Test content = {this.state.inputValue} />
            </Fragment>
        )
    }

    // 当代码一坨一坨的时候就要想着做函数或者代码拆分
    getTodolistItem(){
        return this.state.list.map((item,index)=>{
            // 如果key值不存在，会有警告提示或者错误提示
            // 父组件对组件进行传值 通过属性进行传值 
            // key值要写在循环的最外层的元素上
            return(
                <TodoListItem
                    key = {index}
                    content = {item} 
                    index = {index} 
                    // 父组件向子组件传递方法的时候一定要绑定this，否则在子组件会报错 此方法不是一个函数
                    deleteItem = {this.handleDeleteValue}
                />
            )
        }) 
    }
    // 更改input的值
    handleInputChange (e){
        // 在react新版本中的写法 直接使用es6返回一个函数  异步操作
        const value = e.target.value;
        this.setState( ()=>({
            inputValue:value
        }))
        // 以前的写法使用返回一个对象
        // this.setState({
        //     // e.target.value获取当前文本框的值 需要设定触发事件 
        //     // 情景描述：比如在input框中，我输入一个内容，当点击某个按钮或者回车，我在这个input框或者某个按钮中绑定一个事件，会触发事件中的方法
        //     inputValue:e.target.value
        // })
    }
    // inputValue更改后在下边进行显示
    handleBtnClick(){
        // 和上边的那个函数一样，更改this.setState的写法
        // prevState就相当于修改数据之前的数据是什么样的
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }))
        // this.setState({
        //     // ...扩展运算符，相当于es5中的apply,往数组中添加元素
        //     list:[...this.state.list,this.state.inputValue],
        //     inputValue:''
        // })
    }
    // 把显示的内容点击进行删除
    handleDeleteValue(index){
        // const list = [...this.state.list];
        // // splice方法从数组中删除项目 splice(index,howMany) index项目的下标 howMany删除的个数
        // list.splice(index,1);
        // this.setState({
        //     list:list
        // })
        // 更改上边的state值
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index,1);
            return {list};
        })
    }
}
export default todoList;