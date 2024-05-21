import '../styles/University.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CodeBlock from '../component/CodeBlock';

export default function Company4(){
  const texts1 = `
  Class Request < ApplicationRecord
    ....
    has_many_attached :files
  end
  `;
  const texts2 = `
  private
   def request_params
       params.require(:requests).permit(:id, :title, :request, :response, :requester_id, :respondents_id, :responsed_at, files: [])
   end
  `;
  const texts3 = `
  // 삽입
  _request.files.attach(params[:fileList])
  // 삭제
  delete_files.each{|el| _request.files.find_by_id(el).purge} unless delete_files.nil?
  `;
  const texts4 = `
  // drag over 시, 효과 주기
  const dragOverHandler = (ev) => {
    ev.preventDefault();
    let getFileAttach = document.querySelector('.file_attach');
    getFileAttach.classList.add('drag_in');
  }
  // drag and drop 파일 첨부
  const dropHandler = (ev) => {
    let fileListUl = document.querySelector('.upld_flist > ul');
    let getFileAttach = document.querySelector('.file_attach');
    getFileAttach.classList.remove('drag_in');
    // 이벤트 더블링 막기
    ev.preventDefault();
    if (ev.dataTransfer.items) {
        // dataTransfer 를 이용하여 파일에 접근
        [...ev.dataTransfer.items].forEach((item, i) => {
          // drop한 item이 파일이 아닌 경우, 거절하기
          if (item.kind === 'file') {
              const file = item.getAsFile();
              dataTransfer.items.add(file);
          }
        });
    } else {
      [...ev.dataTransfer.files].forEach((file, i) => {
          dataTransfer.items.add(file);
      });
  }
  // PC 텍스트 클릭 > 파일첨부 창으로 첨부하는 경우
  const onFilePicked = (e) => {
    let fileListUl = document.querySelector('.upld_flist > ul');
    if(isNew){ fileListUl.replaceChildren();}
    [...(e.target.files)].forEach(row => {dataTransfer.items.add(row);});
    drawFileList(dataTransfer.files, fileListUl);
  }
  `;
  const texts5 = `
  url:Rails.application.routes.url_helpers.rails_blob_path(f,only_path:true)
  `;

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
            <CodeBlock language="Ruby" contents={texts1} />
            <h4 id='Tui Chart 구조 설명'><b>Controller 정의</b></h4>
            <CodeBlock language="Ruby" contents={texts2} />
            <CodeBlock language="Ruby" contents={texts3} />
            <h4 id="첨부파일 추가"><b>첨부파일 추가</b></h4>
            <CodeBlock language="JavaScript" contents={texts4} />
            <h4 id="첨부파일 다운로드"><b>첨부파일 다운로드</b></h4>
            <CodeBlock language="Ruby" contents={texts5} />
          </div>
        </div>
      </div>


    </>
  )
}