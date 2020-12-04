import React from "react";

const MyAddress= () => {
let address= {
    city:'Korba',
    appartmentNumber: 7
}
return (
    <p className="myaddress">
    {`I live in ${address.city} in the house number ${address.appartmentNumber}`}
    </p>
    );
}
export default MyAddress;