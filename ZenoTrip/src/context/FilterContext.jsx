import { createContext, useContext, useState } from "react";
import { Tourdata } from "../assets/data/TourData";

export const FilterContext=createContext()

export const FilterProvider=({children})=>{

    const [filteredData,setFilteredData]=useState([])


    const handlesearchData=(tourname)=>{
        console.log(tourname);
         const data= Tourdata.filter(items=>items.packagename==tourname)
         setFilteredData(data)
    }

    console.log(filteredData);
     
    return(

    <FilterContext.Provider value={{handlesearchData,filteredData}}>{children}</FilterContext.Provider>
    )
}