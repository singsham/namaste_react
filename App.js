import React  from "react";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));


// React element using React
const Title =(
    <h1>This is title</h1>
)

const TitleComponent =()=>{
    return <p>Hello Component</p>
}

// root.render(header);
//JSX : jsx is similar to html or xml but not html.
// React Element using JSX
// JSX Element=> React.CreateElement=>React Element-JS Object=>render(HTML Element)

// React Funtional component
const HeadingComponent =()=>{
    return(
        <div>  
            {Title}
            <TitleComponent></TitleComponent>
            {TitleComponent()}
            <h2>This is component composition</h2>
        </div>
    );
}

    // console.log("🚀 ~ file: App.js:4 ~ header:", header)
        
root.render(<HeadingComponent/>);