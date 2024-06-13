import {useGlobalContext} from '../context.jsx'

const About =()=>{
	const {abtMore,handleAbtMore}=useGlobalContext()
	return <section className="about">
	<div className="container">
		
		<div className="about_content border" >
		  <h2 className="about_title title">
		  	About Me
		  </h2>
		  <p className="about_subtitle">
		  	Lorem ipsum
		  </p>
		  <article className="about_desc flex">
	        <div className={`${'about_desc_content'} ${abtMore && 'truncate'}`}>
	        	
		  <p>
		  	
		  	Hi, my name is Faith, i found virtual assistance,and knew it was perfect for me. From the world of biochemistry(i have a first degree in biochemistry) to the realm of virtual assistance, my journey has been a testament to my un wavering passion for providing exceptional support and streamlining administrative tasks.
		  </p>
		  <p>
		  	This passion led me to pursue a plethora of courses and training, honing my skills and equipping myself with the tools neccesary to excel in the virtual assistance domain.

		  </p>
		  <p>Now i help business owners manage their time effectively, enabling them to focus on the strategic aspects of their business that drives growth and success</p>
	        </div>
	        <i className={`${'more'} ${!abtMore && 'none'}`} onClick={handleAbtMore} >more</i>
		  </article>
		  
		</div>
	</div>
	</section>
}
export default About