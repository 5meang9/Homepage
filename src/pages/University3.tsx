import '../styles/University.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function University3(){
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
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="C#">C#</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>private void</span>
                    <span style={{color: '#ABB2BF'}}> CreateMyListView(){'{'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   //listView 생성</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   ListView listView1 = </span>
                    <span style={{color: '#0000FF'}}>new </span>
                    <span style={{color: '#ABB2BF'}}>ListView();</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   listView1.Bounds = </span>
                    <span style={{color: '#0000FF'}}>new </span>
                    <span style={{color: '#ABB2BF'}}>Rectangle{'('}</span>
                    <span style={{color: '#0000FF'}}>new </span>
                    <span style={{color: '#ABB2BF'}}>Point{'(10,10),'} </span>
                    <span style={{color: '#0000FF'}}>new </span>
                    <span style={{color: '#ABB2BF'}}>Size{'(400,200));'}</span>
                  </span>
                  <span className="line"></span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   //설정한 view 상세노출</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   listView1.View = View.Details;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   //항목 수정 가능</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   listView1.LabelEdit = </span>
                    <span style={{color: '#0000FF'}}>true</span>
                    <span style={{color: '#ABB2BF'}}>;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   //열 재배열 가능</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   listView1.AllowColumnReorder =  </span>
                    <span style={{color: '#0000FF'}}>true</span>
                    <span style={{color: '#ABB2BF'}}>;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   //체크박스 노출</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   listView1.CheckBoxes = </span>
                    <span style={{color: '#0000FF'}}>true</span>
                    <span style={{color: '#ABB2BF'}}>;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   //항목 선택 시, 하위 및 항목으로 선택 가능</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   listView1.FullRowSelect = </span>
                    <span style={{color: '#0000FF'}}>true</span>
                    <span style={{color: '#ABB2BF'}}>;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   //격자선 노출</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   listView1.GridLines = </span>
                    <span style={{color: '#0000FF'}}>true</span>
                    <span style={{color: '#ABB2BF'}}>;</span>
                  </span>
                  <span className="line"></span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   //5개 항목 및 하위 2항목 생성</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   ListViewItem item1 = </span>
                    <span style={{color: '#0000FF'}}>new</span>
                    <span style={{color: '#ABB2BF'}}>ListviewItem{'('}</span>
                    <span style={{color: '#ff0000'}}>"미이라"</span>
                    <span style={{color: '#ABB2BF'}}>{');'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   item1.Checked = </span>
                    <span style={{color: '#0000FF'}}>true</span>
                    <span style={{color: '#ABB2BF'}}>;</span>
                    <span style={{color: '#008000'}}> //체크박스 선택 상태</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   item1.SubItems.Add{'('}</span>
                    <span style={{color: '#ff0000'}}>"액션, 환타지"</span>
                    <span style={{color: '#ABB2BF'}}>{');'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>-----------------중략-------------------</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   //열 세더 설정, -2 폭은 자동 크기</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   listView1.Columns.Add{'('}</span>
                    <span style={{color: '#ff0000'}}>"제목"</span>
                    <span style={{color: '#ABB2BF'}}>{'-2, HorizontalAlignment.Left);'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   //각 listViewItem 항목 생성</span>
                  </span>
                  <span className="line"></span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   listView1.Items.AddRange{'('}</span>
                    <span style={{color: '#0000FF'}}>new</span>
                    <span style={{color: '#ABB2BF'}}>ListViewItem[] {'{'} item1, item2, ...{'});'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   this</span>
                    <span style={{color: '#ABB2BF'}}>.Controls.Add{'(listView1);'}</span>
                    <span style={{color: '#008000'}}>   //제어 컬렉션에 listview 추가</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'}'}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4 id="영화 상세 사항 전달"><b>영화 상세 사항 전달</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="C#">C#</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>private void</span>
                    <span style={{color: '#ABB2BF'}}> button1_Click{'('}</span>
                    <span style={{color: '#0000FF'}}> object</span>
                    <span style={{color: '#ABB2BF'}}> sender, EventArgs e{'){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   Form4 frm4 = </span>
                    <span style={{color: '#0000FF'}}>new </span>
                    <span style={{color: '#ABB2BF'}}>Form4();</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#008000'}}>   //제목 text 전달</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   for </span>
                    <span style={{color: '#ABB2BF'}}>{'('}</span>
                    <span style={{color: '#0000FF'}}>int </span>
                    <span style={{color: '#ABB2BF'}}>i = 0; i {'<'} listView1.Columns.Count; i++{'){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>       if </span>
                    <span style={{color: '#ABB2BF'}}>(listVeiw1.Items[i].Checked){'{'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>           frm4.label10.Text = </span>
                    <span style={{color: '#ff0000'}}>"영화 : "</span>
                    <span style={{color: '#ABB2BF'}}>+</span>
                    <span style={{color: '#0000FF'}}>this</span>
                    <span style={{color: '#ABB2BF'}}>.listView1.Items[i].SubItems[0].Text;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'}'}</span>
                    <span style={{color: '#ABB2BF'}}>극장, 날짜 시간 동일 ...</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   frm4.ShowDialog();</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'}'}</span>
                  </span>
                </code>
              </pre>
            </div>
            <h4 id="좌석 동적 생성 및 선택"><b>좌석 동적 생성 및 선택</b></h4>
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="C#">C#</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>private void</span>
                    <span style={{color: '#ABB2BF'}}> BtnC{'(){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   for </span>
                    <span style={{color: '#ABB2BF'}}>{'('}</span>
                    <span style={{color: '#0000FF'}}>int </span>
                    <span style={{color: '#ABB2BF'}}>i = 0; i {'<'} 50; i++{'){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       btn[i] = </span>
                    <span style={{color: '#0000FF'}}>new </span>
                    <span style={{color: '#ABB2BF'}}>Button();</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       btn[i].Text = i.ToString();</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       btn[i].Name = </span>
                    <span style={{color: '#ff0000'}}>"Butoon"</span>
                    <span style={{color: '#ABB2BF'}}> + i.ToString();</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       btn[i].Size = </span>
                    <span style={{color: '#0000FF'}}>new </span>
                    <span style={{color: '#ABB2BF'}}>Size(btn_w, btn_h);</span>
                  </span> 
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       btn[i].Location = </span>
                    <span style={{color: '#0000FF'}}>new </span>
                    <span style={{color: '#ABB2BF'}}>Point(margin_x + (i % 10) * (btn_w + btn_s), margin_y + (i / 10) * (btn_h + btn_s));</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       btn[i].Click += btn_Click;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       Controls.Add(btn[i]);</span>
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
            <div className='code_box'>
              <div className="codeBlock_stylish"><span data-ke-language="C#">C#</span></div>
              <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
                <code>
                  <span className="line">
                    <span style={{color: '#008000'}}>//좌석 선택</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>private void</span>
                    <span style={{color: '#ABB2BF'}}> btn_Click{'('}</span>
                    <span style={{color: '#0000FF'}}> object</span>
                    <span style={{color: '#ABB2BF'}}> sender, EventArgs e{'){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   count++;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   int </span>
                    <span style={{color: '#ABB2BF'}}>num = int32.Parse(textBox1.Text) + int32.Parse(textBox2.Text) + int32.Parse(textBox3.Text);</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   btn_c = sender </span>
                    <span style={{color: '#0000FF'}}>as</span>
                    <span style={{color: '#ABB2BF'}}> Button;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>   if </span>
                    <span style={{color: '#ABB2BF'}}>(int32.Parse(textBox1.Text) == 0 && int32.Parse(textBox2.Text) == 0 && int32.Parse(textBox3.Text) == 0){'{'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       MessageBox.show{'('} </span>
                    <span style={{color: '#ff0000'}}>"인원수를 선택해주세요."</span>
                    <span style={{color: '#ABB2BF'}}>{');'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>   {'}'}</span>
                    <span style={{color: '#0000FF'}}> else </span>
                    <span style={{color: '#ABB2BF'}}>{'{'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>       if</span>
                    <span style={{color: '#ABB2BF'}}>   (count {'<='} num){'{'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>           for </span>
                    <span style={{color: '#ABB2BF'}}>{'('}</span>
                    <span style={{color: '#0000FF'}}>int </span>
                    <span style={{color: '#ABB2BF'}}>i = 0; i {'<'} 19; i++{'){'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#0000FF'}}>               if</span>
                    <span style={{color: '#ABB2BF'}}>   (btn_c.Name {'=='} btn[i].Name){'{'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>                   btn_c.BackColor = System.Drawing.Color.Green;</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>               {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>            {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>        {'}'}</span>
                    <span style={{color: '#0000FF'}}> else </span>
                    <span style={{color: '#ABB2BF'}}>{'{'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>       MessageBox.show{'('} </span>
                    <span style={{color: '#ff0000'}}>"인원수 초과입니다."</span>
                    <span style={{color: '#ABB2BF'}}>{');'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>    {'}'}</span>
                  </span>
                  <span className="line">
                    <span style={{color: '#ABB2BF'}}>{'}'}</span>
                  </span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}