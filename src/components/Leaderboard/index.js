import React, { useEffect, useState } from 'react'
import trash from '../../assets/trash.png'
import './index.css';

export function Leaderboard({rankings, updateLocal}) {

    const [ orderedRankings, setOrderedRankings ] = useState([]);

    useEffect(() => {
        setOrderedRankings(rankings.sort((a, b) => (a.calculation < b.calculation) ? 1 : -1))
    }, [rankings]);

    const deleteEntry = (index) => {
        orderedRankings.splice(index, 1);
        setOrderedRankings(orderedRankings);
        updateLocal(orderedRankings);
    }


    if(orderedRankings.length === 0){
        return null;
    }

    return (
        <div className="Leaderboard">
            <h2>Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>RTI Score</th>
                        <th>Description</th>
                        <th className="Leaderboard-delete">Delete?</th>
                    </tr>
                </thead>
                <tbody>
                    {orderedRankings.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.calculation}</td>
                            <td>{entry.description}</td>
                            <td><button onClick={() => deleteEntry(index)}><img src={trash} className="Leaderboard-trash" alt="garbage can icon" /></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}