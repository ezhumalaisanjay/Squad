"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Card, CardContent } from "../ui/card";
import { Command } from "../ui/command";
import { CommandInput } from "cmdk";
import { Label } from "../ui/label";

function SkillSetMatrix() {
  const [selected, setSelected] = useState(false);

  const selectList = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", 
    "12", "13", "14", "15", "16", "17", "18", "19", "20"
  ]
  return(
    <>
      <div className="flex justify-center m-3">
        <Button 
        variant="secondary" 
        onClick={() => setSelected(false)}
        className={(!selected) ? "border border-blue-500" : "" + "bg-slate-200 hover:bg-slate-200 text-slate-400"}
        >Reportees</Button>
        <Button 
        variant="secondary" 
        onClick={() => setSelected(true)}
        className={(selected) ? "border border-blue-500" : "" + "bg-slate-200 hover:bg-slate-200 text-slate-400"}
        >Organization</Button>
      </div>
      <div>
        {(!selected) ?
        <div>  
          <div className="flex justify-between m-2">
            <div className="flex w-1/2 gap-2">
              <Input placeholder="Select Skills" />
              <Select>
                <SelectTrigger className="w-max">
                  <SelectValue placeholder="From" />
                </SelectTrigger>
                <SelectContent className="overflow-y-auto h-100">
                  <SelectGroup>
                    <SelectLabel>From</SelectLabel>
                    {selectList.map((list, i) => <SelectItem key={i} value={list}>{list}</SelectItem>)}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-max">
                  <SelectValue placeholder="To" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="overflow-y-auto">
                    <SelectLabel>To</SelectLabel>
                    {selectList.map((list, i) => <SelectItem key={i} value={list}>{list}</SelectItem>)}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button variant="secondary" className="bg-blue-500 text-white hover:bg-blue-400">Search</Button>
              <Button variant="secondary">Reset</Button>
            </div>
          </div>
          <div>
            <Card className="flex justify-center items-center h-[300] m-2">
              <CardContent>No records found yet</CardContent>
            </Card>
          </div>
        </div>
        :
        <div>
          <div className="flex justify-between m-2">
            <div className="flex w-1/2 gap-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Organizer Name" />
                </SelectTrigger>
                <SelectContent className="flex flex-col gap-2 p-1">
                  <Command>
                    <CommandInput />
                    <Label>Select</Label>
                  </Command>
                </SelectContent>
              </Select>
              <Input placeholder="Select Skills" />
              <Select>
                <SelectTrigger className="w-max">
                  <SelectValue placeholder="From" />
                </SelectTrigger>
                <SelectContent className="overflow-y-auto h-100">
                  <SelectGroup>
                    <SelectLabel>From</SelectLabel>
                    {selectList.map((list, i) => <SelectItem key={i} value={list}>{list}</SelectItem>)}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-max">
                  <SelectValue placeholder="To" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="overflow-y-auto">
                    <SelectLabel>To</SelectLabel>
                    {selectList.map((list, i) => <SelectItem key={i} value={list}>{list}</SelectItem>)}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button variant="secondary" className="bg-blue-500 text-white hover:bg-blue-400">Search</Button>
              <Button variant="secondary">Reset</Button>
            </div>
          </div>
          <div>
            <Card className="flex justify-center items-center h-[300] m-2">
              <CardContent>No records found yet</CardContent>
            </Card>
          </div>
        </div>}
      </div>
    </>
  )
}

export default SkillSetMatrix