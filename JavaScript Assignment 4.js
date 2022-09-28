console.log('**Program to find the number of matchsticks needed');
let noOfHouses=4;

console.log('The number of matchsticks needed for %i houses is ',noOfHouses,calcNoOfMatchSticks(noOfHouses));

function calcNoOfMatchSticks(noOfHouses){
    let noOfMatchSticksNeeded=(6*noOfHouses)-(noOfHouses-1);
    return noOfMatchSticksNeeded;
}
 