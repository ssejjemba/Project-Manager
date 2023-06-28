import { IconsPath } from "@/constants/icons";
import { useStore } from "@/hooks/useStore";
import { observer } from "mobx-react-lite";

function SidebarControl() {
  const {
    settingsStore: {
      settings: { isSideBarShown },
      showSideBar,
    },
  } = useStore();
  return (
    <button
      onClick={showSideBar}
      className={`w-[5.6rem] h-[4.8rem] bg-purple cursor-pointer items-center justify-center fixed bottom-[10%] left-0 rounded-e-[10rem] z-10 ${
        isSideBarShown ? "hidden" : "flex"
      }`}
    >
      <svg
        width="16"
        height="11"
        viewBox="0 0 16 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={IconsPath.EYE_VISIBLE}
          fill="white"
        />
      </svg>
    </button>
  );
}

export default observer(SidebarControl);
