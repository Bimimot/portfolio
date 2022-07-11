import { contactsArr } from "../../data/arrs"
import SvgIcon from "../svg-icon/SvgIcon"

export const Contacts = () => {

    return (
        <footer className='footer' id="contacts">
            {contactsArr.map((contact, i) =>                 
                <a className="link" href={contact.url} target="blank" key={i}>
                    <SvgIcon name={contact.icon} size={48} />
                </a>
            )}            
        </footer>
    )
}