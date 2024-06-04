let num_arr1 = [1, 2, 4, 5, 3, 9, 12, 4, 2, 5, 5, 7, 8, 9, 10];
console.log(num_arr1)

function removeDuplicate(num_arr) {
    let new_arr = [];
    let new_arr_counter = 0;

    new_arr[0] = num_arr[0];

    for (let i = 1; i < num_arr.length; i = i + 1) {

        let duplicateFlag = 0;
        for (let j = 0; j < new_arr.length; j = j + 1) {
            if (num_arr[i] == new_arr[j]) {
                duplicateFlag = 1;
                break;
            }
        }

        if (duplicateFlag == 0) {
            new_arr_counter = new_arr_counter + 1;
            new_arr[new_arr_counter] = num_arr[i];
        }
    }

    return new_arr;
}

console.log(removeDuplicate(num_arr1))