import './contact.css';
const Contact=()=>{
    return(
        <section className="contact_container">
            <section className="contact_grid">
                <div className='contact_heading'>
                    <h1>Feel free to contact Us</h1>
                </div>
                <div className="contact_content">
                    <div className="contact_left">
                        <h1>Come and try our delicious food!</h1>
                        <div className='contact_left_emoji'>
                            <img src='Emoji.png' style={{width:'130px'}}></img>
                        </div>
                    </div>
                    <div className="contact_right">
                        <p><strong>Working Hours:</strong> Monday-friday 11AM to 11PM</p>
                        <p>Saturday -Sunday 11AM to 12AM</p>
                        <p><strong>Location:</strong> Bhimavaram,West Godavari,Andhra Pradesh 534201</p>
                        <p><strong>Mobile Number:</strong> 8985356566</p>
                        <p><strong>Email:</strong> godavarispicy@gmail.com</p>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default Contact;