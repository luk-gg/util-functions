// Uses linear interpolation to incrementally add missing values to an UnrealEngine RCIM_Linear array of [{ Time, Value }] objects and return them as [{ x, y }]
export function lerp(arr) {
    return arr.reduce((acc, curr, index) => {
        let { Time: x0, Value: y0 } = curr
        const { Time: x1, Value: y1 } = arr[index + 1] || {}

        // Push the current value from the original array
        acc.push({ x: x0, y: y0 })

        // Fill in missing values from the current Time to the next Time
        let missingX = x0
        while (x1 > missingX + 1) {
            missingX++
            const missingY = y0 + (y1 - y0) * ((missingX - x0) / (x1 - x0))
            acc.push({ x: missingX, y: missingY })
        }

        return acc
    }, [])
}