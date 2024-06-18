import {motion} from 'framer-motion'
import {useGlobalContext} from '../context.jsx'
import {CiMail}from 'react-icons/ci'
import headImg from '../assets/IMG_2963.jpg'

const Contact =()=>{
	const {isContactOpen,closeContact}= useGlobalContext()
	return <motion.section className={`${'contact'} ${isContactOpen && 'contact_active'}`} >
	<motion.div className={`${'contact_container container'} ${isContactOpen && 'contact_active'}`}>
		    <div className="contact_image">
		    	<img src={headImg} alt="contact"/>
		    </div>
		    <div className="contact_content flex">
     	 <div className="contact_content_sec1">
     	   <div>
     	   	
     	    <h4>Let's Work</h4>
     	 	<h2 className="contact_title">
     	 		Together
     	 	</h2>
     	   </div>
     	 </div>
     	 <div className='contact_list_container'> 
             <h5 className="title contact_title">	Contact Me</h5>
     	 	<div className="contact_info_list">

     	 	<a href="#" className='flex'>
     	 		<i> <CiMail/>	</i>
     	 			<p>	efficientfaith@gmail.com</p>
     	 	</a>
     	 
     	 		<a href="#" className='flex'>

     	 			<i> <CiMail/>	</i>
     	 			<p>	@efficientfaith_</p>
     	 	</a>
     	 	<a href="#" className='flex'>

     	 			<i> <CiMail/>	</i>
     	 			<p>	@Faith owole</p>
     	 	</a>
     	 	</div>
     	 </div>
     </div>
	</motion.div>
 
	</motion.section>
}
export default Contact