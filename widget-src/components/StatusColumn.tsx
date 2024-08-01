import TaskCard from "./TaskCard";
const { widget } = figma;
const { AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text } = widget;

function StatusColumn({status, tasks}: any) {
    return (
      <AutoLayout
        name="StatusColumn"
        fill={{
          type: "gradient-linear",
          gradientHandlePositions:
            [
              { x: 0, y: 0 },
              { x: 1, y: 1 },
              {
                x: -0.006,
                y: 0.5,
              },
            ],
          gradientStops: [
            {
              position: 0,
              color: {
                r: 0.6000000238418579,
                g: 0.6000000238418579,
                b: 0.6000000238418579,
                a: 1,
              },
            },
            {
              position: 1,
              color: {
                r: 1,
                g: 1,
                b: 1,
                a: 1,
              },
            },
          ],
          opacity: 0.07,
        }}
        cornerRadius={4}
        direction="vertical"
        spacing={16}
        padding={{
          vertical: 16,
          horizontal: 14,
        }}
        width={320}
      >
        <AutoLayout
          name="StatusCardHeader"
          overflow="visible"
          spacing={8}
          width={292}
          verticalAlignItems="center"
        >
          <Text
            name={status.name}
            fill="#FFF"
            width="fill-parent"
            lineHeight="100%"
            fontFamily="Inter"
            fontWeight={700}
          >
            {status.name}
          </Text>
          {/* <AutoLayout
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
            <Frame
              name="add"
              width={9}
              height={9}
            >
              <SVG
                name="Vector"
                x={{
                  type: "horizontal-scale",
                  leftOffsetPercent: 0,
                  rightOffsetPercent: 6.667,
                }}
                y={{
                  type: "vertical-scale",
                  topOffsetPercent: 7.576,
                  bottomOffsetPercent: 7.576,
                }}
                height={8}
                width={8}
                src="<svg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <path d='M3.6 5.0454H0.6C0.43 5.0454 0.2875 4.99313 0.1725 4.88858C0.0575 4.78403 0 4.65449 0 4.49994C0 4.3454 0.0575 4.21586 0.1725 4.11131C0.2875 4.00676 0.43 3.95449 0.6 3.95449H3.6V1.22722C3.6 1.07267 3.6575 0.943128 3.7725 0.838581C3.8875 0.734035 4.03 0.681763 4.2 0.681763C4.37 0.681763 4.5125 0.734035 4.6275 0.838581C4.7425 0.943128 4.8 1.07267 4.8 1.22722V3.95449H7.8C7.97 3.95449 8.1125 4.00676 8.2275 4.11131C8.3425 4.21586 8.4 4.3454 8.4 4.49994C8.4 4.65449 8.3425 4.78403 8.2275 4.88858C8.1125 4.99313 7.97 5.0454 7.8 5.0454H4.8V7.77267C4.8 7.92722 4.7425 8.05676 4.6275 8.16131C4.5125 8.26589 4.37 8.31809 4.2 8.31809C4.03 8.31809 3.8875 8.26589 3.7725 8.16131C3.6575 8.05676 3.6 7.92722 3.6 7.77267V5.0454Z' fill='white'/>
  </svg>
  "
              />
            </Frame>
            <Text
              name="Start Working"
              fill="#FFF"
              fontFamily="Inter"
              fontSize={12}
              fontWeight={500}
            >
              Task
            </Text>
          </AutoLayout> */}
        </AutoLayout>
        <AutoLayout
          name="Task Wrap"
          direction="vertical"
          spacing={8}
          width="fill-parent"
        >
          {tasks.map((task:any) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </AutoLayout>
      </AutoLayout>
    );
  }
  export default StatusColumn;