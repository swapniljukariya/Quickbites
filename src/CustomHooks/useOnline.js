import {useState, useEffect} from 'react'

function useOnline() {
    const [isOnline , setOnline]= useState(true);

    useEffect(()=>{
        const handleOnline= ()=>{
            setOnline(true);
        }
        const handleOffline= ()=>{
            setOnline(false);
        }
        window.addEventListener("online",handleOnline);
        window.addEventListener("onffline", handleOffline);
        return()=>{
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline",handleOffline);
        }

    }, [])
  return isOnline;
}

export default useOnline
