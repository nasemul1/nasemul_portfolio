import Header from '../header/Header';
import './Achiev.css'

const Achiev = () => {
    return (
        <div className="achiev">
            <Header title="02. Achievements"/>
            <div className="achiev-container">
                <div className="front-end">
                    <h3>Web development:</h3>
                    <div className='achiev-box' id="2">
                        <h4>2. Freecodecamp Responsive Web Design</h4>
                        <div className="view"><div className="v-box"><a target='_blank' className="v-link" href="https://www.freecodecamp.org/certification/nasemul1/responsive-web-design">view</a></div></div>
                    </div>
                    <div className='achiev-box' id="1">
                        <h4>1. Learn the basics of web - Internet fundamentals</h4>
                        <div className="view"><div className="v-box"><a target='_blank' className="v-link" href="https://codedamn.com/certificate/verify/55e316636eebc9260be3bc1083c188b72b720a48">view</a></div></div>
                    </div>
                </div>
                <div className="cp">
                    <h3>Others:</h3>
                    <div className='achiev-box' id="2">
                        <h4>CUET IUPC Codestorm 1.0</h4>
                    </div>
                    <div className='achiev-box' id="1">
                        <h4>ICPC Dhaka Regional Contest - 2023</h4>
                        <div className="view"><div className="v-box"><a target='_blank' className="v-link" href="https://drive.google.com/file/d/1_S6VawreEmPh6gRxO6N5T4iCCm9w186K/view?usp=sharing">view</a></div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Achiev;