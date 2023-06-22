import { useContext } from "react";
import AddButton from "../../components/AddButton/addbutton-component";
import "./board-frag-styles.css";
import { SidebarContext } from "../../contexts/sidebar-context";

const BoardFragment = () => {
  const {isSideBarOpen} = useContext(SidebarContext);
  return (
    <div className={`fragment-container ${isSideBarOpen ? 'sidebar-open' : ''}`}>
      <div className="centered-info">
        <p>This board is empty. Create a new column to get started.</p>
        <AddButton text={`+ Add New Column`} />
      </div>
    </div>
  );
};

export default BoardFragment;
