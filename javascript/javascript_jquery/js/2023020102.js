var $images = null;
$(document).ready(function(){
    init();
    initEvent();
    showCallery(2,200,200);
});

//요소 초기화
function init(){
    $images = $("#container1 img");
}

//이벤트 초기화
function initEvent(){
    $("#btnStart").click(function(){
        showCallery(3,150,150);
    });
}

//이미지 배열하기
function showCallery(count, width, height){
    var length = $images.length
    for(let i = 0 ; i < length ; i++){
        let $img = $images.eq(i)

        var x = 100 + ((i%count) * width);
        var y = 100 + (parseInt(i/count) * height);

        $img.css({
            left: x,
            top: y
        })
    }
}