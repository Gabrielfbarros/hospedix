import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import AccProfile from "../components/accProfile";
import AccPlaces from "../components/accPlaces";
import { useUserContext } from "../contexts/userContext";
import Accbookings from "../components/accbookings";

const Account = () => {
  const { subpage } = useParams();
  const {user, ready} = useUserContext();

  const buttonClass = (button) => {
    let finalClass =
      "rounded-full hover:bg-primary-400 hover:text-white px-4 py-2 cursor-pointer transition";

    if (button === subpage) finalClass += " bg-primary-400 text-white";

    return finalClass;
  };

  if (!user && ready) return <Navigate to="/login" />

  return (
    <section className="p-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
        <div className="flex gap-2">
          <Link to="/account/profile" className={buttonClass("profile")}>Perfil</Link>
          <Link to="/account/bookings" className={buttonClass("bookings")}>Reservas</Link>
          <Link to="/account/places" className={buttonClass("places")}>Lugares</Link>
        </div>

        {subpage === "profile" && <AccProfile />}
        {subpage === "places" && <AccPlaces />}
        {subpage === "bookings" && <Accbookings />}
      </div>
    </section>
  );
};

export default Account;
