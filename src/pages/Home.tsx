import '../styles/Home.scss'
import TypingFont from '../component/TypingFont'
import '@fontsource/aguafina-script';
import Board from '../component/Board';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(){
  
  return(
    <div className='home-container'>
      <div className='video-wrap'>
        <video className='video-contents' autoPlay loop muted>
          <source src='videos/homePage_video.mp4' type='video/mp4'/>
        </video>
        <div className='text-collection'>
          <div className="text-items">
            <p>Hello World!</p>
            <TypingFont TyingContents='Thank you for visiting my page.'/>
            <div className="text-center">
              <div className='scroll-btn'>
                <span className="mouse">
                  <span></span>
                </span>
              </div>
              <a href="#firstSection">
                <div className="link-arrow-bounce">
                  <FontAwesomeIcon icon={faChevronDown} bounce style={{color: "#fff",}} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='profile-wrap'>
        <Board/> 
      </div>
    </div>
  )
}