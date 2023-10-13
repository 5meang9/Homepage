import '../styles/University.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function University1(){
  return (
    <>
      <section id="article-header">
        <div className='article-header-wrap'>
          <div id="article_h1">몬스터 👹 죽이기 게임</div>
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
            <li><a href="#article_1">Python (v3.4), pygame</a>
              <ol>
                <li><a href="#article_2">주요 기능</a>
                  <ol style={{paddingLeft: 0}}>
                    <li><a href="#배경 이미지">배경 이미지</a></li>
                    <li><a href="#캐릭터">캐릭터</a></li>
                    <li><a href="#실행화면">실행화면</a></li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </nav>
        <div id='article_1'>
          <h2 data-ke-size="size26"><b>Python (v3.4), pygame</b></h2>
          <div className='article1_contents contents_style'>
            <p>Python, Pygame 다운로드 후, py 파일에 Pygame import</p>
            <div className='article1_contents_img'>
              <img className='article1_contents_img1' src={process.env.PUBLIC_URL+"/images/Python-logo-notext.svg.png"}/>
              <span>➕</span>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/pygameImg1.png"}/>
              
            </div>
            <div className="codeBlock_stylish"><span data-ke-language="python">python</span></div>
            <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
              <code>
                <span className="line">
                  <span style={{color: '#4F6DFF'}}>import</span>
                  <span style={{color: '#ABB2BF'}}> </span>
                  <span style={{color: '#ABB2BF'}}>pygame</span>
                </span>
              </code>
            </pre>
          </div>
        </div>
        <div id='article_2'>
          <h2 data-ke-size="size26"><b>주요 기능</b></h2>
          <div className='article2_contents contents_style'>
            <h4 id="배경 이미지"><b>배경 이미지</b></h4>
            <img className='article2_contents_img1' src={process.env.PUBLIC_URL+"/images/terrain_atlas.png"}/>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="python">python</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#008000'}}># 장애물을 정의하는 클래스(Sprite 부모 클래스를 상속)</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>class </span>
                    <span style={{color: '#2B91AF'}}>GraphicWall</span>
                    <span style={{color: '#ABB2BF'}}>{"("}</span>
                    <span style={{color: '#2B91AF'}}>pygame.sprite.Sprite</span>
                    <span style={{color: '#ABB2BF'}}>{"):"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   # 이미지 추출 여러 개 복사 함수, 타일 위치/크기</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   # 스크린 위치/크기 인수로 전달</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>   def </span>
                    <span style={{color: '#2B91AF'}}>setGraphic</span>
                    <span style={{color: '#ABB2BF'}}>(self,tilex,tiley,tilewidth,tileheight,x,y,width,height):</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   # 이미지 적재</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       myimage = pygame.image.load{'('}</span>
                    <span style={{color: '#A31515'}}>"terrain_atlas.png"</span>
                    <span style={{color: '#ABB2BF'}}>{')'}.convert()</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   # 스크린에 표시될 이미지 Surface 생성</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>       self</span>
                    <span style={{color: '#ABB2BF'}}>.image = pygame.Surface([width, height])</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>       # 타일 크기 배수로 복사</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>       for </span>
                    <span style={{color: '#ABB2BF'}}>row in </span>
                    <span style={{color: '#4F6DFF'}}>range</span>
                    <span style={{color: '#ABB2BF'}}>(height//tileheight):</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>           for </span>
                    <span style={{color: '#ABB2BF'}}>column in </span>
                    <span style={{color: '#4F6DFF'}}>range</span>
                    <span style={{color: '#ABB2BF'}}>(width//tilewidth):</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>             self</span>
                    <span style={{color: '#ABB2BF'}}>.image.blit(myimage,[column*tilewidth,row*tileheight],[tilex,tiley,tilewidth,tileheight])</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>       # 이미지 크기의 rect 객체 지정</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>       self</span>
                    <span style={{color: '#ABB2BF'}}>.rect = </span>
                    <span style={{color: '#4F6DFF'}}>self</span>
                    <span style={{color: '#ABB2BF'}}>.image.get_rect() </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>       # 장애물의 스크린 위치 지정</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>       self</span>
                    <span style={{color: '#ABB2BF'}}>.rect.y = y</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>       self</span>
                    <span style={{color: '#ABB2BF'}}>.rect.x = x</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>       # 투명키 설정</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>       self</span>
                    <span style={{color: '#ABB2BF'}}>.image.set_colorkey(black)</span>
                  </span>
                </code>
              </pre>
            </div>
            <ol style={{listStyleType: 'decimal'}} data-ke-list-type="decimal">
              <li>GraphicWall 부모 클래스를 상속하는 Grass1 정의</li>
              <li><span style={{color: '#4F6DFF'}}>self</span>.setGraphic(tilex,tiley,tilewidth,tileheight,x,y,width,height) 호출해서 잔디 가져오기</li>
              <li>배경에 위치할 setupRoomOne() 메서드 생성</li>
              <li>배경에 위치할 setupRoomOne() 메서드 생성</li>
              <li>wall_list = setupRoomOne() 변수에 잔디 위치 저장</li>
              <li>wall_list.draw(screen) 배경에 잔디 노출</li>
            </ol>
            <h4 id="캐릭터"><b>캐릭터</b></h4>
            <div className='article2_contents_imgs_wrap'>
              <img className='article2_contents_imgs' src={process.env.PUBLIC_URL+"/images/main1.png"}/>
              <img className='article2_contents_imgs' src={process.env.PUBLIC_URL+"/images/main2.png"}/>
              <img className='article2_contents_imgs' src={process.env.PUBLIC_URL+"/images/main3.png"}/>
              <img className='article2_contents_imgs' src={process.env.PUBLIC_URL+"/images/main4.png"}/>
              <img className='article2_contents_imgs' src={process.env.PUBLIC_URL+"/images/main5.png"}/>
              <img className='article2_contents_imgs' src={process.env.PUBLIC_URL+"/images/main6.png"}/>
              <img className='article2_contents_imgs' src={process.env.PUBLIC_URL+"/images/main7.png"}/>
            </div>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="python">python</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>class </span>
                    <span style={{color: '#2B91AF'}}>Player</span>
                    <span style={{color: '#ABB2BF'}}>{"("}</span>
                    <span style={{color: '#2B91AF'}}>pygame.sprite.Sprite</span>
                    <span style={{color: '#ABB2BF'}}>{"):"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>   def </span>
                    <span style={{color: '#2B91AF'}}>__init__</span>
                    <span style={{color: '#ABB2BF'}}>(self):</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   # 부모 클래스 생성자 호출</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   pygame.sprite.Sprite.</span>
                    <span style={{color: '#4F6DFF'}}>__init__</span>
                    <span style={{color: '#ABB2BF'}}>(self)</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   # 플레이어 이미지 리스트 초기화</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>   self</span>
                    <span style={{color: '#ABB2BF'}}>.images=[]</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   # cat1.png ~ cat8.png 플레이어 이미지 적재</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>   for</span>
                    <span style={{color: '#ABB2BF'}}> i in </span>
                    <span style={{color: '#4F6DFF'}}>range</span>
                    <span style={{color: '#ABB2BF'}}>(1,9):</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       img = pygame.image.load{'('}</span>
                    <span style={{color: '#A31515'}}>"main"</span>
                    <span style={{color: '#ABB2BF'}}>+</span>
                    <span style={{color: '#2B91AF'}}>str</span>
                    <span style={{color: '#ABB2BF'}}>(i)+</span>
                    <span style={{color: '#A31515'}}>".png"</span>
                    <span style={{color: '#ABB2BF'}}>{')'}.convert()</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       img.set_colorkey(white)</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>       self</span>
                    <span style={{color: '#ABB2BF'}}>.images.append(img)</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   # 디폴트로 플레이어 images[0] 사용</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>     self.</span>
                    <span style={{color: '#ABB2BF'}}>image = </span>
                    <span style={{color: '#4F6DFF'}}>self</span>
                    <span style={{color: '#ABB2BF'}}>.images[0]</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   # 이미지 크기의 rect 객체 지정</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>     self</span>
                    <span style={{color: '#ABB2BF'}}>.rect = </span>
                    <span style={{color: '#4F6DFF'}}>self</span>
                    <span style={{color: '#ABB2BF'}}>.image.get_rect()</span>
                  </span>
                </code>
              </pre>

            </div>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="python">python</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>def </span>
                    <span style={{color: '#2B91AF'}}>update</span>
                    <span style={{color: '#ABB2BF'}}>(self, walls):</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>------------------중략-------------------</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   # 왼쪽 방향 이동 중인 경우</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>   if </span>
                    <span style={{color: '#ABB2BF'}}>self.change_x {'<'} 0:</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>       # 프레임 카운터 증가</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>       self</span>
                    <span style={{color: '#ABB2BF'}}>.frame += 1</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>       # 프레임 리셋</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>       if </span>
                    <span style={{color: '#4F6DFF'}}>self</span>
                    <span style={{color: '#ABB2BF'}}>.frame {'>'} 3*4:</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>           self.frame = 0</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#4F6DFF'}}>       self </span>
                    <span style={{color: '#ABB2BF'}}>.image= </span>
                    <span style={{color: '#4F6DFF'}}>self</span>
                    <span style={{color: '#ABB2BF'}}>.images[self.frame//4]</span>
                  </span>
                </code>
              </pre>
            </div>
            <ol style={{listStyleType: 'decimal'}} data-ke-list-type="decimal">
              <li>방향 키 이동 속도 벡터 값 설정</li>
              <li>if event.type == pygame.KEYDOWN <span style={{color: '#2B91AF'}}>{'--->'}</span> player.changespeed(-10,0)</li>
              <li>게임시작 <span style={{color: '#2B91AF'}}>{'--->'}</span> 몬스터와 총알 충돌 시, bullet_list.remove(bullet) 로 사라지게 한다.</li>
            </ol>
            <h4 id="실행화면"><b>실행화면</b></h4>
            <div style={{display: 'flex'}}>
              <img style={{width: '50%'}} src={process.env.PUBLIC_URL+"/images/gameStart1.png"}/>
              <img style={{width: '50%'}} src={process.env.PUBLIC_URL+"/images/gameStart2.png"}/>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}