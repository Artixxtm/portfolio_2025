import { forwardRef, useEffect } from 'react'
import { Application } from '@splinetool/runtime'
import useModels from '@/hooks/useModels'

const Canvas = forwardRef(({ style, className, scene, children, type3D, onModelLoaded, ...props }, ref) => {
  const id = `canvas3d-${type3D}`

  useEffect(() => {
    const canvas = document.getElementById(id);

    // start the application and load the scene
    const spline = new Application(canvas);
    spline.load(scene).then(() => {
      console.log(`${type3D} loaded`)
      ref.current = { model: spline, type3D };  // Update the ref with the model
      if (onModelLoaded) onModelLoaded(type3D, ref.current);  // Call the callback
    }).catch(error => {
      console.error("Spline load error: ", error);
    });
  }, [scene])

  return <canvas id={id} className={className}></canvas>
})

export default Canvas

