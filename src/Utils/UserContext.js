import { createContext } from "react";

const UserContext= createContext({
    user: {
    name:"Swapnil Jukariya",
    role:"frontend developer",
    state:"Uttarakhand",  
    }   
})

export default UserContext