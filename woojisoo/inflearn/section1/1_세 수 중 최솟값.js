// 1. 세 수 중 최솟값 (정렬 사용 X)

// 나의 풀이
function solution(a, b, c) {
  let answer = 0;
  if(a < b && a < c){           // 둘 다 참이면
    answer += a;                // a를 answer로 넣기
  } else if (b < a && b < c){
    answer += b;                // 위 과정을 반복
  } else if (c < a && c < b){
    answer += c;
  }
  return answer;
}

console.log(solution(93, 22, 1));

// 강사님 풀이
function solution(a, b, c) {
  let answer;
  if(a<b) answer=a;
  else answer=b;
  if(c<answer) answer=c; 
  return answer;
}