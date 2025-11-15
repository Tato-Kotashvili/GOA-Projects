# მომხმარებელს შემოატანინე რიცხვი, მანამ სანამ არ შემოიტანს  ტექტს - 'გამოთვალე საშუალო'. როგორც კი ამ ტექტს შემოიყვანს დაპრინტეთ ყველა შემოტანილი რიცხვის საერთო საშუალო არითმეტიკული.



number = input("Enter a number or type 'გამოთვალე საშუალო' to calculate average: ")
sum_numbers = 0
count_numbers = 0

while number != 'გამოთვალე საშუალო':
    count_numbers = count_numbers + 1
    sum_numbers = sum_numbers + float(number)
    number = input("Enter a number or type 'გამოთვალე საშუალო' to calculate average: ")

ricxvta_sashualo = sum_numbers/count_numbers
print(ricxvta_sashualo)