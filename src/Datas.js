import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Datas() {
    const navigate=useNavigate()
    const navigateToPage=(url)=>{
       navigate(url)
       
    
    }
    const location = useLocation()
    console.log("lo", location)
    console.log(location.state)
    return (
        <div>Datas compo

            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    {console.log("inject")}
                    <ListGroup.Item>{location.state.name}</ListGroup.Item>
                    <ListGroup.Item>{location.state.class}</ListGroup.Item>
                    <ListGroup.Item>{location.state.age}</ListGroup.Item>
                    <ListGroup.Item>{location.state.adress}</ListGroup.Item>

                </ListGroup>

            </Card>
            <button onClick={() => navigateToPage('/data')}>GOTO_Data_Page</button>
        </div>
    )
}
