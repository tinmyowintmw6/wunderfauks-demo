// import React, { useRef, useState } from 'react';
// import gsap from 'gsap';

// export const Example = () => {
//   const [text, setText] = useState('wow');
//   const element = useRef(null);

//   const onMouseOverHandler = () => {


//     const tl = new gsap.timeline();

//     tl.to(element.current, {
//       duration: 0.1,
//       call: () => {
//         setText('C');
//       }
//     })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CH');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHAN');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANG');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANGE');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANGE ');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANGE IS');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANGE IS T');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANGE IS TH');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANGE IS THE');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANGE IS THE O');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANGE IS THE ON');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANGE IS THE ONL');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANGE IS THE ONLY ');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANGE IS THE ONLY ');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANGE IS THE ONLY C');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANGE IS THE ONLY CO');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANGE IS THE ONLY CONS');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANGE IS THE ONLY CONST');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANGE IS THE ONLY CONSTA');
//         }
//       })
//       .to(element.current, {
//         duration: 0.1,
//         call: () => {
//           setText('CHANGE IS THE ONLY CONSTANT');
//         }
//       });


//   };

//   return (
//     <div className="titleEffect" ref={element} onMouseOver={onMouseOverHandler}>
//       {text}
//     </div>

//   );
// };
// export default Example
import React from "react";
import { Wave } from "react-animated-text";

const exampleStyle = {
  marginBottom: "1em",
  width: "55%",
  fontSize: "63px",
  margin: "0 auto",
  display: "block",
  position: "relative",
  top: "16rem",
};

// const codeDivStyle = {
//   backgroundColor: "#eee",
//   marginTop: "2em",
//   padding: "1px 1em",
//   overflow: "scroll",
//   fontSize: "1rem"
// };

// const codeStyle = {
//   textAlign: "left"
// };

// const buttonStyle = {
//   cursor: "pointer",
//   backgroundColor: "#69c",
//   border: "none",
//   color: "white",
//   appearance: "none",
//   boxShadow: "none",
//   borderRadius: 0,
//   fontSize: "1.0rem",
//   padding: "0.2em 2em"
// };

export class Wave1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list:
        "CHANGE IS THE ONLY CONSTANT"
    };
  }

  render() {
    return (
      <div style={exampleStyle} className="text-size">
        <section>
          <Wave
            text={this.state.list}
            effect="verticalFadeIn"
            effectChange={0}
            iterations={1}
            effectDirection="down"
            effectDuration={0.1}
          />

          {/* <Wave
            text="_"
            effect="verticalFadeOut"
            effectChange={0}
            effectDirection="up"
            effectDuration={9}
          /> */}
        </section>
        {/* <div style={codeDivStyle}>
          <pre style={codeStyle}>
            &lt;Wave
            <br />
            &nbsp;&nbsp;text="LOADING DATA"
            <br />
            &nbsp;&nbsp;effect="stretch"
            <br />
            &nbsp;&nbsp;effectChange={2.0}
            <br />
            />
          </pre>
        </div> */}
      </div>
    );
  }
}



