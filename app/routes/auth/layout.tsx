import type { Route } from "./+types/home";

import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Layout() {
  return (
    <div className="font-inter flex justify-start items-center min-h-screen bg-neutral-100">
      <div className="max-w-md mx-auto w-full">
        <Outlet />
      </div>
    </div>
  );
}
