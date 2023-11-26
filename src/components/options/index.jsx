import React from "react";
import { OptionsCard } from "../../components";
import OptionsData from "../../assets/data/OptionsData";
import "../../styles/Options.scss";
import optionimg from "../../assets/images/optionsimg.png";

const Options = () => {
  return (
    <div className="options_wrapper">
      <header>
        {/* <h1 className="behindheader">dining and resturant options</h1>
        <div>
          <img src={optionimg} alt="optionsbg" />
          <h1 className="frontheader">dining and resturant options</h1>
        </div> */}
        <h1>dining and resturant options</h1>
        <div>
          <img src={optionimg} alt="optionsbg" />
        </div>
      </header>

      <div>
        {OptionsData.map((option) => (
          <OptionsCard
            key={option.id}
            icon={option.icon}
            title={option.title}
            description={option.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Options;
