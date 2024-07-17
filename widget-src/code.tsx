const { widget } = figma;
const { AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text, useEffect, useSyncedState } = widget;
import Header from './components/Header';
import StatusTable from './components/StatusTable';
import { tasks } from '../data/tasks';
import { statuses } from '../data/statuses';

function Widget() {
  const [myTasks, setTasks] = useSyncedState("myTasks", tasks);
  const [myStatuses, setStatuses] = useSyncedState("myStatuses", statuses);

  function updateTaskAndStatuses(updatedTask: any) {
    // First, update the task in the list of all tasks
    const updatedTasks = myTasks.map(task => {
      if (task.id === updatedTask.id) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
  
    // Check if the status has changed
    if (updatedTask.oldStatus !== updatedTask.status) {
      const updatedStatuses = myStatuses.map(status => {
        // Remove the task ID from the old status
        if (status.id === updatedTask.oldStatus) {
          return { ...status, tasks: status.tasks.filter(id => id !== updatedTask.id) };
        }
        // Add the task ID to the new status
        if (status.id === updatedTask.status) {
          return { ...status, tasks: [...status.tasks, updatedTask.id] };
        }
        return status;
      });
  
      setStatuses(updatedStatuses); // Update state with the new statuses
    }
  
    setTasks(updatedTasks); // Update state with the new tasks
  }
  
  function addNewTask(newTaskDetails: any) {
    const newId = Date.now().toString(); // Unique ID based on the current time

    const newTask: any = {
        id: newId,
        ...newTaskDetails
    };

    // Update the tasks array
    const updatedTasks = [...myTasks, newTask];
    setTasks(updatedTasks);

    // Update the status array to include the new task ID in the correct status
    const updatedStatuses = myStatuses.map(status => {
        if (status.id === newTask.status) {
            return { ...status, tasks: [...status.tasks, newId] };
        }
        return status;
    });

    setStatuses(updatedStatuses);
}

function deleteTask(taskToDelete: any) {
  // Filter out the task to delete from the tasks list
  const updatedTasks = myTasks.filter(task => task.id !== taskToDelete.id);
  
  // Update statuses to remove the task ID from the corresponding status
  const updatedStatuses = myStatuses.map(status => {
    if (status.tasks.indexOf(taskToDelete.id) !== -1) {
      return { ...status, tasks: status.tasks.filter(id => id !== taskToDelete.id) };
    }
    return status;
  });

  // Update the states with the new lists
  setTasks(updatedTasks);
  setStatuses(updatedStatuses);
}


  useEffect(() => {
    figma.ui.on("message", (msg) => {
      if (msg.type == "updateTask") {
        updateTaskAndStatuses(msg.data);
        figma.notify("Task successfuly updated! 👍🏻");
      }
      if (msg.type == "createTask") {
        addNewTask(msg.data);
        figma.notify("Task successfuly created! 🎉");
        figma.closePlugin();
      }
      if (msg.type == "deleteTask") {
        deleteTask(msg.data);
        figma.notify("Task deleted! 😢");
        figma.closePlugin();
      }
      if (msg === "hello") {
        figma.notify("Don't mess up something 👑");
        // console.log("poruka ==>",msg);
      }
      if (msg === "close") {
        figma.closePlugin();
      }
    });
  });


  return (
    <AutoLayout
      name="Widget"
      fill="#141825"
      cornerRadius={16}
      overflow="visible"
      direction="vertical"
      padding={32}
    >
    <Header/>
    <StatusTable statuses={myStatuses} tasks={myTasks}/>
    </AutoLayout>
  );
}
// function Widget() {
//   return (
//     <AutoLayout
//       direction="horizontal"
//       horizontalAlignItems="center"
//       verticalAlignItems="center"
//       height="hug-contents"
//       padding={8}
//       fill="#FFFFFF"
//       cornerRadius={8}
//       spacing={12}
//       onClick={async () => {
//         await new Promise((resolve) => {
//           figma.showUI(__html__);
//           figma.ui.on("message", (msg) => {
//             if (msg === "hello") {
//               figma.notify("Hello Widgets");
//             }
//             if (msg === "close") {
//               figma.closePlugin();
//             }
//           });
//         });
//       }}
//     >
//       <Text fontSize={32} horizontalAlignText="center">
//         Click Me
//       </Text>
//     </AutoLayout>
//   );
// }
widget.register(Widget);
