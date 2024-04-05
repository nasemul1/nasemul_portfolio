import Header from "../header/Header";
import './Contacts.css'

const Contacts = () => {
    return (
        <>
            <Header title="04. Contacts"/>
            <div className="contact-body">
                <div className="mail-form">
                    <form action="mailto:nasemul.me@gmail.com" method="post" enctype="text/plain">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" required/>
                        <label htmlFor="text">Enter text:</label>
                        <textarea name="textarea" id="text" cols={25} rows={10} required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="contact-footer">
                    <div className="contact-lg">
                        <a href=""><i class="fa-brands fa-github"></i></a>
                        <a href=""><i class="fa-brands fa-linkedin"></i></a>
                        <a href=""><i class="fa-brands fa-codepen"></i></a>
                    </div>
                    <div className="footer-text">
                        <p>This portfolio is inspired by <a href="https://v4.brittanychiang.com/">Brittany Chiang v4</a></p>
                        <p>All rights reserved©</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Contacts;