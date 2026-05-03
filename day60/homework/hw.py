# code wars 1
# def is_valid_walk(walk):
#     if len(walk) != 10:
#         return False
    
#     x = 0
#     y = 0
    
#     for i in walk:
#         if i == 'n':
#             y += 1
#         elif i == 's':
#             y -= 1
#         elif i == 'e':
#             x += 1
#         elif i == 'w':
#             x -= 1
    
#     return x == 0 and y == 0

# code wars 2
# def compute_sum(n):
#     sum = 0
#     for i in range(1, n + 1):
#         for j in str(i):
#             sum += int(j)
#     return sum

# code wars 3
# def delete_nth(order,max_e):
#     result = []
#     for i in order:
#         if result.count(i) < max_e:
#             result.append(i)
#     return result

# code wars 4
# def digital_root(n): 
#     while n > 9:
#         sum = 0
#         for i in str(n):
#             sum += int(i)
#             n = sum
#     return n

# code wars 5 
# ???