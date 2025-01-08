import "./ContactFormStyles.css"
import {Button} from "@mui/material";

function ContactForm(){
    return(

        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form>
                <input placeholder="Enter your Name"/>
                <input placeholder="Enter your Email"/>
                <input placeholder="Enter your Subject"/>
                <textarea placeholder="Type your message here" rows="4"/>
                {/*<button>Send Message</button>*/}
                <Button>Send Message</Button>

            </form>
        </div>

    )
}

export default ContactForm;
