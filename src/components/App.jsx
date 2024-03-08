import { Navigate, Route,Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import HelpPage from "./HelpPage";
import NavBar from "./Navbar";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

export const App = () => {
    return (
        <>
            <h1>App</h1>
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