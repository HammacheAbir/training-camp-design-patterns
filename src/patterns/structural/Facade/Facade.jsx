import React, {useEffect, useState} from 'react'
import API from "./api"

export default function Facade() {

    const [selectedId, setSelectedId] = useState(1)

    const [todosList, setTodosList] = useState([])

    // useEffect( () => {
    //     if(selectedId===-1){
    //         const response = API.getAll()
    //         response.then(res => setTodosList([res]))
    //     }else{
    //           const response =  API.get(selectedId)
    //           response.then(res => setTodosList([res]))
    //     }
    // }, [selectedId])

    useEffect( () => {
        if(selectedId===-1){
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(res => setTodosList(res))
        }else{
            fetch('https://jsonplaceholder.typicode.com/todos/'+selectedId)
            .then(response => response.json())
            .then(res => setTodosList([res]))
        }
    }, [selectedId])

    return (
        <div>
            <button onClick={()=> setSelectedId(1)}>
                todo 1
            </button>
            
            <button onClick={()=> setSelectedId(2)}>
                todo 2
            </button>

            <button onClick={()=> setSelectedId(3)}>
                todo 3
            </button>

            <button onClick={()=> setSelectedId(-1)}>
                All
            </button>

            <div>
                {
                    todosList?.map((todo,index)=>{
                        return <div key={index}>{todo.title}</div>
                    })
                }
            </div>
        </div>
    )
}
