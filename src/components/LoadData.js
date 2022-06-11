import React, { useEffect } from "react";
import {useState} from "react";

const LoadData = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/samsmusa/portfolio/master/public/fakedb.json")
    .then(res=>res.json())
    .then(res=>setData(res))
  },[])
  return [data, setData]
}

export default LoadData;