import '../styles/University.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Company4(){
  return (
    <>
      <section id="article-header9">
        <div className='article-header-wrap'>
          <div id="article_h1" style={{color: '#000'}}>DX팀에 요청❓</div>
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
            <li><a href="#article_1">Modal, JavaScript, Ruby on Rails</a>
              <ol>
                <li><a href="#article_2">주요 기능</a>
                  <ol style={{paddingLeft: 0}}>
                    <li><a href="#Active Storage">Active Storage</a></li>
                    <li><a href="#첨부파일 추가">첨부파일 추가</a></li>
                    <li><a href="#첨부파일 다운로드">첨부파일 다운로드</a></li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </nav>
        <div id='article_1' className='company_wrap'>
          <h2 data-ke-size="size26"><b style={{fontSize: '1.1rem'}}>Modal, JavaScript, Ruby on Rails</b></h2>
          <div className='article1_contents contents_style'>
            <p>Modal</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - 부트스트랩 모달 사용</p>
            <div style={{marginLeft: '14px'}}>
              <a href="https://getbootstrap.com/docs/4.0/components/modal/" target={'_blank'}>https://getbootstrap.com/docs/4.0/components/modal/</a>
            </div>
            <p>JavaScript</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - 첨부파일 드래그 앤 드랍 추가</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - 첨부파일 탐색기 오픈</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - 첨부파일 여러개 추가 가능</p>
            <p>Ruby on Rails</p>
            <p style={{marginTop: '17px', marginLeft: '14px'}}> - Active Storage 사용</p>

            <div className='article1_contents_img'>
              <img className='article1_contents_img1' style={{verticalAlign: 'bottom', width: '18%'}} src={process.env.PUBLIC_URL+"/images/boot.png"}/>
              <span>➕</span>
              <img className='article1_contents_img2' style={{width: '13%', verticalAlign: 'bottom'}} src={process.env.PUBLIC_URL+"/images/javascript.png"}/>
              <span>➕</span>
              <img className='article1_contents_img2' style={{width: '16%', verticalAlign: 'bottom'}} src={process.env.PUBLIC_URL+"/images/ruby1.png"}/>
            </div>
          </div>
        </div>
        <div id='article_2'>
          <h2 data-ke-size="size26"><b>주요 기능</b></h2>
          <div className='article2_contents contents_style' id="Active Storage">
            <h4><b>Active Storage</b></h4>
            <img className='article2_contents_img1' style={{width: '80%'}} src={process.env.PUBLIC_URL+"/images/polymorphic.jpg"}/>
            <h4 id='Tui Chart 구조 설명'><b>Model 정의</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="Ruby">Ruby</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"Class Request < ApplicationRecord"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"...."}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"has_many_attached :files"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"end"}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4 id='Tui Chart 구조 설명'><b>Controller 정의</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="Ruby">Ruby</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"private"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"def request_params"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"params.require(:requests).permit(:id, :title, :request, :response, :requester_id, :respondents_id, :responsed_at, files: [])"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"end"}</span>
                  </span>
                </code>
              </pre>
            </div>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="Ruby">Ruby</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#008000'}}>// 삽입</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"_request.files.attach(params[:fileList])"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>// 삭제</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"delete_files.each{|el| _request.files.find_by_id(el).purge} unless delete_files.nil?"}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4 id="첨부파일 추가"><b>첨부파일 추가</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="JavaScript">JavaScript</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#008000'}}> // drag over 시, 효과 주기</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"const dragOverHandler = (ev) => {"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"ev.preventDefault();"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"let getFileAttach = document.querySelector('.file_attach');"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"getFileAttach.classList.add('drag_in');"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"}"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}> // drag and drop 파일 첨부</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"const dropHandler = (ev) => {"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"let fileListUl = document.querySelector('.upld_flist > ul');"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"let getFileAttach = document.querySelector('.file_attach');"}</span>
                  </span>
                  <span className="line">
                      <span style={{color: '#ABB2BF'}}>   {"getFileAttach.classList.remove('drag_in');"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   // 이벤트 더블링 막기</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"ev.preventDefault();"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"if (ev.dataTransfer.items) {"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>       // dataTransfer 를 이용하여 파일에 접근</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"[...ev.dataTransfer.items].forEach((item, i) => {"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>         // drop한 item이 파일이 아닌 경우, 거절하기</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>         {"if (item.kind === 'file') {"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>             {"const file = item.getAsFile();"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>             {"dataTransfer.items.add(file);"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>         {"}"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {"});"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"} else {"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>     {"[...ev.dataTransfer.files].forEach((file, i) => {"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>         {"dataTransfer.items.add(file);"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>     {"});"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"}"}</span>
                  </span>
                  <span className="line"></span>
                  <span className="line">
                    <span style={{color: '#008000'}}>{"// PC 텍스트 클릭 > 파일첨부 창으로 첨부하는 경우"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"const onFilePicked = (e) => {"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"let fileListUl = document.querySelector('.upld_flist > ul');"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"if(isNew){ fileListUl.replaceChildren();}"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"[...(e.target.files)].forEach(row => {dataTransfer.items.add(row);});"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {"drawFileList(dataTransfer.files, fileListUl);"}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"}"}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4 id="첨부파일 다운로드"><b>첨부파일 다운로드</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="Ruby">Ruby</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{"url:Rails.application.routes.url_helpers.rails_blob_path(f,only_path:true)"}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4><b>자세한 화면을 보고 싶으면 이동해주세요.</b></h4>
            <div style={{marginLeft: '14px', marginTop: '-30px', marginBottom: '20px'}}>id: jw.oh / pw: 1111</div>
            <div style={{marginLeft: '14px', marginBottom: '25px'}}>
              <a href="http://obbbfb.com:2020/requests" target={'_blank'}>http://obbbfb.com:2020/requests</a>
            </div>
            <div>
              <b>링크에 바로 연결이 안될 시, 아래 메뉴를 통해 확인 부탁 드립니다.</b>
              <img className='article1_contents_img1' style={{width: '100%', marginTop: '25px', marginBottom: '50px'}} src={process.env.PUBLIC_URL+"/images/request.png"}/>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}