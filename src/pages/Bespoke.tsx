
import NewBespokeCombine from "./BespokeCombine";
// import './NewBespoke/NewBespoke'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
 
export default function Bespoke(){

  return(
    <>
    <div>
      <section id="article-header5">
        <div className='article-header-wrap'>
          <div id="article_h1" style={{color:'#000'}}>리뉴얼 전 비스포크</div>
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
            <li><a href="#article_1">JAVASCRIPT, HTML, CSS</a>
              <ol>
                <li><a href="#article_2">주요 기능</a>
                  <ol style={{paddingLeft: 0}}>
                    <li><a href="#동작화면">비스포크 이미지 불러오기</a></li>
                    <li><a href="#기본_태그_사용법">addClass active</a></li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </nav>
        <div id='article_1'>
          <h2 data-ke-size="size26"><b>JAVA, Window Form Application</b></h2>
          <div className='article1_contents contents_style'>
            <p>JavaScript ES6, vsCode, HTML, CSS</p>
            <p style={{marginTop: 0}}>JavaScript : 제품이미지 적재, 자수 위치, 자수 노출 등 기능</p>
            <p style={{marginTop: 0}}>HTML + CSS : addClass 이용하여 화면 노출/미노출 구현</p>
            <div className='article1_contents_img'>
              <img className='article1_contents_img1' src={process.env.PUBLIC_URL+"/images/webLogo2.jpg"} style={{width: '41%', marginTop: '-50px'}}/>
              <span>➕</span>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/vscodeLogo.png"} style={{width: '14%', marginTop: '-44px'}}/>
            </div>
          </div>
        </div>
        <div id='article_2'>
          <h2 data-ke-size="size26"><b>주요 기능</b></h2>
          <div className='article2_contents contents_style'>
            <h4><b>비스포크 이미지 불러오기</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="JAVASCRIPT">JAVASCRIPT</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>export class </span>
                    <span style={{color: '#2B91AF'}}>JnsBespoke</span>
                    <span style={{color: '#ABB2BF'}}>{'{'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   static </span>
                    <span style={{color: '#ABB2BF'}}>{'productsCodes = {'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {'"0JSM1TT40301F": {'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>           {'size:'} </span>
                    <span style={{color: '#ABB2BF'}}>{'"S",'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>           {'imgs:'} </span>
                    <span style={{color: '#ABB2BF'}}>{'['} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>             {'"/bespoke_assets/products/lucky_pleats_s/starry/front/GOLD.jpg",'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>             {'"/bespoke_assets/products/lucky_pleats_s/starry/side/GOLD.jpg"'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>            {']'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>        {'}'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>    {'}'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'}'} </span>
                  </span>
                </code>
              </pre>
            </div>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="JAVASCRIPT">JAVASCRIPT</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>let bespoke = JnsBespoke.productCodes["0JSM1TT40301F"];</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>defaultImg</span>
                    <span style={{color: '#ABB2BF'}}>{'(bespoke){'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   if </span>
                    <span style={{color: '#ABB2BF'}}>{'(bespoke){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>       switch </span>
                    <span style={{color: '#ABB2BF'}}>{'(bespoke.size){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>         {'case'} </span>
                    <span style={{color: '#ABB2BF'}}>{'"S":'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>           // front에 보여질 이미지 가져오기</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>           {'this'}</span>
                    <span style={{color: '#ABB2BF'}}>{'.previewFrontImg.getElementsByTagName("img")[0].src = bespoke.imgs[0];'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>           // strap에 보여질 이미지 가져오기</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>           {'this'}</span>
                    <span style={{color: '#ABB2BF'}}>{'.previewStrapImg.getElementsByTagName("img")[0].src = bespoke.imgs[1];'} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>         {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>     {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'}'}</span>
                  </span>
                </code>
              </pre>
            </div>

            <h4><b>addClass active</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="JAVASCRIPT">JAVASCRIPT</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'bespokeToggleClick(_this){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'if(_this.bespokeContainer.classList.contains("active"){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>       // 비스포크 열고 닫힘이 가능</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {'_this.bespokeContainer.classList.remove("active");'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'}else{'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {'_this.bespokeContainer.classList.add("active");'}</span>
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
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="CSS">CSS</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'.bespoke-container{'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'display: none;'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'.bespoke-container.active{'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'display: block;'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'}'}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4><b>실행화면 및 동작화면(직접 테스트 가능합니다. [버튼]을 눌러보세요)</b></h4>
            
          </div>
          <NewBespokeCombine />
        </div>
      </div>
    </div>
    </>
  )
}