import { Outlet } from "react-router";
import NavBar from "../../components/NavBar/navbar-component";
import "./home-styles.css";
import SideBar from "../../components/SideBar/sidebar-component";
import { useContext } from "react";
import { Theme } from "../../contexts/theme-context";

const Home = () => {
  const {theme} = useContext(Theme);
  return (
    <div id={theme}>
      <NavBar />
      <div className="home-content">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
