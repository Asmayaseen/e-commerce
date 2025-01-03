import React from "react";
import Featuredproduct from "./components/Featuredproduct";
import Topcategories from "./components/Topcategories";
import Explore from "./components/Explore";
import Ourproducts from "./components/Ourproducts";
import Homepage from "./homepage/page";
import AnnouncementBar from "./components/AnnouncmentBar";
const page = () => {
  return (
    <div>
      <AnnouncementBar />
      <Homepage />
      <Featuredproduct />
      <Topcategories />
      <Explore />
      <Ourproducts />
    </div>
  );
};

export default page;
