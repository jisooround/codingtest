// 5. 최솟값 구하기

// 나의 풀이
function solution(arr){       
  arr.sort((a,b) => a - b); // 오름차순으로 정렬 후
  return arr[0];  // 0번째 요소 반환
}

console.log(solution([5,3,7,11,2,15,17]));

function solution(arr){         
  let answer, min=Number.MAX_SAFE_INTEGER;
  for(let i=0; i<arr.length; i++){
      if(arr[i]<min) min=arr[i];
  }
  answer=min;
  return answer;
}