import React from "react";
import { OptionsCard } from "../../components";
import OptionsData from "../../assets/data/OptionsData";

const Options = () => {
  return (
    <div className="options_wrapper">
      <header>
        <h1>dining and resturant options</h1>
        <img src="" alt="optionsbg" />
      </header>

      <body>
        {OptionsData.forEach((option) => {
          <OptionsCard
            id={option.id}
            icon={option.icon}
            title={option.title}
            description={option.description}
          />;
        })}
      </body>
    </div>
  );
};

export default Options;
