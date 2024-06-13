
//Creating <h1> tag with javascript

const heading= document.createElement("h1")
heading.innerHTML= "I'm h1 tag made with javascript"
document.getElementById('js-root').appendChild(heading)

//Creating <h1> tag with React
// If you want to ceate nested html then like

// <div id='parent'>
//     <div id='child1'>
//         <h1>H1 tag</h1>
//         <h2></h2>
//     </div>
//     <div id='child2'>
//         <h1>H1 tag</h1>
//         <h2></h2>
//     </div>
// </div>

const ReactHeading = React.createElement('h1',{className:'head-style'},"I'm h1 tag create with React")
const Root = ReactDOM.createRoot(document.getElementById('react-root'))

const sample= React.createElement('div',{id:'parent'},
   [ React.createElement('div',{id:'child1'},
        [React.createElement('h4',{},'H1 Tag'),React.createElement('h3',{},'H2 Tag')]),
    React.createElement('div',{id:'child'},'Hello i am child 2 div')
    ]    
    )
Root.render(sample)

