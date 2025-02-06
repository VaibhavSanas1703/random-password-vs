
const inputBox = document.getElementById("input-box");
const passwordShow = document.getElementById("showGeneratedPassword");
const generatedBtn = document.getElementById("generatePasswordBtn");
const copyBtn = document.getElementById("copyPasswordBtn");
const notify = document.querySelector(".notify-container")

let finalPassword;


const generatedPassword = function(userValue){
     const random = "0123456789@#$%!abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
     finalPassword = ''
     for(let i = 0; i < userValue; i++) {
          finalPassword += random[Math.floor(Math.random() * random.length)]
     }

     
     passwordShow.innerHTML = "Generating Random Password..."
     setTimeout(() => {
          passwordShow.innerHTML = `${finalPassword} <img src='./main/assets/images/svg/copy.svg' onClick='copyPassword()'>`;
     }, 3000);
}

generatedBtn.addEventListener("click",(event) => {
     event.preventDefault()
     let inputValue = parseInt(inputBox.value.trim())
     if(inputBox.value == ''){
          return alert("input field are required?")
     }
     else if(isNaN(inputBox.value)){
          return alert("Please enter a number")
     }
     else if(inputValue > 15){
          return alert("You can generate only 15 character password")
     }
     else{
          return generatedPassword(inputValue)
     }
})

const copyPassword = function(){
     navigator.clipboard.writeText(finalPassword)
     let ele = document.createElement("p")
     ele.innerHTML = `<img src='./main/assets/images/svg/check.svg'> Password Copy`
     notify.append(ele)
     notify.classList.add('active-notify')
     setTimeout(() => {
          notify.classList.remove('active-notify')
     },900);
     setTimeout(() => {
          notify.removeChild(notify.firstElementChild)
     }, 1100);
}