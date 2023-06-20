import { ReactNode } from "react";

export default function Overlay({ children }: { children: ReactNode }) {
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full bg-darkGrey bg-opacity-70"
    >
      {children}
    </div>
  );
}
