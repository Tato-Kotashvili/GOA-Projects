# code wars 1
# def high_and_low(numbers):
#     num_list = numbers.split()
#     lowest = int(num_list[0])
#     highest = int(num_list[0])
#     for i in range(len(num_list)):
#         if int(num_list[i]) < lowest:
#             lowest = int(num_list[i])
#         if int(num_list[i]) > highest:
#             highest = int(num_list[i])
#     return str(highest) + " " + str(lowest)

# code wars 2
# def get_middle(s):
#     if len(s) % 2 == 0:
#         return (s[(len(s) // 2) - 1]) + (s[len(s) // 2])
#     else:
#         return (s[len(s) // 2])

# code wars 3
# def descending_order(num):
#     li = []
#     for i in str(num):
#         li.append(int(i))
#     b = ''
#     while li:
#         b += str(max(li))
#         li.remove(max(li))
#     return int(b)

# code wars 4
# def find_short(s):
#     words = s.split()
#     shortest = words[0]
#     for i in range(len(words)):
#         if len(words[i]) < len(shortest):
#             shortest = words[i]
#     return len(shortest)

# code wars 5
# def is_isogram(string):
#     string = string.lower()
#     for i in string:
#         if string.count(i) > 1:
#             return False
#     return True