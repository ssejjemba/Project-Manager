import './addbutton-styles.css'

const AddButton = (props) => {
  const { text } = props;
  return <button className='addbutton'>{text}</button>;
};

export default AddButton;
