import '../styles/Bespoke.scss'
import * as bespoke from '../js/Bespoke';
import { useEffect } from 'react';

const NewBespokeCombine = () => {

  let buttons;
  let getOwnProductCode = '0JSM1TT40306F';
  
  useEffect(() => {
    // buttons = document.querySelectorAll(".categoryBtn");
    // buttons.forEach(e => {
    //   if(e.classList.contains('active')){
    //     getOwnProductCode = e.ariaLabel;
    //     // console.log(getOwnProductCode);
    //   } 
    // })
    // bespoke.getPrdCode();
    bespoke.bespokeAppearCheck(getOwnProductCode);
    var jnsBespoke;
    // if(bespoke.bespokeAppearCheck(getOwnProductCode)){
      jnsBespoke = new bespoke.JnsBespoke(getOwnProductCode, document.querySelector('.bespoke-container'), document.querySelector('.preview-container'));

      // console.log('jnsBespoke.bespokeToggle',jnsBespoke.bespokeToggleClick);
      // document.addEventListener("DOMContentLoaded", function(){
      jnsBespoke.bespokeToggle.addEventListener('click', function(e){
        // e.stopImmediatePropagation()
        jnsBespoke.bespokeToggleClick(jnsBespoke)
      });
      jnsBespoke.bespokeToggleClick(jnsBespoke)
      // })
    // }
  },[getOwnProductCode])

  return(
      <>
        <div className='wrap' id='maxTop'>
          <div className="preview-container active">
            <div className="preview-background"></div>
          </div>
          <div className='setting'>
            <div className="bespoke-container-toggle active">
              비스포크
              <img
                src="/bespoke_assets/icons/arrow-down-new.svg"
                width="16px"
                height="16px"
                alt="" />
            </div>
            <div className="bespoke-container active"></div>
            <div id='add_option_0'></div>
            <div className="bespoke-img-result" id="maxTop">
            </div>
          </div>
        </div>
      </>

  )
}

export default NewBespokeCombine
