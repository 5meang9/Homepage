import '../styles/University.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function University4(){
  return (
    <>
      <section id="article-header3">
        <div className='article-header-wrap'>
          <div id="article_h1" style={{color:'#fff'}}>유아👶교육 용 산수 프로그램 제작</div>
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
            <li><a href="#article_1">JAVA, ANDROID STUDIO, OPENCV, TESSERACT OCR</a>
              <ol>
                <li><a href="#article_2">주요 기능</a>
                  <ol style={{paddingLeft: 0}}>
                    <li><a href="#동작화면">Tesseract Tools 사용하기</a></li>
                    <li><a href="#기본_태그_사용법">Class MainActivity Tesseract import 및 사용</a></li>
                    <li><a href="#아이콘_크기_설정법">안드로이드 카메라 접근</a></li>
                    <li><a href="#아이콘_여백_정렬">캡쳐 이미지와 tesseract</a></li>
                    <li><a href="#아이콘_여백_정렬">Calc 메서드 (우선순위 계산)</a></li>
                    <li><a href="#아이콘_여백_정렬">실행화면 및 동작화면</a></li>

                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </nav>
        <div id='article_1'>
          <h2 data-ke-size="size26"><b>JAVA, Window Form Application</b></h2>
          <div className='article1_contents contents_style'>
            <p>Java SE 10, Android Studio 3.1, OPENCV, TESSERACT OCR</p>
            <p style={{marginTop: 0}}>OPENCV : 문자인식, OCR 학습</p>
            <p style={{marginTop: 0}}>TESSERACT OCR : 흑백 전환, ROI 영역 처리</p>
            <p style={{marginTop: 0}}>Android Studio : 애플리케이션 구현, 카메라 연동, 촬영 된 수학문제 계산</p>
            <div className='article1_contents_img'>
              <img className='article1_contents_img1' src={process.env.PUBLIC_URL+"/images/android_stu.png"} style={{width: '15%', marginTop: '-50px'}}/>
              <span>➕</span>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/openCvLogo.png"} style={{width: '14%', marginTop: '-25px'}}/>
              <span>➕</span>
              <img className='article1_contents_img3' src={process.env.PUBLIC_URL+"/images/Tesseract_OCR_logo.png"} style={{width: '33%', marginTop: '-43px'}}/>
            </div>
          </div>
        </div>
        <div id='article_2'>
          <h2 data-ke-size="size26"><b>주요 기능</b></h2>
          <div className='article2_contents contents_style'>
            <h4><b>Tesseract Tools 사용하기</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="JAVA">JAVA</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#008000'}}>// Android 상에서 Tesseract Tools 사용하기 위한 설정</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>dependencies{'{'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   compile</span>
                    <span style={{color: '#008000'}}> 'com.rmtheis : tess-two:6.3.0'</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'}'}</span>
                  </span>
                </code>
              </pre>
            </div>

            <h4><b>Class MainActivity Tesseract import 및 사용</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="JAVA">JAVA</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>static TessBaseAPI </span>
                    <span style={{color: '#ABB2BF'}}> sTess;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>@Override </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}> protected void </span>
                    <span style={{color: '#2B91AF'}}> onCreate</span>
                    <span style={{color: '#ABB2BF'}}>{'('} </span>
                    <span style={{color: '#0000FF'}}>{'Bundle'} </span>
                    <span style={{color: '#ABB2BF'}}>savedInstanceState{'){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>---------------------중략----------------------</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   lang = </span>
                    <span style={{color: '#ff0000'}}>"ttes"</span>
                    <span style={{color: '#ABB2BF'}}>;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   datapath = getFilesDir() + </span>
                    <span style={{color: '#ff0000'}}>"/tesseract"</span>
                    <span style={{color: '#ABB2BF'}}>;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   if </span>
                    <span style={{color: '#ABB2BF'}}>{'('}checkFile{'('}</span>
                    <span style={{color: '#0000FF'}}>new File </span>
                    <span style={{color: '#ABB2BF'}}>{'('}datapath+</span>
                    <span style={{color: '#ff0000'}}>"/tessdata"</span>
                    <span style={{color: '#ABB2BF'}}>{'))){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       sTess.init(datapath, lang);</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'}'}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4><b>안드로이드 카메라 접근</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="JAVA">JAVA</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>@Override </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>protected void </span>
                    <span style={{color: '#2B91AF'}}> onCreate</span>
                    <span style={{color: '#ABB2BF'}}>{'('} </span>
                    <span style={{color: '#0000FF'}}>{'Bundle'} </span>
                    <span style={{color: '#ABB2BF'}}>savedInstanceState{'){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   mBtnCameraView.setOnClickListener{'('}</span>
                    <span style={{color: '#0000FF'}}>new View.OnClickListener</span>
                    <span style={{color: '#ABB2BF'}}>(){'{'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   @Override </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   protected void </span>
                    <span style={{color: '#2B91AF'}}> onClick</span>
                    <span style={{color: '#ABB2BF'}}>{'('}</span>
                    <span style={{color: '#0000FF'}}>{'View'} </span>
                    <span style={{color: '#ABB2BF'}}>v{'){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>       Intent </span>
                    <span style={{color: '#ABB2BF'}}>mittCamera = </span>
                    <span style={{color: '#0000FF'}}>{'new Intent'} </span>
                    <span style={{color: '#ABB2BF'}}>{'('}</span>
                    <span style={{color: '#0000FF'}}>{'MainActivity.this, CameraView'} </span>
                    <span style={{color: '#ABB2BF'}}>{'.class);'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       startActivityForResult(mittCamera, ACTIVITY_REQUEST_CODE);</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'});'}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4><b>캡쳐 이미지와 tesseract</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="JAVA">JAVA</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>public void</span>
                    <span style={{color: '#2B91AF'}}> onClickButton</span>
                    <span style={{color: '#ABB2BF'}}>{'('}</span>
                    <span style={{color: '#0000FF'}}>{'View'} </span>
                    <span style={{color: '#ABB2BF'}}>v{'){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   bmp_result =  </span>
                    <span style={{color: '#0000FF'}}>Bitmap</span>
                    <span style={{color: '#ABB2BF'}}>.crateBitmap{'('}m_matRoi,cols(), m_matRoi.rows(),</span>
                    <span style={{color: '#0000FF'}}>Bitmap.Config</span>
                    <span style={{color: '#ABB2BF'}}>ARGB_8888{')'};</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   Utils</span>
                    <span style={{color: '#ABB2BF'}}>.matToBitmap(m_matRoi, bmp_result);</span>
                    <span style={{color: '#008000'}}>// Mat 을 비트맵으로 변환</span>
                  </span>
                  <span className="line"></span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   // 캡쳐한 이미지를 ROI 영역 안에 표시</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   mImageCapture.setVisivility{'('}</span>
                    <span style={{color: '#0000FF'}}>View</span>
                    <span style={{color: '#ABB2BF'}}>VISIVLE{')'};</span>
                  </span>
                  <span className="line"></span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   new AsyncTess</span>
                    <span style={{color: '#ABB2BF'}}>()..execute(bmp_result);</span>
                    <span style={{color: '#008000'}}>// 캡쳐 이미지 tesseract-ocr 입력 데이터로 사용</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'}'}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4><b>Tesseract 인식</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="JAVA">JAVA</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>private class</span>
                    <span style={{color: '#2B91AF'}}> AsyncTess</span>
                    <span style={{color: '#0000FF'}}> extends</span>
                    <span style={{color: '#2B91AF'}}> AsyncTask{'<'}</span>
                    <span style={{color: '#0000FF'}}>Bitmap, Integer, String</span>
                    <span style={{color: '#2B91AF'}}>{'>'}</span>
                    <span style={{color: '#ABB2BF'}}>{'{'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   @Override </span>
                    <span style={{color: '#008000'}}>   // 스레드에 의해 처리될 내용을 담기 위한 함수</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   protected String </span>
                    <span style={{color: '#2B91AF'}}> doInBackground</span>
                    <span style={{color: '#ABB2BF'}}>{'('}</span>
                    <span style={{color: '#0000FF'}}>{'Bitmap'} </span>
                    <span style={{color: '#ABB2BF'}}>... mRelativeParams{'){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       sTess.setImage(bmp_result);</span>
                    <span style={{color: '#008000'}}>// Tesseract OCR 수행</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>       return </span>
                    <span style={{color: '#ABB2BF'}}>sTess.getUTF8Text();</span>
                    <span style={{color: '#008000'}}>// getUTF8Text를 통해 텍스트 추출 결과 반환</span>
                  </span>
                  <span className="line"></span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   protected void </span>
                    <span style={{color: '#2B91AF'}}> onPostexecute</span>
                    <span style={{color: '#ABB2BF'}}>{'('}</span>
                    <span style={{color: '#0000FF'}}>{'String'} </span>
                    <span style={{color: '#ABB2BF'}}>result{'){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       mTextOcrResult.setText(m_strOcrResult+"="+Calc(m_strOcrResult));</span>
                    <span style={{color: '#008000'}}>// 계산식=값 text 출력</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'}'}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4><b>Calc 메서드 (우선순위 계산)</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="JAVA">JAVA</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>private String</span>
                    <span style={{color: '#2B91AF'}}> Calc</span>
                    <span style={{color: '#ABB2BF'}}>{'('}</span>
                    <span style={{color: '#0000FF'}}>{'String'} </span>
                    <span style={{color: '#ABB2BF'}}>str{'){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   int</span>
                    <span style={{color: '#ABB2BF'}}>cnt = 0;</span>
                    <span style={{color: '#008000'}}>// 계산 결과를 저장할 변수</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   Stack{'<'}Integer{'>'} Stk_Num </span>
                    <span style={{color: '#ABB2BF'}}>{'='} </span>
                    <span style={{color: '#0000FF'}}>new Stack{'<'}Integer{'>'}</span>
                    <span style={{color: '#ABB2BF'}}>();</span>
                    <span style={{color: '#008000'}}>// 연산자를 제외한 정수를 저장할 스택 객체 생성</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   StringTokenizer ST_Num  </span>
                    <span style={{color: '#ABB2BF'}}>{'='} </span>
                    <span style={{color: '#0000FF'}}>new StringTokenizer</span>
                    <span style={{color: '#ABB2BF'}}>{'(str,'}</span>
                    <span style={{color: '#ff0000'}}>"+-/* "</span>
                    <span style={{color: '#ABB2BF'}}>{');'}</span>
                    <span style={{color: '#008000'}}>// 계산식을 연산자 기분으로 분리</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   StringTokenizer ST_Oper </span>
                    <span style={{color: '#ABB2BF'}}>{'='} </span>
                    <span style={{color: '#0000FF'}}>new StringTokenizer</span>
                    <span style={{color: '#ABB2BF'}}>{'(str,'}</span>
                    <span style={{color: '#ff0000'}}>"1234567890 "</span>
                    <span style={{color: '#ABB2BF'}}>{');'}</span>
                    <span style={{color: '#008000'}}>// 계산식을 정수 기준으로 분리, 연산가 저장</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   Stk_Num</span>
                    <span style={{color: '#ABB2BF'}}>{'.push('} </span>
                    <span style={{color: '#0000FF'}}>Integer</span>
                    <span style={{color: '#ABB2BF'}}>{'parseInt('}</span>
                    <span style={{color: '#0000FF'}}>ST_Num</span>
                    <span style={{color: '#ABB2BF'}}>{'.nextToken()));'}</span>
                    <span style={{color: '#008000'}}>// 첫번째 정수값을 스택에 저장</span>
                  </span>
                  <span className="line"></span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'while('} </span>
                    <span style={{color: '#0000FF'}}>ST_Num</span>
                    <span style={{color: '#ABB2BF'}}>{'.hasMoreTokens()){'} </span>
                    <span style={{color: '#008000'}}>// 정수값이 계속 존재할 경우</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>       char </span>
                    <span style={{color: '#ABB2BF'}}>{'oper = '} </span>
                    <span style={{color: '#0000FF'}}>ST_Oper</span>
                    <span style={{color: '#ABB2BF'}}>{'.nextToken().charAt(0);'} </span>
                    <span style={{color: '#008000'}}>// 연산자를 oper변수에 저장</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>       String</span>
                    <span style={{color: '#ABB2BF'}}>{'num = '} </span>
                    <span style={{color: '#0000FF'}}>ST_Num</span>
                    <span style={{color: '#ABB2BF'}}>{'.nextToken();'} </span>
                    <span style={{color: '#008000'}}>// 다음 정수값을 스택에 저장</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>       int </span>
                    <span style={{color: '#ABB2BF'}}>{'a; '} </span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>       if</span>
                    <span style={{color: '#ABB2BF'}}>{'(oper == '} </span>
                    <span style={{color: '#ff0000'}}>'*'</span>
                    <span style={{color: '#ABB2BF'}}>{'){'} </span>
                    <span style={{color: '#008000'}}>// 연산자가 '*' 경우</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       a = </span>
                    <span style={{color: '#0000FF'}}>Stk_num</span>
                    <span style={{color: '#ABB2BF'}}>{'.pop();'} </span>
                    <span style={{color: '#008000'}}>// 스택에 저장된 값을 꺼내</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       a *= </span>
                    <span style={{color: '#0000FF'}}>Integer</span>
                    <span style={{color: '#ABB2BF'}}>{'.parseInt(num);'} </span>
                    <span style={{color: '#008000'}}>// 다음 정수값을 곱한 뒤</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>       Stk_Num </span>
                    <span style={{color: '#ABB2BF'}}>{'.push(a);'} </span>
                    <span style={{color: '#008000'}}>// 곱셈 결과를 다시 스택에 저장</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>---------------------중략----------------------</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4><b>실행화면 및 동작화면</b></h4>
            <div className='img_col' style={{display: 'flex'}}>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/plus1.png"} style={{width: '45%', marginTop: '5px', marginRight: '64x'}}/>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/plus2.png"} style={{width: '45%', marginTop: '5px'}}/>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}