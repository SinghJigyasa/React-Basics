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

<!-- Async and await
    Async🚀
        - async keyword is used to handle asynchronus function
        - It always return a promise
        - if we returning any variable then also it wrap and make promise and then return variable as promise.
        -Anyway it will return promise always

    await🚀
        -It will always used inside the async only.
        -It will always use in the front of promise only.
        -The await will pause the execution of async function until the promise get settled(resolve/reject)
    -To handle error for async and await we used try and catch block.
    -In async and await the awit keyword will pause the execution of async function until the promise get settled but in Promise
        the exeution will not stop it will move to the next line and when promise get executed then it will return the value.
    -The fetch() will return promise two time.
       const response=  await fetch('url)         //Return promise
       const data = await response.json()        //Again return the promise and then will change into the json()

 -->