import '../styles/University.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CodeBlock from '../component/CodeBlock';

export default function Study1(){
  const texts1 = `
  private float moveSpeed = 3f;
  void Update(){
    // 속도 3인 아래방향으로 배경 흐름
    transform.position += Vector3.down * moveSpeed * Time.deltaTime;
    // 배경의 y 좌표가 -10으로 떨어지면 20으로 올림
    if(transform.position.y < -10){
      transform.position += new Vector3(0, 20f, 0);
    }
  }
  `;
  const texts2 = `
  // 현재 마우스 위치를 가져온다
  Vector3 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
  // 최소,최대보다 작거나 크면 해당하는 값을 적용하여 배경 밖으로 나가지 않게 유지
  float toX = Mathf.Clamp(mousePos.x, -2.35f, 2.35f);
  // 캐릭터 좌우로 움직임
  transform.position = new Vector3(toX, transform.position.y, transform.position.z);
  `;
  const texts3 = `
  // 객체 연결
  [SerializeField]
  private GameObject[] weapons;
  // 무기가 시작 될 위치 선정
  [SerializeField]
  private Transform shootTransform;
  private Transform shootTransform;
  [SerializeField]
  // 0.05초로 무기 발사
  private float shootInterval = 0.05f;
  // 마지막으로 무기를 발사한 시간
  private float lastShotTime = 0f;
  void Shoot(){
    if(Time.time - lastShotTime > shootInterval){ // 무기 발사하는 시간의 간격을 준다
      // 회전 없이 shootTransform 위치에서 무기 객체 노출
      Instantiate(weapons[weaponIndex], shootTransform.position, Quaternion.identity);
      lastShotTime = Time.time;
    }
  }
  `;

  const texts4 = `
  [SerializeField]
  // 적의 체력
  private float hp = 1f;
  // 충돌 감지
  private void OnTriggerEnter2D(Collider2D other){
    // 무기와 적이 충돌했을 때
    if(other.gameObject.tag == "Weapon"){
      Weapon weapon = other.gameObject.GetComponent<Weapon>();
      hp -= weapon.damage;
      if(hp <= 0){ // 적의 체력이 닳았을 때
        Destroy(gameObject); // 적 사라짐
      }
      // 무기 사라짐
      Destroy(other.gameObject);
    }
  }
  `


  return (
    <>
      <section id="article-header10">
        <div className='article-header-wrap'>
          <div id="article_h1" style={{color: '#000'}}>드래곤🐉 플라이트 구현하기</div>
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
            <li><a href="#article_1">C#, Unity Engine</a>
              <ol>
                <li><a href="#article_2">주요 기능</a>
                  <ol style={{paddingLeft: 0}}>
                    <li><a href="#배경 이미지">배경 이미지</a></li>
                    <li><a href="#캐릭터">캐릭터</a></li>
                    <li><a href="#적과 무기의 상호작용">적과 무기의 상호작용</a></li>
                    <li><a href="#실행화면">실행화면</a></li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </nav>
        <div id='article_1' className='company_wrap'>
          <h2 data-ke-size="size26"><b>C#, Unity Engine</b></h2>
          <div className='article1_contents contents_style'>
            <p>C#</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - 무한 배경이미지</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - 캐릭터 움직임, 무기 구현</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - 랜덤 적 배치</p>
            <p>Unity</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - prefabs 객체</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - Rigidbody 2D</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - Circle Collider 2D</p>
            <p>reference</p>
            <div className='reference_text'>
              <a href='https://www.youtube.com/@nadocoding' style={{marginTop: '17px', marginLeft: '14px'}}><p> - 유튜버 나도코딩</p></a>
            </div>

            <div className='article1_contents_img'>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/unityLogo.png"} style={{width: '20%', verticalAlign: 'bottom'}}/>
              <span style={{fontSize: '5vw'}}>➕</span>
              <img className='article1_contents_img1' src={process.env.PUBLIC_URL+"/images/Clogo.png"} style={{width: '8%', verticalAlign: 'bottom'}}/>
            </div>
            
          </div>
        </div>
        <div id='article_2'>
          <h2 data-ke-size="size26"><b>주요 기능</b></h2>
          <div className='article2_contents contents_style' id="Active Storage">
            <h4 id="배경 이미지"><b>배경 이미지</b></h4>
            <CodeBlock language="C#" contents={texts1} />
            <h4 id='캐릭터'><b>캐릭터</b></h4>
            <h6><b>마우스로 움직이고 배경안에 머무르기</b></h6>
            <CodeBlock language="C#" contents={texts2} />
            <h6><b>무기 발사</b></h6>
            <CodeBlock language="C#" contents={texts3} />
            <h4 id="적과 무기의 상호작용"><b>적과 무기의 상호작용</b></h4>
            <CodeBlock language="C#" contents={texts4} />
            <h4 id="실행화면"><b>실행화면</b></h4>
            <div className='img_col' style={{display: 'flex'}}>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/gamePlay.gif"} style={{width: '29%', marginTop: '5px', marginBottom: '50px'}}/>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}