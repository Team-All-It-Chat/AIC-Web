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
import ApplyPage from "./pages/ApplyPage";
import ViewPostPage from "./pages/ViewPostPage";
import MentorInfoPage from "./pages/MentorInfoPage";

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
        <Route path="/viewMentor/:num" element={<MentorInfoPage />} />
        <Route path="/viewPost/:num" element={<ViewPostPage />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </>
  );
}

export default App;
