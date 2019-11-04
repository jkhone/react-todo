import React from 'react'
import { useSelector } from 'react-redux'

export default function(props) {
    const items = useSelector(appState => appState.listReducer.items)

    return (
        <div>
            
            <ul>
                {items.map((item, i) => (
                    <li key={'item' + i}>{item}</li>
                ))}
            </ul>
        </div>
    )
}