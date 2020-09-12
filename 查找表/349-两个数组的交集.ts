function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1),
    set2 = new Set(nums2),
    res = []
  for (const value of set1.values()) {
    if (set2.has(value)) res.push(value)
  }
  return res
}
