import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SecondaryMenu(props) {

    const [currentPage, setCurrentPage] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        setCurrentPage(props.page);
        setName(props.name);
    }, [props.page, props.name])

    return(
        <nav className="secondary-menu__links">
            {
                currentPage !== "main" &&
                <>
                    <Link to={`/${currentPage}`}>
                        <button className="secondary-menu__button">{name}</button>
                    </Link>
                    <Link to="/">
                        <button className="secondary-menu__button">אודותיי</button>
                    </Link>
                </>
            }
            <a href="https://wa.me/+972503131570?text=שלום%20ניצן,%20אני%20רוצה%20להתחיל%20להתאמן%20איתך%20אשמח%20לדעת%20עלויות%20ולקבוע%20אימון%20ראשון." target='_blank' rel='noreferrer'>
                <button className="secondary-menu__button">צור קשר</button>
            </a>
        </nav>
    )
}

export default SecondaryMenu;