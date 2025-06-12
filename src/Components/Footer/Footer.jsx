import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-secondary transition ${
              isActive ? "text-secondary" : ""
            }`
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/availableFood"
          className={({ isActive }) =>
            `hover:text-secondary transition ${
              isActive ? "text-secondary" : ""
            }`
          }>
          Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addFood"
          className={({ isActive }) =>
            `hover:text-secondary transition ${
              isActive ? "text-secondary" : ""
            }`
          }>
          Add Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/manageFood"
          className={({ isActive }) =>
            `hover:text-secondary transition ${
              isActive ? "text-secondary" : ""
            }`
          }>
          Manage My Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/foodRequest"
          className={({ isActive }) =>
            `hover:text-secondary transition ${
              isActive ? "text-secondary" : ""
            }`
          }>
          My Requested Foods
        </NavLink>
      </li>
    </>
  );

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800 font-inter">
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row md:justify-around justify-between items-start md:items-center gap-10 w-11/12">
        <div className="">
          <img
            className="max-w-[150px] mb-4"
            src="/darkmode-logo.png"
            alt="Logo"
          />
          <p className="max-w-xs text-sm text-gray-300 font-space">
            Connecting generous donors with those in need by sharing fresh,
            surplus food across the community.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">{links}</ul>
        </div>

        <div className="md:self-end">
          <h2 className="text-lg font-semibold mb-3 ">Follow Us</h2>
          <div className="flex gap-4">
            <a
              target="_blank"
              href="https://www.facebook.com/sayed.sheikh.413765"
              aria-label="Facebook"
              className="hover:text-blue-500 transition">
              <FaFacebook size={22} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sayed-sheikh"
              aria-label="LinkedIn"
              className="hover:text-blue-300 transition">
              <FaLinkedin size={22} />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/sayedsheikh9"
              aria-label="Instagram"
              className="hover:text-pink-500 transition">
              <FaInstagram size={22} />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/@ProgrammingHeroCommunity"
              aria-label="YouTube"
              className="hover:text-red-500 transition">
              <FaYoutube size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} SpareABite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
