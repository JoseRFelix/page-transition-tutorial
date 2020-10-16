import React from "react";
import { motion } from "framer-motion";

import Layout from "../components/layout";

const content = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

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

const inputs = {
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

const ContactPage = () => {
  return (
    <Layout>
      <motion.section
        exit={{ opacity: 0 }}
        className="relative text-gray-700 body-font"
      >
        <motion.div
          variants={content}
          animate="animate"
          initial="initial"
          className="container px-5 py-24 mx-auto"
        >
          <motion.div
            variants={title}
            className="flex flex-col w-full mb-12 text-center"
          >
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
              Contact Us
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </motion.div>
          <motion.div variants={inputs} className="mx-auto lg:w-1/2 md:w-2/3">
            <div className="flex flex-wrap -m-2">
              <div className="w-1/2 p-2">
                <input
                  className="w-full px-4 py-2 text-base bg-gray-100 border border-gray-400 rounded focus:outline-none focus:border-red-500"
                  placeholder="Name"
                  type="text"
                />
              </div>
              <div className="w-1/2 p-2">
                <input
                  className="w-full px-4 py-2 text-base bg-gray-100 border border-gray-400 rounded focus:outline-none focus:border-red-500"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className="w-full p-2">
                <textarea
                  className="block w-full h-48 px-4 py-2 text-base bg-gray-100 border border-gray-400 rounded resize-none focus:outline-none focus:border-red-500"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="w-full p-2">
                <button className="flex px-8 py-2 mx-auto text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600">
                  Send
                </button>
              </div>
              <div className="w-full p-2 pt-8 mt-8 text-center border-t border-gray-200">
                <a href="#no-link" className="text-red-500">
                  example@email.com
                </a>
                <p className="my-5 leading-normal">
                  49 Smith St.
                  <br />
                  Saint Cloud, MN 56301
                </p>
                <span className="inline-flex">
                  <a href="#no-link" className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#no-link" className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a href="#no-link" className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a href="#no-link" className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </Layout>
  );
};

export default ContactPage;
