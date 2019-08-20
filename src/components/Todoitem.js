import React, {Component} from "react"

class Todo  extends Component{
    render(){
        return(
            <div className="todo-item">
                <input type="checkbox" checked={this.props.todo.completed}/>
                <p>{this.props.todo.text}</p>
            </div>
        )
    }
}

export default Todo
