
'useStrict'
let calories = 0 ;
const result = document.querySelector('.result')
const error = document.querySelector('.error')
const form = document.querySelector('.form');

const validate =  () => {



}

const showResult = (cal) => {
    result.innerHTML = `<p>Your BMR is: ${cal.toFixed(2)} calories </p>`
    console.log(result.innerHTML)
  //   setTimeout(() => {
  //     result.innerHTML = "";
  //   }, 10000);
  }
  
  
  const errMessage = (message) => {
    const newError = error
   newError.innerHTML = message;
  }

let = erroeDetail = false
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let age = parseFloat(form.age.value)
    if( age < 0) {
     return errMessage('Please enter a valid age')
    }
    errorDetail = true
    let height = parseFloat(form.height.value)
    if(height < 0){
      errMessage('Please enter a valid hight')
      height = 3.71 * height 
     errorDetail = true;
    }
    let weight = parseFloat(form.weight.value)
    if( weight < 0){
      errMessage('Please enter a valid weight')
       errorDetail = true;
      weight = 7700 * weight
    }
    if(form.gender.value === 'male'){
      calories =  (10 * weight) + (6.25*height) +(5 * age) + 5
    }else{
      calories =  (10* weight) + (6.25 * height) + (5 * age) - 161
    }
    let activity = parseFloat([form.activity.value]);
   
  if(activity === 0) return 1    
  if(activity === 1) return 1.2
  if(activity === 2) return 1.375
  if(activity === 3) return 1.465
  if(activity === 4) return 1.55
  if(activity === 5) return 1.725
  if(activity === 6) return 1.9
                            
    showResult(calories)
   setTimeout(() => {
result.innerHTML = "";
   },10000) 
    form.reset()
})

// const getInput = (inputEl) => {
//   let allInput = Array.from(inputEl.querySelectorAll(".formDetail"));
//   allInput.forEach((inputValue) => {

    // console.log(inputValue)
  // })

validate()


