import React from "react";
const MyFullName= () => {
let fullName= {
    name:'walid',
    lastName: 'khelil'
}
    return (
    <p className="myName">
    {`My name is ${fullName.name} ${fullName.lastName}`}
    </p>
    );
}

    export default MyFullName;