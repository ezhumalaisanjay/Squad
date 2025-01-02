import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { ListFilter, MoreHorizontal } from "lucide-react"

function LeaveRequest() {

  return(
    <div className="grid grid-cols-2 items-center justify-stretch">
      <div className="m-5 flex">
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
      <div>
        <Button variant="secondary" className="hover:text-blue-500"><ListFilter /></Button>
        <Button variant="secondary"><MoreHorizontal /></Button>
      </div>
    </div>
  )
}

export default LeaveRequest