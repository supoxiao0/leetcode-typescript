function intersect(nums1: number[], nums2: number[]): number[] {
  let map1 = new Map(),
    map2 = new Map(),
    res = []
  for (let i = 0; i < nums1.length; i++) {
    map1.has(nums1[i])
      ? map1.set(nums1[i], map1.get(nums1[i]) + 1)
      : map1.set(nums1[i], 1)
  }
  for (let i = 0; i < nums2.length; i++) {
    map2.has(nums2[i])
      ? map2.set(nums2[i], map2.get(nums2[i]) + 1)
      : map2.set(nums2[i], 1)
  }
  for (const key of map1.keys()) {
    if (map2.has(key)) {
      for (let i = 0; i < Math.min(map1.get(key),map2.get(key)); i++) {
        res.push(key)
      }
    }
  }
  return res
}
