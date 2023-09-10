const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm the h1 tag"),
    React.createElement("h2", {}, "I'm the h2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //render will replace the existing tag inside the parent object
