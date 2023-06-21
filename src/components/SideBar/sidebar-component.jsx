import BoardLink from "../BoardLink/boardlink-component";
import CompanyLogo from "../CompanyLogo/companylogo-component";
import { useState } from "react";
import "./sidebar-styles.css";

const SideBar = () => {
  const [isSideBarOpen, toggleSideBar] = useState(false);
  console.log(isSideBarOpen);
  const toggleSideBarHandler = () => {
    toggleSideBar(!isSideBarOpen);
  };
  return (
    <div className={`sidebar ${isSideBarOpen ? "open-sidebar" : ""}`}>
      <div className="sidebar-container">
        <div className="sidebar__div1">
          <CompanyLogo />
          <div className="board-info">ALL BOARDS (3)</div>
        </div>
        <div className="sidebar__div2">
          <BoardLink text={"Platform Launch"} isActive={true} />
          <BoardLink text={"Marketing Plan"} isActive={false} />
          <BoardLink text={"Roadmap"} isActive={false} />
          <BoardLink
            text={"+ Create New Board"}
            isActive={false}
            textColor={"purple"}
          />
        </div>
        <div className="sidebar__div3">
          <div className="theme-switch-div">
            <span class="material-symbols-rounded">light_mode</span>

            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span class="material-symbols-rounded" id="_mode">
              night_sight_max
            </span>
          </div>
          <div className="sidebar-hide">
            <button onClick={toggleSideBarHandler}>
              <span class="material-symbols-rounded nofill">
                visibility_off
              </span>{" "}
              <p>Hide Sidebar</p>
            </button>
          </div>
        </div>
      </div>
      <div className={`sidebar__toggle ${isSideBarOpen ? 'hide' : ''}`}>
        <button onClick={toggleSideBarHandler}>
          <span class="material-symbols-rounded">visibility</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
