$(document).ready(function(){
    var check = checkCount();

    $("#btnStart").click(function(){
        check();
    })
});

function checkCount(){
    let count = 0;
    function check(){
        count++;
        console.log(count);
        if(count >= 10)
            alert("완료 되었습니다");
    }

    return check;
}

