import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ContinentSelectPage from "./pages/ContinentSelectPage";
import SignupPage from "./pages/SignupPage";
import MentorSignupPage from "./pages/MentorSignupPage";
import MenteeSignupPage from "./pages/MenteeSignupPage";
import ContinentCommunityPage from "./pages/ContinentCommunityPage";
import MentorInfoModal from "./components/community/mentor/MentorInfoModal";
import TipsModal from "./components/community/tips/TipsModal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mentorsignup" element={<MentorSignupPage />} />
        <Route path="/menteesignup" element={<MenteeSignupPage />} />
        <Route path="/continentSelect" element={<ContinentSelectPage />} />
        <Route
          path="/community/:continent"
          element={<ContinentCommunityPage />}
        >
          <Route path="mentor" element={<MentorInfoModal />} />
          <Route path="tips" element={<TipsModal />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
