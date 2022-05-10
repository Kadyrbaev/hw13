import { useEffect, useRef, useState } from 'react'
import './Rend.css';
function Rend(){

    const users = useRef()
    const [user, setUser] = useState(false)
    
    useEffect(()=>{
       const title = setTimeout(()=>{
           if(user){
               users.current.className = 'first red';
               setUser(false)
               
           } else {
                users.current.className = 'first green';
                setUser(true)
           }
        }, 1000)
        return ()=>{
            clearTimeout(title)
        }
    },[user])

    return (
        <div className="cont">
            <div ref={users} className="first" >
            </div>
        </div>
    )
}
export default Rend

