function minSubArrayLen(s: number, nums: number[]): number {
  let sum = nums[0]
  let l = 0
  let r = 0
  let lengthKey = 0
  while (l < nums.length && r < nums.length) {
    if (sum >= s) {
      lengthKey = lengthKey > 0 ? Math.min(r - l + 1, lengthKey) : r - l + 1
      sum -= nums[l++]
    } else {
      sum += nums[++r]
    }
  }
  return lengthKey
}
