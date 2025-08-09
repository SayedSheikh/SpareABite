// src/components/AboutUs.jsx
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4 bg-base-300 min-h-screen"
      style={{
        backgroundImage: "url('')", // Food sharing concept
      }}>
      {/* <div className="absolute inset-0  bg-opacity-60 z-0" /> */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto bg-base-100 bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-10 border-1 border-primary/20">
        <h2 className="text-4xl font-bold mb-6 text-center text-primary">
          About Us
        </h2>
        <p className="text-lg mb-4 leading-relaxed">
          <strong>Spare A Bite</strong> is a community-powered platform designed
          to reduce food waste by making it easy for people to share extra food
          with those who need it most.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          Whether you’re a donor or a recipient, our mission is to foster a
          generous, sustainable, and connected society. We’ve built this app
          using <strong>React</strong>, <strong>Firebase</strong>, and a modern
          tech stack to ensure a seamless and secure user experience.
        </p>
        <p className="text-lg leading-relaxed">
          Every shared bite makes a difference. Join us in creating a world
          where food is valued and communities support each other. 💙
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUs;
