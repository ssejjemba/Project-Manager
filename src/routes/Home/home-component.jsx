import { Outlet } from "react-router";
import NavBar from "../../components/NavBar/navbar-component";
import "./home-styles.css";
import SideBar from "../../components/SideBar/sidebar-component";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="home-content">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
