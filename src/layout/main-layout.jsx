import React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-[100vh] bg-thamarBlack">
        <div>
          <header>
            <Header />
          </header>
          <main>
            <Outlet />
          </main>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
