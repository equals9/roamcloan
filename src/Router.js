import React, { useState, useReducer, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import moment from "moment";
import Header from "./comps/Header";

import Landing from "./pages/Landing";
import Settings from "./pages/Settings";
import New from "./pages/New";
import Page404 from "./pages/Page404";

import Context from "./hooks/Context";
import Reducer from "./hooks/Reducer";

const Router = () => {
  const [db, setDb] = useReducer(Reducer, []);
  const [tags, setTags] = useReducer(Reducer, []);
  const [tag, setTag] = useReducer(Reducer, []);
  const [dates, setDates] = useReducer(Reducer, []);
  const [filter, setFilter] = useState([
    "dates",
    moment().format("YYYY-MM-DD")
  ]);
  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"));
    if (notesData) {
      setDb({ type: "FETCH", notesData });
    }
  }, []);
  useEffect(() => {
    if (db.length !== 0) {
      localStorage.setItem("notes", JSON.stringify(db));
    }
  }, [db]);
  useEffect(() => {
    if (db) {
      setTags({ type: "CHECK_TAGS", db });
      setTag({ type: "CHECK_TAG", db });
    }
  }, [db]);
  useEffect(() => {
    if (db) {
      setDates({ type: "CHECK_DATES", db });
    }
  }, [db]);
  return (
    <div>
      <Context.Provider value={{ db, setDb, tags, dates, filter, setFilter }}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" component={Landing} exact={true} />
            <Route path="/settings" component={Settings} />
            <Route path="/new" component={New} />
            <Route component={Page404} />
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
};
export default Router;
