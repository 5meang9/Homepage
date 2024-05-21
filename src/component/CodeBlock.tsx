import '../styles/University.scss';

interface CodeProps{
  language: string;
  contents: string;
}


function CodeBlock({language, contents}: CodeProps){
  const lines = contents.split('\n')
  // const setColor = lines.

  return(
    <>
      <div className='code_box'>
        <div className="codeBlock_stylish">
          <span data-ke-language={language.toLowerCase()}>{language}</span>
        </div>
        <pre className="shiki one-dark-pro shiki-copy-wrapper" style={{backgroundColor: '#282c34'}}>
          <code>
            {lines.map((line, index) => (
              <span className="line">
                <span style={{color: line.includes('//') ? '#4caf50' :'#ABB2BF'}}>{line}</span>
              </span>
            ))}
          </code>
        </pre>
      </div>
    </>
  )
}

export default CodeBlock