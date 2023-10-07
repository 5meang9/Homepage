import '../styles/Home.scss'
import TypingFont from '../component/TypingFont'
import '@fontsource/aguafina-script';
import Board from '../component/Board';

export default function Home(){
  
  return(
    <div className='home-container'>
      <div className='video-wrap'>
        <video className='video-contents' autoPlay loop muted>
          <source src='videos/homePage_video.mp4' type='video/mp4'/>
        </video>
        <div className='text-collection'>
          <p>Hello World!</p>
          <TypingFont TyingContents='Thank you for visiting my page.'/>
        </div>
      </div>
      <div className='profile-wrap'>
        <div className='profile-title'>Profile~</div>
        <Board/> 
      </div>
    </div>
  )
}