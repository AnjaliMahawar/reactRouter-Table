
import { Table } from 'react-bootstrap'
import Header from './Header'
import React, { useRef } from 'react'

export default function () {
    const inputNameRef = useRef()
    let getMyRow=(e)=>{
        console.log('ok')
     var c=  e.target.innerText;
     console.log('c',c)
     console.log("ref",inputNameRef.current)
        
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
                        <tr onClick={getMyRow} ref={inputNameRef}>
                            <td >1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr onClick={getMyRow}ref={inputNameRef}>
                            <td  >2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr onClick={getMyRow} ref={inputNameRef}>
                            <td >3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            
        </div>
    )
}
