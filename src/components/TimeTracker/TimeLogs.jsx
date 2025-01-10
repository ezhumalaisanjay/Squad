import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { NotepadText } from "lucide-react";

function TimeLogs() {

  return(
    <>
      <div className="flex gap-2 m-3">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Project" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <Input type="search"></Input>
              <Button variant="secondary"> Add Project </Button>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Job" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <Input type="search"></Input>
              <Button variant="secondary">Add Job</Button>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input placeholder="What are you working on?" />
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Billable" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="flex flex-col items-start">
              <Button variant="secondary">Billable</Button>
              <Button variant="secondary">Non-Billable</Button>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="ghost"><NotepadText /></Button>
      </div>
    </>
  )
}

export default TimeLogs