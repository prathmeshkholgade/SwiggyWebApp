import { Component } from "react";


class UserClass extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            count2:2
        }
    }
    render(){
        const {name} = this.props
        const {count,count2} = this.state
        return (
            <div>
                <p>Name : {name}</p>
                <p> count : {count}</p>
                <h1>class based components</h1>
                <p onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    })
                }}>+1 count</p>
                <p>{count2}</p>
                <button onClick={()=>{
                    this.setState({
                        count2:this.state.count2 +2
                    })
                }}>2+</button>
            </div>
        )
    }
}
export default UserClass;