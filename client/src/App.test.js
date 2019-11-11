import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CardList from "./components/CardList";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("App is a thing", () => {
  const n = <App />;
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeFalsy();
});

test("CardList is a thing", () => {
  const n = <CardList />;
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeFalsy();
});

test("Card is a thing", () => {
  const n = <Card />;
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeFalsy();
});

test("Navbar is a thing", () => {
  const n = <Navbar />;
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeFalsy();
});
