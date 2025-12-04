import React from "react";
import { Link, useParams } from "react-router-dom";
import AccProfile from "../components/accProfile";

const Account = () => {
  const { subpage } = useParams();

  const buttonClass = (button) => {
    let finalClass =
      "rounded-full hover:bg-primary-400 hover:text-white px-4 py-2 cursor-pointer transition";

    if (button === subpage) finalClass += " bg-primary-400 text-white";

    return finalClass;
  };

  return (
    <section className="p-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
        <div className="flex gap-2">
          <Link to="/account/profile" className={buttonClass("profile")}>Perfil</Link>
          <Link to="/account/bookings" className={buttonClass("bookings")}>Reservas</Link>
          <Link to="/account/places" className={buttonClass("places")}>Lugares</Link>
        </div>

        {subpage === "profile" && <AccProfile />}
      </div>
    </section>
  );
};

export default Account;
