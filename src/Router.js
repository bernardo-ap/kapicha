import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Navbar from "./components/layout/Navbar/Navbar";

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;