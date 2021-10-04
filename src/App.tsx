import React, { useEffect } from "react";
import "./App.scss";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./page/login/Login";
import Main from "./page/main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Member from "./page/member/Member";
import BookList from "./page/booklist/BookList";
import BookInfo from "page/bookInfo/BookInfo";
import * as firebase from "firebase/app";
import { firebaseConfig } from "firebase";

firebase.initializeApp(firebaseConfig);

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <BrowserRouter>
        {/* <BrowserRouter basename={"http://localhost:3000"}> */}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Member">
            <Member />
          </Route>
          <Route path="/BookList">
            <BookList />
          </Route>

          <Route path="/bookinfo/:id">
            <BookInfo />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
