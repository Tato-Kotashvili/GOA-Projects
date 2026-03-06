# code wars 1
# def count_positives_sum_negatives(arr):
#     if not arr: return []
#     pos = 0
#     neg = 0
#     for x in arr:
#       if x > 0:
#           pos += 1
#       if x < 0:
#           neg += x
#     return [pos, neg]

# code wars 2
# def count_sheep(n):
#     word = ''
#     for i in range(1,n+1):
#         word = word + str(i) + ' ' + 'sheep...'
#     return word

# code wars 3
# def century(year):
#     return (year - 1) //100 + 1

# code wars 4
# def move_zeros(lst):
#     for i in lst:
#         if i == 0:
#             lst.remove(i)
#             lst.append(0)
#     return lst

# code wars 5
# def likes(names):
#     if len(names) == 0:
#         return 'no one likes this'
#     elif len(names) == 1:
#         return names[0] + ' likes this'
#     elif len(names) == 2:
#         return names[0] + ' and ' + names[1] + ' like this'
#     elif len(names) == 3:
#         return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
#     else:
#         return names[0] + ', ' + names[1] + ' and ' + str(len(names) - 2) + ' others like this'

# code wars 6
# def friend(x):
#     new = []
#     for i in x:
#         if len(i) == 4:
#             new.append(i)
#     return new

# code wars 7
# def abbrev_name(name):
#     name = name.split()
#     return name[0][0].upper() + '.' + name[1][0].upper()