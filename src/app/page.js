"use client"

import "./globals.css";
import OnboardingIndex from "@/components/Layouts/OnboardingIndex";
import HomeIndex from "@/components/Layouts/HomeIndex";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AttendanceIndex from "@/components/Layouts/AttendanceIndex";
import TimeTrackerIndex from "@/components/Layouts/TimeTrackerIndex";
import LeaveRequestIndex from "@/components/LeaveTracker/LeaveRequest";
import LeaveSummaryIndex from "@/components/LeaveTracker/LeaveSummary";
import LeaveBalanceIndex from "@/components/LeaveTracker/LeaveBalance";
import ShiftIndex from "@/components/LeaveTracker/Shift";
import TimeLogsIndex from "@/components/TimeTracker/TimeLogs";

export default function Home() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeIndex />} />
          <Route path="/onboarding" element={<OnboardingIndex />} />
          <Route path="/attendance" element={<AttendanceIndex />} />
        </Routes>
        <Routes>
          <Route path="/leavetracker/" element={<LeaveSummaryIndex />} />
          <Route path="/leavetracker/leaverequest/" element={<LeaveRequestIndex />} />
          <Route path="/leavetracker/leavebalance/" element={<LeaveBalanceIndex />} />
          <Route path="/leavetracker/shift/" element={<ShiftIndex />} />
        </Routes>
        <Routes>
          <Route  path="/timetracker/" element={<TimeLogsIndex />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
