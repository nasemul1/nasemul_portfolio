import './Header.css'

const Header = (props) => {
    const title = props.title;
    return (
        <div className="top">
                <p id='head'>{ title }</p>
                <a href="#main">Go to top</a>
        </div>
    );
}
 
export default Header;