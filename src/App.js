import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello world</p>
            </header>
            <div>
                create calculator here
                <div>
                    <input type="text" />
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>0</button>
                    <button>+</button>
                    <button>-</button>
                    <button>*</button>
                    <button>/</button>
                    <button>=</button>
                </div>
                <div>
                    <input type="text" />
                    <button>=</button>
                </div>
            </div>
        </div>
    );
}

export default App;
