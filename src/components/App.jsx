import { Navigate, Route,Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HelpPage from "./pages/HelpPage";
import NavBar from "./Navbar";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

export const App = () => {
    return (
        <>
            <NavBar />
            <hr />

            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="about" element={ <AboutPage /> } />
                <Route path="help" element={ <HelpPage /> } />
                <Route path="login" element={ <LoginPage /> } />
                <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
        </>
    )
}

export default App;