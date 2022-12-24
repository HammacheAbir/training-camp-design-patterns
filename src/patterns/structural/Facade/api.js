const API = {

    get:async(id)=>{
        return await fetch('https://jsonplaceholder.typicode.com/todos/'+id)
            .then(response => response.json())
    },

    getAll:async()=>{
        return await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response =>  response.json() )
    }
}

export default API