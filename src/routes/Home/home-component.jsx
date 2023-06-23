import { Outlet } from "react-router";
import NavBar from "../../components/NavBar/navbar-component";
import "./home-styles.css";
import SideBar from "../../components/SideBar/sidebar-component";
import { useContext } from "react";
import { Theme } from "../../contexts/theme-context";
import CustomModal from "../../components/Modal/modal-component";

const Home = () => {
  const {theme} = useContext(Theme);
  return (
    <div id={theme}>
      <NavBar />
      <div className="home-content">
        <SideBar />
        <Outlet />
      </div>
      <CustomModal />
    </div>
  );
};

export default Home;
