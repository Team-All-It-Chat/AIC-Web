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
import ApplyAlertPage from "./pages/ApplyAlertPage";
import ReviewPage from "./pages/ReviewPage";
import MentorMyPage from "./pages/MentorMyPage";
import MentorChatingModal from "./components/mypage/mentor/MentorChatingModal";
import PostsModal from "./components/mypage/mentor/PostsModal";
import MenteeMyPage from "./pages/MenteeMyPage";
import MenteeChatingModal from "./components/mypage/mentee/MenteeChatingModal";
import ReviewsModal from "./components/mypage/mentee/ReviewsModal";
import AnswerPage from "./pages/AnswerPage";

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
        {/* 커뮤니티 메인 */}
        <Route
          path="/community/:continent"
          element={<ContinentCommunityPage />}
        >
          <Route path="mentor" element={<MentorInfoModal />} />
          <Route path="tips" element={<TipsModal />} />
        </Route>
        {/* 멘토정보 & 꿀팁게시물 */}
        <Route path="/viewMentor/:num" element={<MentorInfoPage />} />
        <Route path="/viewPost/:num" element={<ViewPostPage />} />
        {/* 오리챗 신청 */}
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/applyAlert" element={<ApplyAlertPage />} />
        <Route path="/answerAlert" element={<AnswerPage />} />
        <Route path="/writeReview" element={<ReviewPage />} />
        {/* 마이페이지 */}
        <Route path="/mypageMentor" element={<MentorMyPage />}>
          <Route path="chats" element={<MentorChatingModal />} />
          <Route path="posts" element={<PostsModal />} />
        </Route>
        <Route path="/mypageMentee" element={<MenteeMyPage />}>
          <Route path="chats" element={<MenteeChatingModal />} />
          <Route path="reviews" element={<ReviewsModal />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
