import { ReactComponent as KanbanLogo } from "../../assets/kanban.svg";
import "./companylogo-styles.css";

const CompanyLogo = () => {
  return (
    <div className="nav-title">
      <button className="hamburger-menu-button">
        <KanbanLogo />
      </button>
      <h1>kanban</h1>
    </div>
  );
};

export default CompanyLogo;
