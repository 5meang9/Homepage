import '../styles/University.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CodeBlock from '../component/CodeBlock';

export default function GameProject1(){
  const texts1 =  `
  // 마우스 왼쪽 클릭 시 플레이어 타일로 변환
  void PlayS(){ 
    // 마우스 왼쪽 클릭
    if (Input.GetMouseButtonDown(0)){
      // 화면에 레이저를 쏜다
      Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
      // 레이저와 부딪힌 GameObject
      RaycastHit hit;
      // 레이저와 부딪힌 객체 있음
      if (Physics.Raycast(ray, out hit)){
        // 아무도 클릭하지 않은 곳 플레이어가 클릭 시, 플레이어 점수 변동 및 타일 색 변경
        if (hit.transform.GetComponent<MeshRenderer>().material.color == Color.white){
          hit.transform.GetComponent<MeshRenderer>().material.color = Color.Red;
          playSound1(sounds1, musicPlayer1);
          Score.Player_s += 1;
        }
        // 컴퓨터가 클릭한 곳 플레이어가 클릭할 시, 플레이어와 컴퓨터 점수 변동 및 타일 색 변경
        else if (hit.transform.GetComponent<MeshRenderer>().material.color == Color.blue){
          hit.transform.GetComponent<MeshRenderer>().material.color == Color.red;
          playSound1(sounds1, musicPlayer1);
          Score.Player_s += 1;
          Score.Enemy_s -= 1;
        }
      }
    }
  }
  `
  const texts2 =  `
  void Udate(){ 
    // 시간 측정
    timeSpan += Time.deltaTime;
    if (timeSpan > checkTime){
      Invoke("ColorChange", 3);
      // 누적시간 초기화
      timeSpan = 0;
    }
    void ColorChange(){ 
      int i = Random.Range(0, 100);    // 빙고판 랜덤 선택
      // 플레이어가 클릭한 곳 컴퓨터가 클릭할 시, 플레이어와 컴퓨터 점수 변동 및 타일 색 변경
      if (tp._tilelist[i].GetComponent<Meshrenderer>().material.color == Color.red){
        tp._tilelist[i].GetComponent<Meshrenderer>().material.color = Color.blue;
        Score.Player_s -= 1;
        Score.Enemy_s += 1;
      }
      // 아무도 클릭하지 않은 곳 컴퓨터가 클릭 시, 컴퓨터 점수 변동 및 타일 색 변경
      else if (tp._tilelist[i].GetComponent<MeshRenderer>().material.color == Color.white){
        tp._tilelist[i].GetComponent<MeshRenderer>().material.color == Color.blue;
        Score.Enemy_s += 1;
      }
    }
  }
  `

  return (
    <>
      <section id="article-header4">
        <div className='article-header-wrap'>
          <div id="article_h1" style={{color:'#fff'}}>Unity 엔진을 이용한 땅따먹기 게임 🎮</div>
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
      </section>
      <svg className="hero-waves Bsection2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
        </defs>
        <g className="wave1">
          <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(32,32,32, .1)"></use>
        </g>
        <g className="wave2">
          <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(32,32,32, .2)"></use>
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9" fill="#202020"></use>
        </g>
      </svg>
      <div id="postArticle">
        <nav className="toc2 book-toc">
          <h4 className="nav__title"><i className="fal fa-list-ol"></i> 목차</h4>
          <ol className="toc__menu">
            <li><a href="#article_1">C#, Unity Engine</a>
              <ol>
                <li><a href="#article_2">주요 기능</a>
                  <ol style={{paddingLeft: 0}}>
                    <li><a href="#player 타일변환">player 타일변환</a></li>
                    <li><a href="#컴퓨터 타일변환">컴퓨터 타일변환</a></li>
                    <li><a href="#실행화면">실행화면</a></li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </nav>
        <div id='article_1'>
          <h2 data-ke-size="size26"><b>C#, Unity Engine</b></h2>
          <div className='article1_contents contents_style'>
            <p>C#(v8.0), Unity (v2019.3)</p>
            <p style={{marginTop: 0}}>Prefabs 빙고판 생성</p>
            <p style={{marginTop: 0}}>Raycast hit 한 빙고판 위치 확인</p>
            <p style={{marginTop: 0}}>MeshRenderer 색 변경</p>
            <div className='article1_contents_img'>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/unityLogo.png"} style={{width: '36%', verticalAlign: 'bottom'}}/>
              <span>➕</span>
              <img className='article1_contents_img1' src={process.env.PUBLIC_URL+"/images/Clogo.png"} style={{width: '15%', verticalAlign: 'bottom'}}/>
            </div>
          </div>
        </div>
        <div id='article_2'>
          <h2 data-ke-size="size26"><b>주요 기능</b></h2>
          <div className='article2_contents contents_style'>
            <h4 id="player 타일변환"><b>player 타일변환</b></h4>
            <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/game3.png"} style={{width: '36%', marginTop: '-25px'}}/>
            <CodeBlock language="C#" contents={texts1} />
            <h4 id="컴퓨터 타일변환"><b>컴퓨터 타일변환</b></h4>
            <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/game4.png"} style={{width: '36%', marginTop: '-25px'}}/>
            <CodeBlock language="C#" contents={texts2} />
            <h4 id="실행화면 및 동작화면"><b>실행화면 및 동작화면</b></h4>
            <div className='img_col' style={{display: 'flex', marginBottom: '50px'}}>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/game1.jpg"} style={{width: '49%', marginTop: '5px', marginRight: '20x'}}/>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/game2.jpg"} style={{width: '48%', marginTop: '5px'}}/>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}