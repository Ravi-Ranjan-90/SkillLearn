

import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Subjects from "./pages/Subjects";
import Result from "./pages/Result";
import Topics from "./pages/Topics";
import Test from "./pages/Test";
import Analytics from "./pages/Analytics";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetail";
import WatchCourse from "./pages/WatchCourse";
import MyLearning from "./pages/MyLearning";
import CodingHome from "./pages/CodingHome";
import CodingQuestions from "./pages/CodingQuestions";
import CodingPage from "./pages/CodingPage";
import Submissions from "./pages/Submissions";
import ATSChecker from "./components/ATSChecker";


function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/subjects" element={<Subjects />} />
      <Route path="/courses" element={<Courses />} />

        <Route
          path="/courses/:id"
          element={<CourseDetails />}
        />
        <Route
  path="/watch/:courseId"
  element={<WatchCourse />}
/>

<Route
  path="/my-learning"
  element={<MyLearning />}
/>

      {/* <Route path="/topics/:subjectId" element={<Topics />} />

      <Route path="/test/:topicId/:level" element={<Test />} /> */}
      <Route path="/test/:subjectId/:level" element={<Test />} />
      <Route path="/result" element={<Result />} />
      <Route path="/analytics" element={<Analytics />} />

        {/* MAIN ENTRY */}
        <Route path="/coding-home" element={<CodingHome />} />

        {/* QUESTIONS LIST */}
        <Route path="/coding" element={<CodingQuestions />} />

        {/* SOLVE PAGE */}
        <Route path="/coding/:id" element={<CodingPage />} />

        {/* HISTORY */}
        <Route path="/submissions" element={<Submissions />} />
          <Route
          path="/ats-checker"
          element={<ATSChecker />}
        />


    </Routes>
  );
}

export default App;