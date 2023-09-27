import React from "react";

function ToDoItem(props) { 
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => console.log("Changed")}
            />
            <h2>{props.item.text}</h2>
        </div>
    )
    }

export default ToDoItem