import { Task } from "../../data/tasks";

const { widget } = figma;
const { AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text } = widget;

function TaskCard(task:any) {
    return (
      <AutoLayout
        name="TaskCard"
        fill="#FFFFFF0D"
        cornerRadius={4}
        overflow="visible"
        direction="vertical"
        spacing={6}
        padding={8}
        width={292}
        verticalAlignItems="center"
        onClick={async () => {
                  await new Promise((resolve) => {
                    figma.showUI(__html__);
                    figma.ui.postMessage?.({ pluginMessage: task });
                  });
                }}
      >
        <Text
          name={task.task.title}
          fill="#FFFFFFD9"
          width="fill-parent"
          fontFamily="Inter"
          fontSize={12}
          fontWeight={600}
        >
          {task.task.title}
        </Text>
        <AutoLayout
          name="Status"
          overflow="visible"
          spacing="auto"
          width="fill-parent"
          verticalAlignItems="center"
        >
          <AutoLayout
            name="User"
            fill="#FFFFFF0D"
            cornerRadius={4}
            overflow="visible"
            spacing={6}
            padding={{
              vertical: 4,
              horizontal: 8,
            }}
            horizontalAlignItems="center"
            verticalAlignItems="center"
          >
            <Frame
              name={task.task.person}
              width={11}
              height={11}
            >
              <SVG
                name="Vector"
                x={{
                  type: "horizontal-scale",
                  leftOffsetPercent: 0,
                  rightOffsetPercent: 3.03,
                }}
                y={{
                  type: "vertical-scale",
                  topOffsetPercent: 1.515,
                  bottomOffsetPercent: 1.515,
                }}
                height={11}
                width={11}
                src="<svg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <path d='M5.33333 5.49996C4.6 5.49996 3.97222 5.23885 3.45 4.71663C2.92778 4.1944 2.66667 3.56663 2.66667 2.83329C2.66667 2.09996 2.92778 1.47218 3.45 0.949959C3.97222 0.427737 4.6 0.166626 5.33333 0.166626C6.06667 0.166626 6.69444 0.427737 7.21667 0.949959C7.73889 1.47218 8 2.09996 8 2.83329C8 3.56663 7.73889 4.1944 7.21667 4.71663C6.69444 5.23885 6.06667 5.49996 5.33333 5.49996ZM0 10.8333V8.96663C0 8.58885 0.0972222 8.24163 0.291667 7.92496C0.486111 7.60829 0.744444 7.36663 1.06667 7.19996C1.75556 6.85552 2.45556 6.59718 3.16667 6.42496C3.87778 6.25274 4.6 6.16663 5.33333 6.16663C6.06667 6.16663 6.78889 6.25274 7.5 6.42496C8.21111 6.59718 8.91111 6.85552 9.6 7.19996C9.92222 7.36663 10.1806 7.60829 10.375 7.92496C10.5694 8.24163 10.6667 8.58885 10.6667 8.96663V10.8333H0Z' fill='white'/>
  </svg>
  "
              />
            </Frame>
            <Text
              name="None"
              fill="#FFF"
              fontFamily="Inter"
              fontSize={12}
              fontWeight={500}
            >
              {task.task.person}
            </Text>
          </AutoLayout>
          <AutoLayout
            name="Button"
            fill="#FFFFFF0D"
            cornerRadius={4}
            overflow="visible"
            spacing={6}
            padding={{
              vertical: 4,
              horizontal: 8,
            }}
            horizontalAlignItems="center"
            verticalAlignItems="center"
          >
            <Text
              name="Start Working"
              fill="#FFF"
              fontFamily="Inter"
              fontSize={12}
              fontWeight={500}
            >
              Open
            </Text>
          </AutoLayout>
        </AutoLayout>
      </AutoLayout>
    );
  }
  export default TaskCard;