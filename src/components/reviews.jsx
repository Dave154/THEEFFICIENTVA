import {FaStar} from 'react-icons/fa'
import {FaPen} from 'react-icons/fa'
import {reviews} from './data.jsx'
const Reviews=()=>{
	return<section className="ratings">
		<div className="ratings_container">
			<h2 className="title ratings_title container">
			 Reviews
			</h2>
			<div className="reviews container_left border">
				 
				 <ul className=" review_slide no_scroll d_grid">
				 {
				 	reviews.map((review,index)=>{
				 		const {name,date,stars,deets}=review
				 		return <li key={index}>
				 	<div className="review_slide_head">
				 	    <div className="review_slide_head_sec1 flex">
				 		   <h4 className="review_title">{name}</h4>  
				 		   <p className='review_slide_date'>{date}</p>	
				 	    </div>

				 	    <div className="review_slide_head_sec2">
				 	    	<span className="stars">
				 	    	   {
				 	    	   Array.from(Array(5).keys()).map((item)=>{
                                    
				 	    	   		return<i key={item} className={`${item < stars && 'active'}`}><FaStar/></i>
				 	    	   	})
				 	    	   }
				 	    	</span>

				 	    </div>
				 	</div>

				 	<div className="review_slide_text">
				 		<p>
				 			{deets}
				 		</p>
				 	</div>
				 	</li>
				 	})

				 }
				 	
				 </ul>

				 <div className="write_review flex container">
				 	<i><FaPen/></i>
				 	<p>Leave a Review</p>
				 </div>
				 
			</div>
		</div>
	</section>
}
export default Reviews