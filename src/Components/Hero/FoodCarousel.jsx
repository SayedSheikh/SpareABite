import { useState, useEffect } from "react";
import { motion } from "motion/react";

const FoodCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const foodImages = [
    {
      src: "https://i.ibb.co/LhvPV6qg/hero-image-1.jpg",
      alt: "Delicious pizza with fresh toppings",
      caption: "Share your homemade pizza",
    },
    {
      src: "https://i.ibb.co/mr9HGX1k/hero-2.jpg",
      alt: "Fresh salad bowl with vegetables",
      caption: "Healthy meals for everyone",
    },
    {
      src: "https://i.ibb.co/nN5qG8vC/hero-3.jpg",
      alt: "Homemade soup in a bowl",
      caption: "Warm comfort food to share",
    },
    {
      src: "https://i.ibb.co/7NTKB0H7/HLOz-HE0qm-SClc-Pkc-M9mj-0-x2w7w.jpg",
      alt: "Fresh baked bread and pastries",
      caption: "Freshly cooked goods to enjoy",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % foodImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getImageVariant = (index) => {
    if (index === currentImage) {
      return "active";
    } else if (index === (currentImage + 1) % foodImages.length) {
      return "next";
    } else {
      return "back";
    }
  };

  const imageVariants = {
    active: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      x: 0,
      y: 0,
      zIndex: 30,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    next: {
      opacity: 0.6,
      scale: 0.85,
      rotate: 8,
      x: 40,
      y: 20,
      zIndex: 20,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    back: {
      opacity: 0.3,
      scale: 0.7,
      rotate: -8,
      x: -40,
      y: 40,
      zIndex: 10,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.4, 0.7, 0.4],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative max-w-lg">
      {/* Main rotating images */}
      <div className="relative size-50 md:size-80 lg:size-96 mx-auto">
        {foodImages.map((image, index) => (
          <motion.div
            key={index}
            variants={imageVariants}
            animate={getImageVariant(index)}
            className="absolute inset-0 w-full">
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-lg bg-white p-2 border border-slate-100">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4 rounded-b-xl">
                <p className="text-white text-sm font-medium">
                  {image.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle floating decorative elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute -top-3 -right-5 lg:-right-9 size-5 lg:size-6 bg-primary/30 rounded-full"
      />
      <motion.div
        variants={pulseVariants}
        animate="animate"
        className="absolute top-10 lg:top-1/3 -left-6 size-4 bg-blue-400/50 rounded-full backdrop-blur-sm"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
        className="absolute -bottom-4 left-1/4 w-3 h-3 bg-cyan-300/40 rounded-full backdrop-blur-sm"
      />

      {/* Professional indicators */}
      <div className="flex justify-center space-x-3 mt-8">
        {foodImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImage(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage
                ? "bg-blue-500 scale-125"
                : "bg-slate-300 hover:bg-blue-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodCarousel;
