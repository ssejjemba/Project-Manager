"use client";
import { useState } from "react";
import EmptyBoard from "./EmptyBoard";

export default function Dashboard() {
  const [columns, setColumns] = useState([]);
  return (
    <section className="w-full flex flex-1">
      {columns.length === 0 && <EmptyBoard />}
    </section>
  );
}
