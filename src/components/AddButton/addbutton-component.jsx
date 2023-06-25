import './addbutton-styles.css'

const AddButton = (props) => {
  const { type,text, onTap, button_type } = props;
  return <button type={type} className={`${button_type}`} onClick={onTap}>{text}</button>;
};

export default AddButton;
