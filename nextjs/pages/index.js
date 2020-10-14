import React from "react";
import { motion } from "framer-motion";

const productsDb = [
  {
    name: "The Catalyzer",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 16.0,
  },
  {
    name: "Shooting Stars",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 21.15,
  },
  {
    name: "Neptune",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 12.0,
  },
  {
    name: "The 400 Blows",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 18.4,
  },
  {
    name: "The Catalyzer",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 16.0,
  },
  {
    name: "Shooting Stars",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 21.15,
  },
  {
    name: "Neptune",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 12.0,
  },
  {
    name: "The 400 Blows",
    category: "CATEGORY",
    img: "https://dummyimage.com/420x260",
    price: 18.4,
  },
];

const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const products = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function IndexPage({ isFirstMount }) {
  return (
    <motion.section exit={{ opacity: 0 }}>
      {isFirstMount && <InitialTransition />}

      <motion.div
        initial="initial"
        animate="animate"
        variants={content(isFirstMount)}
        className="space-y-12"
      >
        <motion.h1 variants={title} className="text-6xl font-black text-center">
          Welcome to tailstore!
        </motion.h1>

        <motion.section variants={products} className="text-gray-700 body-font">
          <div className="container px-5 pt-12 mx-auto">
            <div className="flex flex-wrap -m-4">
              {productsDb.map((product, index) => (
                <Product key={index} {...product} />
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </motion.section>
  );
}

const Product = ({ img, category, name, price }) => (
  <div className="w-full p-4 lg:w-1/4 md:w-1/2">
    <a className="relative block h-48 overflow-hidden rounded">
      <img
        alt="ecommerce"
        className="block object-cover object-center w-full h-full"
        src={img}
      />
    </a>
    <div className="mt-4">
      <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
        {category}
      </h3>
      <h2 className="text-lg font-medium text-gray-900 title-font">{name} </h2>
      <p className="mt-1">${price.toFixed(2)}</p>
    </div>
  </div>
);

const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  // Scroll user to top to avoid showing the footer
  React.useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="absolute z-50 flex items-center justify-center w-full bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg variants={textContainer} className="absolute z-50 flex">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-gray-600 fill-current"
          />
        </pattern>
        <text
          className="text-4xl font-bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          tailstore
        </text>
      </motion.svg>
    </motion.div>
  );
};
