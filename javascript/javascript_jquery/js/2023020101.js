/*
let n1 = 10;
document.write(n1 + "은 ");
if(n1%2)
    document.write("홀수 입니다.<br>");
else
    document.write("짝수 입니다.<br>");


let n2 = 15;
document.write(n2 + "은 ");
if(n2%2)
    document.write("홀수 입니다.<br>");
else
    document.write("짝수 입니다.<br>");


let n3 = 19;
document.write(n3 + "은 ");
if(n3%2)
    document.write("홀수 입니다.<br>");
else
    document.write("짝수 입니다.<br>");
*/

/* 중복코드 또는 재삳용 코드 찾아서 함수로 포장하기
function checkEvenOdd(){
    let n1 = 10;
    document.write(n1 + "은 ");
    if(n1%2)
        document.write("홀수 입니다.<br>");
    else
        document.write("짝수 입니다.<br>");
}

checkEvenOdd();
*/

/* 중복 코드에서 변경되지 않는 부분과 변경되는 부분 파악하기
function checkEvenOdd(){
    let n1 = 10;   // 변경되는 부분
    document.write(n1 + "은 ");
    if(n1%2)
        document.write("홀수 입니다.<br>");
    else
        document.write("짝수 입니다.<br>");
}

checkEvenOdd();
*/

function checkEvenOdd(value){
    document.write(value + "은 ");
    if(value%2)
        document.write("홀수 입니다.<br>");
    else
        document.write("짝수 입니다.<br>");
}

checkEvenOdd(10);
checkEvenOdd(15);
checkEvenOdd(19);