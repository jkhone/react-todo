import React, { useState } from 'react'
import { addItem } from '../actions/listActions'
import { useDispatch } from 'react-redux'

export default function(props) {
    const [item, setItem] = useState('')
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()

        dispatch(addItem(item))
        setItem('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>todos</h1>
            <input type='text' id='item' name='item' value={item} onChange={e => setItem(e.target.value)} placeholder='What needs to be done?'/>
            <button type='submit'>Submit</button>
        </form>
    )
}