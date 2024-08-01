const { widget } = figma;
const { AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text } = widget;
function Header() {
    return (
      <AutoLayout
        name="Header"
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
        cornerRadius={16}
        strokeWidth={0}
        overflow="visible"
        spacing={32}
        padding={32}
        width={1328}
        verticalAlignItems="center"
      >
        <Text
          name="Unleash Creativity"
          fill="#FFF"
          width="fill-parent"
          fontFamily="Poppins"
          fontSize={40}
          fontWeight={700}
        >
          Unleash Creativity
        </Text>
        <AutoLayout
          name="Button"
          effect={{
            blur: 10,
            type: "background-blur",
          }}
          fill={{
            opacity: 0.01,
            type: "solid",
            color: {
              r: 1,
              g: 1,
              b: 1,
              a: 1,
            },
          }}
          stroke="#FFFFFF26"
          cornerRadius={10}
          overflow="visible"
          spacing={6}
          padding={{
            vertical: 14,
            horizontal: 24,
          }}
          horizontalAlignItems="center"
          verticalAlignItems="center"
          onClick={async () => {
            await new Promise((resolve) => {
              figma.showUI(__html__, { width: 720, height: 700, title: "Add New Task" });
            });
          }}
        >
          <Text
            name="Label"
            fill="#FFF"
            verticalAlignText="center"
            fontFamily="Poppins"
            fontSize={18}
            letterSpacing={
              -0.48
            }
            fontWeight={500}
          >
            Add new task
          </Text>
        </AutoLayout>
      </AutoLayout>
    );
  }
  export default Header;