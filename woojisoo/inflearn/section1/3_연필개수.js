// 3. 연필개수

// 나의 풀이
function solution(n){
  let answer;
  if(n % 12 > 0) answer = Math.floor(n/12)+1; // n을 12로 나눈 나머지 값이 0 이상이면 1을 더해주고 소수점은 내림처리
  return answer;
}

console.log(solution(178));

// 강사님 풀이
function solution(n){
  let answer;
  answer=Math.ceil(n/12);
  return answer;
}