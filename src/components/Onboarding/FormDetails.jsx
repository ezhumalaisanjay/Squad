import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
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
      <div className="border-opacity-30 border border-gray-500 m-2 p-5 rounded-lg">
        <p className="text-lg font-semibold mb-2">Candidate Details</p>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="flex flex-wrap w-full items-center gap-4">
            <Label htmlFor="email" >Email</Label>
            <Input type="email" id="0" onChange={getValue}/>
          </div>
          <div className="flex flex-wrap w-full items-center gap-4">
            <Label htmlFor="firstname">FirstName</Label>
            <Input type="name" id="1" onChange={getValue}/>
          </div>
          <div className="flex w-full flex-wrap items-center gap-4">
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
          <div className="flex w-full items-center flex-wrap gap-4">
            <Label htmlFor="email">LastName</Label>
            <Input type="name" id="3" onChange={getValue}/>
          </div>
          <div className="flex w-full items-center flex-wrap gap-4">
            <Label htmlFor="email">UAN Number</Label>
            <Input type="name" id="4" onChange={getValue}/>
          </div>
          <div className="flex w-full items-center flex-wrap gap-4">
            <Label htmlFor="email">Official Email</Label>
            <Input type="email" id="5" onChange={getValue}/>
          </div>
          <div className="flex w-full items-center flex-wrap gap-4">
            <Label htmlFor="email">Aadhar card Number</Label>
            <Input type="email" id="6" onChange={getValue}/>
          </div>
          <div className="flex w-full items-center flex-wrap gap-4">
            <Label htmlFor="email">PAN Card Number</Label>
            <Input type="email" id="7" onChange={getValue}/>
          </div>
          <div className="flex flex-wrap w-full items-center gap-4">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="8" onChange={getValue}/>
          </div>
          <div className="flex w-full max-w-sm flex-wrap items-center gap-1.5">
            <Label htmlFor="picture">Photo</Label>
            <Input id="picture" type="file" onChange={getValue}/>
          </div>
        </div>
      </div>
      <div className="border-opacity-30 border border-gray-500 m-2 p-5 rounded-lg">
        <p className="text-lg font-semibold mb-2">Professional Details</p>
        <div className="grid gap-4">
          <div className="flex flex-wrap w-full items-center gap-4">
            <Label htmlFor="email" >Present Address</Label>
            <div className="flex w-full flex-col gap-2">
              <Input type="email" placeholder="Address line 1" onChange={getValue}/>
              <Input type="email" placeholder="Address line 2" onChange={getValue}/>
              <Input type="email" placeholder="City" onChange={getValue}/>  
              <div className="flex w-full gap-2">
                <Select>
                  <SelectTrigger className="w-full">
                    Select Country
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Country</SelectLabel>
                      <SelectItem value="apple">Afghanistan</SelectItem>
                      <SelectItem value="banana">Albania</SelectItem>
                      <SelectItem value="blueberry">Algeria</SelectItem>
                      <SelectItem value="grapes">American Samoa</SelectItem>
                      <SelectItem value="pineapple">Argentina</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select State</SelectLabel>
                      <SelectItem value="apple">No Matches found</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex w-full gap-2">
                <Input type="email" placeholder="Postal Code" onChange={getValue}/>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full items-center gap-4">
            <Label htmlFor="email" >Permanent Address</Label>
            <div className="flex w-full flex-col gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="border-gray-500" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Same as Present Address
                </label>
              </div>
              <Input type="email" placeholder="Address line 1" onChange={getValue}/>
              <Input type="email" placeholder="Address line 2" onChange={getValue}/>
              <Input type="email" placeholder="City" onChange={getValue}/>  
              <div className="flex w-full gap-2">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Country</SelectLabel>
                      <SelectItem value="apple">Afghanistan</SelectItem>
                      <SelectItem value="banana">Albania</SelectItem>
                      <SelectItem value="blueberry">Algeria</SelectItem>
                      <SelectItem value="grapes">American Samoa</SelectItem>
                      <SelectItem value="pineapple">Argentina</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select State</SelectLabel>
                      <SelectItem value="apple">No Matches found</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex w-full gap-2">
                <Input type="email" placeholder="Postal Code" onChange={getValue}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-opacity-30 border border-gray-500 m-2 p-5 rounded-lg">
        <div className="flex justify-between">
          <p className="text-lg font-semibold mb-2">Education</p>
          <Button variant="Link">Add Row</Button>
        </div>
        <div className="flex flex-wrap justify-evenly gap-4">
          <div className="w-full">
            <Label htmlFor="email">School Name</Label>
            <Input type="name" onChange={getValue}/>
          </div>
          <div className="w-full">
            <Label htmlFor="email">Degree/Diploma</Label>
            <Input type="name" onChange={getValue}/>
          </div>
          <div className="w-full">
            <Label htmlFor="email">Field(s) of Study</Label>
            <Input type="name" onChange={getValue}/>
          </div>
          <div className="w-full">
            <Label htmlFor="email">Date of Completion</Label>
            <Input type="name" onChange={getValue}/>
          </div>
          <div className="w-full">
            <Label htmlFor="email">Additional Notes</Label>
            <Input type="name" onChange={getValue}/>
          </div>
        </div>
      </div>
      <div className="border-opacity-30 border border-gray-500 m-2 p-5 rounded-lg">
        <div className="flex justify-between">
          <p className="text-lg font-semibold mb-2">Experience</p>
          <Button variant="Link">Add Row</Button>
        </div>
        <div className="flex flex-wrap justify-evenly gap-4">
          <div className="w-full">
            <Label htmlFor="email">Occupation</Label>
            <Input type="name" onChange={getValue}/>
          </div>
          <div className="w-full">
            <Label htmlFor="email">Company</Label>
            <Input type="name" onChange={getValue}/>
          </div>
          <div className="w-full">
            <Label htmlFor="email">Summary</Label>
            <Input type="name" onChange={getValue}/>
          </div>
          <div className="w-full">
            <Label htmlFor="email">Duration</Label>
            <Input type="name" onChange={getValue}/>
          </div>
          <div className="w-full">
            <Label htmlFor="email">School Name</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <Input type="search"></Input>
                  <SelectItem value="apple">Afghanistan</SelectItem>
                  <SelectItem value="banana">Albania</SelectItem>
                  <SelectItem value="blueberry">Algeria</SelectItem>
                  <SelectItem value="grapes">American Samoa</SelectItem>
                  <SelectItem value="pineapple">Argentina</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormDetails