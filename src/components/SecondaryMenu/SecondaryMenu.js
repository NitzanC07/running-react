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
            <Link to={`/${currentPage}`}>
                <button className="secondary-menu__button">{name}</button>
            </Link>
            <Link to="/">
                <button className="secondary-menu__button">אודותיי</button>
            </Link>
            <a href="https://wa.me/+972503131570" target='_blank' rel='noreferrer'>
                <button className="secondary-menu__button">צור קשר</button>
            </a>
        </nav>
    )
}

export default SecondaryMenu;