import { useRef, useEffect, useState } from 'react';
import { CanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import Wave from './Wave';

const Canvas = () => {
  const canvasRef = useRef(null);
  const { width } = useResponsiveSize();
  const [context, setContext] = useState();

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) setContext(ctx);
  }, []);

  return (
    <div className='canva' style={{transform: 'rotate(180deg)', marginTop: '-1vh', zIndex: '-1'}}>
      <CanvasContext.Provider value={{ context }}>
        <canvas id="canvas" ref={canvasRef} width={width} height={200}></canvas>
        <Wave />
      </CanvasContext.Provider>
    </div>
  );
};

export default Canvas;