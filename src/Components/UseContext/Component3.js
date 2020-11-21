import React from "react";
import { MyContext } from "../../App";

function Component3() {
  return (
    <div>
      <MyContext.Consumer>
        {(e) => {
          return (
            <div>
              <h1>The last child</h1>
              <p>Using context API: {e}</p>
            </div>
          );
        }}

        {/* {(data) => {
          return (
            <div>
              <h1>The last child</h1>
              <p>Using context API: {data}</p>
            </div>
          );
        }} */}
      </MyContext.Consumer>
    </div>
  );
}

export default Component3;
