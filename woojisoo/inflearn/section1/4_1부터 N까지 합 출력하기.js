// 4. 1부터 N까지 합 출력하기

// 나의 풀이
function solution(n){
  let answer = 0; // answer의 값에 0 할당
  for(let i = 1; i <= n ; i++){ //n의 숫자 만큼 반복문 실행
    answer += i;  // i를 answer에 더하기
  }
  return answer;
}

console.log(solution(10));

// 강사님 풀이
function solution(n){
  let answer=0;
  for(let i=1; i<=n; i++){
      answer=answer+i;
  }
  
  return answer;
}
