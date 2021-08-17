const returnFirstTwoDrivers = (array) => {
        const seperate = array.slice(0,2);
        return seperate;
    }

const returnLastTwoDrivers = (array) => {
    const seperate = array.slice(-2);
    return seperate;
}


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];



function  createFareMultiplier(multiple){
    return ()=> 4 * multiple;
}



 function  createFareMultiplier(){
     return function () {
    const fareMultiplier = createFareMultiplier(2);
 }
}