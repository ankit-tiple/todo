import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { useState } from 'react';

function App() {

  const [task, setTask] = useState([]);

  const getData = (data) => {
    console.log(data);
    setTask(prevState => {
      return [...prevState, data];
    })
  }

  return (
    <div className="App">
        <h1>Todo List</h1>
        <Form getData={getData}/>
        {task.length != 0 && <Table task={task}/>}
    </div>
  );
}

export default App;
