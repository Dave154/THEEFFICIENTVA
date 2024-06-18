import {FaStar} from 'react-icons/fa'
import {services, tools} from './data.jsx'
const Services =()=>{
	return<section className="services">
		 <div className="services_container container">
		 	<div className="service_content border">
		 	   <div className="service_content_sec1">
		 		<h2 className="services_title title">
		 			Services & Tools
		 		</h2>
		 		<p>
		 			Lorem ipsum dolor sit amet consecr qduidem  rjifjfi 83wokdkje ijiswdi eijfwi[j rajnf[qufu  ufud i[rhg h urhahufb  ] ughf[gv urpfb deserunt quibusdam delectus reiciendis eum.
		 		</p>
		 	   </div>

		 	   <article className="service_content_sec2">
		 	   	   
	                 <div className="services_tools">
	                    <div className='services_tools_head'>
	                    	
		                 <span className="services_tools_icons">
		                 	
		                 	<i><FaStar/></i>
		                 </span>
		                 <h4 className="title">
		                 	A title
		                 </h4>
		                 <p>Here are a list  of the services and tools i use:</p>
	                    </div>
		                 
		                 <div className="services_tools_list flex">
		                 	
		                   <ul className="services_list">
		                   	 {services.map((service,index)=>{
                                  const {icon,txt}= service
		                   	 	return <li key={index} className='services_list-items '>
		                   	 		<i>{icon}</i>
		                   	 		<p>{txt}</p>
		                   	 	</li>
		                   	 })}
		                   </ul>

		                   <ul className="tools_lists">
		                   	 {tools.map((tool,index)=>{
                                  const {icon,txt}= tool
		                   	 	return <li key={index} className='services_list-items'>
		                   	 		<i>{icon}</i>
		                   	 		<p>{txt}</p>
		                   	 	</li>
		                   	 })}
		                   </ul>

		                 </div>
	                 </div>

		 	   </article>


		 	</div>
		 </div>
	</section>
}
export default Services