import React from "react";

/**
 * @author
 * @function Card
 **/

export const Card = (props) => {
  return (
    <div className="card" {...props}>
      {(props.headerLeft || props.headerRight) && (
        <div className="cardHeader" >
          {props.headerLeft && <div>{props.headerLeft}</div>}
          {props.headerRight && <div>{props.headerRight}</div>}
        </div>
      )}
      {props.children}
    </div>
  );
};
