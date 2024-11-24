import React from "react";

function ToursLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="py-2 w-1/2 bg-slate-500 rounded mb-4">
        <h1 className="3-x; text-white text-center">nested layout</h1>
      </header>
      {children}
    </div>
  );
}

export default ToursLayout;
