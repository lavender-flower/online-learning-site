import { useEffect, useState } from "react"

const useCourses=()=>{
    const[courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data))

    },[])
return [courses];
}

export default useCourses;