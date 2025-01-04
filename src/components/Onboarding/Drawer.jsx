import { Drawer } from "antd"
import { Button } from "../ui/button"
import FormDetails from "./FormDetails";

function DrawerDisplay({candidateDetails, updatedDetails, handleClick, isOpen, isClose}) {

  return (
    <>
      <Drawer 
      className="br-5"
      title={<h2>Add Candidate</h2>}
      keyboard={true}
      open={isOpen}
      placement='top'
      height={630}
      footer={
      <>
        <Button onClick={handleClick}>Submit</Button>
        <Button variant="outline" onClick={isClose}>Cancel</Button>
      </>
      }>
        <FormDetails input={candidateDetails} updatedFunc={updatedDetails}/>
      </Drawer>
    </>
  );
}

export default DrawerDisplay