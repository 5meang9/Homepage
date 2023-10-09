import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import '../styles/Board.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";

export default function Board(){
  useEffect(() => {
    Aos.init()
  },[])

  return(
    <>
      <div className='profile-title'>대학교 프로젝트 👩‍🎓</div>
      <div className='board-container'>
        <div className='board-item-wrap' data-aos="fade-up">
          <Link to="University/1">
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
          </Link>
        </div>
        <div className='board-item-wrap' data-aos="fade-up">
          <Link to="University/2">
            <div className='board-item-img'>
              <img src="images/shoppingMall.png" alt="" />
            </div>
            <Badge pill bg="primary">2학년</Badge>
            <div className='board-item-contents'>
              <p className='board-item-period'>개발기간 · 2016.09.01 ~ 2016.09.30</p>
              <p className='board-item-title'>
                <img src="images/webLogo1.png"/>
                <span> 온라인 쇼핑몰 제작</span>
              </p>
            </div>
          </Link>
        </div>
        <div className='board-item-wrap' data-aos="fade-up">
          <Link to="University/3">
            <div className='board-item-img'>
              <img src="images/movie1.png" alt="" />
            </div>
            <Badge pill bg="primary">3학년</Badge>
            <div className='board-item-contents'>
              <p className='board-item-period'>개발기간 · 2017.06.01 ~ 2017.06.30</p>
              <p className='board-item-title'>
                <img src="images/C#logo.png"/>
                <span> 영화예매 시스템 제작</span>
              </p>
            </div>
          </Link>
        </div>
        <div className='board-item-wrap' data-aos="fade-up">
          <Link to="University/4">
            <div className='board-item-img'>
              <img src="images/child.png" alt="" />
            </div>
            <Badge pill bg="primary">4학년</Badge>
            <div className='board-item-contents'>
              <p className='board-item-period'>개발기간 · 2018.09.03 ~ 2018.11.30</p>
              <p className='board-item-title'>
                <img src="images/C#logo.png"/>
                <span> 유아교육 용 산수 프로그램 제작</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className='profile-title' style={{marginTop: '50px'}}>외부 프로젝트 👩‍💻</div>
      <div className='board-container'>
        <div className='board-item-wrap' data-aos="fade-up">
          <Link to="GameProject/1">
            <div className='board-item-img'>
              <img src="images/monsterKill.png" alt="" />
            </div>
            <Badge pill bg="primary">unity</Badge>
            <div className='board-item-contents'>
              <p className='board-item-period'>개발기간 · 2019.07.01 ~ 2019.07.19</p>
              <p className='board-item-title'>
                <img src="images/Python-logo-notext.svg.png"/>
                <span> Unity 엔진을 이용한 땅따먹기 게임</span>
              </p>
            </div>
          </Link>
        </div>
        <div className='board-item-wrap' data-aos="fade-up">
          <Link to="GameProject/2">
            <div className='board-item-img'>
              <img src="images/shoppingMall.png" alt="" />
            </div>
            <Badge pill bg="primary">unity</Badge>
            <div className='board-item-contents'>
              <p className='board-item-period'>개발기간 · 2019.07.29 ~ 2019.08.31</p>
              <p className='board-item-title'>
                <img src="images/webLogo1.png"/>
                <span> Unity 엔진을 이용한 던전 게임</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className='profile-title' style={{marginTop: '50px'}}>회사 프로젝트 👩‍💼</div>
      <div className='board-container'>
        <div className='board-item-wrap' data-aos="fade-up">
          <Link to="Bespoke/1">
            <div className='board-item-img'>
              <img src="images/monsterKill.png" alt="" />
            </div>
            <Badge pill bg="primary">unity</Badge>
            <div className='board-item-contents'>
              <p className='board-item-period'>개발기간 · 2019.07.01 ~ 2019.07.19</p>
              <p className='board-item-title'>
                <img src="images/Python-logo-notext.svg.png"/>
                <span> Unity 엔진을 이용한 땅따먹기 게임</span>
              </p>
            </div>
          </Link>
        </div>
        <div className='board-item-wrap' data-aos="fade-up">
          <Link to="GameProject/2">
            <div className='board-item-img'>
              <img src="images/shoppingMall.png" alt="" />
            </div>
            <Badge pill bg="primary">unity</Badge>
            <div className='board-item-contents'>
              <p className='board-item-period'>개발기간 · 2019.07.29 ~ 2019.08.31</p>
              <p className='board-item-title'>
                <img src="images/webLogo1.png"/>
                <span> Unity 엔진을 이용한 던전 게임</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}