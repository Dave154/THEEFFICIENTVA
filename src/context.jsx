import React,{useContext,useState,useEffect} from 'react'

const AppContext = React.createContext()

const AppProvider = ({children})=>{
  const [abtMore,setAbtMore]= useState(true)
 const [scroll,setScroll]=useState(0)
 const[isNavHidden, setIsNavHidden]= useState(null)
 const[isContactOpen,setIsContactOpen]=useState(false)
 const [isWriteReview,setIsWriteReview]=useState(false)
 const [reviewForm,setReviewForm]= useState({
  stars:0,
  name:'',
  message:''
 })
 const [messageChars, setMessageChars]=useState({
  current:0,
  total:10,
  messageFull:false
 })



  const handleScroll=()=>{
    setScroll(window.scrollY)

  }
  const handleAbtMore=()=>{
    setAbtMore(false)
  }
  const openContact=()=>{
    setIsContactOpen(true)
  }
const openWriteReview=()=>{
  setIsWriteReview(true)
}
const handleReviewStars =(star)=>{
setReviewForm({...reviewForm,stars: star+1})

}
const handleReviewMessage =(rmCont)=>{
  const temp = rmCont.current.innerText
  setReviewForm({...reviewForm,message:temp})
  
}

const handleForm=(e)=>{
   const temp=e.target.value
  if(e.target.name === 'form_name'){
     setReviewForm({...reviewForm,name:temp})
  }
}
const closeReview=()=>{
  setIsWriteReview(false)
}
const handleReviewSubmit =(e)=>{
  e.preventDefault()
  console.log(reviewForm)
  closeReview()
}
  const closeContact=(e)=>{
   if(isContactOpen){

   if(e.target.classList.contains('contact')){
       setIsContactOpen(false)
   }
   }
    
  }
useEffect(()=>{
  document.addEventListener('click',closeContact)

  return ()=> document.removeEventListener('click',closeContact)
},[isContactOpen])

useEffect(()=>{
  const closeReview=(e)=>{
   if(isWriteReview){

   if(e.target.classList.contains('write_review')){
       setIsWriteReview(false)
     }
   }
    
  }
  document.addEventListener('click',closeReview)

  return ()=> document.removeEventListener('click',closeReview)
},[isWriteReview])
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
  setIsNavHidden,
  isContactOpen,
  openContact,
  isWriteReview,
  handleReviewStars,
  openWriteReview,
  closeReview,
  messageChars,
  reviewForm,
  handleReviewMessage,
  handleReviewSubmit,
  handleForm
}
 }>
 	{children}
 </AppContext.Provider>
}

const useGlobalContext=()=>{
	return useContext(AppContext)
}
export {AppProvider,AppContext,useGlobalContext}