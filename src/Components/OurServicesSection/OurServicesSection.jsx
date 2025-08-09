import React from "react";
import { FaHandHoldingHeart, FaRecycle, FaUsers } from "react-icons/fa";

const OurServicesSection = () => {
  return (
    <section className="py-16 bg-base-100 text-base-content font-inter">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Our Services</h2>
        <p className=" mb-10 max-w-xl mx-auto">
          We connect food donors with those in need to reduce waste and build a
          stronger, caring community.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-base-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 border border-primary/20">
            <div className="mb-4 flex justify-center">
              <FaHandHoldingHeart size={36} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Food Donation</h3>
            <p className="text-sm ">
              Easily donate extra food and help those in need. We ensure secure
              and efficient food distribution.
            </p>
          </div>

          <div className="bg-base-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 border border-primary/20">
            <div className="mb-4 flex justify-center">
              <FaRecycle size={36} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Zero Waste Goal</h3>
            <p className="text-sm">
              Our mission is to reduce food waste by connecting people who have
              surplus food with those who need it.
            </p>
          </div>

          <div className="bg-base-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 border border-primary/20">
            <div className="mb-4 flex justify-center">
              <FaUsers size={36} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-sm ">
              Empowering communities to support each other with food sharing and
              compassion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
