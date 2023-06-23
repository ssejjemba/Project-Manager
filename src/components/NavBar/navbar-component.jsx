import "./navbar-styles.css";
import AddButton from "../AddButton/addbutton-component";
import CompanyLogo from "../CompanyLogo/companylogo-component";
import { useDispatch, useSelector } from "react-redux";
import { selectIsSideBarOpen } from "../../store/appState/appState-selectors";
import { showChosenModalAction } from "../../store/modal/modal-actions";

const NavBar = () => {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector(selectIsSideBarOpen);

  const onClickAddNewTask = () => {
    dispatch(
      showChosenModalAction({ formName: "Add New Task", isModalSeen: true })
    );
  };
  return (
    <header>
      <nav>
        <CompanyLogo />
        <div className="title-divider"></div>
        <div
          className={`nav__board-title ${isSideBarOpen ? "move-right" : ""}`}
        >
          <h2>Platform Launch</h2>
        </div>
        <div className="nav__actions">
          <AddButton text={`+ Add New Task`} onTap={onClickAddNewTask} />
          <span class="material-symbols-rounded">more_vert</span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;