# 6) შექმენი ცარიელი list, მომხმარებელს 5-ჯერ შეაყვანინე რიცხვი, ყველა დაამატე list-ში და საბოლოოდ for loop-ის გამოყენებით დააჯამე რიცხვები რომელიც გექნება ლისტში


numbers = []
for i in range(5):
    num = int(input("შეიყვანეთ რიცხვი: "))
    numbers.append(num)
    
sum_numbers = 0
for i in range(len(numbers)):
    sum_numbers = sum_numbers + numbers[i]
print("რიცხვების ჯამი არის:", sum_numbers)
    