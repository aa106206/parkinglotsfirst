export const getDate = (date: string) => {
  // 실무에서 _언더바는 임시로 만든 변수라는 뜻임
  const _date = new Date(date);
  const YYYY = _date.getFullYear();
  const MM = _date.getMonth() + 1;
  const DD = _date.getDate();
  return `${YYYY}-${MM}-${DD}`;
};
