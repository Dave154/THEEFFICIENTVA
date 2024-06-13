import headImg from '../assets/IMG_2963.jpg'
import {FaPhone} from 'react-icons/fa'
const Profile =()=>{
	return<section className='profile'>	
      <div className='profile_content flex'>
      <div className="logo_image">
      	<img src={headImg} alt="Faithie"/>
      </div>

      	<article className="name container flex">	
             <div className="profile_image">
             	<img src={headImg} alt="profile_image"/>
             </div>
             <div className="profile_left flex">
              <div className="name_title">
             	<h1>Okpe Faith : something goees here</h1>
             	<p>Virtual Assistant</p>	
              </div>
              <div className="buttons">
              	<button className="c_t_a">Contact</button>
              	<i className="phone"><FaPhone/></i>
              </div>

             </div>
      	</article>
    <article className="rankings_container container_left border">
    	
      	<ul className="rankings flex no_scroll ">
      		<li>
          
             <p>
                Completed
             </p> 
             <h4>4</h4>
             <p>
               Courses
             </p> 
          </li>
      		  <li>
          
             <p>
                Experience
             </p> 
             <h4>5+</h4>
             <p>
               Years
             </p> 
          </li>

            <li>
          
             <p>
                Completed
             </p> 
             <h4>4</h4>
             <p>
               Courses
             </p> 
          </li>
           <li>
          
             <p>
                Experience
             </p> 
             <h4>5+</h4>
             <p>
               Years
             </p> 
          </li>
           <li>
          
             <p>
                Experience
             </p> 
             <h4>5+</h4>
             <p>
               Years
             </p> 
          </li>
           <li>
          
             <p>
                Experience
             </p> 
             <h4>5+</h4>
             <p>
               Years
             </p> 
          </li>
      	</ul>
    </article>
      </div>

	</section>
}
export default Profile