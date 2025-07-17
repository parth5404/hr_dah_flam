export function getRandomRating(){
    return Math.floor(Math.random() * 5)+1;
}
export function getRandomDepartment(){
    const departments=["IT","HR","Marketing","Sales","Finance"];
    return departments[Math.floor(Math.random() * departments.length)];
}   

