// The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes: 

// There are three rods and a number of disks of different sizes which can slide onto any rod. 
// The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). 
// The other two rods are empty to begin with.

// The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: 
// i) Only one disk may be moved at a time 
// ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. 
// iii) A larger disk may not placed on top of a smaller disk

// * start with 3 arrays, and the first one is holding the OG cone amount of discs - represented by the amount of dashes in the string '---', '----' which we push into the array using a for loop. Mark the length of the OG cone

// * start by adding a single disc to the 2nd rod(array)
//  * then add the next disc (on OG rod) to the 3rd rod(array)
// * add smaller disk (2nd rod) on top of the 3rd rod stack
// * add next disc from 1st rod to 2nd rod
// * move top disc from 3rd rod onto first rod
// * move disc from 3rd rod onto 2nd rod
// * 



// Derive an algorithm to solve the Tower of Hanoi puzzle. => got it

// Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another. => got it

// If you are given 5 disks, how do the rods look like after 7 recursive calls? => Moving Disk-1 FROM [1,4,5] TO [2,3], [] standing by

// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?

// What is the runtime of your algorithm?

const tower = (n) => {
  
  // in beginning of function (not recursing), build stack of discs in source array
  let source = [];
  for (let i = 1; i <= n; i++) {
    source.push(i);
  }

  let totalMoves = 0;

  const resolver_tower_of_hanoi = (n, source, dest, extra) => {

    // terminating condition if we have successfully moved all discs in function
    if (n <= 0) {
      return;
    }

    // * two recursions happening each call 

    resolver_tower_of_hanoi(n - 1, source, extra, dest); // let's get the rest of the discs moved to the 2nd (extra) rod by switching our parameters and subtracting one disc (this will call the same function once for the remainder of each disc)

    console.log(`Moving Disk-${n} \n FROM [${source}] TO => [${dest}] \n [${extra}] standing by \n ---`); // logging each step
    totalMoves++; // adding to our moves count

    // actual movement of the 'discs'(numbers) on our 'rod' (array)
    source.splice(source.findIndex(el => el === n), 1); // remove the 'disc' from our current stack
    dest.unshift(n); // add to our destination stack (which could be 'extra' or 'dest' depending on function running)

    resolver_tower_of_hanoi(n - 1, extra, dest, source); // let's move all those discs from the second rod to the destination rod by switching our parameters AGAIN and subtracting one disc (this will call the same function once for the remainder of each disc)
  };

  resolver_tower_of_hanoi(n, source, [], []);

  return 'We did it! Total moves: ' + totalMoves;
};

console.log(tower(5));