// 二分查找
function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    let value = target - numbers[i]
    let l = i + 1
    let r = numbers.length - 1
    // numbers[l,r]中找到value
    while (l <= r) {
      let mid = Math.floor((l + r) / 2)
      if (numbers[mid] === value) {
        return [i + 1, mid + 1]
      } else if (numbers[mid] > value) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
  }
  return [-1, -1]
}

// 对撞指针
function twoSum2(numbers: number[], target: number): number[] {
  let i = 0
  let j = numbers.length - 1
  while(i < j) {
    if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1]
    } else if (numbers[i] + numbers[j] > target) {
      j--
    } else {
      i++
    }
  }
  return [-1, -1]
}
