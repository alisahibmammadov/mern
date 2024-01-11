/* eslint-disable react/prop-types */
import "./Card.css";

const Card = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
