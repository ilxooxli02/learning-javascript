## ch01
* '<script>' 태그를 헤드에 넣을 수도 있지만, 그렇게 하면 성능이 다소 떨어지고 헤드가 지나치게 복잡해지므로 바디 마지막에 놓습니다.
  * 웹브라우저가 HTML 문서를 해석(Parsing) 할 때 '<script>' 태그를 만나면 그 안에 있는 JavaScript 의 처리가 끝날 때 까지 다른 HTML의 해석을 멈추기 때문에 사용자 입장에서 HTML 페이지가 화면에 다 그려지기까지 더 오래걸리게 됩니다. 그래서 우선 CSS, HTML 해석이 먼저 완료되고 나서 JavaScript 가 수행하는 것이 더 빠르게 느껴지기 때문에 HTML 문서의 마지막에 두는 것을 권합니다.
  * https://hashcode.co.kr/questions/850/html-%EC%97%90%EC%84%9C-javascript-%EC%BD%94%EB%93%9C%EB%A5%BC-head%EC%97%90-%EB%84%A3%EC%A7%80-%EC%95%8A%EA%B3%A0-body-%EB%A7%A8-%EB%81%9D%EC%97%90-%EB%84%A3%EB%8A%94-%EC%9D%B4%EC%9C%A0%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94
  * 어떤 일을 하기 전에 항상 먼저 실행해야 하는 코드를 보통 템플릿, 또는 보일러플레이트(boilerplate)라고 부릅니다.

## ch02
  * 자바스크립트는 인터프리팅 언어이고 번거로운 부대 작업(컴파일, 링크)이 필요 없다는 장점이 있습니다.
    * 노드 같은 자바스크립트 엔진은 분명 자바스크립트를 컴파일하긴 하지만, 프로그래머가 개입할 필요 없이 자동으로 이루어집니다.
  * ES6 호환 테이블 : http://kangax.github.io/compat-table/es6/
  * 콘솔 기초 강의 : https://teamtreehouse.com/library/introduction-to-the-terminal