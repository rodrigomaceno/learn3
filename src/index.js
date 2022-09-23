import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp from './MyApp';


// let element = React.createElement('h1', {})

// let element1 = React.createElement('h1', {}, '')

// let element2 = React.createElement('h1', {}, 'Hi!')

//ReactDOM.render(element, document.getElementById('app'))

// console.log(element)
// console.log(element1)
// console.log(element2)


// console.log(element.props)
// console.log(element1.props)
// console.log(element2.props)

console.log(React.createElement(MyApp, {}, null))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <MyApp />
  
);


