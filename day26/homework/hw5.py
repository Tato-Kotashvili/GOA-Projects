# 5) მომხმარებელს შემოაყვანინე რიცხვები, ეს რიცხვები დაამატე სიაში და გამოითვალე ამ რიცხვების საშუალო არითმეტიკული.


numbers = []
sum_numbers = 0
while True:
    user_number = int(input("Enter a number: "))
    numbers.append(user_number)
    sum_numbers = sum_numbers + user_number
    average = sum_numbers / len(numbers)
    print(average)