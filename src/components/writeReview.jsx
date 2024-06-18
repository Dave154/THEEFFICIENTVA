import {useGlobalContext} from '../context.jsx'
import {FaStar,FaTimes,FaTelegram} from 'react-icons/fa'
import {useRef} from 'react'
const WriteReview=()=>{
	const rmCont=useRef()
    const {isWriteReview,handleReviewStars,handleReviewSubmit,reviewForm,handleForm,handleReviewMessage,messageChars,closeReview} =useGlobalContext()

	return <section className={` ${'write_review'} ${isWriteReview && 'write_review_active'}`}>
		<div className="write_review_container container">
			<i className='cancel_write_review pointer' onClick={closeReview}><FaTimes/></i>

			<div className="write_review_content ">
				<h2 className="title write_review_title">
					Write a Review
				</h2>
				<span className='stars review_stars'>
				 {
				 	    	   Array.from(Array(5).keys()).map((item)=>{
                                    
				 	    	   		return<i key={item} className={`${item < reviewForm.stars && 'active'}`} onClick={()=>handleReviewStars(item)}><FaStar/></i>
				 	    	   	})
				 	    	   }
				</span>
               <form className="review_form" onSubmit={handleReviewSubmit}>
               	 
               	  	
	                <label htmlFor="name" className='border'>
	                   <span>Name:</span> 
	                	<input type="text" id='name' className='review_name' name='form_name' value={reviewForm.name} onChange={handleForm}/>
	                </label>
	                <label  className={`${'border'}`} >
	                   <span> Message:</span>
		                    <p contentEditable='true' className='review_message' ref={rmCont} onKeyUp={()=>handleReviewMessage(rmCont)}>{messageChars.message}</p> 
	                </label>
               	 

                <button className="c_t_a  review_form_submit">Send</button>
               </form>
			</div>
		</div>
	</section>
}
export default WriteReview