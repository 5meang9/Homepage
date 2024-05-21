
import NewBespokeCombine from "./BespokeCombine";
// import './NewBespoke/NewBespoke'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CodeBlock from '../component/CodeBlock';

 
export default function Bespoke(){

  const bespokeTexts1 = `
  export class JnsBespoke{ 
    static productsCodes = { 
      "0JSM1TT40301F": { 
        size: "S", 
        imgs: [ 
          "/bespoke_assets/products/lucky_pleats_s/starry/front/GOLD.jpg", 
          "/bespoke_assets/products/lucky_pleats_s/starry/side/GOLD.jpg" 
        ] 
      } 
    } 
  } 
  `
  const bespokeTexts2 = `
  let bespoke = JnsBespoke.productCodes["0JSM1TT40301F"];
  defaultImg(bespoke){ 
    if (bespoke){
      switch (bespoke.size){
        case "S": 
          // front에 보여질 이미지 가져오기
          this.previewFrontImg.getElementsByTagName("img")[0].src = bespoke.imgs[0]; 
          // strap에 보여질 이미지 가져오기
          this.previewStrapImg.getElementsByTagName("img")[0].src = bespoke.imgs[1]; 
      }
    }
  }
  `
  const bespokeTexts3 = `
  bespokeToggleClick(_this){
    if(_this.bespokeContainer.classList.contains("active"){
      // 비스포크 열고 닫힘이 가능
      _this.bespokeContainer.classList.remove("active");
    }else{
      _this.bespokeContainer.classList.add("active");
    }
  }
  `
  const bespokeTexts4 = `
  .bespoke-container{
    display: none;
  }
  .bespoke-container.active{
    display: block;
  }
  `
  
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
                    <li><a href="#비스포크 이미지 불러오기">비스포크 이미지 불러오기</a></li>
                    <li><a href="#addClass active">addClass active</a></li>
                    <li><a href="#실행화면 및 동작 화면">실행화면 및 동작화면</a></li>

                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </nav>
        <div id='article_1'>
          <h2 data-ke-size="size26"><b style={{fontSize: '1.2rem'}}>JAVA, Window Form Application</b></h2>
          <div className='article1_contents contents_style'>
            <p>JavaScript ES6, vsCode, HTML, CSS</p>
            <p style={{marginTop: 0}}>JavaScript : 제품이미지 적재, 자수 위치, 자수 노출 등 기능</p>
            <p style={{marginTop: 0}}>HTML + CSS : addClass 이용하여 화면 노출/미노출 구현</p>
            <div className='article1_contents_img'>
              <img className='article1_contents_img1' src={process.env.PUBLIC_URL+"/images/webLogo2.jpg"} style={{width: '41%', verticalAlign: 'bottom'}}/>
              <span>➕</span>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/vscodeLogo.png"} style={{width: '14%', verticalAlign: 'bottom'}}/>
            </div>
          </div>
        </div>
        <div id='article_2'>
          <h2 data-ke-size="size26"><b>주요 기능</b></h2>
          <div className='article2_contents contents_style'>
            <h4 id="비스포크 이미지 불러오기"><b>비스포크 이미지 불러오기</b></h4>
            <CodeBlock language='JAVASCRIPT' contents={bespokeTexts1} />
            <CodeBlock language='JAVASCRIPT' contents={bespokeTexts2} />

            <h4 id="addClass active"><b>addClass active</b></h4>
            <CodeBlock language='JAVASCRIPT' contents={bespokeTexts3} />
            <CodeBlock language='CSS' contents={bespokeTexts4} />

            <h4 id="실행화면 및 동작화면"><b>실행화면 및 동작화면(직접 테스트 가능합니다. [버튼]을 눌러보세요)</b></h4>
            
          </div>
          <NewBespokeCombine />
        </div>
      </div>
    </div>
    </>
  )
}