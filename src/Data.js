
import { Table } from 'react-bootstrap'
import Header from './Header'
import React, { useRef } from 'react'

export default function () {
    
    const arr=[{

        name:"Anjali",
        Class:"Mca",
        Address:"Neemuch",
        Age:"18"
    },
    {
        name:"kiran",
        Class:"Mca",
        Address:"parda",
        Age:"25"
    },
    {
        name:"Tannu",
        Class:"Mca",
        Address:"mds",
        Age:"17"
    },
    {
        name:"Anju",
        Class:"Mca",
        Address:"Indor",
        Age:"20"
    }
      ]
      let getRow=(indx)=>{
        console.log("get row")
        console.log("indx",indx)
      }
    return (
        <div>
            <Header></Header>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                 {   arr.map((data, indx) =>
                <tr onClick={()=>{getRow(indx)}} key={indx}
                >
                   
                  <td>{data.name}</td>
                  <td>{data.Class}</td>
                  <td>{data.Address}</td>
                  <td>{data.Age}</td>
                  </tr>
                 )
                  }
                    </tbody>
                </Table>
            
        </div>
    )
}
//https://stackoverflow.com/questions/37771316/react-triggering-click-event-on-table-row
