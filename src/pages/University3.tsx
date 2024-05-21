import '../styles/University.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import CodeBlock from '../component/CodeBlock';

export default function University3(){
  const texts1 = `
  private void CreateMyListView(){
    //listView 생성
    ListView listView1 = new ListView();
    listView1.Bounds = new Rectangle(new Point(10,10), new Size(400,200));
    //설정한 view 상세노출
    listView1.View = View.Details;
    //항목 수정 가능
    listView1.LabelEdit = true;
    //열 재배열 가능
    listView1.AllowColumnReorder =  true;
    //체크박스 노출
    listView1.CheckBoxes = true;
    //항목 선택 시, 하위 및 항목으로 선택 가능
    listView1.FullRowSelect = true;
    //격자선 노출
    listView1.GridLines = true;
    //5개 항목 및 하위 2항목 생성
    ListViewItem item1 = newListviewItem("미이라");
    item1.Checked = true; //체크박스 선택 상태
    item1.SubItems.Add("액션, 환타지");
  -----------------중략-------------------
    //열 세더 설정, -2 폭은 자동 크기
    listView1.Columns.Add("제목"-2, HorizontalAlignment.Left);
    //각 listViewItem 항목 생성
    listView1.Items.AddRange(newListViewItem[] { item1, item2, ...});
    this.Controls.Add(listView1);   //제어 컬렉션에 listview 추가
  }
  `
  const texts2 = `
  private void button1_Click( object sender, EventArgs e){
    Form4 frm4 = new Form4();
    //제목 text 전달
    for (int i = 0; i < listView1.Columns.Count; i++){
      if (listVeiw1.Items[i].Checked){
        frm4.label10.Text = "영화 : "+this.listView1.Items[i].SubItems[0].Text;
      }
    }극장, 날짜 시간 동일 ...
    frm4.ShowDialog();
  }
  `
  const texts3 = `
  private void BtnC(){
    for (int i = 0; i < 50; i++){
      btn[i] = new Button();
      btn[i].Text = i.ToString();
      btn[i].Name = "Butoon" + i.ToString();
      btn[i].Size = new Size(btn_w, btn_h);
      btn[i].Location = new Point(margin_x + (i % 10) * (btn_w + btn_s), margin_y + (i / 10) * (btn_h + btn_s));
      btn[i].Click += btn_Click;
      Controls.Add(btn[i]);
    }
  }
  `
  const texts4 = `
  //좌석 선택
  private void btn_Click( object sender, EventArgs e){
    count++;
    int num = int32.Parse(textBox1.Text) + int32.Parse(textBox2.Text) + int32.Parse(textBox3.Text);
    btn_c = sender as Button;
    if (int32.Parse(textBox1.Text) == 0 && int32.Parse(textBox2.Text) == 0 && int32.Parse(textBox3.Text) == 0){
      MessageBox.show( "인원수를 선택해주세요.");
    } else {
      if(count <= num){
        for (int i = 0; i < 19; i++){
          if   (btn_c.Name == btn[i].Name){
            btn_c.BackColor = System.Drawing.Color.Green;
          }
        }
      } else {
      MessageBox.show( "인원수 초과입니다.");
    }
  }
  `

  return (
    <>
      <section id="article-header2">
        <div className='article-header-wrap'>
          <div id="article_h1" style={{color:'#000'}}>영화🎬 예매 시스템 제작</div>
          <div className="text-center">
            <div className='scroll-btn'>
              <span className="mouse" style={{border: '3px solid #000',}}>
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
            <li><a href="#article_1">C#, Window Form Application</a>
              <ol>
                <li><a href="#article_2">주요 기능</a>
                  <ol style={{paddingLeft: 0}}>
                    <li><a href="#동작화면">실행화면 및 동작화면</a></li>
                    <li><a href="#영화 상세 사항 선택 구성">영화 상세 사항 선택 구성</a></li>
                    <li><a href="#영화 상세 사항 전달">영화 상세 사항 전달</a></li>
                    <li><a href="#좌석 동적 생성 및 선택">좌석 동적 생성 및 선택</a></li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </nav>
        <div id='article_1'>
          <h2 data-ke-size="size26"><b>C#, Window Form Application</b></h2>
          <div className='article1_contents contents_style'>
            <p>C# (v7.1), Window Form Application</p>
            <p style={{marginTop: 0}}>개발환경 : vsCode</p>
            <p style={{marginTop: 0}}>리스트 폼 DIR : Form3.Designer</p>
            <p style={{marginTop: 0}}>좌석선택 DIR : Form4.Designer, form4.cs</p>
            <div className='article1_contents_img'>
              <img className='article1_contents_img1' src={process.env.PUBLIC_URL+"/images/Clogo.png"} style={{width: '15%', verticalAlign: 'bottom'}}/>
              <span>➕</span>
              <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/windowForm.png"} style={{width: '41%', verticalAlign: 'bottom'}}/>
              <span>➕</span>
              <img className='article1_contents_img3' src={process.env.PUBLIC_URL+"/images/vscodeLogo.png"} style={{width: '15%', verticalAlign: 'bottom'}}/>
            </div>
          </div>
        </div>
        <div id='article_2'>
          <h2 data-ke-size="size26"><b>주요 기능</b></h2>
          <div className='article2_contents contents_style'>
            <h4 id="동작화면"><b>실행화면 및 동작화면</b></h4>
            <img className='article1_contents_img2' src={process.env.PUBLIC_URL+"/images/movieOn.png"} style={{width: '100%', marginTop: '5px'}}/>
            <ol style={{listStyleType: 'decimal', marginTop: '25px'}} data-ke-list-type="decimal">
              <li>[예매] 클릭 시, 영화 상세 리스트 노출</li>
              <li>영화 상세 리스트 선택 시, 좌석선택 화면 노출</li>
              <li>좌석 선택 완료 시, 초록색으로 변경</li>
            </ol>
            <h4 id="영화 상세 사항 선택 구성"><b>영화 상세 사항 선택 구성</b></h4>
            <CodeBlock language="C#" contents={texts1} />
            <h4 id="영화 상세 사항 전달"><b>영화 상세 사항 전달</b></h4>
            <CodeBlock language="C#" contents={texts2} />
            <h4 id="좌석 동적 생성 및 선택"><b>좌석 동적 생성 및 선택</b></h4>
            <CodeBlock language="C#" contents={texts3} />
            <CodeBlock language="C#" contents={texts4} />
          </div>
        </div>
      </div>


    </>
  )
}