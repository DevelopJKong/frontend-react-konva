import { Stage, Layer, Arrow } from 'react-konva';

const App = () => {
  return (
    <>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Arrow
            x={5}
            y={5}
            points={[0, 700, window.innerWidth / 2, window.innerHeight / 2]}
            pointerWidth={10}
            pointerLength={10}
            fill='red'
            stroke='red'
            strokeWidth={4}
          />
        </Layer>
      </Stage>
    </>
  );
};

export default App;
