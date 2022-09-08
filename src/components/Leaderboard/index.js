import React, { useEffect, useState } from 'react'
import './index.css';

export function Leaderboard({rankings}) {

    const [ orderedRankings, setOrderedRankings ] = useState([]);

    useEffect(() => {
        setOrderedRankings(rankings.sort((a, b) => (a.calculation < b.calculation) ? 1 : -1))
    }, [rankings]);

    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>RTI Score</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {orderedRankings.map((entry, index) => (
                        <tr index={index}>
                            <td>{entry.calculation}</td>
                            <td>{entry.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}