import "./navbar-styles.css";
import AddButton from "../AddButton/addbutton-component";
import CompanyLogo from "../CompanyLogo/companylogo-component";
import { useContext } from "react";
import { SidebarContext } from "../../contexts/sidebar-context";

const NavBar = () => {
  const {isSideBarOpen} = useContext(SidebarContext);
  return (
    <header>
      <nav>
        <CompanyLogo />
        <div className="title-divider"></div>
        <div className={`nav__board-title ${isSideBarOpen ? 'move-right' : ''}`}>
          <h2>Platform Launch</h2>
        </div>
        <div className="nav__actions">
          <AddButton text={`+ Add New Task`} />
          <span class="material-symbols-rounded">more_vert</span>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
