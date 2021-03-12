import React from 'react';

function Uporabniki(props) {
    const {id, name, email, address, color} = props.user;
    const {street, city, zipcode} = address;
    //ker je funkcija, ne spremeljivka, ga ne dajamo v {}
    const onSpremeniOzadje = props.onSpremeniOzadje;

//darkcyan
    return (
        <div className="uporabnik" style={{backgroundColor: color}} onDoubleClick={() => onSpremeniOzadje(id)}>
            <h1>{name}</h1>
            <h3>{email}</h3>
            <h3>{street}, {zipcode} {city}</h3>
        </div>

    );

}

export default Uporabniki;