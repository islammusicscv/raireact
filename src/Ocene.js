import React,{useState} from 'react';



function Ocene(props) {   
    const[vrednost,setVrednost] = useState(0);
    
    /*useEffect(() => {
        console.log(vrednost);
      },[]);*/

    const {ime, predmet, letnica, priimek} = props;
    
    
    function povecaj() {
        (vrednost<10) && (
            setVrednost(vrednost+1)
        );
    }
    function pomanjsaj() {
        (vrednost>1) && (
            setVrednost(vrednost-1)
        );
    }    
    return (
        <div className="ocena">
            <h3>Študent: {ime} {priimek}</h3>
            <h4>Leto rojstva: {letnica}</h4>
            <h2>Ime predmeta: {predmet}</h2>
            <h1>Ocena: {vrednost}</h1>
            <button onClick={povecaj}>Povečaj</button>
            <button onClick={pomanjsaj}>Pomanjšaj</button>
        </div>
    );    
}

export default Ocene;
export const vss = "Najjaca šola";