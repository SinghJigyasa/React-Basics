
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


// Promise in Javascript

    //Creating the promise
        const p1 = new Promise((resolve,reject)=>{
            resolve("Promise1 get resolve")
        })
        const p2 = new Promise((resolve,reject)=>{
            resolve("Promise2 get resolve")
        })
        const p3 = new Promise((resolve,reject)=>{
            resolve("Promise3 get resolve")
        })

        // Promise.all() => I will wait for all the promise to get resolve setteled, once it get then it will return array of value but if anyone get failed then it will return error and terminate the rest one.
            const p=  Promise.all([p1,p2,p3])
            p.then(res=>console.log(res))
            p.catch(err=>console.error(err))

        //Promise.allsettled() => I will wailt for all the promise to get settled either it get resloved or it get rejected. It will return the array of value ['resolve','reject','resolve']
            const p= Promise.allSettled([p1,p2,p3])
            p.then(res=>console.log(res))
            p.catch(err=>console.error(err))

        //Promise.race() => It will return whose value which get first fully settled either resolve or reject.
            const p = Promise.race([p1,p2,p3])
            p.then(res=>console.log(res))
            p.catch(err=>console.error(err))
    
        //Promise.any() => It will return whose value which get first resolve settled, if all get rejected then it will print aggregated error like all promise get rejected.
            const p= Promise.any([p1,p2,p3])
            p.then(res=>console.log(res))
            p.catch(err=>console.error(err))
