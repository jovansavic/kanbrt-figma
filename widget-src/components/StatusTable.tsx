import StatusColumn from "./StatusColumn";
import TaskCard from "./TaskCard";

const { widget } = figma;
const { AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text } = widget;
function StatusTable({statuses, tasks}: any) {

  function findTasks(statusID: any, allTasks: any) {
    return allTasks.filter((task:any) => task.status === statusID);
  }
    return (
      <AutoLayout
        name="StatusTable"
        strokeWidth={0}
        overflow="visible"
        spacing={16}
        padding={{
          vertical: 48,
          horizontal: 0,
        }}
      >
        {statuses.map((status: any, index: any) => (
        <StatusColumn key={index} status={status} tasks={findTasks(status.id, tasks)}/>
      ))}
      </AutoLayout>
    );
  }

  export default StatusTable;