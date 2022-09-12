import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  // CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


// Animation
// import { easeQuadInOut } from "d3-ease";
// import AnimatedProgressProvider from "./AnimatedProgressProvider";
import ChangingProgressProvider from "./ChangingProgressProvider";
// Radial separators


const Circle = () => {
  return (
    // <div >
    //   <div class="circle-wrap">
    //     <div class="circle">
    //       <div class="mask full">
    //         <div class="fill"></div>
    //       </div>
    //       <div class="mask half">
    //         <div class="fill"></div>
    //       </div>
    //       <div class="inside-circle"> </div>
    //     </div>
    //   </div>
    // </div>
    <ChangingProgressProvider values={[0,5, 10, 20,30, 40, 50, 60, 70, 80, 90, 95, 100]} strokeWidth={1}>
        {percentage => (
          <CircularProgressbar
            strokeWidth={0.5}
            value={percentage}
            styles={buildStyles({
              pathTransitionDuration: 1.25,
              pathColor: "#fff",
              trailColor: "#b3b3b3",
            })}
          />
        )}
      </ChangingProgressProvider>
  );
    

}

export default Circle;
