import { useTypewriter, Cursor } from 'react-simple-typewriter'

const First = () => {
    const [text] = useTypewriter({
        words: ['Front-end developer'],
        loop: 0
      })    

    return (
        <div className="first">
            <div className="left-bar">
                <ul>
                    <li className="github"><a href="https://github.com/nasemul1"><i class="fa-brands fa-github"></i></a></li>
                    <li className="linkedin"><a href="https://www.linkedin.com/in/nasemul1/"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li className="codepen"><a href="https://codepen.io/nasemul1"><i class="fa-brands fa-codepen"></i></a></li>
                </ul>
            </div>
            <div className="right-bar">
                <p><a href="mailto:nasemul.me@gmail.com">nasemul.me@gmail.com</a></p>
            </div>
            <div className="main-area">
                <div className="main-text">
                    <p className="hi-text">Hi, I am</p>
                    <h1 id="name">Md Nasemul Islam</h1>
                    <h2>I am a <span>{ text }</span>
                        <Cursor cursorColor='#8CC152' />
                    </h2>
                    <p className="bio">Highly motivated aspiring front-end developer with a strong grasp of HTML, CSS, and JavaScript seeks an entry-level position to leverage skills and contribute to a dynamic team.</p>
                    <div className="hireMe-div">
                        <div className="hireMe-box">
                            <a href="">Hire Me</a>
                        </div>
                    </div>
                </div>
                <div className="main-image"></div>
            </div>
        </div>
    );
}
 
export default First;