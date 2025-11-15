# მომხმარებელს შემოატანინეთ რიცხვი, ამ რიცხვის ჩათვლით შეკრიბეთ ყველა რიცხვი და გამოიტანეთ საბოლოო პასუხი.

number = int(input('Enter your number: '))
sum_numbers = 0

for i in range(number + 1):
    sum_numbers = sum_numbers + i
print(sum_numbers)