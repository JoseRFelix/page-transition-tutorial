import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

const Header = () => {
  const { asPath } = useRouter();

  return (
    <header className="text-gray-700 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link href="/">
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 p-2 text-white bg-red-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">tailstore</span>
          </a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center space-x-4 text-base md:ml-auto">
          <Link href="/">
            <a
              className={`hover:text-gray-900 ${
                asPath === "/" ? "font-black text-black" : ""
              }`}
            >
              Store
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={
                asPath === "/contact"
                  ? "font-black text-black"
                  : "hover:text-gray-900"
              }
            >
              Contact Us
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="text-gray-700 body-font">
    <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
      <div className="flex-shrink-0 w-64 mx-auto mt-10 text-center md:mx-0 md:text-left md:mt-0">
        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 p-2 text-white bg-red-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">tailstore</span>
        </a>
        <p className="mt-2 text-sm text-gray-500">
          Air plant banjo lyft occupy retro adaptogen indego
        </p>
      </div>
      <div className="flex flex-wrap flex-grow order-first -mb-10 text-center md:pr-20 md:text-left">
        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
          <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
            CATEGORIES
          </h2>
          <Links
            names={["First Link", "Second Link", "Third Link", "Fourth link"]}
          />
        </div>
        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
          <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
            CATEGORIES
          </h2>
          <Links
            names={["First Link", "Second Link", "Third Link", "Fourth link"]}
          />
        </div>
        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
          <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
            CATEGORIES
          </h2>
          <Links
            names={["First Link", "Second Link", "Third Link", "Fourth link"]}
          />
        </div>
        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
          <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
            CATEGORIES
          </h2>
          <Links
            names={["First Link", "Second Link", "Third Link", "Fourth link"]}
          />
        </div>
      </div>
    </div>
    <div className="bg-gray-200">
      <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
        <p className="text-sm text-center text-gray-500 sm:text-left">
          © 2020 tailstore —
          <a
            href="https://twitter.com/Jose_R_Felix"
            rel="noopener noreferrer"
            className="ml-1 text-gray-600"
            target="_blank"
          >
            @Jose_R_Felix
          </a>
        </p>
        <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
          <a className="text-gray-500">
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
          <a className="ml-3 text-gray-500">
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
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
);

const Links = ({ names }) => (
  <nav className="mb-10 list-none">
    {names.map((name) => (
      <li key={name}>
        <a className="text-gray-600 hover:text-gray-800">{name}</a>
      </li>
    ))}
  </nav>
);

export default Layout;
