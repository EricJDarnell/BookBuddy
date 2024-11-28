import { Navigate } from "react-router-dom";
import { getReservations, deleteReservation, getUserMe, fetchSingleBook } from "../API";
import { useState, useEffect } from "react";

export default function Reservations({token, setUser}) {
    const [resList, setResList] = useState([]);

    useEffect(() => {
        async function fetchResList(tk) {
            setResList(await getReservations(tk));
        }
        fetchResList(token);
    }, [resList.length])

    async function deleteClicker(rId, tk){
        await deleteReservation(rId, tk)
        setUser(await getUserMe(tk))
        setResList(await getReservations(tk))
    }

    return <>
      <ul id="catalog">
        {
            resList && resList.map((reservation, idx) => {
                return <li key={idx}>
                    <h3>{reservation.title}</h3>
                    <img src={reservation.coverimage} alt={reservation.title}/>
                    <p>{reservation.author}</p>
                    <p>{reservation.description}</p>
                    <button onClick={async (e) => {
                        e.preventDefault()
                        deleteClicker(reservation.id, token);                  
                    }}>Remove Reservation</button>
                </li>
            })
        }
      </ul>
    </>
    
}