import React from 'react'

class ToDoItem extends React.Component{
    render(){
        console.log('props:', this.props);
        // eslint-disable-next-line react/prop-types
        let {e, i, updateItem, deleteItem} = this.props
        return (
            <>
            <div key={i} className='toDo'>
            <input type="text" value={e} onChange={(ev)=>{
            updateItem(ev.target.value, i)
            }}/>
            <button onClick={()=> deleteItem(i)}>Delete</button>
            </div>
            </>
        )
    }
}

export default ToDoItem