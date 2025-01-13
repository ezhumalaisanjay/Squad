"use client"

import "./globals.css";
import OnboardingIndex from "@/components/Layouts/OnboardingIndex";
import Login from "@/components/Login";
import HomeIndex from "@/components/Layouts/HomeIndex";
import LeaveTrackerIndex from "@/components/Layouts/LeaveTrackerIndex";
import TimeTrackerIndex from "@/components/Layouts/TimeTrackerIndex";
import AttendanceIndex from "@/components/Layouts/AttendanceIndex";
import PerformanceIndex from "@/components/Layouts/PerformaceIndex";
import FilesIndex from "@/components/Layouts/FilesIndex";
import EmployeeEngagementIndex from "@/components/Layouts/EmployeeIndex";
import CasesIndex from "@/components/Layouts/CasesIndex";
import HrLettersIndex from "@/components/Layouts/HrLettersIndex";
import TravelIndex from "@/components/Layouts/TravelIndex";
import TasksIndex from "@/components/Layouts/TasksIndex";
import CompensationIndex from "@/components/Layouts/CompensationIndex";
import GeneralIndex from "@/components/Layouts/GeneralIndex";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";


export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if(!isClient) {
    return (
      <div>Loading...</div>
    );

  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/" element={<HomeIndex />} />
          <Route path="/onboarding" element={<OnboardingIndex />} />
          <Route path="/leavetracker/" element={<LeaveTrackerIndex />} />
          <Route path="/timetracker/" element={<TimeTrackerIndex />} />
          <Route  path="/attendance/" element={<AttendanceIndex />} />
          <Route  path="/performance/" element={<PerformanceIndex />} />
          <Route  path="/files/" element={<FilesIndex />} />
          <Route  path="/employeengagement/" element={<EmployeeEngagementIndex />} />
          <Route  path="/cases/" element={<CasesIndex />} />
          <Route  path="/hrletters/" element={<HrLettersIndex />} />
          <Route  path="/travel/" element={<TravelIndex />} />
          <Route  path="/tasks/" element={<TasksIndex />} />
          <Route  path="/compensation/" element={<CompensationIndex />} />
          <Route  path="/general/" element={<GeneralIndex />} />
        </Routes>
      </Router>
    </>
  );
}
