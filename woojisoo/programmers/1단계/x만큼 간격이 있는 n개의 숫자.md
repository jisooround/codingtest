# x만큼 간격이 있는 n개의 숫자

## 출처

[프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/12954)

## 코드

#### 이전 풀이

```javascript
function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i += 1) {
    answer.push(x * i);
  }
  return answer;
}
```

#### 이번 풀이

- 숫자 1로 채워진 길이가 n인 배열 `arr`을 만들어줍니다.
- `arr` 배열을 순회하면서 각 요소를 x씩 증가하는 수로 바꿔줍니다 → 인덱스 값에 + 1를 해주고, x를 곱한 값으로 치환

```javascript
function solution(x, n) {
  let arr = new Array(n).fill(1);
  let answer = arr.map((y, i) => (i + 1) * x);
  return answer;
}
```

## 다른 사람의 풀이

```javascript
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
```

처음부터 x로 채워진 배열을 만들고, 바로 map으로 계산을 해주었다.

## 알게된 내용

### [Array.prototype.fill()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

fill() 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다. <br/>

- 첫 번째 인자는 채울 값
- 두 번째 인자는 채우는 것을 시작하는 인덱스 번호(기본값은 첫 번째 요소)
- 세 번째 인자는 채우는 것을 끝낼 인덱스 번호(기본값은 배열의 마지막 요소)

#### 반환 값

변형한 배열 (fill 메서드는 변경자 메서드로, 복사본이 아니라 this 객체를 변형해 반환합니다.)
