import React from "react";

import Layout from "../components/layout";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <div>
        <img
          alt="Ghost getting abducted by aliens"
          className="block w-1/2 mx-auto"
          src={abductionIllustration}
        />
        <h2 className="inline-block p-3 my-8 text-2xl font-bold bg-yellow-400">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
