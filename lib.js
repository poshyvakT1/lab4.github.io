const SortingLibrary = {
    exchangeSort: function (arr, order = 'asc') {
        let comparisons = 0;
        let exchanges = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] !== undefined && arr[j] !== undefined) {
                    comparisons++;
                    if ((order === 'asc' && arr[i] > arr[j]) || (order === 'desc' && arr[i] < arr[j])) {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                        exchanges++;
                    }
                } else {
                    console.log("Sparse array detected. Ignoring undefined elements.");
                }
            }
        }
        console.log(`Exchange Sort: comparisons - ${comparisons}, exchanges - ${exchanges}`);
    },

    selectionSort: function (arr, order = 'asc') {
        let comparisons = 0;
        let exchanges = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] !== undefined && arr[minIndex] !== undefined) {
                    comparisons++;
                    if ((order === 'asc' && arr[j] < arr[minIndex]) || (order === 'desc' && arr[j] > arr[minIndex])) {
                        minIndex = j;
                    }
                } else {
                    console.log("Sparse array detected. Ignoring undefined elements.");
                }
            }
            if (arr[i] !== undefined && arr[minIndex] !== undefined) {
                let temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
                exchanges++;
            }
        }
        console.log(`Selection Sort: comparisons - ${comparisons}, exchanges - ${exchanges}`);
    },

    insertionSort: function (arr, order = 'asc') {
        let comparisons = 0;
        let moves = 0;
        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            let j = i - 1;
            while (j >= 0 && ((order === 'asc' && (arr[j] === undefined || arr[j] > current)) || (order === 'desc' && (arr[j] === undefined || arr[j] < current)))) {
                comparisons++;
                if (arr[j] !== undefined) {
                    moves++;
                }
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = current;
        }
        console.log(`Insertion Sort: comparisons - ${comparisons}, moves - ${moves}`);
    },

    shellSort: function (arr, order = 'asc') {
        let comparisons = 0;
        let moves = 0;
        let n = arr.length;
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = arr[i];
                let j;
                for (j = i; j >= gap && arr[j - gap] !== undefined && ((order === 'asc' && arr[j - gap] > temp) || (order === 'desc' && arr[j - gap] < temp)); j -= gap) {
                    arr[j] = arr[j - gap];
                    comparisons++;
                    moves++;
                }
                arr[j] = temp;
            }
        }
        console.log(`Shell Sort: comparisons - ${comparisons}, moves - ${moves}`);
    },

    quickSort: function (arr) {
        let comparisons = 0;
        let moves = 0;

        const sort = (arr) => {
            if (arr.length <= 1) return arr;

            const pivot = arr[0];
            const left = [];
            const right = [];

            for (let i = 1; i < arr.length; i++) {
                if (arr[i] !== undefined) {
                    comparisons++;
                    if (arr[i] < pivot) left.push(arr[i]);
                    else right.push(arr[i]);
                } else {
                    console.log("Sparse array detected. Ignoring undefined elements.");
                }
            }

            const sortedLeft = sort(left);
            const sortedRight = sort(right);
            moves += sortedLeft.length + sortedRight.length;
            return [...sortedLeft, pivot, ...sortedRight];
        };

        const result = sort(arr);
        console.log(`Quick Sort: comparisons - ${comparisons}, moves - ${moves}`);
        return result;
    }
};


let array1 = [];
for (let i = 0; i < 100; i++) {
    array1.push(Math.floor(Math.random() * 100));
}
console.log("Unsorted array 1:", array1);
SortingLibrary.exchangeSort([...array1], 'asc');
SortingLibrary.selectionSort([...array1], 'asc');
SortingLibrary.insertionSort([...array1], 'asc');
SortingLibrary.shellSort([...array1], 'asc');
SortingLibrary.quickSort([...array1]);

let array2 = [];
for (let i = 0; i < 100; i++) {
    let num = Math.floor(Math.random() * 100);
    if (i % 2 === 0) {
        array2[i] = num;
    }
}
console.log("Unsorted array 2:", array2);
SortingLibrary.exchangeSort([...array2], 'desc');
SortingLibrary.selectionSort([...array2], 'desc');
SortingLibrary.insertionSort([...array2], 'desc');
SortingLibrary.shellSort([...array2], 'desc');
SortingLibrary.quickSort([...array2]);
