# code wars 1
# def get_middle(s):
#     if len(s) % 2 == 0:
#         return (s[(len(s) // 2) - 1]) + (s[len(s) // 2])
#     else:
#         return (s[len(s) // 2])

# code wars 2
# def are_anagrams(test, original):
#     for i in test:
#         if len(test) != len(original):
#             return False
#         elif test.lower().count(i) != original.lower().count(i):
#             return False
#     return True

# code wars 3 (gougebari)
# def maskify(cc):
#     if len(cc) <= 4:
#         return cc
#     else:
#         for i in range(len(cc) - 4):
#             cc = cc.replace(cc[i], '#')
#         return cc

# code wars 4 (???)

# code wars 5
# def create_phone_number(n):
#     number = '('
#     for i in range(len(n)):
#         if i == 3:
#             number = number + ') ' + str(n[i])
#         elif i == 6:
#             number = number + '-' + str(n[i])
#         else:
#             number = number + str(n[i])
#     return number