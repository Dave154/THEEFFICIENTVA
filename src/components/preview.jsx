import headImg from '../assets/IMG_2963.jpg'

const Preview =()=>{
	return <section className="preview ">
		
		<div className="preview_content">
			<h2 className="title container">
				Preview
			</h2>
			<div className="preview_slide_container border container_left">
				<ul className="preview_slide  no_scroll d_grid ">
					<li>
						<img src={headImg} alt="preview_img"/>
					</li>
					<li>
						<img src={headImg} alt="preview_img"/>
					</li>
					<li>
						<img src={headImg} alt="preview_img"/>
					</li>
					<li>
						<img src={headImg} alt="preview_img"/>
					</li>
					<li>
						<img src={headImg} alt="preview_img"/>
					</li>
					<li>
						<img src={headImg} alt="preview_img"/>
					</li>
					<li>
						<img src={headImg} alt="preview_img"/>
					</li>
					<li>
						<img src={headImg} alt="preview_img"/>
					</li>
				</ul>
			</div>
			
		</div>
	</section>
}
export default Preview