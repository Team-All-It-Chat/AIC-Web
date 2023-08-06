import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ContinentSelectPage from "./pages/ContinentSelectPage";
import Signup from "./pages/Signup";
import MentorSignup from "./pages/MentorSignup";
import MenteeSignup from "./pages/MenteeSignup";
import ContinentCommunityPage from "./pages/ContinentCommunityPage";
import MentorInfoModal from "./components/community/mentor/MentorInfoModal";
import TipsModal from "./components/community/tips/TipsModal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mentorsignup" element={<MentorSignup />} />
        <Route path="/menteesignup" element={<MenteeSignup />} />
        <Route path="/continentSelect" element={<ContinentSelectPage />} />
        <Route path="/community/:continent" element={<ContinentCommunityPage />}>
          <Route path="mentor" element={<MentorInfoModal />} />
          <Route path="tips" element={<TipsModal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
