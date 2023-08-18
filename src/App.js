import { Route, Routes } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import LoginPage from "./pages/LoginPage";
// import ContinentSelectPage from "./pages/ContinentSelectPage";
// import SignupPage from "./pages/SignupPage";
// import MentorSignupPage from "./pages/MentorSignupPage";
// import MenteeSignupPage from "./pages/MenteeSignupPage";
// import ContinentCommunityPage from "./pages/ContinentCommunityPage";
import MentorInfoModal from "./components/community/mentor/MentorInfoModal";
import TipsModal from "./components/community/tips/TipsModal";
// import ApplyPage from "./pages/ApplyPage";
// import ViewPostPage from "./pages/ViewPostPage";
// import MentorInfoPage from "./pages/MentorInfoPage";
// import ApplyAlertPage from "./pages/ApplyAlertPage";
// import ReviewPage from "./pages/ReviewPage";
// import MentorMyPage from "./pages/MentorMyPage";
import MentorChatingModal from "./components/mypage/mentor/MentorChatingModal";
import PostsModal from "./components/mypage/mentor/PostsModal";
// import MenteeMyPage from "./pages/MenteeMyPage";
import MenteeChatingModal from "./components/mypage/mentee/MenteeChatingModal";
import ReviewsModal from "./components/mypage/mentee/ReviewsModal";
// import ReadAnswerPage from "./pages/ReadAnswerPage";
// import CheckAnswerPage from "./pages/CheckAnswerPage";
// import WritePostPage from "./pages/WritePostPage";
import MentorSetting from "./components/mypage/mentor/MentorSetting";
import MenteeSetting from "./components/mypage/mentee/MenteeSetting";
import LandingPage from "./pages/home/LandingPage";
import LoginPage from "./pages/signup/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import MentorSignupPage from "./pages/signup/MentorSignupPage";
import MenteeSignupPage from "./pages/signup/MenteeSignupPage";
import ContinentSelectPage from "./pages/community/ContinentSelectPage";
import ContinentCommunityPage from "./pages/community/ContinentCommunityPage";
import MentorInfoPage from "./pages/community/MentorInfoPage";
import ViewPostPage from "./pages/post/ViewPostPage";
import ApplyPage from "./pages/chat/ApplyPage";
import ApplyAlertPage from "./pages/chat/ApplyAlertPage";
import ReviewPage from "./pages/chat/ReviewPage";
import WritePostPage from "./pages/post/WritePostPage";
import EditPostPage from "./pages/post/EditPostPage";
import MenteeMyPage from "./pages/mypage/MenteeMyPage";
import ReadAnswerPage from "./pages/chat/ReadAnswerPage";
import CheckAnswerPage from "./pages/chat/CheckAnswerPage";
// import EditPostPage from "./pages/EditPostPage";
import MentorMyPage from './pages/mypage/MentorMyPage';

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
        <Route path="/viewMentor/:continent/:id" element={<MentorInfoPage />} />
        <Route path="/viewPost/:id" element={<ViewPostPage />} />
        {/* 오리챗 신청 */}
        <Route path="/apply/:id" element={<ApplyPage />} />
        <Route path="/applyAlert/:id" element={<ApplyAlertPage />} />
        {/* 작성 페이지 */}
        <Route path="/writeReview/:id" element={<ReviewPage />} />
        <Route path="/writePost" element={<WritePostPage />} />
        <Route path="/editPost/:id" element={<EditPostPage />} />
        {/* 마이페이지 */}
        <Route path="/mypageMentor" element={<MentorMyPage />}>
          <Route path="chats" element={<MentorChatingModal />} />
          <Route path="posts" element={<PostsModal />} />
        </Route>
        <Route path="/mypageMentee" element={<MenteeMyPage />}>
          <Route path="chats" element={<MenteeChatingModal />} />
          <Route path="reviews" element={<ReviewsModal />} />
        </Route>
        {/* 답변확인 페이지 */}
        <Route path="/readAnswer/:id" element={<ReadAnswerPage />} />
        <Route path="/checkAnswer/:id" element={<CheckAnswerPage />} />
        {/* 프로필 설정 페이지 */}
        <Route path="/mentorSetting" element={<MentorSetting />} />
        <Route path="/menteeSetting" element={<MenteeSetting />} />
      </Routes>
    </>
  );
}

export default App;
