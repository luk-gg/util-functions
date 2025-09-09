// Average attempts to succeed given a success rate (p0) and an increase rate (inc) for each successive failure.

// https://old.reddit.com/r/askmath/comments/7ky2ib/probability_expected_number_of_tries_to_the_first/
// https://www.quora.com/If-there-is-a-5-percent-chance-to-succeed-and-the-chance-increases-by-5-every-time-it-fails-what-are-the-average-tries-before-a-success
// Modify: https://www.cut-the-knot.org/Probability/LengthToFirstSuccess.shtml

export function averageAttempts(p0, inc) {
    let P_fail = 1;
    let attempts = 0;
    for (let i = 1; P_fail > 0; i++) {
        let p = Math.min(p0 + (i - 1) * inc, 1);
        attempts += P_fail * p * i;
        P_fail *= (1 - p);
    }
    return attempts
}

// def expected(p: float, delta_p: float):
//     if delta_p == 0:
//         return 1 / p
//     s = 1
//     i = 0
//     expected = s
//     while True:
//         curr_p = max(0, min(1, p + delta_p * i))
//         s *= 1 - curr_p
//         expected += s
//         if (curr_p == 0 or curr_p == 1) and i != 0:
//             break
//         i += 1
//     return expected