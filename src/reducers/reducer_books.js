/**
 * Created by IrianLaptop on 2/9/2017.
 */
//generate application state
export default
function () {
    return [
        {title: 'Javascript', pages:101},
        {title: 'Harry Potter', pages: 39},
        {title: 'The dark tower', pages:85},
        {title: 'Eloquent Ruby', pages:1}
    ];
}
/*
*
* Step1: create reducer
* Step2: add it in rootReducer -> reducers/index.js with key, value
* S*/