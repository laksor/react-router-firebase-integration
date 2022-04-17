import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Service from "../Services/Service";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <Footer></Footer>
    </div>
  );
};

export default Home;
