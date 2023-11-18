import React  from "react";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log("🚀 ~ file: App.js:2 ~ root:", root)


const header = React.createElement("header",{id:'parent'},'Hello React');

    // console.log("🚀 ~ file: App.js:4 ~ header:", header)
        
root.render(header);