/* 
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
output = 3;
Explanation: 10 x 2pair, 20 x 1pair
*/

function sockMerchant(n, ar) {
    // Write your code here
    let op = [];

    // map array to object { '10': 4, "20": 3, '30':1, '50':1}
    ar.forEach(el => {
        let x = op.filter(obj => {
            if (obj[el]) {
                return true
            }
        })
        if (x.length == 0) {
            op.push({ [el]: 1 })
        } else {
            x[0][el] = x[0][el] + 1;
        }
    });

    // count the pair
    let count = 0;
    op.forEach(el => {
        let k = Object.keys(el)[0];
        let v = el[k];
        if (v > 1) {
            count += v == 2 ? 1 : Math.floor(v / 2);
        }
    })

    return count;
}