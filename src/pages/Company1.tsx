import '../styles/University.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Company1(){
  return (
    <>
      <section id="article-header6">
        <div className='article-header-wrap'>
          <div id="article_h1">매출집계📊 구축</div>
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
            <li><a href="#article_1">Tui Grid, JavaScript, Ruby on Rails</a>
              <ol>
                <li><a href="#article_2">주요 기능</a>
                  <ol style={{paddingLeft: 0}}>
                    <li><a href="#Query 구조">Query 구조</a></li>
                    <li><a href="#Tui Grid Tree 구조 설명">Tui Grid Tree 구조 설명</a></li>
                    <li><a href="#트리구조 구현">트리구조 구현</a></li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </nav>
        <div id='article_1' className='company_wrap'>
          <h2 data-ke-size="size26"><b style={{fontSize: '1.2rem'}}>Tui Grid, JavaScript, Ruby on Rails</b></h2>
          <div className='article1_contents contents_style'>
            <p>Tui Grid</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - 데이터 편집, 필터링, 정렬 등과 같은 기능이 있는 라이브러리이며 <br/> 
            편집기나 렌더러를 원하는 형식으로 사용자 정의하는데 사용할 수 있다.</p>
            <div style={{marginLeft: '14px'}}>
              <a href="https://github.com/nhn/tui.grid" target={'_blank'}>https://github.com/nhn/tui.grid</a>
            </div>
            <p>Ruby on Rails</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - MVC 패턴 사용</p>
            <p style={{marginTop: '17px', marginLeft: '20px'}}> * Model : 애플리케이션 정보, 데이터를 나타냄.</p>
            <p style={{marginTop: '17px', marginLeft: '20px'}}> * View : input 텍스트, 체크박스 항목 등과 같은 사용자 인터페이스 요소를 나타냄.</p>
            <p style={{marginTop: '17px', marginLeft: '20px'}}> * Controller : 데이터와 사용자 인터페이스 요소들을 잇는 다리역할.</p>

            <div className='article1_contents_img'>
              <img className='article1_contents_img1' style={{verticalAlign: 'super', width: '34%'}} src={process.env.PUBLIC_URL+"/images/toast_ui.png"}/>
              <span>➕</span>
              <img className='article1_contents_img2' style={{verticalAlign: 'bottom', width: '13%'}} src={process.env.PUBLIC_URL+"/images/javascript.png"}/>
              <span>➕</span>
              <img className='article1_contents_img2' style={{verticalAlign: 'bottom', width: '16%'}} src={process.env.PUBLIC_URL+"/images/ruby1.png"}/>
            </div>
          </div>
        </div>
        <div id='article_2'>
          <h2 data-ke-size="size26"><b>주요 기능</b></h2>
          <div className='article2_contents contents_style'>
            <h4 id="Query 구조"><b>Query 구조</b></h4>
            <img className='article2_contents_img1' style={{width: '56%'}} src={process.env.PUBLIC_URL+"/images/query_coll.png"}/>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="postgresql">postgresql</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#2B91AF'}}>with tabs as{'('}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"(select"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"date_trunc('month',date)as gagongdate,"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"..."}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"sum(coalesce(p_ea,0)) as p_ea"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"from sales"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"where data::date between {start_date}::date and {end_date}::date"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"group by 1,2,3,4)"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>   {"union all"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"(select"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"date_trunc('month',closed_at)as gagongdate,"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"..."}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"sum(coalesce(sod.shipping_qty,0)) as p_ea"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"from sales_orders so"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"join sales_order_details sod"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"on so.id = sod.sales_order_id and so.rm_tf is no true"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"where closed_at::date between {start_date}::date and {end_date}::date"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"group by 1,2,3,4)"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"(select"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"date_trunc('month',o.closed_at)as gagongdate,"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"..."}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"sum(p_ea) - sum(case when claim_return_status_code == '04' then claim_return_qty else 0 end) as p_ea,"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"from sabang_orders o"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"where closed_at::date between {start_date}::date and {end_date}::date"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"group by 1,2,3,4)"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>   {"union all"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"..."}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}> {")select"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>     {"..."}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}> {"from tabs t"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}> {"..."}</span>
                  </span>
                </code>
              </pre>
            </div>
            <ol style={{listStyleType: 'decimal'}} data-ke-list-type="decimal">
              <li>각 매출집계 테이블의 필요한 컬럼 조회</li>
              <li>매출집계 테이블 <span style={{color: '#4F6DFF'}}>union all </span>로 합치기</li>
              <li>with as 로 묶은 쿼리 조회</li>
            </ol>
            <h4 id="Tui Grid Tree 구조 설명"><b>Tui Grid Tree 구조 설명</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="JavaScript">JavaScript</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"name: 'main category',"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"_children: ["}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>     {"{"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"name: 'sub category'"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>     {"},"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>      {"..."}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"]"}</span>
                  </span>
                </code>
              </pre>
            </div>
            <ol style={{listStyleType: 'decimal'}} data-ke-list-type="decimal">
              <li>name {'==>'} tree 구조 객체를 만들기 위한 key, 커스텀 가능</li>
              <li>_children {'==>'} name 의 하위로 노출될 서브 카테고리 객체</li>
              <li>하위로 만들고 싶지 않다면, 대카테고리의 같은 선상에 객체를 만들면 된다.</li>
            </ol>
            <h4 id="트리구조 커스텀"><b>트리구조 커스텀</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="JavaScript">JavaScript</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>function </span>
                    <span style={{color: '#2B91AF'}}>makeTreeData</span>
                    <span style={{color: '#ABB2BF'}}>(datas, onlyNameCol){'{'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   trees = [];</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   let brandTmp;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   let findBrandIndex = 0;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   ...</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'datas.forEach((row, index) => {'}</span>
                    <span style={{color: '#008000'}}>  //컨트롤러 데이터 row 별로 순회</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"Object.keys(row).forEach(col => {"}</span>
                    <span style={{color: '#008000'}}>  //brand, gubun1, gubun2, gubun3 ... 키값으로 순회</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>           {"if(col == 'brand'){"}</span>
                    <span style={{color: '#008000'}}> //컬럼이 brand 일 때</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB0080002BF'}}>             {"//현재 행의 브랜드가 이전 브랜드와 같지 않을 경우에 객체 배열 만들어줌."}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>             {"if(row[col] !== brandTmp){"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>                 //{"[{item:'AGL',depth:1,_children:[]}, {item:'AND',depth:1,_children:[]}]"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>                 //{" => item 에 brand, 트리구조로 만들 _children 배열 구조로 생성"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>                 {"brandTmp = row[col];"}</span>
                    <span style={{color: '#008000'}}> //이전 brand 저장</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>                 //col 을 제외한 sum, 2023-01-01, 2023-02-01 등의 키를 가진 객체 생성</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>                 {"onlyNameCol.forEach(col => makeObj[col] = row[col]);"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>                 {"trees.push({item:row[col],depth:1, ...makeObj, ...(hasCategory && {_children:[]})});"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>                 //previous 브랜드와 같은 값을 가진 트리의 인덱스 구하기</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>                 {"findBrandIndex = trees.findIndex(obj => obj.item === brandTmp);"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>                 {"gubun1Tmp = '';"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>              {"}else{"}</span>
                    <span style={{color: '#008000'}}>  //현재 행의 브랜드가 previous 브랜드와 같지을 경우</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>                  //sum, 2023-01-01, 2023-02-01 등 키의 값을 더해준다.</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>                 {"onlyNameCol.forEach(col => trees[findBrandIndex][col] += row[col]);"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>                 {"makeObj = {};"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>              {"}"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>            -------------------중략------------------------ </span>
                  </span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}