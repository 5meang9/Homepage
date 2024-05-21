import '../styles/University.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CodeBlock from '../component/CodeBlock';

export default function Company3(){
  const texts1 = `
  const el = document.getElementById('chart-area');
  const data = {
    categories: [
      '01/01/2020',
      '02/01/2020',
      '03/01/2020',
      '04/01/2020'
    ],
    series: [
      {
        name: 'Seoul',
        data: [-3.5, -1.1, 4.0, 11.3, 17.5, 21.5, 25.9, 27.2, 24.4, 13.9, 6.6, -0.6],
      },
    ]
  }
  `;
  const texts2 = `
  def make_dash_board_datas
    # common_qry 는 매출집계 쿼리와 동일
    _is_week_qry = common_qry(true, is_week_start_date, is_week_end_date)
    # Query 로 집계한 데이터
    _is_week_datas = ActiveRecord::Base.connection.execute(_is_week_qry).as_json
    is_week_sum = 0
    _is_week_datas.each{|row| is_week_sum += row['summary'].to_i}
    is_week_average = is_week_sum / (_is_week_datas.size*2)
    week_series = []
    week_series = [
      # Tui Chart series 구성으로 데이터 구현
      {'name' => '평균', 'data' => [is_week_average] * _is_week_datas.size},
      {'name' => '지난해', 'data' => _is_week_datas.map{|data| data['previous'].to_i}},
      {'name' => '올해', 'data' => _is_week_datas.map{|data| data['recent'].nil? ? nil : data['recent'].to_i}}
    ]
  end
  `;
  const texts3 = `
  const weekOptions = {
    chart: {height: 600, width: window.innerWidth/2.2},
    legend: {align: 'top'},
    series: {spline: true,selectable: false,showDot: true},
    yAxis: {
      label: {
        formatter: (value) => {
          if(value >= 100000000){
            return \`\${numberWithCommas((value*0.00000001).toFixed(1))} 억\`;
   ------------------------------중략-------------------------------
  const weekDatas = {
    categories:weekCategories,
    series:weekSeries
  };
  chart1 = new LineChart({
    el: document.getElementById('chart-area7'),
    data:weekDatas,
    options:weekOptions
  });
  `;

  return (
    <>
      <section id="article-header8">
        <div className='article-header-wrap'>
          <div id="article_h1" style={{color: '#fff'}}>대시보드📈</div>
          <div className="text-center">
            <div className='scroll-btn'>
              <span className="mouse" style={{borderColor: '#fff'}}>
                <span style={{backgroundColor: '#fff'}}></span>
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
            <li><a href="#article_1">Tui Chart, JavaScript, Ruby on Rails</a>
              <ol>
                <li><a href="#article_2">주요 기능</a>
                  <ol style={{paddingLeft: 0}}>
                    <li><a href="#Query 구조">Query 구조</a></li>
                    <li><a href="#Tui Chart 구조 설명">Tui Chart 구조 설명</a></li>
                    <li><a href="#Tui chart Data 생성">Tui chart Data 생성</a></li>
                    <li><a href="#Tui chart 그리기">Tui chart 그리기</a></li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </nav>
        <div id='article_1' className='company_wrap'>
          <h2 data-ke-size="size26"><b style={{fontSize: '1.1rem'}}>Tui Chart, JavaScript, Ruby on Rails</b></h2>
          <div className='article1_contents contents_style'>
            <p>Tui Chart</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - 막대, 기둥, 선 등과 같은 여러 차트 제공</p>
            <div style={{marginLeft: '14px'}}>
              <a href="https://github.com/nhn/tui.chart" target={'_blank'}>https://github.com/nhn/tui.chart</a>
            </div>
            <p>JavaScript</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - Tui chart y 축 커스텀</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - Tui chart 라이브러리 사용</p>
            <p>Ruby on Rails</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - MVC 패턴 사용</p>
            <p style={{marginTop: '17px', marginLeft: '20px'}}> * Model : 애플리케이션 정보, 데이터를 나타냄.</p>
            <p style={{marginTop: '17px', marginLeft: '20px'}}> * View : input 텍스트, 체크박스 항목 등과 같은 사용자 인터페이스 요소를 나타냄.</p>
            <p style={{marginTop: '17px', marginLeft: '20px'}}> * Controller : 데이터와 사용자 인터페이스 요소들을 잇는 다리역할.</p>

            <div className='article1_contents_img'>
              <img className='article1_contents_img1' style={{verticalAlign: 'super', width: '34%'}} src={process.env.PUBLIC_URL+"/images/chartLogo.png"}/>
              <span>➕</span>
              <img className='article1_contents_img2' style={{width: '13%', verticalAlign: 'bottom'}} src={process.env.PUBLIC_URL+"/images/javascript.png"}/>
              <span>➕</span>
              <img className='article1_contents_img2' style={{width: '16%', verticalAlign: 'bottom'}} src={process.env.PUBLIC_URL+"/images/ruby1.png"}/>
            </div>
          </div>
        </div>
        <div id='article_2'>
          <h2 data-ke-size="size26"><b>주요 기능</b></h2>
          <div className='article2_contents contents_style' id="Query 구조">
            <h4><b>Query 구조</b></h4>
            <img className='article2_contents_img1' style={{width: '56%'}} src={process.env.PUBLIC_URL+"/images/query_coll.png"}/>
            <h4 id='Tui Chart 구조 설명'><b>Tui chart 구조 설명</b></h4>
            <CodeBlock language="JavaScript" contents={texts1} />
            <ol style={{listStyleType: 'decimal'}} data-ke-list-type="decimal">
              <li>category {'==>'} 라인차트의 legend를 나타낸다.</li>
              <li>series {'==>'} 라인차트가 그려질 데이터</li>
            </ol>
            <h4 id="Tui chart Data 생성"><b>Tui chart Data 생성</b></h4>
            <CodeBlock language="Ruby" contents={texts2} />
            <h4 id="Tui chart 그리기"><b>Tui chart 그리기</b></h4>
            <CodeBlock language="JavaScript" contents={texts3} />
            <ol style={{listStyleType: 'decimal'}} data-ke-list-type="decimal">
              <li>weekOptions {'==>'} legend 위치, 라인차트에 점 노출, y축 범위 조정 등 설정.</li>
              <li>chart1 {'==>'} 옵션 및 데이터 합쳐서 라인 차트로 노출시킨다.</li>
            </ol>
          </div>
        </div>
      </div>


    </>
  )
}