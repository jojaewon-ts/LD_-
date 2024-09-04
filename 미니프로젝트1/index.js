const myModalEl = document.getElementById("exampleModal")
myModalEl.addEventListener('hidden.bs.modal', event => {
  // do something...
  console.log("닫기")
})

const Btn1stEL = document.querySelector("#Btn1st");
console.log("Btn1stEL", Btn1stEL);


const Modal = new bootstrap.Modal('#exampleModal');
console.log("🚀 ~ Modal:", Modal);


// form요소


const handleSave = () => {
  console.log("click");
  Modal.hide();
}
Btn1stEL.addEventListener("click", handleSave);


//이름 값 가져오기
const nameEL = document.querySelector('[name="name"]');
console.log("🚀 ~ nameEL:", nameEL);


const handleInputChange = (event) => {
  console.log("🚀 ~ handleInputChange ~ event:", event)
  const value = event.target.value;
  console.log("🚀 ~ handleInputChange ~ value:", value)
}
nameEL.addEventListener("change", handleInputChange);



//번호 값 가져오기
const numberEL = document.querySelector('[name="number"]');
console.log("🚀 ~ numberEL:", numberEL);



numberEL.addEventListener("change", handleInputChange);



//문의 값 가져오기
const messageEL = document.querySelector('[name="message"]');
console.log("🚀 ~ messageEL:", messageEL);



messageEL.addEventListener("change", handleInputChange);

const urlParams = new URL(location.href).searchParams;
const data = {
  name: urlParams.get('name'),
  number: urlParams.get('number'),
  message: urlParams.get('message')
}
console.log(data)