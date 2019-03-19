import React from 'react'


function ToDo(props) {
  return (
    <div class="todo-item">
        <input type="checkbox" />
        <p>{props.text}</p>
    </div>
  )
}

export default ToDo
