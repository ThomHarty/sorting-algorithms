export class TsAlgo {
  bubble(arr: Array<number>) {
    let len = arr.length;

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < len; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
      len--;
    }

    return arr;
  }

  selection(arr: Array<number>) {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
      let smallest = i;

      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[smallest]) {
          smallest = j;
        }
      }

      if (smallest !== i) {
        const temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
      }
    }

    return arr;
  }

  insertion(arr: Array<number>) {
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
const original = [1, 25, 27, 85, 43, 55, 12, 6, 4, 44, 97, 1];
console.log("original: ", original);
const bubble = sort.bubble(original);
console.log("bubble: ", bubble);
const selection = sort.selection(original);
console.log("selection: ", selection);
const insertion = sort.insertion(original);
console.log("insertion: ", insertion);
