import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Shared/ScrollToTop";
import Loading2 from "../Components/Loading/Loading2";

const MainLayoute = () => {
  const navigation = useNavigation();

  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <main className="min-h-screen">
        {navigation.state === "loading" ? (
          <Loading2></Loading2>
        ) : (
          <Outlet></Outlet>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayoute;
