import React,{useEffect, useState} from "react"
import axios from "axios"

function Todo() {
    const [page,setPage]=useState(1)
  const [todos,setTodos]=useState([])
  const [totalCount,setTotalCount]=useState(0)
  let il=5;
  const [limit,setLimit]=useState(il)
  useEffect(()=>{
    const getData=async ()=>{
       let res=await axios.get(`http://localhost:3001/todos?_page=${page}&_limit=${limit}`)
       setTodos(res.data);
       console.log(res.headers["x-total-count"])
     setTotalCount(Number(res.headers["x-total-count"]))
    };
    getData();
  },[page , limit]);
  return (
    <div>
          <button
         disabled={page<=1}
         onClick={()=>(setPage(page-1))}>{`<`}</button>

   <select onChange={(e)=>(setLimit(Number(e.target.value)))}>
         <option value={il*1}>5</option>
         <option value={il*2}>10</option>
   </select>
   

 {/* or you can also do by taking input  */}


   <input
   type="number"
   value={limit}
   min={0}
   max={totalCount}
   onChange={({target})=>(setLimit(Number(target.value)))}
   />


   <button disabled={totalCount<page*limit} onClick={()=>(setPage(page+1))}>{`>`}</button>


    {todos.map((todo)=>{
      return <div key={todo.id}>{todo.id}{`  :  `}{todo.text}</div>
    })}
    </div>
  )
}

export default Todo