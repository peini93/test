$(function() {

	$(".options-wrap .options-ul li a").click(function() {
		$(".options-wrap .options-ul li a").removeClass('active');
        $(this).addClass('active');
    });

    // 輸入框 自動顯示和移除

    $(".field input").focus(function() {
        $(".ph-label").addClass('active');
    });

    $(".field input").focusout(function(){
        getInputValue = $("input").val();
          if(getInputValue.length==0){
            $(".ph-label").removeClass('active');
          }else{
            $(".ph-label").addClass('active');
        }
    });

});
