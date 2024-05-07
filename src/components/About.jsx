import './about.css';
const About=()=>{
    const data=[
            {
                image:'https://idealdesigns.in/wp-content/uploads/2017/02/godavari.jpg',
                matter:'At Godavari Spicy, we believe that dining is more than just eating – its an experience to be savored. Located in the heart of Bhimavaram, our restaurant combines exquisite cuisine, warm hospitality, and a vibrant atmosphere to create unforgettable moments for our guests Founded in 2020 by Chef Lokesh Naidu,began as a humble neighborhood eatery with a passion for celebrating the rich flavors and culinary traditions of India. Over the years, our restaurant has grown into a beloved culinary destination, drawing inspiration from local ingredients and global influences to create dishes that delight the senses and nourish the soul.'
            }
        ]
    return(
       <section className="about_container">
        <section className="about_grid">
            <div className="about_content">
                <div className='about_heading'>
                    <h1>About</h1>
                </div>
                {
                    data.map((item, index) => (
                        <div className='about_item'>
                            <div>
                                <img src={item.image} alt={index+1}></img>
                            </div>
                            <div>
                                <p style={{color:'red'}}>{item.matter}</p>
                            </div>
                        </div>        
                    ))
                }
            </div>
        </section>
       </section> 
    )
}
export default About;