import {FaBars} from 'react-icons/fa'
import headImg from '../assets/IMG_2963.jpg'
import {useGlobalContext} from '../context.jsx'
import {useRef ,useEffect} from 'react'
import {FaPhone} from 'react-icons/fa'
const Nav =()=>{
	const headRef=useRef(null)

	const {scroll,isNavHidden, setIsNavHidden} = useGlobalContext()

	  useEffect(()=>{
 const hideNav=setTimeout(()=>{
 if(scroll > 20){
 	 setIsNavHidden(true)
 }else{
 	setIsNavHidden(false)
 }
 console.log(isNavHidden)
}, 5000)
    setIsNavHidden(false)
    const headScroll= headRef.current;
    const main = document.documentElement.scrollHeight - document.documentElement.clientHeight
	 headScroll.style.width =`${(scroll/main)* 100}% `  

	 return()=>clearTimeout(hideNav)
  },[scroll])
	return <header className={`${'header'} ${ !isNavHidden && 'active'} `}  >
		
		<button className={`${'c_t_a c_t_a_top'} `}>
			<i><FaPhone/></i>
		</button>
		<nav className={`${'nav flex'} ${scroll<20 || isNavHidden ? 'nav_hidden': null}`}>
     
		<div className="menubar">
		    	<i><FaBars/></i>
		    </div>
		   

		    <div className="logo">
		    	<img src='' alt="logo"/>
		    </div>
 <div>
		    		<button className="c_t_a">Contact</button>

		    </div>
		    
		    
		</nav>
		<div className={`${'scroll_progress'}`} ref={headRef}></div>
	</header>
}
export default Nav

