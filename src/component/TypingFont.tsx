import { useEffect, useState } from "react";
import type {FC} from 'react'

export type TypingFontProps = {
  TyingContents: string,
}

export const TypingFont: FC<TypingFontProps> = ({
  TyingContents,
  ...props

}) => {
  // 뿌려줄 태그
  const [typingText, setTypingTexts] = useState('');
  // 타이핑 효과 낼 것
  const [count, setCount] = useState(0);

  function sleep(t:any) {
      return new Promise(resolve => setTimeout(resolve, t));
  }

  useEffect(()=>{
    const typingInterval = setInterval(() => {
      setTypingTexts((prevTypingContents) => {

        let result;
        result = prevTypingContents ? prevTypingContents + TyingContents[count]  : TyingContents[0]
        setCount(count + 1)

        if(count >= TyingContents.length){
          setCount(0)
          // result = prevTypingContents ? prevTypingContents.slice(0, -1) : ''
          setTypingTexts('')
        }

        return result
      });
    }, 200)

    
    return()=>{
      clearInterval(typingInterval)
    }

  })
  return(
    <>
      <span>{typingText}</span>
      <span className="text-cursor">|</span>
    </>
  );
};

export default TypingFont;