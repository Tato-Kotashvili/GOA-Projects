# 3) შექმენი ცარიელი სია. მომხმარებელს შემოაყვანინე რიცხვები, ყოველი რიცხვი დაამატე სიაში,როცა სიაში მყოფი რიცხვების ჯამი გახდება 100-ზე მეტი, შეწყვიტე რიცხვების შეყვანა, ბოლოს დაბეჭდე სია და მათი ჯამი


numbers = []
sum_numbers = 0
while True:
    user_number = input("Enter a number: ")
    numbers.append(int(user_number))
    sum_numbers = sum_numbers + int(user_number)
    if sum_numbers > 100:
        break
print(numbers)
print(sum_numbers)