import './gallery.css';
const Gallery=()=>{
    const data=[    
        {image:'https://plus.unsplash.com/premium_photo-1670984939096-f3cfd48c7408?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fHww'},
        {image:'https://i.pinimg.com/originals/6e/ad/f2/6eadf29c90b10fbfd99badc474d61660.jpg'},
        {image:'https://images.pexels.com/photos/1546039/pexels-photo-1546039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        {image:'https://t3.ftcdn.net/jpg/06/27/85/32/360_F_627853212_bIw6wBo8qXXZvrj7wVXNew9fovoVSEoJ.jpg'},
        {image:'https://t4.ftcdn.net/jpg/02/78/24/39/360_F_278243908_fmvDBDwC3iF97GbvAjB8319sYvlWfNyA.jpg'}
        
    ]
    return(
        <section className="gallery_container">
            <section className="gallery_grid">
                <div className="gallery_content">
                    <div>
                        <h1 style={{color:'violet'}}>Our Gallery</h1>
                    </div>
                    {
                        data.map((item,index)=>(
                            <div className="gallery_image">
                                <img src={item.image}></img>
                            </div>
                        ))
                    }
                </div>
            </section>
        </section>
    )
}
export default Gallery;