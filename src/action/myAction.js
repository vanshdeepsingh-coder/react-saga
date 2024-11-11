// function setIncrement(num){
//     return ({
//         type:"increment",
//         payload:num
//     })
// }

// function setDecrement(num){
//     return ({
//         type:"decrement",
//         payload:num
//     })
// }

export function increment(num){
    return ({
        type:"increment",
        payload:num
    })
}

export function decrement(num){
    return ({
        type:"decrement",
        payload:num
    })
}