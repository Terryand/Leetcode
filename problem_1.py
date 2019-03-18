# to Find marched Pattern which means O(n^2) to O(n)

class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        nums_dict = {}
        for i, value in enumerate(nums):
            # because 'for i in list', reverse key & value can be fast
            nums_dict[value] = i

        for i, value in enumerate(nums):
            num_matched = target - value
            if (num_matched in nums_dict) and (nums_dict.get(num_matched) != i):
                return [i, nums_dict.get(num_matched)]
