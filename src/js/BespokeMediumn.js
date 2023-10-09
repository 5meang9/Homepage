let preview = `
<div id="medium-preview">
  <div class="preview-wrap">
    <div class="preview-front-img">
      <img src="" alt="미리보기" />
    </div>
    <div class="preview-strap-img">
      <img src="" alt="미리보기 스트랩" />
    </div>
    <div class="preview-front active"></div>
    <div class="preview-strap"></div>
  </div>
</div>`
 
let htmlTxt = `
<div id="bespoke-medium-container">
	<div class="bespoke-text-wrap active">
		<div class="bespoke-text-title">자수 스타일</div>
		<div class="bespoke-text-input-wrap">
			<input
				type="text"
				class="bespoke-text-input"
				maxlength="10"
				autocomplete="off"
				placeholder="영문대문자, 심볼, 숫자, 공백만 가능"
			/>
			<button class="bespoke-text-clear-btn">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="20"
					viewBox="0 0 20 20"
					width="20"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path
						d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
					/>
				</svg>
			</button>
		</div>
		<div class="bespoke-text-input-limit-wrap">
			<span>(</span>
			<span class="bespoke-text-input-limit">0</span>
			<span>/ 10 ) </span>
		</div>
	</div>
	<div class="bespoke-position-wrap">
		<div class="bespoke-position-title">자수위치</div>
		<ul class="bespoke-position-select-wrap">
			<li class="bespoke-position-select-front active">
				<div class="bespoke-position-select-title">정면</div>
			</li>
			<li class="bespoke-position-select-strap">
				<div class="bespoke-position-select-title">스트랩</div>
			</li>
		</ul>
	</div>
	<div class="bespoke-font-wrap active">
		<div class="bespoke-font-select-wrap">
			<div class="bespoke-font-small-wrap">
				<div class="bespoke-font-title">Small</div>
				<div class="bespoke-font-btn-wrap">
					<button class="bespoke-font-select-afont active" value="Universe" name="Font_A">
						A
					</button>
					<button class="bespoke-font-select-bfont" value="CardenioModern" name="Font_B">
						A
					</button>
				</div>
			</div>
			<div class="bespoke-font-medium-wrap">
				<div class="bespoke-font-title">Medium</div>
				<div class="bespoke-font-btn-wrap">
					<button class="bespoke-font-select-medium-afont" value="Kuenstler" name="Font_C">
						A
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class="bespoke-front-big-symbol-text-wrap">
		<div class="bespoke-front-big-symbol-title">전면 빅심볼</div>
		<div class="bespoke-front-big-symbol-btn-wrap">
			<button class="bespoke-front-big-text-symbol-btn" value="A">
				<img
					src="/bespoke_assets/bigtexts/black/A.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="B">
				<img
					src="/bespoke_assets/bigtexts/black/B.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="C">
				<img
					src="/bespoke_assets/bigtexts/black/C.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="D">
				<img
					src="/bespoke_assets/bigtexts/black/D.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="E">
				<img
					src="/bespoke_assets/bigtexts/black/E.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="F">
				<img
					src="/bespoke_assets/bigtexts/black/F.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="G">
				<img
					src="/bespoke_assets/bigtexts/black/G.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="H">
				<img
					src="/bespoke_assets/bigtexts/black/H.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="I">
				<img
					src="/bespoke_assets/bigtexts/black/I.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="J">
				<img
					src="/bespoke_assets/bigtexts/black/J.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="K">
				<img
					src="/bespoke_assets/bigtexts/black/K.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="L">
				<img
					src="/bespoke_assets/bigtexts/black/L.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="M">
				<img
					src="/bespoke_assets/bigtexts/black/M.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="N">
				<img
					src="/bespoke_assets/bigtexts/black/N.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="O">
				<img
					src="/bespoke_assets/bigtexts/black/O.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="P">
				<img
					src="/bespoke_assets/bigtexts/black/P.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="Q">
				<img
					src="/bespoke_assets/bigtexts/black/Q.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="R">
				<img
					src="/bespoke_assets/bigtexts/black/R.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="S">
				<img
					src="/bespoke_assets/bigtexts/black/S.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="T">
				<img
					src="/bespoke_assets/bigtexts/black/T.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="U">
				<img
					src="/bespoke_assets/bigtexts/black/U.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="V">
				<img
					src="/bespoke_assets/bigtexts/black/V.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="W">
				<img
					src="/bespoke_assets/bigtexts/black/W.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="X">
				<img
					src="/bespoke_assets/bigtexts/black/X.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="Y">
				<img
					src="/bespoke_assets/bigtexts/black/Y.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-text-symbol-btn" value="Z">
				<img
					src="/bespoke_assets/bigtexts/black/Z.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
		</div>
	</div>
	<div class="bespoke-front-big-symbol-pet-wrap">
		<div class="bespoke-front-big-symbol-title">전면 빅심볼</div>
		<div class="bespoke-front-big-symbol-btn-wrap">
			<button class="bespoke-front-big-pet-symbol-btn" value="bichon">
				<img
					src="/bespoke_assets/bigpets/black/bichon.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-pet-symbol-btn" value="cheese">
				<img
					src="/bespoke_assets/bigpets/black/cheese.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-pet-symbol-btn" value="bostonterrier">
				<img
					src="/bespoke_assets/bigpets/black/bostonterrier.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-pet-symbol-btn" value="maltese">
				<img
					src="/bespoke_assets/bigpets/black/maltese.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-pet-symbol-btn" value="persian">
				<img
					src="/bespoke_assets/bigpets/black/persian.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-pet-symbol-btn" value="toypoodle">
				<img
					src="/bespoke_assets/bigpets/black/toypoodle.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
			<button class="bespoke-front-big-pet-symbol-btn" value="tuxedo">
				<img
					src="/bespoke_assets/bigpets/black/tuxedo.png"
					width="30px"
					height="30px"
					alt=""
				/>
			</button>
		</div>
	</div>
	<div class="bespoke-color-wrap active">
		<ul class="bespoke-color-select-wrap">
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-white active"
					name="text-color"
					value="white"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-black"
					name="text-color"
					value="black"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-red"
					name="text-color"
					value="red"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-blue"
					name="text-color"
					value="blue"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-green"
					name="text-color"
					value="green"
				></div>
			</li>

			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-gold"
					name="text-color"
					value="gold"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-silver"
					name="text-color"
					value="silver"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-wine"
					name="text-color"
					value="wine"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-deepgreen"
					name="text-color"
					value="deepgreen"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-purple"
					name="text-color"
					value="purple"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-skyblue"
					name="text-color"
					value="skyblue"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-pink"
					name="text-color"
					value="pink"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-grapefruit"
					name="text-color"
					value="grapefruit"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-grey"
					name="text-color"
					value="grey"
				></div>
			</li>
		</ul>
	</div>
	<div class="bespoke-symbol-wrap active">
		<div class="bespoke-symbol-title">심볼</div>
		<div class="bespoke-symbol-btn-wrap">
			<button class="bespoke-symbol-btn" value="①">
				<img
					src="/bespoke_assets/symbols/kiss_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
			<button class="bespoke-symbol-btn" value="②">
				<img
					src="/bespoke_assets/symbols/diamond_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
			<button class="bespoke-symbol-btn" value="③">
				<img
					src="/bespoke_assets/symbols/tiamo-stroke_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
			<button class="bespoke-symbol-btn" value="④">
				<img
					src="/bespoke_assets/symbols/tiamo-fill_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
			<button class="bespoke-symbol-btn" value="⑤">
				<img
					src="/bespoke_assets/symbols/heart-stroke_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
			<button class="bespoke-symbol-btn" value="⑥">
				<img
					src="/bespoke_assets/symbols/heart-fill_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
			<button class="bespoke-symbol-btn" value="⑦">
				<img
					src="/bespoke_assets/symbols/stella_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
			<button class="bespoke-symbol-btn" value="⑧">
				<img
					src="/bespoke_assets/symbols/star-stroke_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
			<button class="bespoke-symbol-btn" value="⑨">
				<img
					src="/bespoke_assets/symbols/star-fill_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
			<button class="bespoke-symbol-btn" value="⑩">
				<img
					src="/bespoke_assets/symbols/poopoo_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
			<button class="bespoke-symbol-btn" value="⑪">
				<img
					src="/bespoke_assets/symbols/jelly_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
			<button class="bespoke-symbol-btn" value="⑫">
				<img
					src="/bespoke_assets/symbols/at_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
			<button class="bespoke-symbol-btn" value="⑬">
				<img
					src="/bespoke_assets/symbols/sharp_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
			<button class="bespoke-symbol-btn" value="⑭">
				<img
					src="/bespoke_assets/symbols/and_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
      <button
				class="bespoke-symbol-btn"
				value="Ⓛ"
			>
				<img
					src="/bespoke_assets/symbols/clover_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
      <button
				class="bespoke-symbol-btn"
				value="Ⓜ"
			>
				<img
					src="/bespoke_assets/symbols/Tulip_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
      <button
				class="bespoke-symbol-btn"
				value="Ⓞ"
			>
				<img
					src="/bespoke_assets/symbols/Bee_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
      <button
				class="bespoke-symbol-btn"
				value="Ⓟ"
			>
				<img
					src="/bespoke_assets/symbols/Snail_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
      <button
				class="bespoke-symbol-btn"
				value="Ⓠ"
			>
				<img
					src="/bespoke_assets/symbols/Bird_black.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
      <button
				class="bespoke-symbol-btn"
				value="⑮"
				style="background-color: #d9d9d9; border: none"
			>
				<img
					src="/bespoke_assets/symbols/daisy_stroke.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
			<button
				class="bespoke-symbol-btn"
				value="⑯"
				style="background-color: #d9d9d9; border: none"
			>
				<img
					src="/bespoke_assets/symbols/daisy_fill.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
      <button
				class="bespoke-symbol-btn"
				value="Ⓘ"
				style="background-color: #d9d9d9; border: none"
			>
				<img
					src="/bespoke_assets/symbols/cat.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
      <button
				class="bespoke-symbol-btn"
				value="Ⓝ"
				style="background-color: #d9d9d9; border: none"
			>
				<img
					src="/bespoke_assets/symbols/camellia.png"
					width="20px"
					height="20px"
					alt=""
				/>
			</button>
		</div>
	</div>
	<div class="bespoke-symbol-color-wrap active">
		<ul class="bespoke-color-select-wrap">
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-white active"
					name="symbol-color"
					value="white"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-black"
					name="symbol-color"
					value="black"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-red"
					name="symbol-color"
					value="red"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-blue"
					name="symbol-color"
					value="blue"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-green"
					name="symbol-color"
					value="green"
				></div>
			</li>

			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-gold"
					name="symbol-color"
					value="gold"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-silver"
					name="symbol-color"
					value="silver"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-wine"
					name="symbol-color"
					value="wine"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-deepgreen"
					name="symbol-color"
					value="deepgreen"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-purple"
					name="symbol-color"
					value="purple"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-skyblue"
					name="symbol-color"
					value="skyblue"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-pink"
					name="symbol-color"
					value="pink"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-grapefruit"
					name="symbol-color"
					value="grapefruit"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-grey"
					name="symbol-color"
					value="grey"
				></div>
			</li>
		</ul>
	</div>
	<div class="bespoke-front-big-symbol-pet-wrap">
		<ul class="bespoke-color-select-wrap">
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-black active"
					name="pet-color"
					value="black"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-white"
					name="pet-color"
					value="white"
				></div>
			</li>
			<li class="bespoke-color-select">
				<div
					class="bespoke-color-select-brown"
					name="pet-color"
					value="brown"
				></div>
			</li>
		</ul>
	</div>
	<div class="bespoke-checked-whether-wrap">
		<div class="bespoke-checked-whether-title">
			필수확인사항
			<img
				src="/bespoke_assets/icons/arrow-down.png"
				width="16px"
				height="16px"
				alt=""
			/>
		</div>
		<div class="bespoke-checked-whether-content-wrap active">
			<div class="bespoke-checked-whether-content">
				<input
					type="checkbox"
					id="bespoke-checked-whether-option0"
					autocomplete="off"
				/>
				<div class="bespoke-checked-whether-label">전체 동의</div>
			</div>
			<div class="bespoke-checked-whether-content">
				<input
					type="checkbox"
					id="bespoke-checked-whether-option1"
					autocomplete="off"
				/>
				<div class="bespoke-checked-whether-label">
          제작 기간은 평일 기준 14~20일 소요, 자동 부분 출고되지 않음으로 단독 주문을 권장 드립니다.
				</div>
			</div>
			<div class="bespoke-checked-whether-content">
				<input
					type="checkbox"
					id="bespoke-checked-whether-option2"
					autocomplete="off"
				/>
				<div class="bespoke-checked-whether-label">
          BESPOKE 미리 보기는 참고용으로 컬러와 위치에 다소 차이가 있을 수 있습니다.
				</div>
			</div>
			<div class="bespoke-checked-whether-content">
				<input
					type="checkbox"
					id="bespoke-checked-whether-option3"
					autocomplete="off"
				/>
				<div class="bespoke-checked-whether-label" style="color: #ff0000;">
          주문 제작 제품으로 배송 준비 중 취소, 변경 및 변심 교환, 반품이 불가합니다.
          옵션을 선택하신 후에는 반드시 옵션 적용 버튼을 누르시어 선택하신 옵션과 금액을 확인하여 주세요.
				</div>
			</div>
		</div>
	</div>
	<div class="bespoke-button-wrap">
		<button class="bespoke-button-reset">선택 취소</button>
		<button class="bespoke-button-apply">옵션 적용</button>
	</div>
</div>
`

export{
  htmlTxt,
  preview
}
