"use client";
import Button from "../buttons/Button";

export default function EmptyBoard() {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <h2 className="text-hL mb-[3.2rem] text-medGray">
        This board is empty. Create a new column to get started.
      </h2>
      <Button variant="primary" onClick={console.log} text="+ Add New Column" />
    </div>
  );
}
