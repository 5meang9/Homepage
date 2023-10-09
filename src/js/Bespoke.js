import * as medium from '../js/BespokeMediumn';
import * as small from '../js/BespokeSmall';
import $ from 'jquery'
import { useEffect } from 'react';

// const NewBespoke = () =>{
  export class JnsBespoke{
    static productCodes = { //size, imgs 를 가진 객체
      THISISSTEST: {
        size: "S",
        imgs: [
          "/bespoke_assets/products/S1.png",
          "/bespoke_assets/products/S2.png",
        ],
      },
      Stest: {
        size: "S",
        imgs: [
          "/bespoke_assets/products/S1.png",
          "/bespoke_assets/products/S2.png",
        ],
      },
      //!SIZE S
      "0JSM1TT40301F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/starry/front/GOLD.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/GOLD.jpg",
        ],
      },
      "0JSM1TT40302F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/starry/front/NAVY.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/NAVY.jpg",
        ],
      },
      "0JSM1TT40303F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/starry/front/BLACK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/BLACK.jpg",
        ],
      },
      "0JSM1TT40304F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/starry/front/HAZELNUT.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/HAZELNUT.jpg",
        ],
      },
      "0JSM1TT40305F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/starry/front/SCOTCH.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/SCOTCH.jpg",
        ],
      },
      "0JSM1TT40306F": {
        size: "S",
        imgs: [
          "/Homepage/bespoke_assets/products/lucky_pleats_s/starry/front/LILAC.jpg",
          "/Homepage/bespoke_assets/products/lucky_pleats_s/starry/side/LILAC.jpg",
        ],
      },
      "0JSJ1TT40602F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/starry/front/SILVER.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/SILVER.jpg",
        ],
      },
      "0JSM1TT40307F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/starry/front/PRINCESS.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/PRINCESS.jpg",
        ],
      },
      "0JSM1TT40308F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/starry/front/PLATINUM.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/PLATINUM.jpg",
        ],
      },
      "0JSM1TT40401F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/RICHBLACK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/RICHBLACK.jpg",
        ],
      },
      "0JSM1TT40402F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/BURNTPEACH.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/BURNTPEACH.jpg",
        ],
      },
      "0JSM1TT40403F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/MUGWORT.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/MUGWORT.jpg",
        ],
      },
      "0JSM1TT40404F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/MAUVE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/MAUVE.jpg",
        ],
      },
      "0JSM1TT40405F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/JELLYGREEN.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/JELLYGREEN.jpg",
        ],
      },
      "0JSM1TT40406F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/NACHOCHEESE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/NACHOCHEESE.jpg",
        ],
      },
      "0JSM1TT40407F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/LAVENDER.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/LAVENDER.jpg",
        ],
      },
      "0JSM1TT40408F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/BARBADOSRED.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/BARBADOSRED.jpg",
        ],
      },
      "0JSM1TT40410F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/VANILLA.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/VANILLA.jpg",
        ],
      },
      "0JSM1TT40411F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/FREESIA.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/FREESIA.jpg",
        ],
      },
      "0JSM1TT40412F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/ULTRAVIOLET.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/ULTRAVIOLET.jpg",
        ],
      },
      "0JSM1TT40413F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/ROYALBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/ROYALBLUE.jpg",
        ],
      },
      "0JSM1TT40414F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/BASIL.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/BASIL.jpg",
        ],
      },
      "0JSJ1TT40524F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/TURKISHBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/TURKISHBLUE.jpg",
        ],
      },
      "0JSJ1TT40520F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/BEACHBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/BEACHBLUE.jpg",
        ],
      },
      //! ----------------------------------------------//
      "0JSM1TT40420F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/POPORANGE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/POPORANGE.jpg",
        ],
      },
      "0JSM1TT40421F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/CLASSICNAVY.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/CLASSICNAVY.jpg",
        ],
      },
      "0JSM1TT40415F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/REDWINE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/REDWINE.jpg",
        ],
      },
      "0JSM1TT40416F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/GOLDKIWI.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/GOLDKIWI.jpg",
        ],
      },
      "0JSM1TT40417F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/ISLANDINDIGO.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/ISLANDINDIGO.jpg",
        ],
      },
      "0JSM1TT40418F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/PINKPUNCH.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/PINKPUNCH.jpg",
        ],
      },
      "0JSM1TT40419F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/LATTE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/LATTE.jpg",
        ],
      },
      "0JSM1TT40309F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/starry/front/OLIVE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/OLIVE.jpg",
        ],
      },
      "0JSM1TT40310F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/starry/front/CHOCOLATE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/CHOCOLATE.jpg",
        ],
      },
      "0JSM1TT40311F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/starry/front/CHAMPAGNE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/CHAMPAGNE.jpg",
        ],
      },
    
      // "xm_solid": {
      // 	size: "SM",
      // 	imgs: [
      // 		"/bespoke_assets/products/lucky_pleats_s/mix/front/STRAWBERRYMILK.jpg",
      //     "/bespoke_assets/products/lucky_pleats_s/mix/side/APRICOT.jpg"
      // 	],
      // },
    
      //새제품-------------------------------------------------------------------------
      "0JSJ1TT40509F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/CLOUDPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/CLOUDPINK.jpg",
        ],
      },
      "0JSJ1TT40518F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/CUSTARD.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/CUSTARD.jpg",
        ],
      },
      "0JSJ1TT40611F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/starry/front/DISCOBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/DISCOBLUE.jpg",
        ],
      },
      "0JSJ1TT40610F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/starry/front/DISCOGREEN.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/DISCOGREEN.jpg",
        ],
      },
      "0JSJ1TT40612F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/starry/front/DISCOPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/DISCOPINK.jpg",
        ],
      },
      "0JSJ1TT40616F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/starry/front/MARIGOLD.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/MARIGOLD.jpg",
        ],
      },
      "0JSJ1TT40514F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/MILLENIALPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/MILLENIALPINK.jpg",
        ],
      },
      "0JSJ1TT40607F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/starry/front/MINT.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/MINT.jpg",
        ],
      },
      "0JSJ1TT40521F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/VERYMINT.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/VERYMINT.jpg",
        ],
      },
      //새제품-------------------------------------------------------------------------
      //! ----------------------------------------------//
    
      //! SIZE M
      THISISMTEST: {
        size: "M",
        imgs: [
          "/bespoke_assets/products/M1.png",
          "/bespoke_assets/products/M2.png",
        ],
      },
      Mbag: {
        size: "M",
        imgs: [
          "/bespoke_assets/products/M1.png",
          "/bespoke_assets/products/M2.png",
        ],
      },
      "0JSJ1SH40326F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/ROYALBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/ROYALBLUE.jpg",
        ],
      },
      "0JSM1SH40401F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/starry/front/HAZELNUT.jpg",
          "/bespoke_assets/products/lucky_pleats_m/starry/side/HAZELNUT.jpg",
        ],
      },
      "0JSM1SH40402F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/starry/front/NAVY.jpg",
          "/bespoke_assets/products/lucky_pleats_m/starry/side/NAVY.jpg",
        ],
      },
      "0JSM1SH40403F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/starry/front/LILAC.jpg",
          "/bespoke_assets/products/lucky_pleats_m/starry/side/LILAC.jpg",
        ],
      },
      "0JSM1SH40404F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/starry/front/BLACK.jpg",
          "/bespoke_assets/products/lucky_pleats_m/starry/side/BLACK.jpg",
        ],
      },
      "0JSM1SH40405F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/starry/front/GOLD.jpg",
          "/bespoke_assets/products/lucky_pleats_m/starry/side/GOLD.jpg",
        ],
      },
      "0JSM1SH40407F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/starry/front/ROSEGOLD.jpg",
          "/bespoke_assets/products/lucky_pleats_m/starry/side/ROSEGOLD.jpg",
        ],
      },
      "0JSM1SH40408F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/starry/front/PLATINUM.jpg",
          "/bespoke_assets/products/lucky_pleats_m/starry/side/PLATINUM.jpg",
        ],
      },
      "0JSM1SH40406F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/starry/front/SCOTCH.jpg",
          "/bespoke_assets/products/lucky_pleats_m/starry/side/SCOTCH.jpg",
        ],
      },
      "0JSM1SH40602F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/RICHBLACK.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/RICHBLACK.jpg",
        ],
      },
      "0JSM1SH40603F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/CRIMSONRED.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/CRIMSONRED.jpg",
        ],
      },
      "0JSM1SH40604F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/BURNTPEACH.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/BURNTPEACH.jpg",
        ],
      },
      "0JSM1SH40605F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/DEEPFOREST.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/DEEPFOREST.jpg",
        ],
      },
      "0JSM1SH40606F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/MIDBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/MIDBLUE.jpg",
        ],
      },
      "0JSM1SH40607F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/LAVENDER.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/LAVENDER.jpg",
        ],
      },
      "0JSM1SH40608F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/OLIVEGREEN.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/OLIVEGREEN.jpg",
        ],
      },
      "0JSM1SH40610F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/TOMATORED.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/TOMATORED.jpg",
        ],
      },
      "0JSM1SH40611F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/NACHOCHEESE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/NACHOCHEESE.jpg",
        ],
      },
      "0JSM1SH40612F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/FREESIA.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/FREESIA.jpg",
        ],
      },
      "0JSM1SH40613F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/BARBADOSRED.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/BARBADOSRED.jpg",
        ],
      },
      "0JSM1SH40614F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/CERAMICBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/CERAMICBLUE.jpg",
        ],
      },
      "0JSJ1SH40327F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/COBALTBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/COBALTBLUE.jpg",
        ],
      },
      "0JSM1SH40615F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/COBALTBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/COBALTBLUE.jpg",
        ],
      },
      "0JSM1SH40616F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/ULTRAVIOLET.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/ULTRAVIOLET.jpg",
        ],
      },
      "0JSM1SH40617F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/MAUVE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/MAUVE.jpg",
        ],
      },
      "0JSM1SH40618F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/JELLYGREEN.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/JELLYGREEN.jpg",
        ],
      },
      "0JSJ1SH40323F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/VERYMINT.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/VERYMINT.jpg",
        ],
      },
      "0JSM1SH40620F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/VERYMINT.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/VERYMINT.jpg",
        ],
      },
      "0JSM1SH40621F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/VANILLA.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/VANILLA.jpg",
        ],
      },
      "0JSM1SH40622F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/BASIL.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/BASIL.jpg",
        ],
      },
      "0JSM1SH40609F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/PEACOCKBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/PEACOCKBLUE.jpg",
        ],
      },
      "0JSJ1SH40313F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/LEMON.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/LEMON.jpg",
        ],
      },
      "0JSJ1SH40305F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/BERRYMIX.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/BERRYMIX.jpg",
        ],
      },
      "0JSJ1SH40316F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/PEANUTBROWN.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/PEANUTBROWN.jpg",
        ],
      },
      "0JSM1SH40601F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/HAZELNUTBEIGE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/HAZELNUTBEIGE.jpg",
        ],
      },
      "0JSM1SH40619F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/ROYALBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/ROYALBLUE.jpg",
        ],
      },
      //! ----------------------------------------------//
      "0JSM1SH40623F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/POPORANGE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/POPORANGE.jpg",
        ],
      },
      "0JSM1SH40624F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/CLASSICNAVY.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/CLASSICNAVY.jpg",
        ],
      },
      "0JSM1SH40625F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/MUGWORT.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/MUGWORT.jpg",
        ],
      },
      "0JSM1SH40626F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/REDWINE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/REDWINE.jpg",
        ],
      },
      "0JSM1SH40627F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/OLIVE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/OLIVE.jpg",
        ],
      },
      "0JSM1SH40628F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/ISLANDINDIGO.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/ISLANDINDIGO.jpg",
        ],
      },
      "0JSM1SH40629F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/CHOCOLATE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/CHOCOLATE.jpg",
        ],
      },
      "0JSM1SH40630F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/LATTE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/LATTE.jpg",
        ],
      },
      "0JSM1SH40409F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/starry/front/REDWINE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/starry/side/REDWINE.jpg",
        ],
      },
      "0JSM1SH40410F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/starry/front/GRAPE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/starry/side/GRAPE.jpg",
        ],
      },
      "0JSM1SH40411F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/starry/front/CHOCOLATE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/starry/side/CHOCOLATE.jpg",
        ],
      },
    
      //! ----------------------------------------------//
    
      //! MIX & TRAVEL
      //Mix 외 Travel 등등
      "0JSK1SH40106F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/duo/front/HONEYBEE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/duo/side/HONEYBEE.jpg",
        ],
      },
      "0JSJ1SH40402F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix/front/STRAWBERRYMILK.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/STRAWBERRYMILK.jpg",
        ],
      },
      "0JSM1SH40503F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix/front/AVOCADO.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/AVOCADO.jpg",
        ],
      },
      "0JSM1SH40504F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix/front/BLUEBERRY.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/BLUEBERRY.jpg",
        ],
      },
      "0JSK1SH40605F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix/front/PINKCRUSH.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/PINKCRUSH.jpg",
        ],
      },
      "0JSK1SH40607F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix/front/SWEETPOTATO.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/SWEETPOTATO.jpg",
        ],
      },
      "0JSK1SH40608F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix/front/NAKEDAPPLE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/NAKEDAPPLE.jpg",
        ],
      },
      "0JSK1SH40611F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix/front/APPLE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/APPLE.jpg",
        ],
      },
      "0JSK1SH40612F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix/front/CHESTNUT.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/CHESTNUT.jpg",
        ],
      },
      "0JSK1SH40614F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix/front/PORTO.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/PORTO.jpg",
        ],
      },
      "0JSK1SH40615F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix/front/BOSTON.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/BOSTON.jpg",
        ],
      },
      "0JSK1SH40617F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix/front/HAWAII.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/HAWAII.jpg",
        ],
      },
      "0JSM1SH40502F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix/front/PUREBLACK.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/PUREBLACK.jpg",
        ],
      },
      
      "0JSM1SH40505F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix/front/WATERMELON.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/WATERMELON.jpg",
        ],
      },
      "0JSK2SH40202F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/stripe/front/JELLYGREEN.jpg",
          "/bespoke_assets/products/lucky_pleats_m/stripe/side/JELLYGREEN.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/front/VANILLA.jpg",
        ],
      },
      "0JSK2SH40204F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/stripe/front/ROYALBLUE_BARBADOSRED.jpg",
          "/bespoke_assets/products/lucky_pleats_m/stripe/side/ROYALBLUE_BARBADOSRED.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/front/VANILLA.jpg",
        ],
      },
      "0JSK2SH40205F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/stripe/front/JELLYGREEN_ROYALBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/stripe/side/JELLYGREEN_ROYALBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/front/VANILLA.jpg",
        ],
      },
      "0JSM1SH40501F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/travel/front/BUDAPEST.jpg",
          "/bespoke_assets/products/lucky_pleats_m/travel/side/BUDAPEST.jpg",
        ],
      },
      "0JSM1SH40702F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/travel/front/MOSCOW.jpg",
          "/bespoke_assets/products/lucky_pleats_m/travel/side/MOSCOW.jpg",
        ],
      },
      "0JSL3SH40105F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/travel/front/VALENCIA.jpg",
          "/bespoke_assets/products/lucky_pleats_m/travel/side/VALENCIA.jpg",
        ],
      },
      BUDAPEST_WAPPEN_SET: {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/travel/front/BUDAPEST.jpg",
          "/bespoke_assets/products/lucky_pleats_m/travel/side/BUDAPEST.jpg",
        ],
      },
      MOSCOW_WAPPEN_SET: {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/travel/front/MOSCOW.jpg",
          "/bespoke_assets/products/lucky_pleats_m/travel/side/MOSCOW.jpg",
        ],
      },
      VALENCIA_WAPPEN_SET: {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/travel/front/VALENCIA.jpg",
          "/bespoke_assets/products/lucky_pleats_m/travel/side/VALENCIA.jpg",
        ],
      },
      "0JSM1CB40702F": {
        size: "MW",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/wing_solid/front/BURNTPEACH.jpg",
          "/bespoke_assets/products/lucky_pleats_m/wing_solid/side/BURNTPEACH.jpg",
        ],
      },
      "0JSM1CB40703F": {
        size: "MW",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/wing_solid/front/CLOUDYBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/wing_solid/side/CLOUDYBLUE.jpg",
        ],
      },
      "0JSM1CB40701F": {
        size: "MW",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/wing_solid/front/RICHBLACK.jpg",
          "/bespoke_assets/products/lucky_pleats_m/wing_solid/side/RICHBLACK.jpg",
        ],
      },
    
      //! ----------------------------------------------//
      "0JSM1SH40506F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix/front/MODERNINDIGO.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/MODERNINDIGO.jpg",
        ],
      },
      "0JSM1SH40507F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix/front/MODERNPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/MODERNPINK.jpg",
        ],
      },
      "0JSM1SH40508F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix/front/MODERNPEACH.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/MODERNPEACH.jpg",
        ],
      },
      "0JSM1SH40509F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix/front/MODERNPUPLE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/MODERNPUPLE.jpg",
        ],
      },
      
    
      //! ----------------------------------------------//
      //Mix 외 Travel 등등
    
      //네온오렌지
      "0JSK2SH40102F": {
        size: "H",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/hh/front/LAVENDERNEONORANGE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/hh/side/LAVENDERNEONORANGE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/hh/side/LAVENDERNEONORANGE_strap.jpg",
        ],
      },
      //네온그린
      "0JSK2SH40103F": {
        size: "H",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/hh/front/BLUENEONGREEN.jpg",
          "/bespoke_assets/products/lucky_pleats_m/hh/side/BLUENEONGREEN.jpg",
          "/bespoke_assets/products/lucky_pleats_m/hh/side/BLUENEONGREEN_strap.jpg",
        ],
      },
      //네온핑크
      "0JSK2SH40104F": {
        size: "H",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/hh/front/MAGENTANEONPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_m/hh/side/MAGENTANEONPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_m/hh/side/MAGENTANEONPINK_strap.jpg",
        ],
      },
      "0JSK2SH40105F": {
        size: "H",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/hh/front/CRIMSONRED.jpg",
          "/bespoke_assets/products/lucky_pleats_m/hh/side/CRIMSONRED.jpg",
        ],
      },
      "0JSK2SH40106F": {
        size: "H",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/hh/front/CUSTARD.jpg",
          "/bespoke_assets/products/lucky_pleats_m/hh/side/CUSTARD.jpg",
        ],
      },
      "0JSK2SH40108F": {
        size: "H",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/hh/front/MAUVE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/hh/side/MAUVE.jpg",
        ],
      },
      "0JSK2SH40109F": {
        size: "H",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/hh/front/CALSSICNAVY.jpg",
          "/bespoke_assets/products/lucky_pleats_m/hh/side/CALSSICNAVY.jpg",
        ],
      },
      m_cross: {
        size: "MC",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/cross/front/test.jpg",
          "/bespoke_assets/products/lucky_pleats_m/cross/side/test.jpg",
        ],
      },
      // 5차 테스트
      triple: {//앞면만
        size: "DW",
        imgs: [
          "/bespoke_assets/test/1.jpg",
        ],
      },
      s_cross: {//스트랩만
        size: "PW",
        imgs: [
          "/bespoke_assets/test/5.jpg",
          "/bespoke_assets/test/black.jpg",
        ],
      },
      shoulder: { //스트랩만
        size: "PS",
        imgs: [
          "/bespoke_assets/test/10.jpg",
          "/bespoke_assets/test/green.jpg",
        ],
      },
      // xm_solid: {
      // 	size: "XM",
      // 	imgs: ["/bespoke_assets/products/xm/solid/side/test.jpg"],
      // },
      //!new--------------------------------------------------------------------//
      //MIX TRIPLE
      "0JSM3SH40301F": {
        size: "MT",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix_triple/front/TRIPLENAVY.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix_triple/side/TRIPLENAVY.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix_triple/side/TRIPLENAVY_strap.jpg",
        ],
      },
      "0JSM3SH40302F": {
        size: "MT",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix_triple/front/TRIPLEINDIGO.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix_triple/side/TRIPLEINDIGO.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix_triple/side/TRIPLEINDIGO_strap.jpg",
        ],
      },
      "0JSM3SH40303F": {
        size: "MT",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix_triple/front/TRIPLEBEIGE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix_triple/side/TRIPLEBEIGE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix_triple/side/TRIPLEBEIGE_strap.jpg",
        ],
      },
      "0JSM3SH40304F": {
        size: "MT",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/mix_triple/front/TRIPLEWINE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix_triple/side/TRIPLEWINE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix_triple/side/TRIPLEWINE_strap.jpg",
        ],
      },
      //XM
      "0JSM3CB40501F": {
        size: "XM",
        imgs: ["/bespoke_assets/products/xm/solid/side/RICHBLACK.jpg"],
      },
      "0JSM3CB40502F": {
        size: "XM",
        imgs: ["/bespoke_assets/products/xm/solid/side/DEEPFOREST.jpg"],
      },
      "0JSM3CB40503F": {
        size: "XM",
        imgs: ["/bespoke_assets/products/xm/solid/side/REDWINE.jpg"],
      },
      "0JSM3CB40504F": {
        size: "XM",
        imgs: ["/bespoke_assets/products/xm/solid/side/LATTE.jpg"],
      },
      //MC
      "0JSM3CB40701F": {
        size: "MC",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/cross/front/CLASSICNAVY.jpg",
          "/bespoke_assets/products/lucky_pleats_m/cross/side/CLASSICNAVY.jpg",
          "/bespoke_assets/products/lucky_pleats_m/cross/side/CLASSICNAVY_strap.jpg",
        ],
      },
      "0JSM3CB40702F": {
        size: "MC",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/cross/front/CHOCOLATE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/cross/side/CHOCOLATE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/cross/side/CHOCOLATE_strap.jpg",
        ],
      },
      "0JSM3CB40703F": {
        size: "MC",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/cross/front/LATTE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/cross/side/LATTE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/cross/side/LATTE_strap.jpg",
        ],
      },
      //SC
      "0JSM3CB40901F": {
        size: "SC",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/cross/front/RICHBLACK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/side/RICHBLACK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/side/RICHBLACK_strap.jpg",
        ],
      },
      "0JSM3CB40902F": {
        size: "SC",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/cross/front/CLASSICNAVY.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/side/CLASSICNAVY.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/side/CLASSICNAVY_strap.jpg",
        ],
      },
      "0JSM3CB40903F": {
        size: "SC",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/cross/front/GOLDKIWI.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/side/GOLDKIWI.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/side/GOLDKIWI_strap.jpg",
        ],
      },
      "0JSM3CB40904F": {
        size: "SC",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/cross/front/CREAMWHITE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/side/CREAMWHITE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/side/CREAMWHITE_strap.jpg",
        ],
      },
      //SHOULDER
      "0JSM3SH40101F": {
        size: "SH",
        imgs: [
          "/bespoke_assets/products/shoulder/solid/front/CLASSICNAVY.jpg",
          "/bespoke_assets/products/shoulder/solid/side/CLASSICNAVY.jpg",
        ],
      },
      "0JSM3SH40102F": {
        size: "SH",
        imgs: [
          "/bespoke_assets/products/shoulder/solid/front/GOLDKIWI.jpg",
          "/bespoke_assets/products/shoulder/solid/side/GOLDKIWI.jpg",
        ],
      },
      "0JSM3SH40103F": {
        size: "SH",
        imgs: [
          "/bespoke_assets/products/shoulder/solid/front/PINKPUNCH.jpg",
          "/bespoke_assets/products/shoulder/solid/side/PINKPUNCH.jpg",
        ],
      },
      //!new--------------------------------------------------------------------//
      //muffler-----------------------------------------------------------------//
      // "xm_solid":{
      //   size: "MF",
      //   imgs: ["/bespoke_assets/products/muffler/blue.jpg"],
      // },
      //테스트용
      "0JSK3SF40101F": {
        size: "MF",
        imgs:["/bespoke_assets/products/muffler/cocoa_new.jpg"],
      },
      "0JSK3SF40104F": {
        size: "MF", 
        imgs:["/bespoke_assets/products/muffler/mineralred.jpg"],
      },
      "0JSK3SF40103F": {
        size: "MF",
        imgs:["/bespoke_assets/products/muffler/black.jpg"],
      },
      "0JSK3SF40105F": {
        size: "MF",
        imgs:["/bespoke_assets/products/muffler/ivory.jpg"],
      },
      "0JSK3SF40102F": {
        size: "MF",
        imgs:["/bespoke_assets/products/muffler/chacol.jpg"],
      },
      "0JSK3SF40107F": {
        size: "MF",
        imgs:["/bespoke_assets/products/muffler/blue_new.jpg"],
      },
      "0JSM3SF40101F": {
        size: "MF",
        imgs:["/bespoke_assets/products/muffler/lambs_wool.jpg"],
      },
      "0JSK3SF40106F": {
        size: "MF",
        imgs:["/bespoke_assets/products/muffler/red.jpg"],
      },
      "0JSI3SF40106F": {
        size: "MF",
        imgs:["/bespoke_assets/products/muffler/lightgrey.jpg"],
      },
      // S 패턴 추가
      "0JSN5TT40301F": {
        size: "PS",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/pattern/side/clovergreen.jpg",
          "/bespoke_assets/products/lucky_pleats_s/pattern/side/green.jpg",
        ],
      },
      "0JSN5TT40302F": {
        size: "PS",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/pattern/side/cloverbeige.jpg",
          "/bespoke_assets/products/lucky_pleats_s/pattern/side/beige.jpg"
        ],
      },
      "0JSN5TT40303F": {
        size: "PS",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/pattern/side/seedblack.jpg",
          "/bespoke_assets/products/lucky_pleats_s/pattern/side/black.jpg"
        ],
      },
      "0JSN5TT40304F": {
        size: "PS",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/pattern/side/seedmauve.jpg",
          "/bespoke_assets/products/lucky_pleats_s/pattern/side/mauve.jpg"
        ],
      },
      // patter_wing
      "0JSN5CB40303F": {
        size: "PW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/pattern_wing/side/seedblack.jpg",
          "/bespoke_assets/products/lucky_pleats_m/pattern_wing/side/black.jpg"
        ],
      },
      "0JSN5CB40304F": {
        size: "PW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/pattern_wing/side/seedmauve.jpg",
          "/bespoke_assets/products/lucky_pleats_m/pattern_wing/side/mauve.jpg"
        ],
      },
      "0JSN5CB40302F": {
        size: "PW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/pattern_wing/side/cloverbeige.jpg",
          "/bespoke_assets/products/lucky_pleats_m/pattern_wing/side/beige.jpg"
        ],
      },
      "0JSN5CB40301F": {
        size: "PW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/pattern_wing/side/clovergreen.jpg",
          "/bespoke_assets/products/lucky_pleats_m/pattern_wing/side/green.jpg"
        ],
      },
      // daisy_wing
      "0JSM1CB40606F": {
        size: "DW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/daisy_wing/front/deepforest.jpg"
        ],
      },
      "0JSM1CB40607F": {
        size: "DW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/daisy_wing/front/classicnavy.jpg"
        ],
      },
      "0JSM1CB40608F": {
        size: "DW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/daisy_wing/front/hazelnutbeige.jpg"
        ],
      },
      "0JSM1CB40603F": {
        size: "DW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/daisy_wing/front/lavender.jpg"
        ],
      },
      "0JSM1CB40604F": {
        size: "DW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/daisy_wing/front/freesia.jpg"
        ],
      },
      "0JSM1CB40605F": {
        size: "DW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/daisy_wing/front/richblack.jpg"
        ],
      },
      "0JSM1CB40601F": {
        size: "DW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/daisy_wing/front/gentleblue.jpg"
        ],
      },
      "0JSM1CB40602F": {
        size: "DW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/daisy_wing/front/creamwhite.jpg"
        ],
      },
      // --------------------------------------------------------------------------4/28
      // "xm_solid"
      "0JSN5TT40120F": { //스트랩 이미지 고쳐야함
        size: "S",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/solid/front/BLOSSOMPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/BLOSSOMPINK_.jpg"
        ],
      },
      "0JSN5TT40121F": {
        size: "S",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/solid/front/VERYPERI.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/VERYPERI.jpg"
        ],
      },
      "0JSN5TT40122F": {
        size: "S",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/solid/front/BUTTER.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/BUTTER.jpg"
        ],
      },
      "0JSN5TT40123F": { //스트랩 이미지 고쳐야함
        size: "S",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/solid/front/LIME.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/LIME.jpg"
        ],
      },
      "0JSN5TT40124F": {
        size: "S",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/solid/front/CERULEANBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/CERULEANBLUE.jpg"
        ],
      },
      "0JSN5TT40125F": {
        size: "S",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/solid/front/SODA.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/SODA.jpg"
        ],
      },
      "0JSN5TT40801F": {
        size: "SM",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/mix/front/WATERMELON.jpg",
          "/bespoke_assets/products/lucky_pleats_s/mix/side/WATERMELON.jpg"
        ],
      },
      "0JSN5TT40802F": {
        size: "SM",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/mix/front/STRAWBERRYMILK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/mix/side/STRAWBERRYMILK.jpg"
        ],
      },
      "0JSN5TT40803F": {
        size: "SM",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/mix/front/PLUM_.jpg",
          "/bespoke_assets/products/lucky_pleats_s/mix/side/PLUM_.jpg"
        ],
      },
      "0JSN5TT40804F": {
        size: "SM",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/mix/front/BERRYYOGURT_.jpg",
          "/bespoke_assets/products/lucky_pleats_s/mix/side/BERRYYOGURT_.jpg"
        ],
      },
      "0JSN5TT40211F": {
        size: "S",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/starry/front/APRICOT.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/APRICOT.jpg"
        ],
      },
      "0JSN5TT40212F": {
        size: "S",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/starry/front/DUSTYBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/starry/side/DUSTYBLUE.jpg"
        ],
      },
      "0JSN5TT40401F": {
        size: "SD",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/daisy/front/CREAMWHITE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/daisy/side/CREAMWHITE.jpg"
        ],
      },
      "0JSN5TT40402F": {
        size: "SD",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/daisy/front/VERYPERI_.jpg",
          "/bespoke_assets/products/lucky_pleats_s/daisy/side/VERYPERI_.jpg"
        ],
      },
      "0JSN5TT40403F": {
        size: "SD",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/daisy/front/NEONGREY_.jpg",
          "/bespoke_assets/products/lucky_pleats_s/daisy/side/NEONGREY_.jpg"
        ],
      },
      "0JSN5TT40404F": {
        size: "SD",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/daisy/front/DEEPFOREST_.jpg",
          "/bespoke_assets/products/lucky_pleats_s/daisy/side/DEEPFOREST_.jpg"
        ],
      },
      "0JSN5TT40405F": {
        size: "SD",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/daisy/front/RICHBLACK_.jpg",
          "/bespoke_assets/products/lucky_pleats_s/daisy/side/RICHBLACK_.jpg"
        ],
      },
      "0JSN5CB40202F": {
        size: "SC",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/cross/front/BASIL.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/side/BASIL.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/etc/BASIL.jpg"
        ],
      },
      "0JSN5CB40203F": {
        size: "SC",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/cross/front/LAVENDER.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/side/LAVENDER.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/etc/LAVENDER.jpg"
        ],
      },
      "0JSN5CB40204F": {
        size: "SC",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/cross/front/BLOSSOMPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/side/BLOSSOMPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/etc/BLOSSOMPINK.jpg"
        ],
      },
      "0JSN5CB40205F": {
        size: "SC",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/cross/front/CERULEANBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/side/CERULEANBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/etc/CERULEANBLUE.jpg"
        ],
      },
      "0JSN5CB40103F": {
        size: "MC",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/cross/front/RICHBLACK.jpg",
          "/bespoke_assets/products/lucky_pleats_m/cross/side/RICHBLACK.jpg",
          "/bespoke_assets/products/lucky_pleats_m/cross/etc/RICHBLACK.jpg"
        ],
      },
      "0JSN5CB40104F": {
        size: "MC",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/cross/front/BUTTER.jpg",
          "/bespoke_assets/products/lucky_pleats_m/cross/side/BUTTER.jpg",
          "/bespoke_assets/products/lucky_pleats_m/cross/etc/BUTTER.jpg"
        ],
      },
      "0JSN5SH40501F": {
        size: "SH",
        imgs:[
          "/bespoke_assets/products/shoulder/solid/front/JELLYGREEN.jpg",
          "/bespoke_assets/products/shoulder/solid/side/JELLYGREEN.jpg"
        ],
      },
      "0JSN5SH40502F": {
        size: "SH",
        imgs:[
          "/bespoke_assets/products/shoulder/solid/front/NEONGUAVA.jpg",
          "/bespoke_assets/products/shoulder/solid/side/NEONGUAVA.jpg"
        ],
      },
      "0JSN5SH40503F": {
        size: "SH",
        imgs:[
          "/bespoke_assets/products/shoulder/solid/front/VERYPERI.jpg",
          "/bespoke_assets/products/shoulder/solid/side/VERYPERI.jpg"
        ],
      },
      "0JSN5SH40504F": {
        size: "SH",
        imgs:[
          "/bespoke_assets/products/shoulder/solid/front/LOVEYAPINK.jpg",
          "/bespoke_assets/products/shoulder/solid/side/LOVEYAPINK.jpg"
        ],
      },
      "0JSN5SH40505F": {
        size: "SH",
        imgs:[
          "/bespoke_assets/products/shoulder/solid/front/SODA.jpg",
          "/bespoke_assets/products/shoulder/solid/side/SODA_.jpg"
        ],
      },
      "0JSN5SH40601F": {
        size: "SH",
        imgs:[
          "/bespoke_assets/products/shoulder/starry/front/GOLD.jpg",
          "/bespoke_assets/products/shoulder/starry/side/GOLD.jpg"
        ],
      },
      "0JSN5SH40602F": {
        size: "SH",
        imgs:[
          "/bespoke_assets/products/shoulder/starry/front/PLATINUM.jpg",
          "/bespoke_assets/products/shoulder/starry/side/PLATINUM.jpg"
        ],
      },
      "0JSN5SH40603F": {
        size: "SH",
        imgs:[
          "/bespoke_assets/products/shoulder/starry/front/BLACK.jpg",
          "/bespoke_assets/products/shoulder/starry/side/BLACK.jpg"
        ],
      },
      "0JSN5SH40124F": {
        size: "M",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/solid/front/BLOSSOMPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/BLOSSOMPINK.jpg"
        ],
      },
      "0JSN5SH40125F": {
        size: "M",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/solid/front/VERYPERI.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/VERYPERI.jpg"
        ],
      },
      "0JSN5SH40126F": {
        size: "M",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/solid/front/BUTTER.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/BUTTER.jpg"
        ],
      },
      //M 테스트
      // "0JSN5SH40127F": {
      //   size: "M",
      //   imgs:[
      //     "/bespoke_assets/products/lucky_pleats_m/solid/front/SUNSETPINK.jpg",
      //     "/bespoke_assets/products/lucky_pleats_m/solid/side/SUNSETPINK.jpg"
      //   ],
      // },
      //M 테스트
      "0JSN5SH40127F": {
        size: "M",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/solid/front/LIME.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/LIME.jpg"
        ],
      },
      "0JSN5SH40128F": {
        size: "M",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/solid/front/CERULEANBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/CERULEANBLUE.jpg"
        ],
      },
      "0JSN5SH40129F": {
        size: "M",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/solid/front/SODA.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/SODA.jpg"
        ],
      },
      "0JSN5SH40309F": {
        size: "M",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/mix/front/PLUM.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/PLUM.jpg"
        ],
      },
      "0JSN5SH40310F": {
        size: "M",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/mix/front/MINTCHOCO.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/MINTCHOCO.jpg"
        ],
      },
      "0JSN5SH40311F": {
        size: "M",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/mix/front/SWIMMINGPOOL.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/SWIMMINGPOOL.jpg"
        ],
      },
      "0JSN5SH40312F": {
        size: "M",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/mix/front/SUMMERGARDEN.jpg",
          "/bespoke_assets/products/lucky_pleats_m/mix/side/SUMMERGARDEN.jpg"
        ],
      },
      "0JSN5SH40211F": {
        size: "M",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/starry/front/APRICOT.jpg",
          "/bespoke_assets/products/lucky_pleats_m/starry/side/APRICOT.jpg"
        ],
      },
      "0JSN5SH40212F": {
        size: "M",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/starry/front/DUSTYBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/starry/side/DUSTYBLUE.jpg"
        ],
      },
      "0JSN5SH40210F": {
        size: "M",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/starry/front/CHAMPAGNE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/starry/side/CHAMPAGNE.jpg"
        ],
      },
      // 7/28 오픈 비스포크
      "0JSN5TT40406F": {
        size: "SD",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/daisy/front/BLOSSOM_PINK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/daisy/side/BLOSSOM_PINK.jpg"
        ],
      },
      "0JSN5TT40407F": {
        size: "SD",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_s/daisy/front/CERULEAN_BLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/daisy/side/CERULEANBLUE.jpg"
        ],
      },
      "0JSM1CB40609F": {
        size: "DW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/daisy_wing/front/BLASSOM_PINK_.jpg"
        ],
      },
      "0JSM1CB40610F": {
        size: "DW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/daisy_wing/front/CERULEAN_BLUE_.jpg"
        ],
      },
      "0JSM1CB40611F": {
        size: "DW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/daisy_wing/front/LIME.jpg"
        ],
      },
      "0JSM1CB40612F": {
        size: "DW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/daisy_wing/front/BASIL.jpg"
        ],
      },
      // 8/4-----------------------------------------------------------
      "0JSN5TT40126F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/COBALTBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/COBALTBLUE.jpg",
        ],
      },
      "0JSN5TT40127F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/LEMON.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/LEMON.jpg",
        ],
      },
      // 11/17 오픈---------------------------------------------------------
      "0JSN5CB40106F": {
        size: "MC",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/cross/front/CARNELIANORANGE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/cross/side/CARNELIANORANGE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/cross/etc/CARNELIANORANGE.jpg",
        ],
      },
      "0JSN5CB40105F": {
        size: "MC",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/cross/front/SUNSETPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_m/cross/side/SUNSETPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_m/cross/etc/SUNSETPINK.jpg",
        ],
      },
      "0JSN5CB40802F": {
        size: "SC",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/cross/bohemian/front/GARNETPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/bohemian/side/GARNETPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/bohemian/full/GARNETPINK.jpg",
        ],
      },
      "0JSN5CB40801F": {
        size: "SC",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/cross/bohemian/front/PANSYYELLOW.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/bohemian/side/PANSYYELLOW.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/bohemian/full/PANSYYELLOW.jpg",
        ],
      },
      "0JSN5CB40803F": {
        size: "SC",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/cross/bohemian/front/WINDYBLACK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/bohemian/side/WINDYBLACK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/bohemian/full/WINDYBLACK.jpg",
        ],
      },
      "0JSN5CB40206F": {
        size: "SC",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/cross/front/DEEPFOREST.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/side/DEEPFOREST.jpg",
          "/bespoke_assets/products/lucky_pleats_s/cross/etc/DEEPFOREST.jpg",
        ],
      },
      "0JSN5SH41702F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/bohemian/front/GARNETPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_m/bohemian/side/GARNETPINK.jpg",
        ],
      },
      "0JSN5SH41705F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/bohemian/front/IRISPURPLE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/bohemian/side/IRISPURPLE.jpg",
        ],
      },
      "0JSN5SH41701F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/bohemian/front/PANSYYELLOW.jpg",
          "/bespoke_assets/products/lucky_pleats_m/bohemian/side/PANSYYELLOW.jpg",
        ],
      },
      "0JSN5SH41703F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/bohemian/front/QUARTZBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_m/bohemian/side/QUARTZBLUE.jpg",
        ],
      },
      "0JSN5SH41704F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/bohemian/front/WINDYBLACK.jpg",
          "/bespoke_assets/products/lucky_pleats_m/bohemian/side/WINDYBLACK.jpg",
        ],
      },
      "0JSN5SH42001F": {
        size: "H",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/hh/front/BURNTPEACH.jpg",
          "/bespoke_assets/products/lucky_pleats_m/hh/side/BURNTPEACH.jpg",
          "/bespoke_assets/products/lucky_pleats_m/hh/side/STARRYBURNTPEACH.jpg",
        ],
      },
      "0JSN5SH42002F": {
        size: "H",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/hh/front/CLASSICNAVY.jpg",
          "/bespoke_assets/products/lucky_pleats_m/hh/side/CLASSICNAVY.jpg",
          "/bespoke_assets/products/lucky_pleats_m/hh/side/STARRYCLASSICNAVY.jpg",
        ],
      },
      "0JSN5SH40131F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/LEAFGREEN.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/LEAFGREEN.jpg",
        ],
      },
      "0JSN5SH40134F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/MARINEGRAY.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/MARINEGRAY.jpg",
        ],
      },
      "0JSN5SH40132F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/MARSBRICK.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/MARSBRICK.jpg",
        ],
      },
      "0JSN5SH40130F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/SANDYBEIGE_2.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/SANDYBEIGE_2.jpg",
        ],
      },
      "0JSN5SH40133F": {
        size: "M",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_m/solid/front/SUNSETPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_m/solid/side/SUNSETPINK.jpg",
        ],
      },
      "0JSN5TT40502F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/bohemian/front/GARNETPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/bohemian/side/GARNETPINK.jpg",
        ],
      },
      "0JSN5TT40505F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/bohemian/front/IRISPURPLE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/bohemian/side/IRISPURPLE.jpg",
        ],
      },
      "0JSN5TT40501F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/bohemian/front/PANSYYELLOW.jpg",
          "/bespoke_assets/products/lucky_pleats_s/bohemian/side/PANSYYELLOW.jpg",
        ],
      },
      "0JSN5TT40503F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/bohemian/front/QUARTZBLUE.jpg",
          "/bespoke_assets/products/lucky_pleats_s/bohemian/side/QUARTZBLUE.jpg",
        ],
      },
      "0JSN5TT40504F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/bohemian/front/WINDYBLACK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/bohemian/side/WINDYBLACK.jpg",
        ],
      },
      "0JSN5TT40129F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/LEAFGREEN.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/LEAFGREEN.jpg",
        ],
      },
      "0JSN5TT40130F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/MARSBRICK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/MARSBRICK.jpg",
        ],
      },
      "0JSN5TT40128F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/SANDYBEIGE_2.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/SANDYBEIGE_2.jpg",
        ],
      },
      "0JSN5TT40131F": {
        size: "S",
        imgs: [
          "/bespoke_assets/products/lucky_pleats_s/solid/front/SUNSETPINK.jpg",
          "/bespoke_assets/products/lucky_pleats_s/solid/side/SUNSETPINK.jpg",
        ],
      },
      "0JSN5SH41803F": {
        size: "SH",
        imgs: [
          "/bespoke_assets/products/shoulder/bohemian/front/IRISPURPLE.jpg",
          "/bespoke_assets/products/shoulder/bohemian/side/IRISPURPLE.jpg",
        ],
      },
      "0JSN5SH41801F": {
        size: "SH",
        imgs: [
          "/bespoke_assets/products/shoulder/bohemian/front/PANSYYELLOW.jpg",
          "/bespoke_assets/products/shoulder/bohemian/side/PANSYYELLOW.jpg",
        ],
      },
      "0JSN5SH41802F": {
        size: "SH",
        imgs: [
          "/bespoke_assets/products/shoulder/bohemian/front/WINDYBLACK.jpg",
          "/bespoke_assets/products/shoulder/bohemian/side/WINDYBLACK.jpg",
        ],
      },
      // MX 로 변경예정
      "0JSN5CB40602F": {
        size: "DW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/wing_bohemian/front/GARNETPINK.jpg"
        ],
      },
      "0JSN5CB40601F": {
        size: "DW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/wing_bohemian/front/PANSYYELLOW.jpg"
        ],
      },
      "0JSN5CB40603F": {
        size: "DW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/wing_bohemian/front/QUARTZBLUE.jpg"
        ],
      },
      "0JSN5CB40604F": {
        size: "DW",
        imgs:[
          "/bespoke_assets/products/lucky_pleats_m/wing_bohemian/front/WINDYBLACK.jpg"
        ],
      },
      // MX 로 변경예정
      // 12/15 오픈 제품----------------------------------------------------------
      "0JSN5TT40807F": {
        size: "SM",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_s/mix/front/CAMELIA.jpg",
        "/bespoke_assets/products/lucky_pleats_s/mix/side/CAMELIA.jpg"
        ],
      },
      "0JSN5TT40809F": {
        size: "SM",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_s/mix/front/FALLLEAVES.jpg",
        "/bespoke_assets/products/lucky_pleats_s/mix/side/FALLLEAVES.jpg"
        ],
      },
      "0JSN5TT40808F": {
        size: "SM",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_s/mix/front/YELLOWTREE.jpg",
        "/bespoke_assets/products/lucky_pleats_s/mix/side/YELLOWTREE.jpg"
        ],
      },
      "0JSN5SH42102F": {
        size: "M",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_m/mix/front/AUTUMNMIDNIGHT.jpg",
        "/bespoke_assets/products/lucky_pleats_m/mix/side/AUTUMNMIDNIGHT.jpg"
        ],
      },
      "0JSN5SH42101F": {
        size: "M",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_m/mix/front/AUTUMNSUNSET.jpg",
        "/bespoke_assets/products/lucky_pleats_m/mix/side/AUTUMNSUNSET.jpg"
        ],
      },
      // 23-01-03 제품 추가
      "0JSN5TT41002F": {
        size: "SM",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_s/mix/front/SWIMMINGPOOL.jpg",
        "/bespoke_assets/products/lucky_pleats_s/mix/side/SWIMMINGPOOL.jpg"
        ],
      },
      "0JSN5TT41001F" : {
        size: "SM",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_s/mix/front/LAVENDERDREAM.jpg",
        "/bespoke_assets/products/lucky_pleats_s/mix/side/LAVENDERDREAM.jpg"
        ],
      },
      // 23-03-16 오픈 ------------------------------------------------------
      "0JSO5TT40103F": {
        size: "S",
        imgs: [
        "/bespoke_assets/products/lucky_pleats_s/solid/front/LAKEBLUE.jpg",
        "/bespoke_assets/products/lucky_pleats_s/solid/side/LAKEBLUE2_2.jpg",
        ],
      },
      "0JSO5TT40101F": {
        size: "S",
        imgs: [
        "/bespoke_assets/products/lucky_pleats_s/solid/front/MELTINGCREAM.jpg",
        "/bespoke_assets/products/lucky_pleats_s/solid/side/MELTINGCREAM2.jpg",
        ],
      },
      "0JSO5TT40102F": {
        size: "S",
        imgs: [
        "/bespoke_assets/products/lucky_pleats_s/solid/front/PISTACHIO.jpg",
        "/bespoke_assets/products/lucky_pleats_s/solid/side/PISTACHIO2.jpg",
        ],
      },
      "0JSO5TT40104F": {
        size: "S",
        imgs: [
        "/bespoke_assets/products/lucky_pleats_s/solid/front/VIVAMAGENTA.jpg",
        "/bespoke_assets/products/lucky_pleats_s/solid/side/VIVAMAGENTA2_2.jpg",
        ],
      },
      "0JSO5SH40103F": {
        size: "M",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_m/solid/front/LAKEBLUE.jpg",
        "/bespoke_assets/products/lucky_pleats_m/solid/side/LAKEBLUE2.jpg"
        ],
      },
      "0JSO5SH40101F": {
        size: "M",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_m/solid/front/MELTINGCREAM.jpg",
        "/bespoke_assets/products/lucky_pleats_m/solid/side/MELTINGCREAM2.jpg"
        ],
      },
      "0JSO5SH40102F": {
        size: "M",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_m/solid/front/PISTACHIO.jpg",
        "/bespoke_assets/products/lucky_pleats_m/solid/side/PISTACHIO2.jpg"
        ],
      },
      "0JSO5SH40104F": {
        size: "M",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_m/solid/front/VIVAMAGENTA.jpg",
        "/bespoke_assets/products/lucky_pleats_m/solid/side/VIVAMAGENTA2.jpg"
        ],
      },
      "0JSN5CB41102F": {
        size: "MW",
        imgs: [
        "/bespoke_assets/products/lucky_pleats_m/wing_line/front/RICHBLACK_2.jpg",
        "/bespoke_assets/products/lucky_pleats_m/wing_line/side/RICHBLACK2.jpg",
        ],
      },
      "0JSO5CB40102F": {
        size: "MW",
        imgs: [
        "/bespoke_assets/products/lucky_pleats_m/wing_line/front/LAKEBLUE.jpg",
        "/bespoke_assets/products/lucky_pleats_m/wing_line/side/LAKEBLUE2.jpg",
        ],
      },
      "0JSN5CB41101F": {
        size: "MW",
        imgs: [
        "/bespoke_assets/products/lucky_pleats_m/wing_line/front/MARSBRICK_2.jpg",
        "/bespoke_assets/products/lucky_pleats_m/wing_line/side/MARSBRICK2.jpg",
        ],
      },
      "0JSO5CB40101F": {
        size: "MW",
        imgs: [
        "/bespoke_assets/products/lucky_pleats_m/wing_line/front/MELTONGCREAM.jpg",
        "/bespoke_assets/products/lucky_pleats_m/wing_line/side/MELTONGCREAM2.jpg",
        ],
      },
      "0JSN5CB40703F": {
        size: "MW",
        imgs: [
        "/bespoke_assets/products/lucky_pleats_m/wing_line/front/CLASSICNAVY.jpg",
        "/bespoke_assets/products/lucky_pleats_m/wing_line/side/CLASSICNAVY2.jpg",
        ],
      },
      "0JSN5CB40701F": {
        size: "MW",
        imgs: [
        "/bespoke_assets/products/lucky_pleats_m/wing_line/front/HAZELNUTBEIGE.jpg",
        "/bespoke_assets/products/lucky_pleats_m/wing_line/side/HAZELNUTBEIGE2.jpg",
        ],
      },
      "0JSN5CB40702F": {
        size: "MW",
        imgs: [
        "/bespoke_assets/products/lucky_pleats_m/wing_line/front/SUNSETPINK.jpg",
        "/bespoke_assets/products/lucky_pleats_m/wing_line/side/SUNSETPINK2.jpg",
        ],
      },
      "0JSO5CB40303F": {
        size: "PW",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_m/bucket/side/VIVAMAGENTA.jpg",
        "/bespoke_assets/products/lucky_pleats_m/bucket/full/VIVAMAGENTA.jpg"
        ],
      },
      "0JSO5CB40301F": {
        size: "PW",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_m/bucket/side/MELTINGCREAM.jpg",
        "/bespoke_assets/products/lucky_pleats_m/bucket/full/MELTINGCREAM.jpg"
        ],
      },
      "0JSO5CB40302F": {
        size: "PW",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_m/bucket/side/PISTACHIO.jpg",
        "/bespoke_assets/products/lucky_pleats_m/bucket/full/PISTACHIO.jpg"
        ],
      },
      "0JSO5CB40305F": {
        size: "PW",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_m/bucket/side/RICHBLACK.jpg",
        "/bespoke_assets/products/lucky_pleats_m/bucket/full/RICHBLACK.jpg"
        ],
      },
      "0JSO5TT40202F": {
        size: "SD",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_s/daisy/front/HONEYMELON_1.jpg",
        "/bespoke_assets/products/lucky_pleats_s/daisy/side/HONEYMELON_1.jpg",
        ],
      },
      "0JSO5TT40203F": {
        size: "SD",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_s/daisy/front/VIVAMAGENTA_1.jpg",
        "/bespoke_assets/products/lucky_pleats_s/daisy/side/VIVAMAGENTA_1.jpg",
        ],
      },
      "0JSO5TT40201F": {
        size: "SD",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_s/daisy/front/MACARONYELLOW_1.jpg",
        "/bespoke_assets/products/lucky_pleats_s/daisy/side/MACARONYELLOW_1.jpg",
        ],
      },
      "0JSO5CB40202F": {
        size: "DW",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_m/daisy_wing/front/HONEYMELON.jpg"
        ],
      },
      "0JSO5CB40201F": {
        size: "DW",
        imgs:[
        "/bespoke_assets/products/lucky_pleats_m/daisy_wing/front/MACARONYELLOW.jpg"
        ],
      },
      "0JSO5SH40202F": {
        size: "SH",
        imgs:[
        "/bespoke_assets/products/shoulder/line/front/VIVAMAGENTA.jpg",
        "/bespoke_assets/products/shoulder/line/side/VIVAMAGENTA2_2.jpg"
        ],
      },
      "0JSO5SH40201F": {
        size: "SH",
        imgs:[
        "/bespoke_assets/products/shoulder/line/front/MELTINGCREAM.jpg",
        "/bespoke_assets/products/shoulder/line/side/MELTINGCREAM2_2.jpg"
        ],
      },
      "0JSO5SH40301F": {
        size: "SDD",
        imgs:[
        "/bespoke_assets/products/shoulder/daisy/SANDYBEIGE.jpg"
        ],
      },
      "0JSO5SH40302F": {
        size: "SDD",
        imgs:[
        "/bespoke_assets/products/shoulder/daisy/RICHBLACK.jpg"
        ],
      },
    };
    symbols = { //심볼 이미지 변경위한 객체
      "①": "kiss",
      "②": "diamond",
      "③": "tiamo-stroke",
      "④": "tiamo-fill",
      "⑤": "heart-stroke",
      "⑥": "heart-fill",
      "⑦": "stella",
      "⑧": "star-stroke",
      "⑨": "star-fill",
      "⑩": "poopoo",
      "⑪": "jelly",
      "⑫": "at",
      "⑬": "sharp",
      "⑭": "and",
      "⑮": "daisy_stroke",
      "⑯": "daisy_fill",
      "Ⓛ": "clover",
      "Ⓜ": "Tulip",
      "Ⓝ": "camellia",
      "Ⓞ": "Bee",
      "Ⓟ": "Snail",
      "Ⓠ": "Bird",
      "Ⓑ": "luna2",
      "Ⓒ": "ghost1_black",
      "Ⓓ": "ghost2_black",
      "Ⓔ": "ghost3_black",
      "Ⓕ": "ghost1_white",
      "Ⓖ": "ghost2_white",
      "Ⓗ": "ghost3_white",
      "Ⓘ": "cat",
      "Ⓙ": "pumkin1",
      "Ⓚ": "pumkin2",
    };
  
    bespokeContainer
    previewContainer
  
    bespokeSelectResult; //setTimeout 받은 텍스트
    bespokeResult; //결과
    bespokeLocation; //자수위치
    bespokeLetters; //비스포크 자수글자(심볼포함)
    bespokeFont; //자수폰트
    bespokeFontColor; //자수색상
    changeBespokeFontColor; //자수색상 변경
    bespokeSymbolColor; //심볼색상
    bespokeBigSymbol; //빅심볼글자
    bespokeResultKind; //자수종류
    bespokeBigSymbolColor; //빅심볼색상
  
    constructor(getOwnProductCode, bespokeContainer, previewContainer){ //생성자
      this.getOwnProductCode = getOwnProductCode;
      this.bespokeContainer = bespokeContainer;
      this.previewContainer = previewContainer;
      this.bespoke = JnsBespoke.productCodes[getOwnProductCode];
      this.insertBespokeContainer(this.bespoke);
      this.defaultImg(this.bespoke);
      this.setMethods(this);
    }
  
    setObjCollections(){ //html 객체 가져오기
      // console.log('_this', _this);
      // this.bespokeContainer = this.bespokeContainer;
      this.smallContainer = document.getElementById('bespoke-small-container');
      this.mediumContainer = document.getElementById('bespoke-medium-container');
      this.smallPreview = document.getElementById('small-preview');
      this.mediumPreview = document.getElementById('medium-preview');
      this.bespokeToggle = document.getElementsByClassName('bespoke-container-toggle')[0];
      this.toggleArrowImg = document.querySelector('.bespoke-container-toggle > img');
      this.previewWrap = document.getElementsByClassName('preview-wrap')[0];
      // this.previewBackGround = document.getElementsByClassName('preview-background')[0];
      this.requireConfirm = document.getElementsByClassName('bespoke-checked-whether-content-wrap')[0];
      this.requireCheck = document.querySelectorAll('.bespoke-checked-whether-content > input')
      this.bespokePosition = document.querySelectorAll('.bespoke-position-select-wrap > li');
      this.positionFront = document.getElementsByClassName('bespoke-position-select-front')[0];
      this.positionStrap = document.getElementsByClassName('bespoke-position-select-strap')[0];
      this.previewFront = document.getElementsByClassName('preview-front')[0];
      this.previewStrap = document.getElementsByClassName('preview-strap')[0];
      this.previewBig = document.getElementsByClassName('preview-big')[0];
      this.mediumFontWrap = document.getElementsByClassName('bespoke-font-medium-wrap')[0];
      this.input = document.getElementsByClassName('bespoke-text-input')[0];
      this.inputLimit = document.getElementsByClassName('bespoke-text-input-limit')[0];
      this.activeFont = document.querySelectorAll('.bespoke-font-btn-wrap > button');
      this.symbolColors = document.querySelectorAll('div[name=symbol-color]');
      this.bespokeKinds = document.querySelectorAll('.bespoke-font-select-wrap button');
      this.previewFrontImg = document.getElementsByClassName('preview-front-img')[0];
      this.previewStrapImg = document.getElementsByClassName('preview-strap-img')[0];
      this.petColors = document.querySelectorAll("div[name=pet-color]");
      this.bigPetsSymbol = document.querySelectorAll(".bespoke-front-big-pet-symbol-btn");
      this.bigTextSymbol = document.querySelectorAll(".bespoke-front-big-text-symbol-btn");
      this.inputColors = document.querySelectorAll("div[name=text-color]");
    }
    
    insertBespokeContainer(bespoke){ //small,medium 비스포크 판 및 시뮬레이션 UI import
      console.log("bespoke.size",bespoke.size);
      this.bespokeContainer.replaceChildren();
      this.previewContainer.replaceChildren();
      switch(bespoke.size){
        case "S": case "PS": case "SM": case "SD":
          this.bespokeContainer.insertAdjacentHTML("afterbegin", small.htmlTxt);
          this.previewContainer.insertAdjacentHTML("afterbegin", small.preview);
          // document.getElementsByClassName('bespoke-container-toggle')[0].click();
          // document.getElementsByClassName('bespoke-container-toggle')[0].click();
          break;
        case "M": case "H": case "MC": case "MT": case "SH": case "XM": case "MF": case "DW":  case "PW": case "SC": case "MW": case "SDD":
          this.bespokeContainer.insertAdjacentHTML("afterbegin", medium.htmlTxt);
          this.previewContainer.insertAdjacentHTML("afterbegin", medium.preview);
          break;
      }
      // console.log("##############################################",this);
      this.setObjCollections();
    }
  
    defaultImg(bespoke) {  //시뮬레이션 front,strap 이미지 넣기
      if (bespoke) {
        switch (bespoke.size) {
          case "S": case "SM": case "M":	case "H":	case "MC": 	case "MT": case "SC":	case "SH": case "MW":
            this.previewFrontImg.getElementsByTagName('img')[0].src = bespoke.imgs[0];
            this.previewStrapImg.getElementsByTagName('img')[0].src = bespoke.imgs[1];
            break;
          case "XM": case "PW": case "PS": case "SD":
            this.previewStrapImg.getElementsByTagName('img')[0].src = bespoke.imgs[0];
            break;
          case "MF": case "DW": case "SDD":
            this.previewFrontImg.getElementsByTagName('img')[0].src = bespoke.imgs[0];
            break;
          default:
            this.bespokeToggle.classList.remove('active');
            break;
        }
      }
    }
  
    smallDetailSet(_this){  //small bespoke UI 미노출 및 시뮬 텍스트 위치 조정
      switch (bespoke.size){
        case "PS": case "SD":
          _this.positionFront.style.display = 'none';
          _this.positionStrap.click();
          break;
        case "SM":
          _this.previewFront.classList.add('SM');
          _this.previewStrap.classList.add('SM');
          _this.previewBig.classList.add('SM');
          break;
      }
    }
  
    mediumDetailSet(_this){ //medium bespoke UI 미노출 및 시뮬 텍스트 위치 조정
      switch (bespoke.size){
        case "MW":
          _this.mediumFontWrap.style.display = 'none';
          break;
        case "H":
          _this.previewFront.classList.add('half');
          _this.previewStrap.classList.add('half');
          _this.mediumFontWrap.style.display = 'none';
          break;
        case "MC":
          _this.previewFront.classList.add('m_cross');
          _this.previewStrap.classList.add('m_cross');
          _this.mediumFontWrap.style.display = 'none';
          break;
        case "MT":
          _this.previewFront.classList.add('triple');
          _this.previewStrap.classList.add('triple');
          break;
        case "SC":
          _this.previewFront.classList.add('s_cross');
          _this.previewStrap.classList.add('s_cross');
          _this.setInputValToMax(6, _this);
          _this.mediumFontWrap.style.display = 'none';
          break;
        case "SH":
          _this.previewFront.classList.add('shoulder');
          _this.previewStrap.classList.add('shoulder');
          _this.mediumFontWrap.style.display = 'none';
          break;
        case "XM":
          _this.previewFront.classList.add('xm_solid');
          _this.previewStrap.classList.add('xm_solid');
          _this.positionFront.style.display = 'none';
          _this.positionStrap.click();
          _this.mediumFontWrap.style.display = 'none';
          break;
        case "MF":
          _this.previewFront.classList.add('muffler');
          _this.positionStrap.style.display = 'none';
          _this.mediumFontWrap.style.display = 'none';
          break;
        case "DW":
          // _this.previewFront.classList.add('xm_solid');
          // _this.previewStrap.classList.add('xm_solid');
          _this.positionStrap.style.display = 'none';
          _this.mediumFontWrap.style.display = 'none';
          break;
        case "PW":
          _this.positionFront.style.display = 'none';
          _this.positionStrap.click();
          _this.mediumFontWrap.style.display = 'none';
          break;
        case "SDD":
          _this.previewFront.classList.add('shoulder');
          _this.previewStrap.classList.add('shoulder');
          _this.positionStrap.style.display = 'none';
          _this.mediumFontWrap.style.display = 'none';
          break;
      }
    }
  
    bespokeToggleClick(_this){  // 비스포크 토글 클릭 시 해야 할 동작들
      // console.log('this.bespokeContainer', this.bespokeContainer);
      // console.log('_this', _this);

      // console.log('e', e);
      // e.preventDefault();
      // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%",_this);
      // this.setObjCollections();
  
      if (_this.bespokeContainer.classList.contains('active')) { //비스포크 판 및 시뮬 미노출
        _this.bespokeContainer.classList.remove('active');
        _this.previewContainer.classList.remove('active');
        _this.toggleArrowImg.src = '/Homepage/bespoke_assets/icons/arrow-down-new.svg';
        _this.previewWrap.style.display = 'none';
        // _this.previewBackGround.classList.remove('active');
      } else { //비스포크 판 및 시뮬 노출
        _this.bespokeContainer.classList.add('active');
        _this.previewContainer.classList.add('active');
        _this.toggleArrowImg.src = '/Homepage/bespoke_assets/icons/arrow-up-new.svg';
        _this.previewWrap.style.display = 'block';
        // _this.previewBackGround.classList.add('active');
        // console.log('bespoke.size',bespoke.size);
    
        switch (bespoke.size) { //사이즈 별 비스포크 판 및 시뮬 노출
          case "S": case "PS": case "SD": case "SM":
            _this.smallPreview.classList.add('active');
            _this.smallContainer.classList.add('active');
            _this.requireConfirm.classList.add('active');
            _this.smallDetailSet(_this);
            // console.log('들어오는지',_this.smallContainer.classList.add('active'))
            break;
          case "M": case "H": case "MC": case "MT": case "SC": case "SH": case "XM": case "MF": case "DW": case "PW": case "MW": case "SDD":
            _this.mediumPreview.classList.add('active');
            _this.mediumContainer.classList.add('active');
            _this.requireConfirm.classList.add('active');
            _this.mediumDetailSet(_this);
            break;
        }
      }
    }
  
    input_value_change(it) { //허용한 글자인지 확인 및 대문자로 변환
      var ot = "";
      let strEng = "ABCDEEFGHIJKLMNOOPPQQRRSTTUVWWXYZˇabcdefghijklmnopqrstuvwxyz①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ1234567890";
    
      for (var i = 0; i < it.length; i++) {
        if (strEng.includes(it[i])) {
          ot += it[i];
        }else if(it[i] == ' '){
          ot += it[i].replace(' ', 'ˇ');
        }
        //+ 그 이외의 문자는 제외됨
      }
      // console.log("sdfsdfsfsdfsdf");
      return ot.toUpperCase();
    }
  
    input_handler(e, _this) { // input 한글 입력 막기 및 연속 중간 글자 입력 가능 메서드
      // console.log("_________e", e);
      var caretPos = _this.input.selectionEnd;  //input 입력 글자개수와 같음
      // console.log(`INPUT(caret:${caretPos})`,e);
      // 0~caret위치-1까지
      var v1 = _this.input.value.slice(0, caretPos - 1); //마지막글자 제외
      // caret위치~끝까지
      var v2 = _this.input.value.slice(caretPos); //중간에 글자 입력 시, 입력글자 제외 뒤 모든 글자
    
      // 변환후 caret위치
      var newPos = caretPos; //현재 글자개수
    
      if(e.data != null){  //키보드로 입력한 글자가 null이 아닐 때
        // console.log("확인");
        if(e.data.match(/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/)){  //한글일 때
          alert("영문대문자, 심볼, 숫자, 공백만 가능");
        }
      }
      
      var v1 = _this.input_value_change(_this.input.value.slice(0, caretPos));  //input에 입력한 모든글자 변환 함수 호출
      // console.log(`!Composing: ${input.value}->${v}`);
      _this.input.value = v1 + v2;
      newPos = v1.length;
    
      _this.input.setSelectionRange(newPos, newPos);
      _this.input_appear(_this.input.value, _this);
    }
  
    setInputValToMax(change, _this) { //input maxLength 및 inputLimit 변경
      let inputTotal;
  
      _this.input.maxLength = `${change}`;
      inputTotal = _this.input.maxLength;
      document.querySelector('.bespoke-text-input-limit-wrap span:nth-child(3)').innerText = `/${inputTotal})`;
    
      if (_this.input.value.length > inputTotal) {
        _this.input.value = _this.input.value.substring(0, inputTotal);
      }
    }
  
    elSetEvent(els, func, event, _this){ //html 묶음 객체 click 이벤트 주기
      els.forEach(el => {
        el.addEventListener(event, function(e){func(this,_this)});
      })
    }
  
    convertActiveValue(obj, value){ //active 된 객체의 value, class, name, id 반환
      let activeVal;
  
      obj.forEach(el =>{
        if(el.classList.contains('active')){
          activeVal = el.getAttribute(value);
        }
      })
      return activeVal;
    }
  
    getActiveStyle(obj, value){ //active css 가져오기
      let activeStyle;
  
      obj.forEach(el =>{
        if(el.classList.contains('active')){
          activeStyle = window.getComputedStyle(el).getPropertyValue(value);
        }
      })
      return activeStyle;
    }
  
    getChildrenEl(obj, childNum, order){ //자식 객체 가져오기
      let activeEl;
  
      obj.forEach(el => {
        if(el.classList.contains('active')){
          activeEl = el.children[childNum][order];
        }
      })
      return activeEl;
    }
  
    input_appear(inputTotalVal, _this) { //input 입력 글자, 심볼 시뮬에 노출 부분
      // console.log("++++++++++++++++++++++++++",_this)
      let temp = "";
  
      _this.inputLimit.innerText = inputTotalVal.length;
      let inputTotal;
    
      for (var i = 0; i < inputTotalVal.length; i++) {
        if (Object.keys(_this.symbols).includes(inputTotalVal[i])) {
          if ("⑮⑯ⒸⒹⒺⒻⒼⒽⒾⒿⓀⓃ".includes(inputTotalVal[i])) { //데이지, 고양이, 동백꽃 등 색 미변경 처리 부분
            temp += `<img class='image-shadow' src='/HomePage/bespoke_assets/symbols/${_this.symbols[inputTotalVal[i]]}.png'>`;
          } else { // 그 외 심볼
            temp += `<img class='image-shadow' src='/HomePage/bespoke_assets/symbols/${_this.symbols[inputTotalVal[i]]}_${_this.convertActiveValue(_this.symbolColors, 'value')}.png'>`;
          }
        } else { // 텍스트
          if (inputTotalVal[i]) {
            if (inputTotalVal[i] == "ˇ") { //띄어쓰기 노출 부분
              temp +=`<div class ="front-text" style="font-family:${_this.convertActiveValue(_this.activeFont, 'value')}; width:4px;">` + inputTotalVal[i].replace("ˇ", " ") + "</div>";
            } else { // 그 외 부분
              temp += `<div class="front-text" style="font-family:${_this.convertActiveValue(_this.activeFont, 'value')};">` + inputTotalVal[i] + "</div>";
            }
          }
        }
      }
      if (bespoke) { //시뮬에 그리는 부분
        switch (bespoke.size) {
          case "SC": //Front 6글자, Strap 8글자 시뮬 노출
            inputTotal = _this.input.maxLength;
            _this.input.value = inputTotalVal.slice(0, inputTotal);
            _this.previewFront.replaceChildren();
            _this.previewStrap.replaceChildren();
            _this.previewFront.insertAdjacentHTML('afterbegin', temp);
            _this.previewStrap.insertAdjacentHTML('afterbegin', temp);
            break;
          default: 
            _this.previewFront.replaceChildren();
            _this.previewStrap.replaceChildren();
            _this.previewFront.insertAdjacentHTML('afterbegin', temp);
            _this.previewStrap.insertAdjacentHTML('afterbegin', temp);
            break;
        }
      }
    }
  
    simulMove(_this){ //시뮬 배경 이미지 스크롤 시, 움직이는 부분
      // console.log("움직여~~");
      let position = document.documentElement.scrollTop;
  
      if(_this.previewWrap.style.display == 'block'){
        let _target = window.pageYOffset + document.querySelector("#maxTop").getBoundingClientRect().top - 30;
        // _this.previewWrap.style.top = position < _target ? position+'px' : _target+'px';
        _this.previewWrap.style.top = '0px';

      }
    }
   
    reset(){ //페이지 재로딩 > 옵션 내용, 금액 초기화
      if(!Event.persisted){
        document.getElementById('add_option_0').innerText = '';
        document.getElementsByClassName('bespoke-img-result')[0].classList.remove('active');
        // document.getElementsByClassName('selectButton')[0].getElementsByTagName('a')[0].click();
      }
    }
  
    inputClear(_this){ //input X 클릭 > 시뮬, 값 삭제
      _this.input.value = '';
      _this.previewFront.replaceChildren();
      _this.previewStrap.replaceChildren();
      _this.inputLimit.innerHTML = '0';
    }
  
    addAndRemoveClass(obj, clickEl, attr){ //클릭한 객체 addClass, 아닌 객체 removeClass 처리
      // console.log("this", this);
      obj.forEach(el=>{
        if(el.getAttribute(attr) == clickEl.getAttribute(attr)){
          el.classList.add('active');
        }else{
          el.classList.remove('active');
        }
      })
    }
    exceptSymbol(_this){ //미듐폰트 > input 에서 심볼 제거
      if(/[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭ⓁⓂⓄⓅⓆ⑮⑯ⒾⓃ]/.test(_this.input.value)){
        _this.input.value = _this.input.value.replace(/[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭ⓁⓂⓄⓅⓆ⑮⑯ⒾⓃ]/gi, "");
      }
      _this.input.focus();
    }
  
    btnDisabled(obj, num, bool, opacity){ //버튼 비활성,활성 세팅
      for(let i = num; i < obj.length; i++){
        obj[i].disabled = bool;
        obj[i].style.opacity = opacity;
      }
    }
    
    applyBespokePosition(obj ,_this){ //자수위치 > 시뮬 이미지, input maxLenght 조정 등등
      console.log('sfsdf');
      _this.addAndRemoveClass(_this.bespokePosition, obj, 'class');
      
      if(obj.children[0].innerHTML == '정면'){
        _this.previewFront.classList.add('active');
        _this.previewStrap.classList.remove('active');
        _this.previewFrontImg.style.zIndex = 100;
        _this.previewStrapImg.style.zIndex = 50;
  
        if(_this.convertActiveValue(_this.bespokeKinds, 'class') == 'bespoke-font-select-big-textfont active' || _this.convertActiveValue(_this.bespokeKinds, 'class') == 'bespoke-font-select-big-petfont active'){
          _this.previewFront.classList.remove('active');
        }
  
        if(bespoke.size == 'SC'){ //front 6글자 세팅
          _this.setInputValToMax(6, _this);
          _this.input_appear(_this.input.value, _this);
        }
        _this.btnDisabled(_this.bespokeKinds, 2, false, 1);  //medium, big 활성
  
      }else if(obj.children[0].innerHTML == '스트랩'){
        _this.previewFront.classList.remove('active');
        _this.previewStrap.classList.add('active');
        _this.previewFrontImg.style.zIndex = 50;
        _this.previewStrapImg.style.zIndex = 100;
  
        if(bespoke.size == 'SC'){ //strap 10글자 세팅
          _this.setInputValToMax(10, _this);
          _this.input_appear(_this.input.value, _this);
        }
  
        _this.btnDisabled(_this.bespokeKinds, 2, true, 0.3); //medium, big 비활성
  
        //medium, big 선택 > strap 위치 변경 > font-family 첫번째로 변경
        if(_this.convertActiveValue(_this.bespokeKinds, 'class') == 'bespoke-font-select-medium-afont active' || _this.convertActiveValue(_this.bespokeKinds, 'class') == 'bespoke-font-select-big-textfont active' || _this.convertActiveValue(_this.bespokeKinds, 'class') == 'bespoke-font-select-big-petfont active'){
          _this.bespokeKinds[0].click();
        }
      }
    }
  
    applybespokeKinds(obj, _this){ //폰트 적용, 폰트 선택에 따라 비스포크 판 변경 부분
      _this.addAndRemoveClass(_this.bespokeKinds, obj, 'class');
  
      document.querySelectorAll('.front-text').forEach(el=> el.style.fontFamily = obj.value); 
      
      switch(obj.className){
        case 'bespoke-font-select-big-textfont active': //빅텍스트 > 시뮬에 이미지 노출, 판 변경
        _this.previewBig.replaceChildren();
          if(_this.convertActiveValue(_this.bigTextSymbol, 'value')){
            _this.previewBig.insertAdjacentHTML('afterbegin', `<img src='/HomePage/bespoke_assets/bigtexts/${_this.convertActiveValue(_this.inputColors, 'value')}/${_this.convertActiveValue(_this.bigTextSymbol, 'value')}.png'>`)
          }
          document.getElementsByClassName('bespoke-front-big-symbol-text-wrap')[0].classList.add('active');
          document.getElementsByClassName('bespoke-color-wrap')[0].classList.add('active');
          _this.previewBig.classList.add('active');
  
          document.getElementsByClassName('bespoke-symbol-wrap')[0].classList.remove('active');
          document.getElementsByClassName('bespoke-symbol-color-wrap')[0].classList.remove('active');
          document.getElementsByClassName('bespoke-front-big-symbol-pet-wrap')[0].classList.remove('active');
          document.getElementsByClassName('bespoke-pet-color-wrap')[0].classList.remove('active');
          _this.previewFront.classList.remove('active');
          break;
        case 'bespoke-font-select-big-petfont active': //빅펫 > 시뮬에 이미지 노출, 판 변경
          _this.previewBig.replaceChildren();
          if(_this.convertActiveValue(_this.bigPetsSymbol, 'value')){
            _this.previewBig.insertAdjacentHTML('afterbegin', `<img src='/HomePage/bespoke_assets/bigpets/${_this.convertActiveValue(_this.petColors, 'value')}/${_this.convertActiveValue(_this.bigPetsSymbol, 'value')}.png'>`)
          }
          document.getElementsByClassName('bespoke-front-big-symbol-text-wrap')[0].classList.remove('active');
          document.getElementsByClassName('bespoke-symbol-wrap')[0].classList.remove('active');
          document.getElementsByClassName('bespoke-symbol-color-wrap')[0].classList.remove('active');
          document.getElementsByClassName('bespoke-color-wrap')[0].classList.remove('active');
          _this.previewFront.classList.remove('active');
          //addClass
          document.getElementsByClassName('bespoke-front-big-symbol-pet-wrap')[0].classList.add('active');
          document.getElementsByClassName('bespoke-pet-color-wrap')[0].classList.add('active');
          _this.previewBig.classList.add('active');
          break;
        case 'bespoke-font-select-medium-afont active': //미듐 > 심볼 삭제, 글자갯수 변경, 시뮬 변경
          switch(bespoke.size){
            case "S": case "SM": case "M": case "MT":
              _this.exceptSymbol(_this);
              if(!_this.input.name){
                _this.input.name = _this.input.maxLength
              }
              // !_this.input.name ? _this.input.name = _this.input.maxLength : ''; //mediumn 세팅전 size 저장
              _this.setInputValToMax(1, _this);
              _this.input_appear(_this.input.value, _this);
              break;
          }
          document.getElementsByClassName('bespoke-color-wrap')[0].classList.add('active');
          _this.previewFront.classList.add('active');
          _this.previewFront.classList.add('medium-font-size');
          //removeClass
          document.getElementsByClassName('bespoke-symbol-wrap')[0].classList.remove('active');
          document.getElementsByClassName('bespoke-front-big-symbol-text-wrap')[0].classList.remove('active');
          document.getElementsByClassName('bespoke-front-big-symbol-pet-wrap')[0].classList.remove('active');
          if(_this.previewBig){
            document.getElementsByClassName('bespoke-pet-color-wrap')[0].classList.remove('active');
            _this.previewBig.classList.remove('active');
          }
          document.getElementsByClassName('bespoke-symbol-color-wrap')[0].classList.remove('active');
          break;
        default: //그 외 폰트
          //미디움 선택전 originsize 재세팅
          if(_this.input.name != ''){
            _this.setInputValToMax(_this.input.name, _this)
          }
          // _this.input.name != '' ? _this.setInputValToMax(_this.input.name, _this) : '';
  
          if(_this.positionFront.classList.contains('active')){
            _this.previewFront.classList.add('active');
            _this.previewStrap.classList.remove('active');
          }else{
            _this.previewFront.classList.remove('active');
            _this.previewStrap.classList.add('active');
          }
          document.getElementsByClassName('bespoke-symbol-wrap')[0].classList.add('active');
          document.getElementsByClassName('bespoke-symbol-color-wrap')[0].classList.add('active');
          document.getElementsByClassName('bespoke-color-wrap')[0].classList.add('active');
          //removeClass
          document.getElementsByClassName('bespoke-front-big-symbol-text-wrap')[0].classList.remove('active');
          document.getElementsByClassName('bespoke-front-big-symbol-pet-wrap')[0].classList.remove('active');
  
          switch(bespoke.size){
            case 'S': case 'PS': case 'SD': case 'SM':
              document.getElementsByClassName('bespoke-pet-color-wrap')[0].classList.remove('active');
              _this.previewBig.classList.remove('active');
              break;
          }
          _this.previewFront.classList.remove('medium-font-size');
          break;
      }
    }
  
    applyInputColor(obj, _this){ //input color 변경
      _this.addAndRemoveClass(_this.inputColors, obj, 'value');
      _this.previewFront.style.color = _this.getActiveStyle(_this.inputColors, 'background-color');
      _this.previewStrap.style.color = _this.getActiveStyle(_this.inputColors, 'background-color');
  
      if(_this.convertActiveValue(_this.bigTextSymbol, 'value')){
        _this.previewBig.replaceChildren();
        _this.previewBig.insertAdjacentHTML('afterbegin', `<img src='/HomePage/bespoke_assets/bigtexts/${_this.convertActiveValue(_this.inputColors, 'value')}/${_this.convertActiveValue(_this.bigTextSymbol, 'value')}.png'>`)
      }
    }
  
    applyBigTextSymbol(obj, _this){ //빅텍스트 그리기
      _this.addAndRemoveClass(_this.bigTextSymbol, obj, 'value');
      _this.previewBig.replaceChildren();
      _this.previewBig.insertAdjacentHTML('afterbegin', `<img src='/HomePage/bespoke_assets/bigtexts/${_this.convertActiveValue(_this.inputColors, 'value')}/${_this.convertActiveValue(_this.bigTextSymbol, 'value')}.png'>`)
    }
  
    applyBigPetsSymbol(obj, _this){ //빅펫 그리기
      _this.addAndRemoveClass(_this.bigPetsSymbol, obj, 'value');
      _this.previewBig.replaceChildren();
      _this.previewBig.insertAdjacentHTML('afterbegin', `<img src='/HomePage/bespoke_assets/bigpets/${_this.convertActiveValue(_this.petColors, 'value')}/${_this.convertActiveValue(_this.bigPetsSymbol, 'value')}.png'>`)
    }
  
    applyPetColors(obj, _this){ //펫 색상 변경
      _this.addAndRemoveClass(_this.petColors, obj, 'value');
      if(_this.convertActiveValue(_this.bigPetsSymbol, 'value')){
        _this.previewBig.replaceChildren();
        _this.previewBig.insertAdjacentHTML('afterbegin', `<img src='/HomePage/bespoke_assets/bigpets/${_this.convertActiveValue(_this.petColors, 'value')}/${_this.convertActiveValue(_this.bigPetsSymbol, 'value')}.png'>`)
      }
    }
  
    applyBasicSymbols(obj, _this){ //커서 위치 찾아서 심볼 넣기
      let symbolVal = obj.value;
      let inputVal = _this.input.value;
      let inputTotal = _this.input.maxLength;
  
      if(inputVal.length < inputTotal){
        let _selectionStart = _this.input.selectionStart + 1;
  
        //텍스트 중간에 심볼 들어갈 경우(연속도 허용)
        _this.input.value = inputVal.substring(0, _this.input.selectionStart) + symbolVal + inputVal.substring(_this.input.selectionEnd);
        _this.input_handler(_this.input.value, _this);
  
        //해당 커서에 여러개 심볼 추가
        _this.input.setSelectionRange(_selectionStart, _selectionStart);
        _this.input_handler(_this.input, _this); //input_handler 호출
        _this.input.focus();
      }
    }
  
    applySymbolColors(obj, _this){ //심볼 컬러 주기
      _this.addAndRemoveClass(_this.symbolColors, obj, 'value');
      _this.input_handler(_this.input, _this);
    }
  
    openConsentBlock(_this){ //필수확인사항 펼치기&닫기
      if(_this.requireConfirm.classList.contains('active')){
        _this.requireConfirm.classList.remove('active');
        document.querySelector('.bespoke-checked-whether-title img').src = '/HomePage/bespoke_assets/icons/arrow-down.png';
      }else{
        _this.requireConfirm.classList.add('active');
        document.querySelector('.bespoke-checked-whether-title img').src = '/HomePage/bespoke_assets/icons/arrow-up.png';
      }
    }
  
    //전체동의
    wholeAgree(obj, _this){
      if(obj.id == 'bespoke-checked-whether-option0'){
        _this.requireCheck[1].checked = obj.checked;
        _this.requireCheck[2].checked = obj.checked;
        _this.requireCheck[3].checked = obj.checked;
      }else{
        _this.requireCheck[0].checked = _this.requireCheck[1].checked && _this.requireCheck[2].checked && _this.requireCheck[3].checked;
      }
    }
  
    //선택취소 버튼
    bespokeCancle(_this){
      // document.getElementById('option_box1_del').click();
      document.getElementById('add_option_0').innerText = '';
      // document.getElementById('product_option_id1').getElementsByTagName('option')[0].selected = true;
      // document.getElementsByClassName('selectButton')[0].getElementsByTagName('a')[0].click();
      document.getElementsByClassName('bespoke-img-result')[0].classList.remove('active');
    }
  
    // 옵션적용
    applyBespoke(_this){
      let selectBigTextSymbol = _this.convertActiveValue(_this.bigTextSymbol, 'value');
      let selectBigPetsSymbol = _this.convertActiveValue(_this.bigPetsSymbol, 'value');
      let str = _this.input.value;
      let redex = /\ˇ/g;
      let totalPriceSelection = str.replace(redex, '').length + 2 ;
      let fontName = _this.convertActiveValue(_this.bespokeKinds, 'name');
      let fontVal = _this.convertActiveValue(_this.bespokeKinds, 'value');
      let selectInputColor = _this.convertActiveValue(_this.inputColors, 'value');
      let selectSymbolColor = _this.convertActiveValue(_this.symbolColors, 'value');
      let selectPetColor = _this.convertActiveValue(_this.petColors, 'value');
      let selectPosition = _this.getChildrenEl(_this.bespokePosition, 0, 'innerHTML') == '정면' ? 'front' : 'strap';

      if(document.getElementById('bespoke-checked-whether-option1').checked){
        switch(_this.convertActiveValue(_this.bespokeKinds, 'class')){
          case 'bespoke-font-select-medium-afont active': //미듐
            if(str.length > 0 && str != 'ˇ'){
              if(str.replace(redex, '').length == 1){ //띄어쓰기 제외 금액 선택 15000
                // document.getElementById('product_option_id1').getElementsByTagName('option')[5].selected = true;
              }
              document.getElementById('add_option_0').innerText = 'front'+'|자수글자-'+str+'|'+fontName+'-'+fontVal+'|자수색상-'+selectInputColor;
            }else{ //input 값 없이 옵션적용 클릭 경우
              document.getElementById('add_option_0').innerText = '';
              // document.getElementById('product_option_id1').getElementsByTagName('option')[0].selected = true;
            }
            break;
          case 'bespoke-font-select-big-textfont active': //빅텍스트 25000
              // document.getElementById('product_option_id1').getElementsByTagName('option')[7].selected = true;
              document.getElementById('add_option_0').innerText = '';
              document.getElementById('add_option_0').innerText = 'front|'+'bigText-'+selectBigTextSymbol+'|빅심볼색상-'+selectInputColor;
              break;
          case "bespoke-font-select-big-petfont active": //빅펫 25000
              // document.getElementById('product_option_id1').getElementsByTagName('option')[7].selected = true;
              document.getElementById('add_option_0').innerText = '';
              document.getElementById('add_option_0').innerText = "front|"+"bigPet-"+selectBigPetsSymbol+"|빅심볼색상-"+selectPetColor;
              break;
          default: // 그 외
            // 텍스트 & 심볼}
            if(_this.previewFront.getElementsByTagName('img').length > 0 && _this.previewFront.getElementsByTagName('div').length > 0){
              // document.getElementById('product_option_id1').getElementsByTagName('option')[totalPriceSelection].selected = true;
              document.getElementById('add_option_0').innerText = '';
              document.getElementById('add_option_0').innerText = selectPosition+'|자수글자-'+str+'|'+fontName+'-'+fontVal+'|자수색상-'+selectInputColor +
              (/[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭ⓁⓂⓄⓅⓆ]/.test(str) ? '|심볼색상-'+selectSymbolColor : '');
            }else if(_this.previewFront.getElementsByTagName('div').length > 0){ // 텍스트
              // document.getElementById('product_option_id1').getElementsByTagName('option')[totalPriceSelection].selected = true;
              document.getElementById('add_option_0').innerText = '';
              document.getElementById('add_option_0').innerText = selectPosition+'|자수글자-'+str+'|'+fontName+'-'+fontVal+'|자수색상-'+selectInputColor;
            }else if(_this.previewFront.getElementsByTagName('img').length > 0){ // 심볼
              // document.getElementById('product_option_id1').getElementsByTagName('option')[totalPriceSelection].selected = true;
              document.getElementById('add_option_0').innerText = '';
              document.getElementById('add_option_0').innerText = selectPosition+'|자수글자-'+str +
              (/[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭ⓁⓂⓄⓅⓆ]/.test(str) ? '|심볼색상-'+selectSymbolColor : '');
            }else{ //input 값 없이 옵션적용 클릭 경우
              document.getElementById('add_option_0').innerText = '';
              // document.getElementById('product_option_id1').getElementsByTagName('option')[0].selected = true;
            }
            break;
        }
        // document.getElementsByClassName('selectButton')[0].getElementsByTagName('a')[0].click(); //옵션 클릭
        //모든 필수확인사항 언체크
        _this.requireCheck[0].checked = false;
        _this.requireCheck[1].checked = false;
        _this.requireCheck[2].checked = false;
        _this.requireCheck[3].checked = false;
        if(document.getElementById('option_box1_del')){
          document.getElementById('option_box1_del').click();
        }
        setTimeout(() => { // 옵션선택 내용 하단에 이미지로 노출
          if (_this.bespokeSelectResult == null) {
            setTimeout(() => {
              // _this.bespokeSelectResult = document.querySelector('#totalProducts > table > tbody.option_products > tr > td:nth-child(1) > p > span').innerText;
              _this.bespokeSelectResult = document.getElementById('add_option_0').innerText
              _this.bespokeSelectContentComb(_this);
            }, 500);
          } else {
            _this.bespokeSelectResult = document.getElementById('add_option_0').innerText
            // _this.bespokeSelectResult = document.querySelector('#totalProducts > table > tbody.option_products > tr > td:nth-child(1) > p > span').innerText;
            _this.bespokeSelectContentComb(_this);
          }
        }, 500);
      }else{
        alert("필수확인사항을 체크해주세요");
        document.getElementsByClassName('bespoke-checked-whether-content-wrap')[0].classList.add('active');
      }
    }
    initialize(_this) {
      //front,strap
      _this.bespokeLocation = _this.bespokeSelectResult.substr(_this.bespokeSelectResult.indexOf("Bespoke/") + 8,5);
      // console.log(JnsBespoke.bespokeSelectResult);
    
      _this.bespokeResult = _this.bespokeSelectResult.split(/[\/\|,]/);
      for (let i = 0; i < _this.bespokeResult.length; i++) { //이미지 만들기 위한 조건들 get
        if (_this.bespokeResult[i].includes("bigText-")) {
          _this.bespokeResultKind = _this.bespokeResult[i].substr(0, 7);
          _this.bespokeBigSymbol = _this.bespokeResult[i].substring(8);
          // console.log(bespokeResultKind.toLowerCase());
        } else if (_this.bespokeResult[i].includes("bigPet-")) {
          _this.bespokeResultKind = _this.bespokeResult[i].substr(0, 6);
          _this.bespokeBigSymbol = _this.bespokeResult[i].substring(7);
          // console.log(bespokeResultKind.toLowerCase());
        } else if (_this.bespokeResult[i].includes("빅심볼색상-")) {
          _this.bespokeBigSymbolColor = _this.bespokeResult[i].substring(6);
          // console.log(bespokeBigSymbolColor);
        } else if (_this.bespokeResult[i].includes("자수글자-")) {
          _this.bespokeResultKind = _this.bespokeResult[i].substr(0, 4);
          _this.bespokeLetters = _this.bespokeResult[i].substring(5);
          // console.log(bespokeResultKind);
        } else if (_this.bespokeResult[i].includes("Font_")) {
          _this.bespokeFont = _this.bespokeResult[i].substring(7);
          // console.log(bespokeFont);
        } else if (_this.bespokeResult[i].includes("자수색상-")) {
          _this.bespokeFontColor = _this.bespokeResult[i].substring(5);
          // console.log(bespokeFontColor);
        } else if (_this.bespokeResult[i].includes("심볼색상-")) {
          _this.bespokeSymbolColor = _this.bespokeResult[i].substring(5);
          // console.log(bespokeSymbolColor);
        }
      }
      // console.log(bespokeResult);
    }
  
    fontColorChange(color, _this) { //옵션 선택 이미지 컬러
      switch (color) {
        case "black":
          _this.changeBespokeFontColor = "#000000";
          break;
        case "red":
          _this.changeBespokeFontColor = "#cd212a";
          break;
        case "gold":
          _this.changeBespokeFontColor = "#e3cc98";
          break;
        case "green":
          _this.changeBespokeFontColor = "#008c44";
          break;
        case "blue":
          _this.changeBespokeFontColor = "#0086b5";
          break;
        case "silver":
          _this.changeBespokeFontColor = "#d9d9d6";
          break;
        case "white":
          _this.changeBespokeFontColor = "#ffffff";
          break;
        case "brown":
          _this.changeBespokeFontColor = "#815b37";
          break;
        case "wine":
          _this.changeBespokeFontColor = "rgb(126, 49, 77)";
          break;
        case "deepgreen":
          _this.changeBespokeFontColor = "rgb(42, 66, 57)";
          break;
        case "purple":
          _this.changeBespokeFontColor = "rgb(78,70,139)";
          break;
        case "skyblue":
          _this.changeBespokeFontColor = "rgb(140, 190, 214)";
          break;
        case "pink":
          _this.changeBespokeFontColor = "rgb(207 , 134, 163)";
          break;
        case "grapefruit":
          _this.changeBespokeFontColor = "rgb(236, 114, 102)";
          break;
        case "grey":
          _this.changeBespokeFontColor = "rgb(158, 157, 156)";
          break;
      }
      return _this.changeBespokeFontColor;
    }
  
    bespokeSelectContentComb(_this) { // 옵션 선택 이미지 그리기
      _this.bespokeSelectResult == '선택한 옵션 없음' ?  document.getElementsByClassName('bespoke-img-result')[0].classList.remove('active') : document.getElementsByClassName('bespoke-img-result')[0].classList.add('active');
      let connection = "";
      _this.initialize(_this);
      document.getElementsByClassName('bespoke-img-result')[0].replaceChildren();
  
      switch(_this.bespokeResultKind){
        case "자수글자":
          switch(bespoke.size){ //세부 추가 사항(bespoke-position 변경, 배경 이미지 가져오기 부분)
            case "PW": case "PS": case "SD":
              document.getElementsByClassName('bespoke-img-result')[0].insertAdjacentHTML('afterbegin', `<div class="bescon-title">최종 구매하실 비스포크 자수입니다.</div><div class="bescon${_this.bespokeLocation == 'strap' ? '-strap' : ''}" style="background-image: url('${_this.bespokeLocation == "strap" && !!bespoke.imgs[2] ? bespoke.imgs[2]: bespoke.imgs[1]}');"></div>`);
            break;
            default:
              document.getElementsByClassName('bespoke-img-result')[0].insertAdjacentHTML('afterbegin', `<div class="bescon-title">최종 구매하실 비스포크 자수입니다.</div><div class="bescon${_this.bespokeLocation == 'strap' ? '-strap' : ''}" style="background-image: url('${_this.bespokeLocation == "strap" && !!bespoke.imgs[2] ? bespoke.imgs[2]: bespoke.imgs[0]}');"></div>`);
              if(_this.bespokeLocation != 'strap'){
                if(document.querySelector('.bespoke-font-select-medium-afont').classList.contains('active')){
                  switch(bespoke.size){
                    case "S": case "SM": case "MT":
                      document.getElementsByClassName('bescon')[0].style.cssText += `background-position : 52% 85%; padding-right: 12%;`
                      break;
                    case 'M':
                      document.getElementsByClassName('bescon')[0].style.cssText += `background-position : 52% 80%; padding-right: 12%;`
                      break;
                  }
                }else{
                  document.getElementsByClassName('bescon')[0].style.cssText += `background-position : 52% 81%;`
                  if(bespoke.size == 'MF'){
                    document.getElementsByClassName('bescon')[0].style.backgroundPosition = '52% 50%'
                  }else if(bespoke.size == 'MT'){
                    document.getElementsByClassName('bescon')[0].style.backgroundPosition = '52% 86%'
                  }
                }
              }
              break;
          }
          [..._this.bespokeLetters].forEach(char =>{ //이미지 만드는 부분
            if(Object.keys(_this.symbols).includes(char)){  //symbol 처리
              connection += `<img class='bescon-img-${"⑮⑯ⒸⒹⒺⒻⒼⒽⒾⒿⓀⓃ".includes(char)? "daisy" : _this.bespokeSymbolColor}' src='/HomePage/bespoke_assets/symbols/${_this.symbols[char]}${"⑮⑯ⒸⒹⒺⒻⒼⒽⒾⒿⓀⓃ".includes(char) ? "" : "_" + _this.bespokeSymbolColor}.png'>`
            }else{ //텍스트 처리
              if (char == "ˇ") {
                connection += `<div class='bescon-text-${_this.bespokeFontColor}' style=" width:4px; font-family:'${_this.bespokeFont}'; color: ${_this.fontColorChange(_this.bespokeFontColor, _this)};">${char.replace("ˇ", "")}</div>`;
              } else {
                //font-family > Kuenstler 이면 font-size 50으로 세팅
                connection += `<div class='bescon-text-${_this.bespokeFontColor}' style="font-family:'${_this.bespokeFont}'; ${_this.bespokeFont == 'Kuenstler' ? 'font-size: 50px !important;' : ''} color: ${_this.fontColorChange(_this.bespokeFontColor, _this)};">${char}</div>`;
              }
            }
          })
          document.getElementsByClassName(`bescon${_this.bespokeLocation == "strap" ? "-strap" : ""}`)[0].insertAdjacentHTML('afterbegin', connection);
          break;
        case "bigPet": case "bigText": //빅펫, 빅텍스트 만드는 부분
  
          document.getElementsByClassName('bespoke-img-result')[0].insertAdjacentHTML('afterbegin', `<div class="bescon-title">최종 구매하실 비스포크 자수입니다.</div><div class="bescon-big" style="background-image: url('${bespoke.imgs[0]}');"></div>`);
          if(bespoke.size == 'SM' || bespoke.size == 'MT'){
            document.getElementsByClassName('bescon-big')[0].style.backgroundPosition = '52% 83%'
          }
          connection += `<img class="bescon-big-img" src='/HomePage/bespoke_assets/${_this.bespokeResultKind.toLowerCase()}s/${_this.bespokeBigSymbolColor}/${_this.bespokeBigSymbol}.png'>`;
          document.getElementsByClassName('bescon-big')[0].insertAdjacentHTML('afterbegin', connection);
          break;
      }
    }
  
    setMethods(_this){ //이벤트 등록
      // _this넘겨줘야하는 것들 넘겨주기!! 내일 할일
      window.addEventListener('scroll',function(e){_this.simulMove(_this)});
      window.addEventListener('pageshow', _this.reset());
      document.getElementsByClassName('bespoke-text-input')[0].oninput = function(e){ _this.input_handler(e, _this)};
      document.getElementsByClassName('bespoke-text-clear-btn')[0].addEventListener('click', function(e){_this.inputClear(_this)});
      _this.elSetEvent(document.querySelectorAll('.bespoke-position-select-wrap > li'), _this.applyBespokePosition, 'click', _this);
      _this.elSetEvent(document.querySelectorAll('.bespoke-font-select-wrap button'), _this.applybespokeKinds, 'click', _this);
      _this.elSetEvent(document.querySelectorAll("div[name=text-color]"), _this.applyInputColor, 'click', _this);
      _this.elSetEvent(document.querySelectorAll(".bespoke-front-big-text-symbol-btn"), _this.applyBigTextSymbol, 'click', _this);
      _this.elSetEvent(document.querySelectorAll(".bespoke-front-big-pet-symbol-btn"), _this.applyBigPetsSymbol, 'click', _this);
      _this.elSetEvent(document.querySelectorAll("div[name=pet-color]"), _this.applyPetColors, 'click', _this);
      _this.elSetEvent(document.querySelectorAll('.bespoke-symbol-btn'), _this.applyBasicSymbols, 'click', _this);
      _this.elSetEvent(document.querySelectorAll('div[name=symbol-color]'), _this.applySymbolColors, 'click', _this);
      document.getElementsByClassName('bespoke-checked-whether-title')[0].addEventListener('click', function(e) {_this.openConsentBlock(_this)});
      _this.elSetEvent(document.querySelectorAll('.bespoke-checked-whether-content > input'), _this.wholeAgree, 'change', _this);
      document.getElementsByClassName('bespoke-button-reset')[0].addEventListener('click', function(e){_this.bespokeCancle(_this)});
      document.getElementsByClassName('bespoke-button-apply')[0].addEventListener('click', function(e){_this.applyBespoke(_this)});

    }
  }
  // 1. BespokeToggleAppear class 부분
  let getTrs = $("#dx_product_infos").children("tbody").children("tr"); //자체상품코드 묶음
  let getBespokeOption = $("#select_option").children("tbody").children("tr"); //기존 노출 옵션
  // let getOwnProductCode; //현 페이지 자체상품코드
  let bespoke; //자체상품코드의 사이즈, 이미지
  
  function getElementByXpath(path) { //xpath로 html 찾기
    return document.evaluate(
      path,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null,
    ).singleNodeValue;
  }
  
  // function getPrdCode(){ //현재 상품의 자체상품코드 구하기
  //   getOwnProductCode = '0JSM1TT40306F'
  
  //   // for (let i = 0; i < getTrs.length; i++) {
  //   //   if (getTrs.children("th")[i].innerText == "자체상품코드") {
  //   //     getElementByXpath(`//*[@id="dx_product_infos"]/tbody/tr[${i + 1}]`).style.display = "none";
  //   //     getOwnProductCode = getElementByXpath(`//*[@id="dx_product_infos"]/tbody/tr[${i + 1}]/td/span/span`).innerText;
  //   //     break;
  //   //   }
  //   // }
  // }
  
  export function bespokeAppearCheck(getOwnProductCode) { //비스포크 지원 제품인지 확인 및 옵션 가리기
    let isBespokePrd = Object.keys(JnsBespoke.productCodes).includes(getOwnProductCode); //비스포크 지원 제품인지 확인
    let existBespokeOpt = false; //추가입력 비스포크 설정있는지 확인
  
    if (isBespokePrd) {
      bespoke = JnsBespoke.productCodes[getOwnProductCode];
    }
    // for (let i = 0; i < getBespokeOption.length; i++) { //추가입력 있는지 확인
    //   if (getBespokeOption.children("th")[i]) {
    //     if (getBespokeOption.children("th")[i].innerText.trim().startsWith("Bespoke[")) {
    //       existBespokeOpt = true;
    //       setInterval(() => {$("#option_box1_del").css("display", "none");}, 500);
    //       break;
    //     }
    //   }
    // }
    existBespokeOpt = true;
  
    if (isBespokePrd && existBespokeOpt) {
      $(".bespoke-container-toggle").addClass("active");
      console.log("11111");
      return true;
    } else if (isBespokePrd && !existBespokeOpt) {
      //여기에 productCode 있지만, 옵션이 없을때 알림
      $(".bespoke-container-toggle").removeClass("active");
      $("#select_option").css("display", "block");
      // console.log("2222");
    } else if (!isBespokePrd && existBespokeOpt) {
      //여기에 productCode는 없지만, 옵션 있을 때 알림
      $(".bespoke-container-toggle").removeClass("active");
      $("#select_option").css("display", "none");
      // console.log("3333");
    } else {
      //!isBespokePrd && !existBespokeOpt
      $("#select_option").css("display", "block");
      $(".bespoke-container-toggle").removeClass("active");
      // console.log("4444");
    }

    return false;
  }
  
  // function elSetEvent(els, func, event){ //html 묶음 객체 click 이벤트 주기
  //   els.forEach(el => {
  //     el.addEventListener(event, func);
  //   })
  // }
  
  
  // setTimeout(() => {
    // getPrdCode();
    // bespokeAppearCheck();
    // var jnsBespoke;
    
    // if(bespokeAppearCheck()){
    //   console.log('ssss',document.querySelector('.bespoke-container'))
    //   jnsBespoke = new JnsBespoke(getOwnProductCode, document.querySelector('.bespoke-container'), document.querySelector('.preview-container'));
    //   // jnsBespoke.insertBespokeContainer(bespoke);
    //   // jnsBespoke.defaultImg(bespoke);
      
    //   document.addEventListener("DOMContentLoaded", function(){
    //     jnsBespoke.bespokeToggle.addEventListener('click', function(e){
    //       jnsBespoke.bespokeToggleClick(e, jnsBespoke)
    //     });
    //   })
    // }
    
  // }, 1000);
// }

// export default NewBespoke
// export{
//   bespokeAppearCheck,
//   JnsBespoke
// }






