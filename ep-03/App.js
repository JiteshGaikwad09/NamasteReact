import React from "react";
import ReactDom from "react-dom/client";

// Reacr.createElement => ReactElement-JS Object => HTMLElement(render)

//  JSX  - is not HTML in JS, it's HTML or XML like syntax
const jsxHeading = <h1>Namaste React using JSX 🚀</h1>;

// React Component
// Class Based Component - OLD
// Functional Component - NEW

// React Functional Component - normal JS fumction
const Header = () => {
  return <h1>Namaste React using React Functional Component 🚀</h1>;
};
const Title = () => <h1>Title</h1>;

// Component Composition - composing a component within another compoent
const CompositionComponent = () => {
  return (
    <div id="container">
      <Title />
      {Title()}
      <Title></Title>
      <Header />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<CompositionComponent />);
