"use client"
import { useState } from "react";
import { Drawer } from "antd";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

function LeaveSummary() {
  const [open, setOpen] = useState(false)
  const openDrawer = () => {
    setOpen(true);
  }
  const closeDrawer = () => {
    setOpen(!open);
  }

  return (
      <>
        <div className="flex justify-center h-[500] items-center text-wrap text-center">
          <p className="text-wrap">
            Update the <a onClick={openDrawer} className="text-blue-400">Date of Joining</a> for this employee to display their leave information <br/> 
            and enable them to perform leave related actions.
          </p> 
        </div>
        <Drawer 
        open={open}
        placement="top"
        height={630}
        footer={
          <Button variant="secondary" onClick={closeDrawer}>Close</Button>
        }>
          <div className="grid gap-4">
            <div className="grid gap-3 border border-gray-400 p-5 border-opacity-35 rounded-lg">
              <h2 className="font-bold">Basic Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Employee Id</Label>
                  <Input type='text' defaultValue="1"/>
                </div>
                <div>
                  <Label>Nick Name</Label>
                  <Input type='text' defaultValue="-"/>
                </div>
                <div>
                  <Label>First Name</Label>
                  <Input type='text' defaultValue="Yokesh"/>
                </div>
                <div>
                  <Label>Email Address</Label>
                  <Input type='text' defaultValue="yokesh@sixtyonesteps.com"/>
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input type='text' defaultValue="-"/>
                </div>
              </div>
            </div>
            <div className="grid gap-3 border border-gray-400 p-5 border-opacity-35 rounded-lg">
              <h2 className="font-bold">Work Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Department</Label>
                  <Input type='text' defaultValue="-"/>
                </div>
                <div>
                  <Label>Zoho Role</Label>
                  <Input type='text' defaultValue="Admin"/>
                </div>
                <div>
                  <Label>Location</Label>
                  <Input type='text' defaultValue="-"/>
                </div>
                <div>
                  <Label>Employment Type</Label>
                  <Input type='text' defaultValue="-"/>
                </div>
                <div>
                  <Label>Designation</Label>
                  <Input type='text' defaultValue="-"/>
                </div>
                <div>
                  <Label>Employee Status</Label>
                  <Input type='text' defaultValue="Active"/>
                </div>
                <div>
                  <Label>Source of Hire</Label>
                  <Input type='text' defaultValue="-"/>
                </div>
                <div>
                  <Label>Date of Joining</Label>
                  <Input type='text' defaultValue="-"/>
                </div>
                <div>
                  <Label>Current Experience</Label>
                  <Input type='text' defaultValue="-"/>
                </div>
                <div>
                  <Label>Total Experience</Label>
                  <Input type='text' defaultValue="-"/>
                </div>
              </div>
            </div>
            <div className="grid gap-3 border border-gray-400 p-5 border-opacity-35 rounded-lg">
              <h2 className="font-bold">Hierarchy Information</h2>
              <div className="grid gap-4">
                <div className="flex gap-4 items-center">
                  <Label className="text-nowrap">Reporting Manager</Label>
                  <Input type='text' defaultValue="-"/>
                </div>
              </div>
            </div>
            <div className="grid gap-3 border border-gray-400 p-5 border-opacity-35 rounded-lg">
              <h2 className="font-bold">Personal Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-4">
                  <div>
                    <Label>Date of Birth</Label>
                    <Input type='text' defaultValue="-"/>
                  </div>
                  <div>
                    <Label>Age</Label>
                    <Input type='text' defaultValue="-"/>
                  </div>
                  <div>
                    <Label>Gender</Label>
                    <Input type='text' defaultValue="-"/>
                  </div>
                  <div>
                    <Label>Marital Status</Label>
                    <Input type='text' defaultValue="-"/>
                  </div>
                  <div>
                    <Label>About Me</Label>
                    <Input type='text' defaultValue="-"/>
                  </div>
                </div>
                <div>
                  <Label>Ask me About/Expertise</Label>
                  <Input type="text" defaultValue="-" />
                </div>
              </div>
            </div>
            <div className="grid gap-3 border border-gray-400 p-5 border-opacity-35 rounded-lg">
              <h2 className="font-bold">Identity Information</h2>
              <div className="grid gap-3">
                <div className="flex gap-4 items-center">
                  <Label className="text-nowrap">UAN</Label>
                  <Input type='password'/>
                </div>
                <div className="flex gap-4 items-center">
                  <Label className="text-nowrap">PAN</Label>
                  <Input type='password'/>
                </div>
                <div className="flex gap-4 items-center">
                  <Label className="text-nowrap">Aadhaar</Label>
                  <Input type='password'/>
                </div>
              </div>
            </div>
            <div className="grid gap-3 border border-gray-400 p-5 border-opacity-35 rounded-lg">
              <h2 className="font-bold">Contact Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-4">
                  <div>
                    <Label>Work Phone Number</Label>
                    <Input type='text' defaultValue="-"/>
                  </div>
                  <div>
                    <Label>Extension</Label>
                    <Input type='text' defaultValue="-"/>
                  </div>
                  <div>
                    <Label>Seating Location</Label>
                    <Input type='text' defaultValue="-"/>
                  </div>
                  <div>
                    <Label>Tags</Label>
                    <Input type='text' defaultValue="-"/>
                  </div>
                  <div>
                    <Label>Present Address</Label>
                    <Input type='text' defaultValue="-"/>
                  </div>
                  <div>
                    <Label>Permanent Address</Label>
                    <Input type='text' defaultValue="-"/>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <Label>Personal Mobile Number</Label>
                    <Input type="text" defaultValue="-" />
                  </div>
                  <div>
                    <Label>Personal Email Address</Label>
                    <Input type="text" defaultValue="-" />
                  </div>  
                </div> 
              </div>
            </div>
            <div className="grid gap-3 border border-gray-400 p-5 border-opacity-35 rounded-lg">
              <h2 className="font-bold">Separation Information</h2>
              <div>
                <div className="flex gap-4 items-center">
                  <Label className="text-nowrap">Date of Exit</Label>
                  <Input type='text' value="-"/>
                </div>
              </div>
            </div>
            <div className="grid gap-3 border border-gray-400 p-5 border-opacity-35 rounded-lg">
              <h2 className="font-bold">System Fields</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="mb-4">
                    <Label>Added By</Label>
                    <Input type='text' defaultValue="1-Yokesh-"/>
                  </div>
                  <div>
                    <Label>Added Time</Label>
                    <Input type='text'/>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <Label>Modified By</Label>
                    <Input type="text" defaultValue="1-Yokesh-" />
                  </div>
                  <div>
                    <Label>Modification Time</Label>
                    <Input type="text" defaultValue="-" />
                  </div>
                  <div>
                    <Label>Onboarding Status</Label>
                    <Input type="text" defaultValue="-" />
                  </div>  
                </div> 
              </div>
            </div>
          </div>
        </Drawer>
      </>
  );
}

export default LeaveSummary