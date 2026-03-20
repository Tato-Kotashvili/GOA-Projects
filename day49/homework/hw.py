# code wars 1
# def disemvowel(string_):
#     vowels = "aeiouAEIOU"
#     new = ""
#     for i in string_:
#         if i not in vowels:
#             new = new + i
#     return new

# code wars 2
# def square_digits(num):
#     num = str(num)
#     new = ''
#     for i in range(len(num)):
#         new = new + str(int(num[i])**2)
#     return int(new)

# code wars 3
# def is_square(n):
#     if n < 0:
#         return False
    
#     sqr_root = int(n ** 0.5)
#     return sqr_root * sqr_root == n

# code wars 4
# def sum_two_smallest_numbers(numbers):
#     numbers.sort()
#     return numbers[0] + numbers[1]

# code wars 5
# def is_triangle(a, b, c):
#     if a > 0 and b > 0 and c > 0 and a + b > c and b + c > a and  c + a > b:
#             return True
#     else: 
#         return False