export default function HashtagConverter(text: string) {
  // 단어 앞에 #을 추가하는 함수
  const addHashtags = (input: string) => {
    return input
      .split(" ") // 공백을 기준으로 단어 분리
      .map((word) => (word.startsWith("#") ? word : `#${word}`)) // #이 없으면 추가
      .join(" "); // 다시 공백으로 연결
  };

  return text ? addHashtags(text) : "";
}
