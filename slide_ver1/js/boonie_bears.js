$(function(){

	//window.alert("연결확인");
	/*
		알고리즘

		1. 클릭한 인디게이터가 몇번째 요소인지를
		나타내는 index 번호 추출

		2. 그 index 번호에 해당하는 a 요소의 부모에  .on클래스를 추가한다.

		3. 그 index 번호에 해당하는 a 요소의 부모의 형제에 해당하는 다른 li 에게서 
		.on 클래스를 제거한다. 

		4. index 번호에 매칭되는 슬라이드가 보일수 있도록 .slides-container 를 이동한다!
	*/
	//제이쿼리로 셀렉팅할 경우 배열방식으로 저장된다.
	 console.log('$("#slides>.slides-pagination>li>a")=',$("#slides>.slides-pagination>li>a"));

	 var $indicater = $(".slides-pagination>li>a");

	 //인디게이터에 대한 클릭이벤트 구문
	$indicater.click(function(evt){
		//window.alert("클릭~!");

		//.index() 메소드는 지정된 요소의 인덱스 번호를 추출한다. 0부터 시작한다.
		var nowIdx = $indicater.index($(this));
		console.log("nowIdx = ",nowIdx);

		$indicater.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");

		//.animate(JOSN옵션, 시간, 이정효과, 콜백함수)
		$("#slides>.slides-container").stop().animate({
			"left" : -665 * nowIdx
		},3000);

		evt.preventDefault();
	});

});//약식초기화
