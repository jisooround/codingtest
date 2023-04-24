// 2. 삼각형 판별하기

// 나의 풀이
function solution(a, b, c){
    let arr = [a, b, c]; // 배열에 값을 담기
    arr.sort((a, b) => a - b); // 오름차순으로 정렬
    return arr[2] < arr[0]+arr[1] ? "YES" : "NO"
}

console.log(solution(6, 7, 11));

// 강사님 풀이
function solution(a, b, c){
  let answer="YES", max;
  let tot=a+b+c;
  if(a>b) max=a;
  else max=b;
  if(c>max) max=c;
  if(tot-max<=max) answer="NO"; 
  return answer;
}