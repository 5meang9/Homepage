import '../styles/University.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function University2(){
  return (
    <>
      <section id="article-header1">
        <div className='article-header-wrap'>
          <div id="article_h1" style={{color:'#000'}}>온라인 쇼핑몰 제작 👛</div>
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
            <li><a href="#article_1">HTML, CSS, JAVASCRIPT</a>
              <ol>
                <li><a href="#article_2">주요 기능</a>
                  <ol style={{paddingLeft: 0}}>
                    <li><a href="#다이나믹 배너(HTML)">다이나믹 배너(HTML)</a></li>
                    <li><a href="#다이나믹 배너(JABASCRIPT)">다이나믹 배너(JABASCRIPT)</a></li>
                    <li><a href="#실행화면">실행화면</a></li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </nav>
        <div id='article_1'>
          <h2 data-ke-size="size26"><b>HTML, CSS, JAVASCRIPT</b></h2>
          <div className='article1_contents contents_style'>
            <p>HTML(v5.1), CSS, JAVASCRIPT(ES6) 사용</p>
            <p style={{marginTop: 0}}>개발환경 : eclipse</p>
            <p style={{marginTop: 0}}>HTML DIR : Shopping {'>'} WebContent</p>
            <p style={{marginTop: 0}}>JS DIR : Shopping {'>'} WebContent {'>'} js</p>
            <div className='article1_contents_img'>
              <img className='article1_contents_img1' src={process.env.PUBLIC_URL+"/images/webLogo2.jpg"} style={{width: '41%', marginTop: '-50px', verticalAlign: 'bottom'}}/>
              <span>➕</span>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/Eclipse-Luna-Logo.svg.png"} style={{width: '41%', verticalAlign: 'bottom'}}/>
            </div>
          </div>
        </div>
        <div id='article_2'>
          <h2 data-ke-size="size26"><b>주요 기능</b></h2>
          <div className='article2_contents contents_style'>
            <h4 id="다이나믹 배너(HTML)"><b>다이나믹 배너(HTML)</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="HTML">HTML</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#1E50B3'}}>{'<div '}</span>
                    <span style={{color: '#8CDCFE'}}>style=</span>
                    <span style={{color: '#CE9178'}}>"position: relative; top: 200px;"</span>
                    <span style={{color: '#1E50B3'}}>{'> '}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#1E50B3'}}>{' <div '}</span>
                    <span style={{color: '#8CDCFE'}}>class=</span>
                    <span style={{color: '#CE9178'}}>"slide"</span>
                    <span style={{color: '#1E50B3'}}>{'> '}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#1E50B3'}}>{'   <button '}</span>
                    <span style={{color: '#8CDCFE'}}>class=</span>
                    <span style={{color: '#CE9178'}}>"prev"</span>
                    <span style={{color: '#8CDCFE'}}> type=</span>
                    <span style={{color: '#CE9178'}}>"button"</span>
                    <span style={{color: '#1E50B3'}}>{'>'}</span>

                  </span>
                  <span className="line">
                    <span style={{color: '#1E50B3'}}>     {'<img '}</span>
                    <span style={{color: '#8CDCFE'}}>id=</span>
                    <span style={{color: '#CE9178'}}>"slide_img"</span>
                    <span style={{color: '#8CDCFE'}}> src=</span>
                    <span style={{color: '#CE9178'}}>"images/left.JPG"</span>
                    <span style={{color: '#8CDCFE'}}> alt=</span>
                    <span style={{color: '#CE9178'}}>"left"</span>
                    <span style={{color: '#1E50B3'}}> {'/> '}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#1E50B3'}}>   {'</button>' }</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#1E50B3'}}>   {'<ul>'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#1E50B3'}}>       {'<li>'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#1E50B3'}}>         {'<img '}</span>
                    <span style={{color: '#8CDCFE'}}>id=</span>
                    <span style={{color: '#CE9178'}}>"slide_img" </span>
                    <span style={{color: '#8CDCFE'}}>src=</span>
                    <span style={{color: '#CE9178'}}>"images/그림1.PNG" </span>
                    <span style={{color: '#8CDCFE'}}> alt=</span>
                    <span style={{color: '#CE9178'}}>"NO"</span>
                    <span style={{color: '#8CDCFE'}}> width=</span>
                    <span style={{color: '#CE9178'}}>"1200"</span>
                    <span style={{color: '#8CDCFE'}}> width=</span>
                    <span style={{color: '#CE9178'}}>"400"</span>
                    <span style={{color: '#1E50B3'}}>{'/>'}</span>
                  </span>
                  <span className='line'>
                    <span style={{color: '#1E50B3'}}>       {'</li>'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#1E50B3'}}>         {'<img '}</span>
                    <span style={{color: '#8CDCFE'}}>id=</span>
                    <span style={{color: '#CE9178'}}>"slide_img" </span>
                    <span style={{color: '#8CDCFE'}}>src=</span>
                    <span style={{color: '#CE9178'}}>"images/그림2.PNG" </span>
                    <span style={{color: '#8CDCFE'}}> alt=</span>
                    <span style={{color: '#CE9178'}}>"NO"</span>
                    <span style={{color: '#8CDCFE'}}> width=</span>
                    <span style={{color: '#CE9178'}}>"1200"</span>
                    <span style={{color: '#8CDCFE'}}> width=</span>
                    <span style={{color: '#CE9178'}}>"400"</span>
                    <span style={{color: '#1E50B3'}}>{'/>'}</span>
                  </span>
                  <span className='line'>
                    <span style={{color: '#1E50B3'}}>       {'</li>'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#1E50B3'}}>         {'<img '}</span>
                    <span style={{color: '#8CDCFE'}}>id=</span>
                    <span style={{color: '#CE9178'}}>"slide_img" </span>
                    <span style={{color: '#8CDCFE'}}>src=</span>
                    <span style={{color: '#CE9178'}}>"images/그림3.PNG" </span>
                    <span style={{color: '#8CDCFE'}}> alt=</span>
                    <span style={{color: '#CE9178'}}>"NO"</span>
                    <span style={{color: '#8CDCFE'}}> width=</span>
                    <span style={{color: '#CE9178'}}>"1200"</span>
                    <span style={{color: '#8CDCFE'}}> width=</span>
                    <span style={{color: '#CE9178'}}>"400"</span>
                    <span style={{color: '#1E50B3'}}>{'/>'}</span>
                  </span>
                  <span className='line'>
                    <span style={{color: '#1E50B3'}}>       {'</li>'}</span>
                  </span>
                  <span className='line'>
                    <span style={{color: '#1E50B3'}}>   {'</ul>'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#1E50B3'}}>{'   <button '}</span>
                    <span style={{color: '#8CDCFE'}}>class=</span>
                    <span style={{color: '#CE9178'}}>"next"</span>
                    <span style={{color: '#8CDCFE'}}> type=</span>
                    <span style={{color: '#CE9178'}}>"button"</span>
                    <span style={{color: '#1E50B3'}}>{'>'}</span>
                  </span>
                  <span className='line'>
                    <span style={{color: '#1E50B3'}}>  {'</div>'}</span>
                  </span>
                  <span className='line'>
                    <span style={{color: '#1E50B3'}}> {'</div>'}</span>
                  </span>
                </code>
              </pre>
            </div>
            <ol style={{listStyleType: 'decimal'}} data-ke-list-type="decimal">
              <li>slide 픽셀 1200, 위치 relative</li>
              <li>첫번째 이미지만 노출 되도록 css 조정</li>
              <li>arrow 버튼 위치 absolute, top 픽셀 220 </li>
            </ol>
            <h4 id="다이나믹 배너(JABASCRIPT)"><b>다이나믹 배너(JABASCRIPT)</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="python">python</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"("}</span>
                    <span style={{color: '#4F6DFF'}}>function()</span>
                    <span style={{color: '#ABB2BF'}}>{"{"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>   var </span>
                    <span style={{color: '#ABB2BF'}}>current = 0;</span>
                    <span style={{color: '#A31515'}}> //현재위치</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>   var </span>
                    <span style={{color: '#ABB2BF'}}>max = 0;</span>
                    <span style={{color: '#A31515'}}> //이미지 개수</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>   var </span>
                    <span style={{color: '#ABB2BF'}}>container;</span>
                    <span style={{color: '#A31515'}}> //list 요소를 감싸고 있는 ul</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>   var </span>
                    <span style={{color: '#ABB2BF'}}>interval;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>   function </span>
                    <span style={{color: '#ABB2BF'}}>init(){'{'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       container=jQuery{'('}</span>
                    <span style={{color: '#A31515'}}>".slice ul"</span>
                    <span style={{color: '#ABB2BF'}}>{')'};</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       max=container.children().length;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>       events();</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       interval=setInterval(next, 3000);</span>
                    <span style={{color: '#A31515'}}> //이미지 자동 넘김 실행</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>   function </span>
                    <span style={{color: '#ABB2BF'}}>events(){'{'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       jQuery{'('}</span>
                    <span style={{color: '#A31515'}}>"button.prev"</span>
                    <span style={{color: '#ABB2BF'}}>{')'}</span>
                    <span style={{color: '#ABB2BF'}}>.on{'('}</span>
                    <span style={{color: '#A31515'}}>"click"</span>
                    <span style={{color: '#ABB2BF'}}>, prev{')'};</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       jQuery{'('}</span>
                    <span style={{color: '#A31515'}}>"button.next"</span>
                    <span style={{color: '#ABB2BF'}}>{')'}</span>
                    <span style={{color: '#ABB2BF'}}>.on{'('}</span>
                    <span style={{color: '#A31515'}}>"click"</span>
                    <span style={{color: '#ABB2BF'}}>, next{')'};</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>   function </span>
                    <span style={{color: '#ABB2BF'}}>prev(e){'{'}</span>
                    <span style={{color: '#A31515'}}> //마지막 이미지일 때 첫번째로 이동</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       current--;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       if(current {'<'}0) current=max-1;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>       animation();</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>   function </span>
                    <span style={{color: '#ABB2BF'}}>next(e){'{'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       current++;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       if(current {'>'}max-1) current=0;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>       animation();</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'}'}</span>
                  </span>

                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>   function </span>
                    <span style={{color: '#ABB2BF'}}>animation(){'{'}</span>
                    <span style={{color: '#A31515'}}> //이미지 넘김 액션</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>       var </span>
                    <span style={{color: '#ABB2BF'}}>moveX=current*1200;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       TweenMax.to(container, 0.8, {'{'}marginLeft:-moveX, ease:Expo.easeOut{'}'});</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>       clearInterval(interval);</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       interval = setInterval(next, 3000);</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   jQuery(document).ready(init);</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'})'}();</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4 id="실행화면"><b>실행화면</b></h4>
            <div style={{display: 'flex', marginBottom: '50px', justifyContent: 'space-between'}}>
              <img style={{width: '45%', border: '1px solid #000'}} src={process.env.PUBLIC_URL+"/images/prdDetail.png"}/>
              <img style={{width: '45%', border: '1px solid #000'}} src={process.env.PUBLIC_URL+"/images/prdDetail1.png"}/>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}