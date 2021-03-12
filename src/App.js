import React, {useEffect, useState} from 'react';
//import Ocene from "./Ocene";
import Uporabniki from "./Uporabniki";
import axios from 'axios';


/*const studenti = [
  {
    ime: "Jure",
    priimek: "Novak",
    letnica: "2000",
    predmet: "ISS",
    id: "1"
  },
  {
    ime: "Maja",
    priimek: "Kos",
    letnica: "2002",
    predmet: "RAI",
    id: "2"
  },
  {
    ime: "Tina",
    priimek: "Volk",
    letnica: "2000",
    predmet: "ZPB 1",
    id: "3"
  },
  {
    ime: "Miha",
    priimek: "Medved",
    letnica: "2001",
    predmet: "PROG",
    id: "4"
  },
];*/

function App() {

  function spremeniOzadje(userId) {

    setUsers(users.map((user) => {
      let defaultColor = "aquamarine";
      user.color === defaultColor && (defaultColor = "darkcyan");
      return user.id === userId ? {...user, color: defaultColor} : user
    }
    )
    )
  }

  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      const usersRes = res.data;
      //nastavim default barvo
      usersRes && (
        usersRes.map((user) => 
          user = {...user, color: "aquamarine"}
        )
      )
      setUsers(usersRes);
    });
  },[]);

  //console.log(users);
  
  return (
    <div>      
      <h1>Pozdravljeni študent.</h1>
      {
        /*studenti.map((student) => {
          //console.log(student);
          const{ime,priimek,letnica,id,predmet} = student;
          return (
            <Ocene key={id} ime={ime} priimek={priimek} predmet={predmet} letnica={letnica} />
          );
        })*/
      }
      <hr />
      <h1>Podatki iz drugega strežnika</h1>
      <div className="uporabniki">  
        {
          users && (
            users.map((user) => {
              //console.log(user);
              //const{name,id} = user;
              return (
                <Uporabniki key={user.id} user={user} onSpremeniOzadje={spremeniOzadje} />
              );
            })
          )
        }
      </div>
    </div>
  );
}

export default App;