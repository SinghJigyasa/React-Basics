<!-- Using React with CDN link  -->

Step1: Paste te CDN link to use react fromt he official react.js website

🌟 The React.createElement contain object.
    1. React.createElement('h1',{className:'head-style'},"I'm h1 tag create with React")
    <!-- ('h1',{className:'head-style'},"I'm h1 tag create with React") // ✳️This is object not Tag

    ✳️document.getElementById('react-root'):
                    This part of the code retrieves the DOM element with the ID react-root. This element is where your React application will be mounted.

    ✳️ReactDOM.createRoot:
                    This method creates a root container to manage the React tree. Unlike the traditional ReactDOM.render, which directly mounts the React component tree into the DOM element, createRoot sets up a root container for the React application.

    ✳️createRoot(document.getElementById('react-root')):
                    This creates a root container for the element with the ID react-root. This root container is a new feature in React 18 that enables the concurrent rendering capabilities of React. It allows React to pause, interrupt, and resume rendering work, making the rendering process more efficient and responsive.
    ✳️Storing the root container in Root:
                    The Root variable now holds the root container object created by ReactDOM.createRoot. This object has methods for rendering the React component tree.

