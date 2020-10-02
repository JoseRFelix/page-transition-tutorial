import { motion } from "framer-motion";

export default function IndexPage() {
  return (
    <motion.section exit={{ opacity: 0 }} className="space-y-12">
      <InitialTransition />

      <h1 className="text-6xl font-black text-center text-accent-1">
        Welcome to tailstore!
      </h1>

      <section className="text-gray-700 body-font">
        <div className="container px-5 pt-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="w-full p-4 lg:w-1/4 md:w-1/2">
              <a className="relative block h-48 overflow-hidden rounded">
                <img
                  alt="ecommerce"
                  className="block object-cover object-center w-full h-full"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div className="mt-4">
                <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
                  CATEGORY
                </h3>
                <h2 className="text-lg font-medium text-gray-900 title-font">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="w-full p-4 lg:w-1/4 md:w-1/2">
              <a className="relative block h-48 overflow-hidden rounded">
                <img
                  alt="ecommerce"
                  className="block object-cover object-center w-full h-full"
                  src="https://dummyimage.com/421x261"
                />
              </a>
              <div className="mt-4">
                <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
                  CATEGORY
                </h3>
                <h2 className="text-lg font-medium text-gray-900 title-font">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="w-full p-4 lg:w-1/4 md:w-1/2">
              <a className="relative block h-48 overflow-hidden rounded">
                <img
                  alt="ecommerce"
                  className="block object-cover object-center w-full h-full"
                  src="https://dummyimage.com/422x262"
                />
              </a>
              <div className="mt-4">
                <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
                  CATEGORY
                </h3>
                <h2 className="text-lg font-medium text-gray-900 title-font">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="w-full p-4 lg:w-1/4 md:w-1/2">
              <a className="relative block h-48 overflow-hidden rounded">
                <img
                  alt="ecommerce"
                  className="block object-cover object-center w-full h-full"
                  src="https://dummyimage.com/423x263"
                />
              </a>
              <div className="mt-4">
                <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
                  CATEGORY
                </h3>
                <h2 className="text-lg font-medium text-gray-900 title-font">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="w-full p-4 lg:w-1/4 md:w-1/2">
              <a className="relative block h-48 overflow-hidden rounded">
                <img
                  alt="ecommerce"
                  className="block object-cover object-center w-full h-full"
                  src="https://dummyimage.com/424x264"
                />
              </a>
              <div className="mt-4">
                <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
                  CATEGORY
                </h3>
                <h2 className="text-lg font-medium text-gray-900 title-font">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="w-full p-4 lg:w-1/4 md:w-1/2">
              <a className="relative block h-48 overflow-hidden rounded">
                <img
                  alt="ecommerce"
                  className="block object-cover object-center w-full h-full"
                  src="https://dummyimage.com/425x265"
                />
              </a>
              <div className="mt-4">
                <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
                  CATEGORY
                </h3>
                <h2 className="text-lg font-medium text-gray-900 title-font">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="w-full p-4 lg:w-1/4 md:w-1/2">
              <a className="relative block h-48 overflow-hidden rounded">
                <img
                  alt="ecommerce"
                  className="block object-cover object-center w-full h-full"
                  src="https://dummyimage.com/427x267"
                />
              </a>
              <div className="mt-4">
                <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
                  CATEGORY
                </h3>
                <h2 className="text-lg font-medium text-gray-900 title-font">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="w-full p-4 lg:w-1/4 md:w-1/2">
              <a className="relative block h-48 overflow-hidden rounded">
                <img
                  alt="ecommerce"
                  className="block object-cover object-center w-full h-full"
                  src="https://dummyimage.com/428x268"
                />
              </a>
              <div className="mt-4">
                <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
                  CATEGORY
                </h3>
                <h2 className="text-lg font-medium text-gray-900 title-font">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}

const InitialTransition = () => {
  const hasWindow = typeof window !== "undefined";

  // This is needed for SSR frameworks, e.g. Next.js.
  // Create React App and Gatsby don't need this.
  if (!hasWindow) {
    return null;
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="absolute z-50 w-full bg-black"
        initial={{ height: window.innerHeight, bottom: 0 }}
        animate={{
          height: 0,
        }}
        transition={{
          duration: 1.5,
          ease: [0.6, -0.05, 0.01, 0.9],
        }}
      />

      {/* <svg className="absolute z-50 flex">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
        >
          <rect className="w-full h-full fill-current" />
        </pattern>
        <text
          className="text-4xl font-bold"
          text-anchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          tailstore
        </text>
      </svg> */}
      {/* <div className="absolute z-50 text-4xl font-bold text-transparent bg-white bg-clip-text">
        tailstore
      </div> */}
    </div>
  );
};
