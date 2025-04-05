import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <SpecialityMenu /> */}
      {/* <TopDoctors /> */}
      <About />
      <Banner />
    </div>
  );
};

export default Home;
