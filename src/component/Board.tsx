import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import '../styles/Board.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Board(){
  useEffect(() => {
    Aos.init()
  },[])

  return(
    <div className='board-container'>
      <div className='board-item-wrap' data-aos="fade-up">
        <a href='/Homepage/University/1'>
          <div className='board-item-img'>
            <img src="images/monsterKill.png" alt="" />
          </div>
          <Badge pill bg="primary">1학년</Badge>
          <div className='board-item-contents'>
            <p className='board-item-period'>개발기간 · 2015.11.01 ~ 2015.11.30</p>
            <p className='board-item-title'>
              <img src="images/Python-logo-notext.svg.png"/>
              <span> GUI 설계기법(게임 만들기)</span>
            </p>
          </div>
        </a>
      </div>
      <div className='board-item-wrap' data-aos="fade-up">
        <div className='board-item-img'>
          <img src="" alt="" />
        </div>
        <Badge pill bg="primary">2학년</Badge>
        <div className='board-item-contents'>
          <p></p>
          <p className='board-item-title'></p>
        </div>
      </div>
      <div className='board-item-wrap' data-aos="fade-up">
        <div className='board-item-img'>
          <img src="" alt="" />
        </div>
        <Badge pill bg="primary">3학년</Badge>
        <div className='board-item-contents'>
          <p></p>
          <p className='board-item-title'></p>
        </div>
      </div>
      <div className='board-item-wrap' data-aos="fade-up">
        <div className='board-item-img'>
          <img src="" alt="" />
        </div>
        <Badge pill bg="primary">4학년</Badge>
        <div className='board-item-contents'>
          <p></p>
          <p className='board-item-title'></p>
        </div>
      </div>
    </div>
  )
}