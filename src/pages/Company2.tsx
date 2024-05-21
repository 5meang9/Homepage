import '../styles/University.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CodeBlock from '../component/CodeBlock';

export default function Company2(){
  const texts1 = `
  start_date = is_date.to_date
  #작년이면, 당해년도 마지막날로 end_date 를 잡음
  end_date = is_date.to_date.year === Date.today.year ? Date.today : is_date.to_date.at_end_of_year
  #월요일 기준 날짜array
  days = start_date.upto(end_date).map {|day| day.send('beginning_of_week')}.uniq
  # ex) 2023-01-02-A : 수량/ 2023-01-02-B 매출 => columns 만들어주기
  date_columns = days.map.with_index {|day, i| 
    [
      {
        header: "#{day.strftime("%-Y/%-m/%-d")+"~"+(day+6).strftime("%-Y/%-m/%-d ")+(i.to_s+"주")+" 개수"}",
        name:day.strftime("%Y-%m-%d")+"-A",
        width: 80,
      },
    ]
  }.flatten
  ------------------중략-------------------
  `;
  const texts2 = `
  function makeHeaderSpecs(columns){
    let cutHeader;
    complexColumns = [];
    var index = 0;
    copyHeader = ;
    columns.forEach((c,i) =>{
      if(c.name != 'category_1' && c.name != 'category_2'){ //대분류/중분류 제외
        cutHeader = c.header.split(' ');
        columns[i]['subTitle'] = cutHeader[2];//개수 or 매출액
        if(c.subTitle == "개수"){
          columns[i]['mainTitle'] = cutHeader[0]+' '+cutHeader[1]; //ex) 2021/12/27~2022/1/2 0주
          index++;
        }else{
          columns[i]['mainTitle'] = 'empty';
        }
      }
    })
  }
  `;

  return (
    <>
      <section id="article-header7">
        <div className='article-header-wrap'>
          <div id="article_h1" style={{color: '#000'}}>주간보고 매출💹 구축</div>
          <div className="text-center">
            <div className='scroll-btn'>
              <span className="mouse" style={{borderColor: '#000'}}>
                <span style={{backgroundColor: '#000'}}></span>
              </span> 
            </div>
            <a href="#firstSection">
              <div className="link-arrow-bounce">
                <FontAwesomeIcon icon={faChevronDown} bounce style={{color: "#000",}} />
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
            <li><a href="#article_1">HTML, JavaScript, Ruby on Rails</a>
              <ol>
                <li><a href="#article_2">주요 기능</a>
                  <ol style={{paddingLeft: 0}}>
                    <li><a href="#Query 구조">Query 구조</a></li>
                    <li><a href="#thead 데이터 만들기">thead 데이터 만들기</a></li>
                    <li><a href="#thead 주별 주기">thead 주별 주기</a></li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </nav>
        <div id='article_1' className='company_wrap'>
          <h2 data-ke-size="size26"><b style={{fontSize: '1.2rem'}}>HTML, JavaScript, Ruby on Rails</b></h2>
          <div className='article1_contents contents_style'>
            <p>HTML</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - position sticky를 이용하여 thead, 대/중분류 틀고정 추가</p>
            <img className='article1_contents_img1' style={{width: '80%'}} src={process.env.PUBLIC_URL+"/images/sticky.gif"}/>
            <p>JavaScript</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - 동적 element 생성</p>
            <p>Ruby on Rails</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - MVC 패턴 사용</p>
            <p style={{marginTop: '17px', marginLeft: '20px'}}> * Model : 애플리케이션 정보, 데이터를 나타냄.</p>
            <p style={{marginTop: '17px', marginLeft: '20px'}}> * View : input 텍스트, 체크박스 항목 등과 같은 사용자 인터페이스 요소를 나타냄.</p>
            <p style={{marginTop: '17px', marginLeft: '20px'}}> * Controller : 데이터와 사용자 인터페이스 요소들을 잇는 다리역할.</p>

            <div className='article1_contents_img'>
              <img className='article1_contents_img1' style={{verticalAlign: 'bottom', width: '14%'}} src={process.env.PUBLIC_URL+"/images/htmlLogo2.png"}/>
              <span>➕</span>
              <img className='article1_contents_img2' style={{width: '13%',verticalAlign: 'bottom'}} src={process.env.PUBLIC_URL+"/images/javascript.png"}/>
              <span>➕</span>
              <img className='article1_contents_img2' style={{width: '16%', verticalAlign: 'bottom'}} src={process.env.PUBLIC_URL+"/images/ruby1.png"}/>
            </div>
          </div>
        </div>
        <div id='article_2'>
          <h2 data-ke-size="size26"><b>주요 기능</b></h2>
          <div className='article2_contents contents_style'>
            <h4 id="Query 구조"><b>Query 구조</b></h4>
            <img className='article2_contents_img1' style={{width: '56%'}} src={process.env.PUBLIC_URL+"/images/query_coll.png"}/>
           
            <h4 id="thead 데이터 만들기"><b>thead 데이터 만들기</b></h4>
            <CodeBlock language="Ruby" contents={texts1} />
            <ol style={{listStyleType: 'decimal'}} data-ke-list-type="decimal">
              <li>같은 주간의 개수/매출액 노출위해 존재</li>
              <li>is_date {'===>'} 파라미터로 받아온 날짜</li>
            </ol>
            <h4 id="thead 주별 주기"><b>thead 주별 주기</b></h4>
            <CodeBlock language="JAVASCRIPT" contents={texts2} />
          </div>
        </div>
      </div>


    </>
  )
}