import React from "react";
import './Map.css';
const Map=()=>{

    const std=[
        {id:1,Name:"Pen",price:10,D_date:'10-04-2025',D_Address:'Berhampore'},
        {id:2,Name:"Book",price:100,D_date:'10-04-2025',D_Address:'Kolkata'},
        {id:3,Name:"Umbrella",price:150,D_date:'10-04-2025',D_Address:'UK'},
        {id:4,Name:"Sweet",price:2000,D_date:'10-04-2025',D_Address:'Switzerland'},
        {id:5,Name:"Gourab",price:1200000,D_date:'10-04-2025',D_Address:'Lalbagh'},
    ]
    return(
        <>
        <div><h1>Product Table</h1>
        
        <table>
            <thead>
                <tr>
                    <th>Product-ID</th>
                    <th>Product-Name</th>
                    <th>Product-Price(Rs)</th>
                    <th>Delivery Date</th>
                    <th>Delivery Address</th>
                </tr>
            </thead>
            

            <tbody>
                {std.map(std=>(
                    <tr key={std.id}>
                        <td>{std.id}</td>
                        <td>{std.Name}</td>
                        <td>{std.price}</td>
                        <td>{std.D_date}</td>
                        <td>{std.D_Address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </>
    )
}

export default Map;