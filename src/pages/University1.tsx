import '../styles/University.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CodeBlock from '../component/CodeBlock';

export default function University1(){
  const univerTexts1 = `
  import pygame
  `
  const univerTexts2 = `
  # 장애물을 정의하는 클래스(Sprite 부모 클래스를 상속)
  class GraphicWall(pygame.sprite.Sprite):
    # 이미지 추출 여러 개 복사 함수, 타일 위치/크기
    # 스크린 위치/크기 인수로 전달
    def setGraphic(self,tilex,tiley,tilewidth,tileheight,x,y,width,height):
      # 이미지 적재
      myimage = pygame.image.load("terrain_atlas.png").convert()
      # 스크린에 표시될 이미지 Surface 생성
      self.image = pygame.Surface([width, height])
      # 타일 크기 배수로 복사
      for row in range(height//tileheight):
        for column in range(width//tilewidth):
          self.image.blit(myimage,[column*tilewidth,row*tileheight],[tilex,tiley,tilewidth,tileheight])
      # 이미지 크기의 rect 객체 지정
      self.rect = self.image.get_rect() 
      # 장애물의 스크린 위치 지정
      self.rect.y = y
      self.rect.x = x
      # 투명키 설정
      self.image.set_colorkey(black)
  `

  const univerTexts3 = `
  class Player(pygame.sprite.Sprite):
    def __init__(self):
    # 부모 클래스 생성자 호출
    pygame.sprite.Sprite.__init__(self)
    # 플레이어 이미지 리스트 초기화
    self.images=[]
    # cat1.png ~ cat8.png 플레이어 이미지 적재
    for i in range(1,9):
      img = pygame.image.load("main"+str(i)+".png").convert()
      img.set_colorkey(white)
      self.images.append(img)
    # 디폴트로 플레이어 images[0] 사용
    self.image = self.images[0]
    # 이미지 크기의 rect 객체 지정
    self.rect = self.image.get_rect()
  `

  const univerTexts4 = `
  def update(self, walls):
  ------------------중략-------------------
    # 왼쪽 방향 이동 중인 경우
    if self.change_x < 0:
      # 프레임 카운터 증가
      self.frame += 1
      # 프레임 리셋
      if self.frame > 3*4:
        self.frame = 0
      self .image= self.images[self.frame//4]
  `

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
            <CodeBlock language='PYTHON' contents={univerTexts1} />
          </div>
        </div>
        <div id='article_2'>
          <h2 data-ke-size="size26"><b>주요 기능</b></h2>
          <div className='article2_contents contents_style'>
            <h4 id="배경 이미지"><b>배경 이미지</b></h4>
            <img className='article2_contents_img1' src={process.env.PUBLIC_URL+"/images/terrain_atlas.png"}/>
            <CodeBlock language="PYTHON" contents={univerTexts2} />
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
            <CodeBlock language="PYTHON" contents={univerTexts3} />
            <CodeBlock language="PYTHON" contents={univerTexts4} />
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