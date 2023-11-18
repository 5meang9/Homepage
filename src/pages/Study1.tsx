import '../styles/University.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Study1(){
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
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="C#">C#</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"private float moveSpeed = 3f;"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"void Update(){"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   // 속도 3인 아래방향으로 배경 흐름</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"transform.position += Vector3.down * moveSpeed * Time.deltaTime;"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   // 배경의 y 좌표가 -10으로 떨어지면 20으로 올림</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"if(transform.position.y < -10){"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"transform.position += new Vector3(0, 20f, 0);"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"}"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"}"}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4 id='캐릭터'><b>캐릭터</b></h4>
            <h6><b>마우스로 움직이고 배경안에 머무르기</b></h6>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="C#">C#</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#008000'}}>// 현재 마우스 위치를 가져온다</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"Vector3 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>// 최소,최대보다 작거나 크면 해당하는 값을 적용하여 배경 밖으로 나가지 않게 유지</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"float toX = Mathf.Clamp(mousePos.x, -2.35f, 2.35f);"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>// 캐릭터 좌우로 움직임</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"transform.position = new Vector3(toX, transform.position.y, transform.position.z);"}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h6><b>무기 발사</b></h6>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="C#">C#</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#008000'}}>// 객체 연결</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"[SerializeField]"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"private GameObject[] weapons;"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>// 무기가 시작 될 위치 선정</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"[SerializeField]"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"private Transform shootTransform;"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"private Transform shootTransform;"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"[SerializeField]"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>// 0.05초로 무기 발사</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"private float shootInterval = 0.05f;"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>// 마지막으로 무기를 발사한 시간</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"private float lastShotTime = 0f;"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"void Shoot(){"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"if(Time.time - lastShotTime > shootInterval){"}</span>
                    <span style={{color: '#008000'}}> // 무기 발사하는 시간의 간격을 준다</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>       // 회전 없이 shootTransform 위치에서 무기 객체 노출</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"Instantiate(weapons[weaponIndex], shootTransform.position, Quaternion.identity);"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"lastShotTime = Time.time;"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"}"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"}"}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4 id="적과 무기의 상호작용"><b>적과 무기의 상호작용</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="C#">C#</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"[SerializeField]"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>// 적의 체력</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"private float hp = 1f;"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}> // 충돌 감지</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"private void OnTriggerEnter2D(Collider2D other){"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   // 무기와 적이 충돌했을 때</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'if(other.gameObject.tag == "Weapon"){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"Weapon weapon = other.gameObject.GetComponent<Weapon>();"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"hp -= weapon.damage;"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"if(hp <= 0){"}</span>
                    <span style={{color: '#008000'}}> // 적의 체력이 닳았을 때</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>           {"Destroy(gameObject);"}</span>
                    <span style={{color: '#008000'}}> // 적 사라짐</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"}"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>       // 무기 사라짐</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"Destroy(other.gameObject);"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"}"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"}"}</span>
                  </span>
                </code>
              </pre>
            </div>
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