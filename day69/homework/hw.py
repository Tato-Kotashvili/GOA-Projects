# code wars1
# def spacey(array):
#     result = []
#     string = ''

#     for i in array:
#         string += i
#         result.append(string)

#     return result

# code wars2
# def cube_odd(arr):
#     new = []
#     for j in arr:
#         if type(j) != int:
#             return None
#     for i in arr:
#         if i % 2 != 0:
#             new.append(i**3)
#     return sum(new)

# code wars 3
# def solve(s):
#     uppers = 0
#     lowers = 0
#     nums = 0
#     spec = 0
#     alphabet = "abcdefghijklmnopqrstuvwxyz"
#     for i in s:
#         if i.isdigit():
#             nums += 1
#         elif i.islower():
#             lowers += 1
#         elif i.isupper():
#             uppers += 1
#         else:
#             spec += 1
#     return [uppers, lowers, nums, spec]

# code wars 4
# class List:
#     def remove_(self, integer_list, values_list):
#         new = []
#         for i in integer_list:
#             if i not in values_list:
#                 new.append(i)
#         return new

# code wars 5
# def solution(value):
#     return "Value is " + "0" * (5 - len(str(value))) + str(value)

