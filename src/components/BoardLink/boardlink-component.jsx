import { ReactComponent as BoardIcon } from "../../assets/board.svg";

import "./boardlink-styles.css";

const BoardLink = (props) => {
    const {text, isActive, textColor} = props;
  return (
    <div className={`sidebar__board ${isActive && 'active'}`}>
      <BoardIcon />
      <p className={`board__title ${textColor}`}>{text}</p>
    </div>
  );
};

export default BoardLink;
