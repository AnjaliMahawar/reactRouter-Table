
import { Card, ListGroup, Table } from 'react-bootstrap'
import Header from './Header'
import React, { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function () {
    const navigate=useNavigate()
    const navigateToPage=(url)=>{
       navigate(url)
      
    }
    const [rowData, setRowData] = useState({
        name: "",
        class: "",
        Address: "",
        Age: "",
        id:""
        
    })

    const arr = [{

        name: "Anjali",
        Class: "Mca",
        Address: "Neemuch",
        Age: "18",
        id:1
    },
    {
        name: "kiran",
        Class: "Mca",
        Address: "parda",
        Age: "25",
        id:2
    },
    {
        name: "Tannu",
        Class: "Mca",
        Address: "mds",
        Age: "17",
        id:3
    },
    {
        name: "Anju",
        Class: "Mca",
        Address: "Indor",
        Age: "20",
        id:4
    }
    ]
   
    let getRow = (indx, data) => {
        console.log("get row")
        console.log("indx", indx)
        console.log("data", data)

        let name = data.name;
        let Class = data.Class;
        let Address = data.Address;
        let Age = data.Age;
        let id=data.id
        
        console.log(name)
        console.log(Class)
        console.log(Address)
        console.log(Age)
        setRowData({
            name: name,
            class: Class,
            Address: Address,
            Age: Age,
            id:id
            
        })
        console.log("data",data)
       
    }
    useEffect(()=>{
        console.log('okkk---------------------------------------->>>>>')
    },[])
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
                        <th>link</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((data, indx) =>
                        <tr onClick={() => { getRow(indx, data) }} key={indx} 
                        >
                              <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.Class}</td>
                            <td>{data.Address}</td>
                            <td>{data.Age}</td>
                            <td rowdata={data}>  
                            </td>
                            <td > <Link to={`/Id`} state={{name:data.name,age:data.Age,class:data.Class,adress:data.Address}}>get row</Link></td>
                          
                            
                        </tr>
                        
                        
                    )
                   
                    }
                    
                    
                </tbody>
            </Table>
         
          
        </div>
    )
}
//https://stackoverflow.com/questions/37771316/react-triggering-click-event-on-table-row
//https://www.youtube.com/watch?v=ECbk0wNwrLI&t=4834s
