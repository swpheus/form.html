function check(f) {
  var f =document.myform;
  console.log("이름 :"+f.name2.value);
  if (f.name2.value){
    alert("한글 이름을 입력하세요!!");
    f.name2.focus();
    return false;
  }
}
