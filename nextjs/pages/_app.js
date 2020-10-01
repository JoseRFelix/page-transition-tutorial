import { AnimatePresence } from "framer-motion";

import Layout from "../components/Layout";
import "../styles/index.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
