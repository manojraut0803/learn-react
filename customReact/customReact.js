// anchor tag
function customRender(reactElement, container) {
  /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop == "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
}

// Input Tag
function customRender2(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.props.placeholder;

  domElement.setAttribute("type", reactElement.props.type);
  domElement.setAttribute("placeholder", reactElement.props.placeholder);

  container.appendChild(domElement);
}

const reactElement1 = {
  type: "a",
  props: {
    href: "https://google.com/",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const reactElement2 = {
  type: "input",
  props: {
    type: "text",
    placeholder: "Enter Your Name",
  },
};

const mainContainer = document.querySelector("#root");

customRender(reactElement1, mainContainer);
customRender(reactElement2, mainContainer);
