import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
        </td>
        <td>
            <a className="btn btn-danger" href={"http://localhost:4000/todos/delete/"+props.todo._id}>Delete</a>
        </td>
    </tr>
)


export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos')
            .then(res => {
                this.setState({
                    todos: res.data
                })
            })
            .catch(err => console.log(err));
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/todos')
            .then(res => {
                this.setState({
                    todos: res.data
                })
            })
            .catch(err => console.log(err));
    }

    componentDidDelete() {
        axios.delete('http://localhost:4000/todos/delete/')
    }

    todoList = () => this.state.todos.map(
        (todo, index) => <Todo todo={todo} key={index} />
    )


    render() {
        return (
            <div className="container-fluid">
                <br></br>
                <h3>Todo List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Activities</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Actions</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
