// function formElementToPayload1(formElement) {
//     const inputElements = formElement.target.querySelectorAll('input');
//     const payLoad = {};
//     [...inputElements].forEach((inputElement)=>{
//         const name = inputElement.name;
//         const value = inputElement.value;
//         payLoad[name] =  value;
//     })
//     return payLoad;
// }

export function formElementToPayload(formElement) {
    const inputElements = formElement.querySelectorAll('input');
     return [...inputElements].reduce((accumulator,inputElement)=>{
         accumulator[inputElement.name] = inputElement.value;
         return accumulator;
     },{})
 } 