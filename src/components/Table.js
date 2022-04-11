import React from 'react'
import './Table.css';

export default function Table(props) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Task name</th>
                    <th>Task Duration</th>
                </tr>
            </thead>
            <tbody>
                {props.task.map((task, index) => {
                    return (<tr key={index}>
                        <td>{task.taskName}</td>
                        <td>{task.taskDuration} hours</td>
                    </tr>)
                })}
                
            </tbody>
        </table>
    </div>
  )
}
