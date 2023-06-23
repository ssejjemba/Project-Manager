import './addbutton-styles.css'

const AddButton = (props) => {
  const { text, onTap } = props;
  return <button className='addbutton' onClick={onTap}>{text}</button>;
};

export default AddButton;
