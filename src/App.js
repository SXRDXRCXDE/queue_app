import './App.css';
import NewHome from "./pages/Home/NewHome";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import LayoutPage from "./pages/Layout/LayoutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import MainService from "./pages/MainService/MainService";
import NewOnboarding from "./pages/NewOnboarding/NewOnboarding";
import BottomNavbar from "./components/BottomNavbar";
import History from "./pages/History/History";
import Support from "./pages/Support/Support";
import Account from "./pages/Account/Account";

function App() {
    const navigate = useNavigate();
    const location = useLocation().pathname;

    useEffect(() => {
        const myLocation = localStorage.getItem("myLocation");
        if (myLocation) {
            navigate("/home");
        } else {
            navigate("/onboarding");
        }
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path="/onboarding" element={<NewOnboarding />} />
                <Route path="/home" element={<NewHome />}  />
                <Route path="/history" element={<History />} />
                <Route path="/support" element={<Support />} />
                <Route path="/account" element={<Account />} />
                <Route path="/layout" element={<LayoutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/serviceMain" element={<MainService />} />
                {/* Optional route you mentioned */}
                {/* <Route path="/selectedservice" element={<SelectedServicePage />} /> */}
            </Routes>
            {(location === "/home" ||
                location === "/history" ||
                location === "/support" ||
                location === "/account") && <BottomNavbar />}

        </div>
    );
}

export default App;
