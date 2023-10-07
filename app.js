// Create nested React Elements
// Manipulate the HTML DOM using React
const heading = React.createElement(
    "h1",
    {id: "title",},
    "hello ✋hii"
  );
  const heading2 = React.createElement(
    "h2",
    {id: "title2",className:"container",style: {
        "color" : "blue",
        "backgroundColor" : "yellow"
    }},
    "welcome to react inception"
  );
  const heading3 = React.createElement(
    "h3",
    {id: "title",},
    "lets start code byh hand on practice"
  );
  const container = React.createElement(
    "div",
    {id: "container"
,},
    [heading,heading2,heading3]
  );
 
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
// in previous version 17
//ReactDOM.render(heading , document.getElementById("root")); 
// -----------------------------------------------------
// Manipulate the HTML DOM using Javscript

// const heading = document.createElement('h2');
// heading.innerHTML = "namaste react";
// const root = document.getElementById("root");
// root.appendChild(heading);