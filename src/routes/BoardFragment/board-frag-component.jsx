import AddButton from "../../components/AddButton/addbutton-component";
import "./board-frag-styles.css";

const BoardFragment = () => {
  return (
    <div className="fragment-container">
      <div className="centered-info">
        <p>This board is empty. Create a new column to get started.</p>
        <AddButton text={`+ Add New Column`} />
      </div>
    </div>
  );
};

export default BoardFragment;
