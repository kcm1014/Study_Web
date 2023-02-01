var $images = null;
$(document).ready(function(){
    $images = $("#container1 img");
    showCallery(3,200,200);
});


function showCallery(count, width, height){
    var length = $images.length;

    for(let i=0; i<length; i++){
        let $img = $images.eq(i);

        var x = 100 + ((i%count) * width);
        var y = 100 + (parseInt(i/count) * height);

        $img.css({
            left: x,
            top: y
        });
    }
}