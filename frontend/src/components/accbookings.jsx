import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Booking from "./booking";

const Accbookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const axiosGet = async () => {
      const { data } = await axios.get("/bookings/owner");
      setBookings(data);
    };

    axiosGet();
  }, []);

  return (
    <div className="flex w-full max-w-7xl flex-col gap-8">
      {bookings.map((booking) => (
        <Booking booking = {booking} key={booking._id}/>
      ))}
    </div>
  );
};

export default Accbookings;
