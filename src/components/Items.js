import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems, deleteItems, completeItem } from '../actions/listActions'

export default function(props) {
    const items = useSelector(appState => appState.listReducer.items)
    const count = useSelector(appState => appState.listReducer.items.filter(item => {
        return !item.active
    })).length
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getItems())
    }, [dispatch])

    function handleDelete(id) {
        dispatch(deleteItems(id))
    }

    function handleComplete(id, status) {
        dispatch(completeItem(id, status))
    }

    return (
        <div>
            
            <ul className='list'>
                {items.map((item, i) => (
                    <div key={'item' + i}>
                        <div
                        className={item.active === false ? '' : 'complete'} 
                        onClick={(e) => handleComplete(item.id, item.active)} >
                            <div className='check'>&#10004;</div>
                            <li  >{item.name} </li>
                        </div>
                        <button onClick={(e) => handleDelete(item.id)}>&times;</button>
                    </div>
                ))}
            </ul>
            <div className='extra'>
                <p>{count} items left to complete</p>
                <p>*Click on the item to mark as complete</p>
                <p>*Click on the red x to delete item</p>
            </div>
        </div>
    )
}