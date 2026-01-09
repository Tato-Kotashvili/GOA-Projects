# 4) მომხმარებელს შემოაყვანინე 5 რიცხვი, დაბეჭდე მათი ჯამი. გამოიყენე for loop და while loop.

total = 0
count = 0
while count < 5:
    number = int(input("შეიყვანეთ რიცხვი: "))
    total = total + number
    count = count + 1
print("რიცხვების ჯამი არის:", total)


# for loop-ით
total = 0
for i in range(5):
    number = int(input("შეიყვანეთ რიცხვი: "))
    total = total + number
print("რიცხვების ჯამი არის:", total)