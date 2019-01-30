import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.props.items);
        const todo=this.props.items;
        const list = todo.map((items , i) =>
            <li key={i.toString()}>
                <Todo text={items.text} priority={items.priority} dueDate={items.dueDate}/>
            </li>
        );

        return (
            <ul> {list}</ul>
        );
    }

}