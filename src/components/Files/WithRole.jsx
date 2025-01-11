import { Folder, ListFilter, Menu } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet"
import { DialogTitle } from "../ui/dialog"
import { Label } from "../ui/label"
import { Command, CommandInput } from "../ui/command"

function WithRole() {

  return(
    <>
      <div className="flex justify-end m-2 gap-1">
        <Button variant="secondary" className="border border-blue-500 text-blue-500">Manage</Button>
        <Button variant="secondary" className="hover:text-blue-500" ><Menu /></Button>
        <Button variant="secondary" className="border border-blue-500 text-blue-500"><Folder /></Button>
        <Sheet>
          <SheetTrigger>
            <Button variant="secondary" className="hover:text-blue-500"><ListFilter /></Button>
          </SheetTrigger>
          <SheetContent className="m-12 h-[550]">
            <DialogTitle>Filter</DialogTitle>
            <div className="flex flex-col gap-3 mt-6">
              <div className="flex flex-col gap-3">
                <Label>File Name</Label>
                <Command>
                  <CommandInput placeholder="Enter the file name" />
                </Command>
              </div>
              <div>
                <Label>From</Label>
                <Input type="date"/>
              </div>
              <div>
                <Label>To</Label>
                <Input type="date"/>
              </div>
            </div>
            <SheetFooter className="fixed bottom-14">
                <Button className="bg-blue-500 hover:bg-blue-400">Search</Button>
                <Button variant="secondary">Reset</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div>
        <Card className="flex justify-center items-center h-[300] m-2">
          <CardContent className="text-center">
            <div>No Shared files to display</div>
            <div>Files shared to you by other employees will be listed here</div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default WithRole