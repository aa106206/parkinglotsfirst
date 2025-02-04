export function validationFile(file?: File) {
  if (typeof file === "undefined") {
    alert("파일이 선택되지 않았습니다");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("선택된 파일의 크기가 5MB 이상입니다");
    return false;
  }

  return true;
}
