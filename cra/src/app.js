import React from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import IndexPage from "./pages/index";
import ContactPage from "./pages/contact";

const App = () => {
  const [isFirstMount, setIsFirstMount] = React.useState(true);
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    const unlisten = history.listen(() => {
      isFirstMount && setIsFirstMount(false);
    });

    return unlisten;
  }, [history, isFirstMount]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route
          path="/"
          exact
          component={(props) => (
            <IndexPage isFirstMount={isFirstMount} {...props} />
          )}
        />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
