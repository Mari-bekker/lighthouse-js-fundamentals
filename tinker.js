const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

function judgeVegetable(metric) {
  if (metric === "redness") {
    let sorted = [];
    sorted = vegetables.sort (function (a, b) {
      return sorted[0];
    });
  }

}



console.log(judgeVegetable(vegetables, metric));


/*function smartGarbage(trash, bins) {

  for (const property in bins) {
    if (trash === property) {
      bins[property]++;
    }
    
  }
  return bins;
}*/
 
 //smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
  



















judgeVegetable(vegetables, metric)