'use strict';
var merge = function(nums1, m, nums2, n) {
  if (n === 0) return;
  m--;
  n--;
  while(n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[m + n + 1] = nums1[m];
      m--;
    }else {
      nums1[m + n + 1] = nums2[n];
      n--;
    }
  }
};