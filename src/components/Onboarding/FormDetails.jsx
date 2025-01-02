import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function FormDetails({input, updatedFunc}) {
  const getValue = (e) => {
    const changedArray = input.slice();
    changedArray[e.target.id] = e.target.value;
    updatedFunc(changedArray);
  }

  return(
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex w-full items-center gap-4">
          <Label htmlFor="email" >Email</Label>
          <Input type="email" id="0" onChange={getValue}/>
        </div>
        <div className="flex w-full items-center gap-4">
          <Label htmlFor="firstname">FirstName</Label>
          <Input type="name" id="1" onChange={getValue}/>
        </div>
        <div className="flex w-full items-center gap-4">
          <Label htmlFor="email">Phone</Label>
          <Select>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="+91" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>+91</SelectLabel>
                <SelectItem value="apple">+001</SelectItem>
                <SelectItem value="banana">+90</SelectItem>
                <SelectItem value="blueberry">+02</SelectItem>
                <SelectItem value="grapes">+05</SelectItem>
                <SelectItem value="pineapple">+83</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input type="email" id="2" onChange={getValue}/>
        </div>
        <div className="flex w-full items-center gap-4">
          <Label htmlFor="email">LastName</Label>
          <Input type="name" id="3" onChange={getValue}/>
        </div>
        <div className="flex w-full items-center gap-4">
          <Label htmlFor="email">UAN Number</Label>
          <Input type="name" id="4" onChange={getValue}/>
        </div>
        <div className="flex w-full items-center gap-4">
          <Label htmlFor="email">Official Email</Label>
          <Input type="email" id="5" onChange={getValue}/>
        </div>
        <div className="flex w-full items-center gap-4">
          <Label htmlFor="email">Aadhar card Number</Label>
          <Input type="email" id="6" onChange={getValue}/>
        </div>
        <div className="flex w-full items-center gap-4">
          <Label htmlFor="email">PAN Card Number</Label>
          <Input type="email" id="7" onChange={getValue}/>
        </div>
        <div className="flex w-full items-center gap-4">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="8" onChange={getValue}/>
        </div>
        <div className="flex w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo</Label>
          <Input id="picture" type="file" onChange={getValue}/>
        </div>
      </div>
      
    </div>
  )
}

export default FormDetails