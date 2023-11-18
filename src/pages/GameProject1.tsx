import '../styles/University.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function GameProject1(){
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
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="C#">C#</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#008000'}}>// 마우스 왼쪽 클릭 시 플레이어 타일로 변환</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>void </span>
                    <span style={{color: '#ABB2BF'}}>PlayS(){'{'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>     if </span>
                    <span style={{color: '#ABB2BF'}}>(Input.GetMouseButtonDown(0)){'{'}</span>
                    <span style={{color: '#008000'}}>   // 마우스 왼쪽 클릭</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {'Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);'}</span>
                    <span style={{color: '#008000'}}>   // 화면에 레이저를 쏜다</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {'RaycastHit hit;'}</span>
                    <span style={{color: '#008000'}}>   // 레이저와 부딪힌 GameObject</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>       if </span>
                    <span style={{color: '#ABB2BF'}}>{'(Physics.Raycast(ray,'}</span>
                    <span style={{color: '#0000FF'}}> out </span>
                    <span style={{color: '#ABB2BF'}}>{'hit)){'}</span>
                    <span style={{color: '#008000'}}>   // 레이저와 부딪힌 객체 있음</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>           // 아무도 클릭하지 않은 곳 플레이어가 클릭 시, 플레이어 점수 변동 및 타일 색 변경</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>           if </span>
                    <span style={{color: '#ABB2BF'}}>{'(hit.transform.GetComponent<MeshRenderer>().material.color == Color.white){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>               {'hit.transform.GetComponent<MeshRenderer>().material.color = Color.Red;'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>               {'playSound1(sounds1, musicPlayer1);'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>               {'Score.Player_s += 1;'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>           {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>             // 컴퓨터가 클릭한 곳 플레이어가 클릭할 시, 플레이어와 컴퓨터 점수 변동 및 타일 색 변경</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>           else if </span>
                    <span style={{color: '#ABB2BF'}}>{'(hit.transform.GetComponent<MeshRenderer>().material.color == Color.blue){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>               {'hit.transform.GetComponent<MeshRenderer>().material.color == Color.red;'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>               {'playSound1(sounds1, musicPlayer1);'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>               {'Score.Player_s += 1;'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>               {'Score.Enemy_s -= 1;'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>           {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'}'}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4 id="컴퓨터 타일변환"><b>컴퓨터 타일변환</b></h4>
            <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/game4.png"} style={{width: '36%', marginTop: '-25px'}}/>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="C#">C#</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>void </span>
                    <span style={{color: '#ABB2BF'}}>Udate(){'{'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>timeSpan += Time.deltaTime;</span>
                    <span style={{color: '#008000'}}>   // 시간 측정</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   if </span>
                    <span style={{color: '#ABB2BF'}}>{'(timeSpan > checkTime){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {'Invoke('}</span>
                    <span style={{color: '#ff0000'}}>"ColorChange"</span>
                    <span style={{color: '#ABB2BF'}}>{', 3);'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {'timeSpan = 0;'}</span>
                    <span style={{color: '#008000'}}>   // 누적시간 초기화</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>void </span>
                    <span style={{color: '#ABB2BF'}}>ColorChange(){'{'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   int </span>
                    <span style={{color: '#ABB2BF'}}>{'i = Random.Range(0, 100);'} </span>
                    <span style={{color: '#008000'}}>   // 빙고판 랜덤 선택</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   // 플레이어가 클릭한 곳 컴퓨터가 클릭할 시, 플레이어와 컴퓨터 점수 변동 및 타일 색 변경</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   if </span>
                    <span style={{color: '#ABB2BF'}}>{'(tp._tilelist[i].GetComponent<Meshrenderer>().material.color == Color.red){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {'tp._tilelist[i].GetComponent<Meshrenderer>().material.color = Color.blue;'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {'Score.Player_s -= 1;'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {'Score.Enemy_s += 1;'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   // 아무도 클릭하지 않은 곳 컴퓨터가 클릭 시, 컴퓨터 점수 변동 및 타일 색 변경</span>
                  </span>

                  <span className="line">
                    <span style={{color: '#0000FF'}}>   else if </span>
                    <span style={{color: '#ABB2BF'}}>{'(tp._tilelist[i].GetComponent<MeshRenderer>().material.color == Color.white){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {'tp._tilelist[i].GetComponent<MeshRenderer>().material.color == Color.blue;'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>         {'Score.Enemy_s += 1;'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}> {'}'}</span>
                  </span>
                </code>
              </pre>
            </div>
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