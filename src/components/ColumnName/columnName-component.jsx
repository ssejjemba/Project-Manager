import './columnName-styles.css'

const ColumnName = (props) => {
    const {name, isOnEdit, circleColor} = props; 
  return (
  <div className="board-info">
    {/* {circleColor &&} */}
    <div className='circle-small'></div>
    {name}</div>);
};

export default ColumnName;