import BoardLink from "../BoardLink/boardlink-component";
import CompanyLogo from "../CompanyLogo/companylogo-component";
import "./sidebar-styles.css";

const SideBar = () => {
  return (
    <div className="sidebar">
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
            <span class="material-symbols-rounded">night_sight_max</span>

          </div>
          <div className="sidebar-switch">
            <button>
              <span>
                <i>eye</i>
                <p>Hide SideBar</p>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
