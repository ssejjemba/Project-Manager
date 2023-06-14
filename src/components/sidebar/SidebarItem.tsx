import { IconsPath } from "@/constants/icons";

type SidebarItemProps = {
  text: string;
  id: string;
  active?: boolean;
};

export default function SidebarItem(props: SidebarItemProps) {
  return (
    <div
      style={{ borderRadius: "0px 100px 100px 0px" }}
      className={`h-20 transition ease-in-out flex pl-12 ${
        props.active ? "bg-purple" : "bg-transparent"
      } items-center group hover:bg-purple cursor-pointer [&:not(:first-child)]:mt-1`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className={`${
          props.active ? "fill-white" : "fill-medGray"
        } group-hover:fill-white`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fillRule="evenodd" clipRule="evenodd" d={IconsPath.PROJECT} />
      </svg>
      <h3
        className={`text-hM ${
          props.active ? "text-white" : "text-medGray"
        } group-hover:text-white ml-6`}
      >
        {props.text}
      </h3>
    </div>
  );
}
