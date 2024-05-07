import Header from "../header/Header";
import './Contacts.css'

const Contacts = () => {
    return (
        <>
            <Header title="04. Contacts"/>
            <div className="contact-body">
                <div className="contact-card">
                    <div className="contact-form">
                        <h6>Looks like you need some help</h6>
                        <h2>Reach Out!</h2>
                        <p>I usually respond within an hour, but designers do sleep two or three hours a night, so it might take a bit longer. Thank you and I am looking to hearing from you.</p>
                        <form action="mailto:nasemul.me@gmail.com" method="post">
                            <label htmlFor="c-name">Name:</label><br />
                            <input type="text" id="c-name" required/><br />
                            <label htmlFor="c-email">Email:</label><br />
                            <input type="email" id="c-email" required/><br />
                            <label htmlFor="c-message">Message:</label><br />
                            <textarea name="message" id="c-message" required></textarea><br />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Contacts;