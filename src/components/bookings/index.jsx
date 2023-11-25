import React from "react";
import { RoomCard } from "../../components";
import RoomData from "../../assets/data/RoomData";
import "../../styles/Bookings.scss";

const Bookings = () => {
  return (
    <div className="bookings_wrapper">
      <header>
        <h3>book your escape</h3>
        <h1>Luxurious Rooms for Your Perfect Stay</h1>
      </header>

      <div>
        <div className="roomcard_wrapper">
          {RoomData.map((room) => (
            <RoomCard
              key={room.id}
              backgroundImage={room.img}
              title={room.title}
            />
          ))}
        </div>

        <button>Make reservations</button>
      </div>
    </div>
  );
};

export default Bookings;
