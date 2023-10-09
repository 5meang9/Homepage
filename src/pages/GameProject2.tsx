import '../styles/University.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function GameProject2(){
  return (
    <>
      <section id="article-header4">
        <div className='article-header-wrap'>
          <div id="article_h1" style={{color:'#fff'}}>Unity 엔진을 이용한 던전 게임 🎮</div>
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
                    <li><a href="#기본_태그_사용법">캐릭터 직업 xml파일로 세팅</a></li>
                    <li><a href="#기본_태그_사용법">XML 로드</a></li>
                    <li><a href="#기본_태그_사용법">XML 적용</a></li>
                    <li><a href="#아이콘_여백_정렬">실행화면</a></li>
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
            <p style={{marginTop: 0}}>인원수 선택 만큼 자리 배열</p>
            <p style={{marginTop: 0}}>XML 파일 read 및 기본값 설정 메소드에 활용</p>
            <div className='article1_contents_img'>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/unityLogo.png"} style={{width: '36%', marginTop: '-25px'}}/>
              <span>➕</span>
              <img className='article1_contents_img1' src={process.env.PUBLIC_URL+"/images/Clogo.png"} style={{width: '15%', marginTop: '-50px'}}/>
            </div>
          </div>
        </div>
        <div id='article_2'>
          <h2 data-ke-size="size26"><b>주요 기능</b></h2>
          <div className='article2_contents contents_style'>
            <h4><b>캐릭터 직업 xml파일로 세팅</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="XML">XML</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>{'<?'}</span>
                    <span style={{color: '#A31515'}}>{'xml'} </span>
                    <span style={{color: '#ff0000'}}>{'version'} </span>
                    <span style={{color: '#0000FF'}}>{'="1.0"'} </span>
                    <span style={{color: '#ff0000'}}>{'encoding'} </span>
                    <span style={{color: '#0000FF'}}>{'="UTF-8"'} </span>
                    <span style={{color: '#ff0000'}}>{'standalone'} </span>
                    <span style={{color: '#0000FF'}}>{'="yes"?>'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>{'<'}</span>
                    <span style={{color: '#A31515'}}>{'Basic'} </span>
                    <span style={{color: '#ff0000'}}>{'xmlns:xsi'} </span>
                    <span style={{color: '#0000FF'}}>{'="http://www.w3.org/2001/SMLSchema-instance">'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>{'<'}</span>
                    <span style={{color: '#A31515'}}>{'Monster-set'}</span>
                    <span style={{color: '#0000FF'}}>{'>'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>{'<'}</span>
                    <span style={{color: '#A31515'}}>{'Monster'}</span>
                    <span style={{color: '#0000FF'}}>{'>'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>{'<'}</span>
                    <span style={{color: '#A31515'}}>{'MoName'}</span>
                    <span style={{color: '#0000FF'}}>{'>'}</span>
                    <span style={{color: '#ABB2BF'}}>{'SKELETION'}</span>
                    <span style={{color: '#0000FF'}}>{'</'}</span>
                    <span style={{color: '#A31515'}}>{'MoName'}</span>
                    <span style={{color: '#0000FF'}}>{'>'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>{'<'}</span>
                    <span style={{color: '#A31515'}}>{'hP'}</span>
                    <span style={{color: '#0000FF'}}>{'>'}</span>
                    <span style={{color: '#ABB2BF'}}>{'9, 14, 18'}</span>
                    <span style={{color: '#0000FF'}}>{'</'}</span>
                    <span style={{color: '#A31515'}}>{'hP'} </span>
                    <span style={{color: '#0000FF'}}>{'>'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'-------------중략-------------'}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4><b>XML 로드</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="C#">C#</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>void </span>
                    <span style={{color: '#ABB2BF'}}>CreateXml(){'{'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'TextAsset textAsset = (TextAsset)Resources.Load('}</span>
                    <span style={{color: '#ff0000'}}>"Dungeon_Data"</span>
                    <span style={{color: '#ABB2BF'}}>{');'}</span>
                    <span style={{color: '#008000'}}>   // xml 파일 로드</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'XmlDocument xmlDoc = '} </span>
                    <span style={{color: '#0000ff'}}>new </span>
                    <span style={{color: '#ABB2BF'}}>{'XmlDocumnet();'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'XmlDoc.LoadXml(textAsset.text);'} </span>
                    <span style={{color: '#008000'}}>   // 로드 한 sml 파일 테스트 형식으로 저장</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   // 각 속성에 해당하는 부분을 찾아 Read</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'MonNodes = xmlDoc.SelectNodes('}</span>
                    <span style={{color: '#ff0000'}}>"Basic/Monster-set/Monster"</span>
                    <span style={{color: '#ABB2BF'}}>{');'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'-------------------중략-------------------'}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4><b>XML 적용</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="C#">C#</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>public </span>
                    <span style={{color: '#ABB2BF'}}>{'XmlNode OutNode(Stage.roomType.rTyp){'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   int </span>
                    <span style={{color: '#ABB2BF'}}>{'count = 0;'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   int </span>
                    <span style={{color: '#ABB2BF'}}>{'idx = 0;'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'XmlNode Node = '} </span>
                    <span style={{color: '#0000FF'}}>null </span>
                    <span style={{color: '#ABB2BF'}}>{';'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>switch </span>
                    <span style={{color: '#ABB2BF'}}>{'(rTyp){'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   // 몬스터방 일 때, xml에 저장한 7마리 몬스터(이름, 체력, 데미지) 중 랜덤으로 1마리 뽑아 text 출력</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>       case </span>
                    <span style={{color: '#ABB2BF'}}>{'Stage.roomType.MON:'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>           {'count = dm.MonNodes.Count;'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>           {'idx = Random.Range(0, count);'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>           {'Node = dm.MonNodes[idx];'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>           return </span>
                    <span style={{color: '#ABB2BF'}}>{'Node;'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'-------------------중략-------------------'}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4><b>실행화면</b></h4>
            <div className='img_col' style={{display: 'flex'}}>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/game5.jpg"} style={{width: '48%', marginTop: '5px'}}/>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/game6.jpg"} style={{width: '48%', marginTop: '5px', marginLeft: '20x !important'}}/>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}