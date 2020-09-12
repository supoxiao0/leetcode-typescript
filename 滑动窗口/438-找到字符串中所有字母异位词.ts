function findAnagrams(s: string, p: string): number[] {
  // 创建两个map来判断l-r之间的字符串和目标字符串的字母是否相同
  let map1 = new Map()
  let map2 = new Map()
  let l = 0,
    r = 0,
    matchNum = 0,
    res = []
  // 生成p中所有字符串相应个数的map
  for (let i = 0; i < p.length; i++) {
    map1.has(p[i]) ? map1.set(p[i], map1.get(p[i]) + 1) : map1.set(p[i], 1)
  }
  // 滑动窗口
  while (l < s.length && r <= s.length) {
    if (r - l < p.length) {
      // 判断滑动窗口最右侧的字符串是否能在目标字符串中找到
      if (p.indexOf(s[r]) === -1) {
        r++
        l = r
        map2 = new Map()
      } else {
        map2.has(s[r]) ? map2.set(s[r], map2.get(s[r]) + 1) : map2.set(s[r], 1)
        r++
      }
    } else if (r - l === p.length) {
      // 滑动窗口的长度和目标字符串长度相等，判断内部字母是否相同
      for (const key of map1.keys()) {
        if (map1.get(key) === map2.get(key)) {
          matchNum++
        }
      }
      if (matchNum === map1.size) {
        res.push(l)
      }
      map2.set(s[l], map2.get(s[l]) - 1)
      l++
      matchNum = 0
    }
  }
  return res
}
