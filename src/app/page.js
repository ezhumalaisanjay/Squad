"use client"

import HeaderSection from "@/components/Header";
import "./globals.css";
import OnboardingIndex from "@/components/Layouts/OnboardingIndex";
import HomeIndex from "@/components/Layouts/HomeIndex";
import LeaveTrackerIndex from "@/components/Layouts/LeaveTrackerIndex";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Home() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeIndex />} />
          <Route path="/onboarding" element={<OnboardingIndex />} />
          <Route path="/leavetracker" element={<LeaveTrackerIndex />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}
