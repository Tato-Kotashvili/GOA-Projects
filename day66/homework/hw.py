# code wars 4
# def solution(start, finish):  #1,5
#     l = finish - start
#     count = 0
#     big = l // 3
#     small = l % 3
#     count = big + small
#     return count

# code wars5
# def incrementer(nums):
#     if nums == []:
#         return []
#     new = []
#     newer = []
#     for i in range(len(nums)):
#         new.append(nums[i]+i+1)
#     for j in range(len(new)):
#         if len(str(new[j])) > 1:
#             newer.append(int(str(new[j])[-1]))
#         else:
#             newer.append(new[j])
#     return newer
# code wars7
# def largest(n, xs):
#     if n > 0:
#         return sorted(xs)[len(xs)-n:]
#     else:
#         return []