import './fonts.css'
import './App.scss'
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </>
    )
}

export default App
