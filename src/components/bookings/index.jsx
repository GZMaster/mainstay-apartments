import React from "react";
import { RoomCard } from "../../components";
import RoomData from "../../assets/data/RoomData";

const Bookings = () => {
  return (
    <div className="bookings_wrapper">
      <header>
        <h3>book your escape</h3>
        <h1>Luxurious Rooms for Your Perfect Stay</h1>
      </header>

      <body>
        <div className="roomcard_wrapper">
          {RoomData.forEach(({ id, title, backgroundImage }) => (
            <RoomCard id={id} backgroundImage={backgroundImage} title={title} />
          ))}
        </div>

        <button>Book room now</button>
      </body>
    </div>
  );
};

export default Bookings;
