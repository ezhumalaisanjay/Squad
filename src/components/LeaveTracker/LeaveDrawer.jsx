import { Drawer } from "antd"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

function LeaveDrawer({open, close}) {

  const drawerClose = ()=> {
    close();
  }

  return(
    <>
      <Drawer className="rounded-lg"
      title={
        <h2>Apply Leave</h2>}
            open={open}
            placement='top'
            height={630}
            footer={
            <>
              <Button className="bg-blue-500">Submit</Button>
              <Button variant="outline" onClick={drawerClose}>Cancel</Button>
            </>}
      >
        <div>
          <div className="lg:w-1/2 flex flex-col gap-5">
            <h1 className="font-bold text-lg">Leave</h1>
            <div className="flex items-center gap-7">
              <Label className="text-nowrap">Leave Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Leave"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>
                      <Input type="search" placeholder="Search" />
                    </SelectLabel>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-7">
              <Label>Date</Label>
              <div className="flex w-full gap-4">
                <Input type="date" />
                <Input type="date" />
              </div>
            </div>
            <div className="flex items-start gap-7 ">
              <Label className="text-nowrap">Reason for Leave</Label>
              <Input type="text" className="h-20" />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default LeaveDrawer