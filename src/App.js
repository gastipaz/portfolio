import "./App.css";
import React, {useState} from 'react'
import Home from './components/pages/Home';
import Navbar from './components/navigation/navbar/Navbar';
import Sidebar from './components/navigation/sidebar/Sidebar';
import SectionManager from "./components/pages/SectionManager";


function App() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Home/>
            <SectionManager />
        </>
    );
}

export default App;
