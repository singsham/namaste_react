import React  from "react";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("🚀 ~ file: App.js:2 ~ root:", root)


const header = React.createElement("div",{id:'parent'},
    React.createElement('div',{id:'children'},
    [React.createElement('div',{},'this is a child1'),React.createElement('div',{},'this is a child2')]
    ));

    console.log("🚀 ~ file: App.js:4 ~ header:", header)
        
root.render(header);