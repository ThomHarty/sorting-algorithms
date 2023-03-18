type SortArray = Array<number>;

export class SortingAlgorithms {
  bubble(arr: SortArray): SortArray {
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

  selection(arr: SortArray): SortArray {
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

  insertion(arr: SortArray): SortArray {
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

  merge(arr: SortArray): SortArray {
    const sort = (leftArr: SortArray, rightArr: SortArray) => {
      const output: SortArray = [];
      let leftIndex = 0;
      let rightIndex = 0;

      while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftEl = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];

        // console.log(`left array: ${leftArr}, right array: ${rightArr}`);

        if (leftEl < rightEl) {
          output.push(leftEl);
          leftIndex++;
        } else {
          output.push(rightEl);
          rightIndex++;
        }

        // console.log(`output: ${output}`);
      }

      return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
    };

    if (arr.length <= 1) return arr;

    const middleIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex);

    const sorted = sort(this.merge(leftArr), this.merge(rightArr));

    // console.log(`sorted: `, sorted);

    return sorted;
  }
}

const sort = new SortingAlgorithms();
const bubble = sort.bubble([7, 3, 6, 8, 9, 4, 1, 2, 5]);
console.log("bubble: ", bubble);
const selection = sort.selection([7, 3, 6, 8, 9, 4, 1, 2, 5]);
console.log("selection: ", selection);
const insertion = sort.insertion([7, 3, 6, 8, 9, 4, 1, 2, 5]);
console.log("insertion: ", insertion);
const merge = sort.merge([7, 3, 6, 8, 9, 4, 1, 2, 5]);
console.log("merge: ", merge);
