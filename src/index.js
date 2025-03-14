//import ReactDOM from "react-dom"; //ReactDOM.render is no longer supported in React 18.
import ReactDOM from 'react-dom/client';
import App from "./App";
import "./index.css";

//ReactDOM.render(<App/>, document.querySelector("#root"))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);