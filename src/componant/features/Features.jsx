import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../datas/data";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-16 md:py-24 border-b border-slate-200/80"
    >
      <Title title="SPECIALIZATION & SERVICES" des="What I Do" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;


