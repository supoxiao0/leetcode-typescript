function lengthOfLongestSubstring(s: string): number {
  let r = 0,
    res = [],
    length = 0
  while (r < s.length) {
    res.push(s[r])
    if (res.length === new Set(res).size) {
      if (res.length > length) {
        length = res.length
      }
    } else {
      let index = res.indexOf(s[r])
      res.splice(0, index + 1)
    }
    r++
  }
  return length
}
