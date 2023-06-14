"use client";
import Button from "../buttons/Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-36 w-full px-10 bg-white dark:bg-darkGrey border-b border-lightLines dark:border-darkLines">
      <h1 className="text-hXL text-black dark:text-white">Platform Launch</h1>
      <div className="h-full flex items-center">
        <Button
          variant="disabled"
          text="+ Add New Task"
          onClick={console.log}
          className="[&:not(:last-child)]:mr-10"
        />
        <Button
          variant="icon"
          icon={
            <svg
              width="5"
              height="20"
              viewBox="0 0 5 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.30769" cy="2.30769" r="2.30769" fill="#828FA3" />
              <circle cx="2.30769" cy="10" r="2.30769" fill="#828FA3" />
              <circle cx="2.30769" cy="17.6923" r="2.30769" fill="#828FA3" />
            </svg>
          }
          onClick={console.log}
          className="[&:not(:last-child)]:mr-10"
        />
      </div>
    </header>
  );
}
