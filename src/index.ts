export class TsAlgo {
  public insertion(arr: Array<number>) {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];

      // inner while loop inserts `current` only once all items are shifted to the right
      let j = i - 1;

      while (j >= 0 && current < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = current;

      //   inner for loop is less efficient as it inserts `current` each time item is shifted to the right

      //   for (let j = i - 1; j >= 0; j--) {
      //     if (current < arr[j]) {
      //       arr[j + 1] = arr[j];
      //       arr[j] = current;
      //     }
      //   }
    }

    return arr;
  }
}

const sort = new TsAlgo();
const insertion = sort.insertion([1, 25, 27, 85, 43, 55, 12, 6, 4, 44, 97, 1]);
console.log(insertion);
