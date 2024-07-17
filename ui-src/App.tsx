import React, { useEffect, useState } from "react";
import EditTask from './components/EditTask';
import "./App.css";
import CreateTask from "./components/CreateTask";

function App() {
  const [taskDetails, setTaskDetails] = useState(null);

  const onUpdate = (arg: any) => {
    // Send a message back to the widget code
    parent.postMessage({ pluginMessage: { type: 'updateTask', data: arg } }, '*');
  };
  const onCreate = (arg: any) => {
    // Send a message back to the widget code
    parent.postMessage({ pluginMessage: { type: 'createTask', data: arg } }, '*');
  };

  useEffect(() => {
    // Set up the message listener
    onmessage = (event) => {
      // Update the state with the received task details
      const task = event.data.pluginMessage.pluginMessage.task;
      setTaskDetails(task);
    };
  }, []);

  return (
    <div className="App">
      {taskDetails ? (
        <EditTask taskDetails={taskDetails} onUpdate={onUpdate} />
      ) : (
        <CreateTask onCreate={onCreate}/>
      )}
    </div>
  );
}

export default App;
