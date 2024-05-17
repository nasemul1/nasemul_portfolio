import './Header.css'

const Header = (props) => {
    const title = props.title;
    const next = props.next;
    let view = 'ok';

    if(next==='end'){
        view = 'not';
    }
    
    return (
        <div className="top">
                <p id='head'>{ title }</p>
                <div>
                    <a href="#main">Go to top</a>
                    <a href={next} id={view}>Next page</a>
                </div>
        </div>
    );
}
 
export default Header;