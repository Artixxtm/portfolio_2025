import { forwardRef, Suspense } from "react";
import Canvas from "./subComponents/Canvas";

const Galaxy = ({galaxyRef, onModelLoaded}) => {
  return (
    <Suspense fallback={null}>
      <Canvas scene="https://prod.spline.design/sQkl71NiHXCz9R0i/scene.splinecode" type3D="Galaxy" ref={galaxyRef} onModelLoaded={onModelLoaded} />
    </Suspense>
  );
}

export default Galaxy;
