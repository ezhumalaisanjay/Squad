import { ReactTabulator } from "react-tabulator"
import 'react-tabulator/css/tabulator_bootstrap5.css'

function TableData({data}) {
  
  const columns = [
    { title: "FirstName", field: "fname", resizable: true },
    { title: "LastName", field: "lname", resizable: true },
    { title: "Email ID", field: "email", resizable: true },
    { title: "Phone Number", field: "phno", resizable: true },
    { title: "UAN Number", field: "uan", resizable: true },
    { title: "Official Email", field: "offemail", resizable: true },
    { title: "Aadhar Card Number", field: "aadhar", resizable: true },
    { title: "PAN card Number", field: "pan", resizable: true }
  ];

  const options = {
    movableRows: true,
    height: 520,
    movableColumns: true,
    pagination: "local",
    paginationSize: 5,
    history: true,
    resizableColumns: true,
    placeholder: "No Records Found",
    layout:"fitColumns",
    addRowsPos: "top"
  }

  return (
    <ReactTabulator
    data={data}
    columns={columns}
    options={options}>
      
    </ReactTabulator>
  )
}

export default TableData