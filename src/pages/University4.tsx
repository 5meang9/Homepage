import '../styles/University.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CodeBlock from '../component/CodeBlock';

export default function University4(){
  const texts1 = `
  // Android 상에서 Tesseract Tools 사용하기 위한 설정
  dependencies{
    compile 'com.rmtheis : tess-two:6.3.0'
  }
  `
  const texts2 = `
  static TessBaseAPI  sTess;
  @Override 
  protected void  onCreate( Bundle savedInstanceState){
  ---------------------중략----------------------
    lang = "ttes";
    datapath = getFilesDir() + "/tesseract";
    if (checkFile(new File (datapath+"/tessdata"))){
      sTess.init(datapath, lang);
    }
  }
  `
  const texts3 = `
  @Override 
  protected void  onCreate( Bundle savedInstanceState){
    mBtnCameraView.setOnClickListener(new View.OnClickListener(){
    @Override 
    protected void  onClick(View v){
      Intent mittCamera = new Intent (MainActivity.this, CameraView .class);
      startActivityForResult(mittCamera, ACTIVITY_REQUEST_CODE);
    }
  });
  `
  const texts4 = `
  public void onClickButton(View v){
    bmp_result =  Bitmap.crateBitmap(m_matRoi,cols(), m_matRoi.rows(),Bitmap.ConfigARGB_8888);
    // Mat 을 비트맵으로 변환
    Utils.matToBitmap(m_matRoi, bmp_result);
    // 캡쳐한 이미지를 ROI 영역 안에 표시
    mImageCapture.setVisivility(ViewVISIVLE);
    // 캡쳐 이미지 tesseract-ocr 입력 데이터로 사용
    new AsyncTess()..execute(bmp_result);
  }
  `
  const texts5 = `
  private class AsyncTess extends AsyncTask<Bitmap, Integer, String>{
    // 스레드에 의해 처리될 내용을 담기 위한 함수
    @Override
    protected String  doInBackground(Bitmap ... mRelativeParams){
      // Tesseract OCR 수행
      sTess.setImage(bmp_result);
      // getUTF8Text를 통해 텍스트 추출 결과 반환
      return sTess.getUTF8Text();
    protected void  onPostexecute(String result){
      // 계산식=값 text 출력
      mTextOcrResult.setText(m_strOcrResult+"="+Calc(m_strOcrResult));
    }
 }
  `
  const texts6 = `
  private String Calc(String str){
    // 계산 결과를 저장할 변수
    intcnt = 0;
    // 연산자를 제외한 정수를 저장할 스택 객체 생성
    Stack<Integer> Stk_Num = new Stack<Integer>();
    // 계산식을 연산자 기분으로 분리
    StringTokenizer ST_Num  = new StringTokenizer(str,"+-/* ");
    // 계산식을 정수 기준으로 분리, 연산가 저장
    StringTokenizer ST_Oper = new StringTokenizer(str,"1234567890 ");
    // 첫번째 정수값을 스택에 저장
    Stk_Num.push( IntegerparseInt(ST_Num.nextToken()));
    // 정수값이 계속 존재할 경우
    while( ST_Num.hasMoreTokens()){
      // 연산자를 oper변수에 저장
      char oper =  ST_Oper.nextToken().charAt(0);
      // 다음 정수값을 스택에 저장
      Stringnum =  ST_Num.nextToken();
      int a;  
      // 연산자가 '*' 경우
      if(oper ==  '*'){ 
        // 스택에 저장된 값을 꺼내
        a = Stk_num.pop();
        // 다음 정수값을 곱한 뒤
        a *= Integer.parseInt(num); 
        // 곱셈 결과를 다시 스택에 저장
        Stk_Num .push(a);
      }
  ---------------------중략----------------------
  `

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
                    <li><a href="#Tesseract Tools 사용하기">Tesseract Tools 사용하기</a></li>
                    <li><a href="#Class MainActivity Tesseract import 및 사용">Class MainActivity Tesseract import 및 사용</a></li>
                    <li><a href="#안드로이드 카메라 접근">안드로이드 카메라 접근</a></li>
                    <li><a href="#캡쳐 이미지와 tesseract">캡쳐 이미지와 tesseract</a></li>
                    <li><a href="#Calc 메서드 (우선순위 계산)">Calc 메서드 (우선순위 계산)</a></li>
                    <li><a href="#실행화면 및 동작화면_정렬">실행화면 및 동작화면</a></li>

                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </nav>
        <div id='article_1'>
          <h2 data-ke-size="size26"><b style={{fontSize: '1.2rem'}}>JAVA, Window Form Application</b></h2>
          <div className='article1_contents contents_style'>
            <p>Java SE 10, Android Studio 3.1, OPENCV, TESSERACT OCR</p>
            <p style={{marginTop: 0}}>OPENCV : 문자인식, OCR 학습</p>
            <p style={{marginTop: 0}}>TESSERACT OCR : 흑백 전환, ROI 영역 처리</p>
            <p style={{marginTop: 0}}>Android Studio : 애플리케이션 구현, 카메라 연동, 촬영 된 수학문제 계산</p>
            <div className='article1_contents_img'>
              <img className='article1_contents_img1' src={process.env.PUBLIC_URL+"/images/android_stu.png"} style={{width: '15%', verticalAlign: 'bottom'}}/>
              <span>➕</span>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/openCvLogo.png"} style={{width: '13%', marginTop: '1%', verticalAlign: 'bottom'}}/>
              <span>➕</span>
              <img className='article1_contents_img3' src={process.env.PUBLIC_URL+"/images/Tesseract_OCR_logo.png"} style={{width: '33%', verticalAlign: 'bottom'}}/>
            </div>
          </div>
        </div>
        <div id='article_2'>
          <h2 data-ke-size="size26"><b>주요 기능</b></h2>
          <div className='article2_contents contents_style'>
            <h4 id="Tesseract Tools 사용하기"><b>Tesseract Tools 사용하기</b></h4>
            <CodeBlock language="JAVA" contents={texts1} />

            <h4 id='Class MainActivity Tesseract import 및 사용'><b>Class MainActivity Tesseract import 및 사용</b></h4>
            <CodeBlock language="JAVA" contents={texts2} />
            <h4 id='안드로이드 카메라 접근'><b>안드로이드 카메라 접근</b></h4>
            <CodeBlock language="JAVA" contents={texts3} />
            <h4 id="캡쳐 이미지와 tesseract"><b>캡쳐 이미지와 tesseract</b></h4>
            <CodeBlock language="JAVA" contents={texts4} />
            <h4 id="Tesseract 인식"><b>Tesseract 인식</b></h4>
            <CodeBlock language="JAVA" contents={texts5} />
            <h4 id="Calc 메서드 (우선순위 계산)"><b>Calc 메서드 (우선순위 계산)</b></h4>
            <CodeBlock language="JAVA" contents={texts6} />
            <h4 id="실행화면 및 동작화면"><b>실행화면 및 동작화면</b></h4>
            <div className='img_col' style={{display: 'flex',marginBottom: '50px'}}>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/plus1.png"} style={{width: '45%', marginTop: '5px', marginRight: '64x'}}/>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/plus2.png"} style={{width: '45%', marginTop: '5px'}}/>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}