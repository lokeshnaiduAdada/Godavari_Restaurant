import './service.css';
const Service=()=>{
    const service_data=[
        {
            image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-lollipop-recipe.jpg",
            matter:"Staters"
        },
        {
            image:"https://t4.ftcdn.net/jpg/02/75/39/23/360_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg",
            matter:'Vegetarian'
        },
        {
            image:"https://img.freepik.com/premium-photo/gourmet-chicken-biryani-with-steamed-basmati-ricegenerated_582234-543.jpg",
            matter:"Non-Vegetarian"
        },
        {
            image:"https://media.istockphoto.com/id/459367055/photo/set-with-different-drinks-on-black-background.jpg?s=612x612&w=0&k=20&c=2CYpvGfthuQyRAp6KC94MOL1nBJkv6E4kWKrrXNbTa4=",
            matter:"Mocktail and Wine"
        }
    ]
    return(
        <section className="service_container">
            <section className="service_grid">
                <div className="service_content">
                    <div className="service_heading">
                        <h1>Services</h1>
                    </div>
                    {
                        service_data.map((item,index) => (
                            <div className="service_img_content">
                                <div>
                                    <img src={item.image}></img>
                                </div>
                                <button>{item.matter}</button>
                            </div>
                        ))
                    }
                </div>
            </section>
        </section>
    )
}
export default Service;