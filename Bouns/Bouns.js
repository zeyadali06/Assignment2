/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

var findKthPositive = function (arr, k) {
    let current = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= current) {
            current++;
        } else {
            let missing = arr[i] - current;

            if (missing >= k) {
                return current + k - 1;
            }

            k -= missing;
            current = arr[i] + 1;
        }
    }

    return current + k - 1;
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5)) // 9
console.log(findKthPositive([1, 2, 3, 4], 2)) // 6
