function solution(new_id) {
  return (
    new_id
      // 1단계 : 모든 대문자를 대응되는 소문자로 치환
      .toLowerCase()

      // 2단계 : 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거
      // [] : 문자셋 / 대괄호 안에 있는 모든 문자 중에서 매칭되는 문자를 찾음
      // 문자셋의 맨 앞에 ^를 붙이면 부정 문자셋
      .replace(/[^\w-.]/g, '')

      // 3단계 : 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
      // 마침표가 한 번 이상 연속된 문자열을 '.' 로 교체
      .replace(/\.+/g, '.')

      // 4단계 : 마침표(.)가 처음이나 끝에 위치한다면 제거
      // ^문자 : 문자열의 맨 앞의 문자가 해당 문자와 매칭되는지 검사함
      // 문자$ : 문자열의 맨 뒤의 문자가 해당 문자와 매칭되는지 검사함
      // | : or / 또는 - 패턴에 대한 or 이기 때문에 해석하면 and 의미를 가짐
      .replace(/^\.|\.$/g, '')

      // 5단계 : 빈 문자열일 경우 "a" 대입
      // 시작 문자와 끝 문자에 대응되는 문자를 작성하지 않으면 빈 문자열을 의미함
      .replace(/^$/g, 'a')

      // 6단계 : 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거 , 이후 끝에 위치한 마침표(.) 문자 제거
      // 맨 처음부터 15개의 문자까지 자름
      .substr(0, 15)
      // 맨 뒤의 마침표를 빈 문자열로 교체
      .replace(/\.$/g, '')

      // 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙임
      // () : 캡쳐링 그룹 / 대응되는 패턴이 있을 경우 각 캡쳐링 그룹 순서대로 해당 문자열을 기억함
      // 기억한 문자열을 순서대로 $1, $2, ..., $9 로 접근 가능
      // 문자가 하나일 경우 첫번째 문자가 세 번 반복되도록 교체
      .replace(/^(.)$/g, '$1$1$1')
      // 문자가 두개일 경우 두번째 문자가 두번 반복되도록 교체
      .replace(/^(.)(.)$/g, '$1$2$2')
  );
}

console.log(solution('...!@BaT#*..y.abcdefghijklm')); // "bat.y.abcdefghi"
console.log(solution('z-+.^.')); // "z--"
console.log(solution('=.=')); // "aaa"
console.log(solution('123_.def')); // "123_.def"
console.log(solution('abcdefghijklmn.p')); // "abcdefghijklmn"
