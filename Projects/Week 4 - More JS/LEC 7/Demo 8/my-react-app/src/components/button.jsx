import { useState } from "react";

function Button(props) {//creates a button (props is the parameters of the button created)

    return (
      <div>
        <button onClick={props.update}>{props.text}</button>
      </div>
    );
  }//props are unchangable
  export default Button;//exports it