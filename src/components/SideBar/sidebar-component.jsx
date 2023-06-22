import CompanyLogo from "../CompanyLogo/companylogo-component";
import { useContext } from "react";
import "./sidebar-styles.css";
import { SidebarContext } from "../../contexts/sidebar-context";
import { Theme } from "../../contexts/theme-context";
import BoardLink from "../BoardLink/boardlink-component";
import AddBoardButton from "../AddBoard/addboard-component";

const SideBar = () => {
  const { isSideBarOpen, toggleSideBar, boardList } =
    useContext(SidebarContext);
  const { theme, toggleThemeHandler } = useContext(Theme);

  const toggleSideBarHandler = () => {
    toggleSideBar(!isSideBarOpen);
  };
  const onClickBoardHandler = () => {
    return;
  }
  return (
    <div className={`sidebar ${isSideBarOpen ? "open-sidebar" : ""}`}>
      <div className="sidebar-container">
        <div className="sidebar__div1">
          <CompanyLogo />
          <div className="board-info">ALL BOARDS (3)</div>
        </div>
        <div className="sidebar__div2">
          {boardList.map((board) => {
            const { id, name, isActive } = board;
            return <BoardLink 
            key={id} 
            text={name} 
            isActive={isActive}
            onTap={onClickBoardHandler}
            />;
          })}
          <AddBoardButton
            text={"+ Create New Board"}
            isActive={false}
            textColor={"purple"}
          />
        </div>
        <div className="sidebar__div3">
          <div className="theme-switch-div">
            <span class="material-symbols-rounded">light_mode</span>

            <div
              className={`slider-switch ${theme == "light" ? "checked" : ""}`}
              onClick={toggleThemeHandler}
            >
              <div className="slider"></div>
            </div>
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
      <div className={`sidebar__toggle ${isSideBarOpen ? "hide" : ""}`}>
        <button onClick={toggleSideBarHandler}>
          <span class="material-symbols-rounded">visibility</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
