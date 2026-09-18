var reduce = function(nums, fn, init) {
    let acc = init;
    for (const n of nums) {
        acc = fn(acc, n);
    }
    return acc;
};
