numbers = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10]
new_numbers_list = []

for i in numbers:
    if i %2 !=0 or numbers.index(i) %2 != 0:
        new_numbers_list.append(i**2)
print(new_numbers_list)