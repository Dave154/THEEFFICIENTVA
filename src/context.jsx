import React,{useContext,useState,useEffect} from 'react'

const AppContext = React.createContext()

const AppProvider = ({children})=>{
  const [abtMore,setAbtMore]= useState(true)
 const [scroll,setScroll]=useState(0)
 const[isNavHidden, setIsNavHidden]= useState(null)

  const handleScroll=()=>{
    setScroll(window.scrollY)

  }
  const handleAbtMore=()=>{
    setAbtMore(false)
  }


 useEffect(()=>{
 
 	window.addEventListener('scroll',handleScroll)

 	 return document.removeEventListener('scroll',handleScroll)
 },[])

 return <AppContext.Provider value={
{
	
 	scroll,
  handleScroll,
  abtMore,
  handleAbtMore,
  isNavHidden, 
  setIsNavHidden
}
 }>
 	{children}
 </AppContext.Provider>
}

const useGlobalContext=()=>{
	return useContext(AppContext)
}
export {AppProvider,AppContext,useGlobalContext}