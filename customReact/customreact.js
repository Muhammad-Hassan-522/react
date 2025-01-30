function customRender(reactElement, container) {
    /* 
    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;

    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);
     */

    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop === 'children') continue; // because in older versions of react children was set inside the props

        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
}

// let this is how an element (in the following example it is anchor tag) is received through react
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById("root");

// customRender(which element to render, where to render that element);
customRender(reactElement, mainContainer);