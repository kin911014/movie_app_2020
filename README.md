# Movie App 2020

React JS Fundamentals Course (2020 update!)

## component가 업데이트 될 때 호출되는 function
### component생성
    Mounting updating
### component죽음
    Unmounting

### render이전에 실행하는 함수
    constructor();
    - component가 mount(생성 or 설치) 될 때
    - component가 screen에 표시 될 때
    - component가 나의 website에 갈 때 constructor를 호출
    - 그 다음에 render가 일어난다.
    - 그 이후 client의 이벤트 발생 시 componentDidMount()가 일어난다.
    - 따라서 setState를 호출하면 component를 호출하고, 먼저 render를 호출한 다음 업데이트가 완료되었다고 말하면 componentDidUpdate가 실행된다.

