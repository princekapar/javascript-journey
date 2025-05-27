
// const form = document.querySelector('form')
// //This usecase will give you empty
// //const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//     e.preventDefault()


//    const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)
//     const result =document.querySelector('#result')
    
//     if (height === '' || height < 0 || isNaN(height)) {
//         result.innerHTML = `Please give a valid height ${height}`
//     }
    
//      else if (weight === '' || weight < 0 || isNaN(weight)) {
//         result.innerHTML = `Please give a valid height ${weight}`
//     } else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         result.innerHTML = `Your BMI is: <span>${bmi}</span>`;
//         result.style.display = 'block';
//     }


//     result.innerHTML = `${height}`



// })





//second




// const form = document.querySelector('form');
  

// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const result = document.querySelector('#result');
//     const guide = document.querySelector('#guide');
 
   

//     if (height === '' || isNaN(height) || height < 0) {
//         result.innerHTML = `Please give a valid height: ${height}`;
     
//     } else if (weight === '' || isNaN(weight) || weight < 0) {
//         result.innerHTML = `Please give a valid weight: ${weight}`;

//     } else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//        // result.innerHTML = `Your BMI is: <span>${bmi}</span>`;
       

//         const category = '';
   
//         if (bmi < 18.6) {
//             category = 'Under Weight';
//         } else if (bmi >= 18.6 && bmi <= 24.9) {
//             category = 'Normal Range';
//         } else {
//             category = 'Overweight';
//     }
//        //  guide.innerHTML = `Your BMI is: <span>${category}</span>`;
//        result.innerHTML = `Your BMI is: <span>${bmi}</span><br>You are in the <strong>${category}</strong> category.`;

//     }


        
// });


















const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const guide = document.querySelector('#guide');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = `Please give a valid height: ${height}`;
      
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `Please give a valid weight: ${weight}`;

    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        let category = '';
        if (bmi < 18.6) {
            category = 'Under Weight';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = 'Normal Range';
        } else {
            category = 'Overweight';
        }
        result.innerHTML= `Your BMI is: <span>${bmi}</span>`
        guide.innerHTML = `<br>You are in the ${category} category.`;
    }
});
