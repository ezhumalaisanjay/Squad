"use client"

import { useState } from "react";
import { OnboardHeader } from "./OnboardHeader";
import DrawerDisplay from "./Drawer";
import TableData from "./Table";

function Onboarding() {
  const [candidateDetails, setCandidateDetails] = useState(Array(8).fill(null));
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [rowsData, setRowsData] = useState({
    aadhar: undefined,
    email: undefined,
    fname: undefined,
    id: undefined,
    lname: undefined,
    offemail: undefined,
    pan: undefined,
    phno: undefined,
    uan : undefined
  });

  const updatedDetails = (data) => {
    setCandidateDetails(data);
  }

  const getData = () => {
      let changedData = data.slice()
      changedData.push(
        {
          id: id, 
          fname: candidateDetails[1], 
          lname: candidateDetails[3], 
          email: candidateDetails[0], 
          phno: candidateDetails[2], 
          uan: candidateDetails[4],
          offemail: candidateDetails[5], 
          aadhar: candidateDetails[6],
          pan: candidateDetails[7]  
        });
  
        setId(i => i+1);
        setIsOpen(!isOpen);
        setData(changedData);
        let inputElement = document.querySelectorAll('input');
        inputElement.forEach((input) => {
          input.value = "";
        })
    }

    const openDrawer = () => {
      setIsOpen(true);
    }

    const closeDrawer = () => {
      setIsOpen(!isOpen);
    }
    
  return (
    <>
    <div>
      <OnboardHeader openDrawer={openDrawer}/>
      <DrawerDisplay isOpen={isOpen} isClose={closeDrawer} candidateDetails={candidateDetails} updatedDetails={updatedDetails} handleClick={getData}/>
    </div>
    <div>
      <TableData data={data}/>
    </div>
    </>
)}

export default Onboarding