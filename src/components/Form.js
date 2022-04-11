import React, { useState } from 'react'
import './Form.css'

export default function Form(props) {

    const [taskName, setTaskName] = useState('');
    const [taskDuration, setTaskDuration] = useState('');

    const taskNameHandler = (event) => {
        setTaskName(event.target.value)
    }

    const durationHandler = (event) => {
        setTaskDuration(event.target.value);
    }

    const sendData = () => {
        const data = {
            taskName,
            taskDuration
        }

        props.getData(data);
        setTaskName('');
        setTaskDuration('');

    }

  return (
    <div>
        <label htmlFor='task-name'>Task Name</label>
        <input type="text" id='task-name' onChange={taskNameHandler} value={taskName}/>
        <label htmlFor='duration'>Duration</label>
        <input type="number" id="duration" onChange={durationHandler} value={taskDuration}/>
        <button onClick={sendData}>Add list</button>
    </div>
  )
}
