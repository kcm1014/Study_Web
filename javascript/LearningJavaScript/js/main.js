
$(document).ready(function(){
    /**
    * 2023.01.10 Learning Javascript 
    * Day 01
    */
    'use strict';   // 코드를 더 엄격하게 처리하라는 의미
    //1. console.log('main.js loaded');

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    /** 
    * 2 : 하나의 원
    var c = Shape.Circle(200,200,50);
    c.fillColor = 'green';
    */

    /**
    * 3 : 바둑판식 원 그리기
    var c;
    for(var x = 25; x < 400; x += 50){
        for(var y = 25; y < 400; y += 50){
            c = Shape.Circle(x,y,20);
            c.fillColor = 'green';
        }
    }
    */

    /** 
     * 4 : 비동기식 이벤트 처리
    var tool = new Tool();
    tool.onMouseDown = function(event){
        var c = Shape.Circle(event.point.x, event.point.y,20);   // Shape.Circle(event.point.20); 이렇게도 가능 / 데이터 추론.
        c.fillColor = 'green';
    };
    */

    /** 5 :  도형안에 문자 출력하기
    var c = Shape.Circle(200,200,80);
    c.fillColor = 'black';

    var text = new PointText(200,200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';
    paper.view.draw();
    */


/**
 * 2023.01.11 4장 제어문
 * Day 02
 */

// 크라운 앤 앵커 시뮬레이션 


})

