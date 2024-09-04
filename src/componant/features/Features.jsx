import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../datas/data";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b border-black" // Corrected border class
    >
      {/* Title Component with Section Title and Description */}
      <Title title="Features" des="What I Do" />
      
      {/* Responsive Grid Layout for Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
        {featuresData.map((item) => (
          // Ensure that the Card component correctly uses the item prop
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;

