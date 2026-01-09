# 8) მომხმარებელს შეაყვანინე 5 რიცხვი while loopით, დაითვალე მათი საშუალო, თუ საშუალო > 50 დაბეჭდე "დიდი საშუალო" წინააღმდეგ შემთხვევაში "პატარა საშუალო"

total = 0
count = 0
while count < 5:
    number = int(input("შეიყვანეთ რიცხვი: "))
    total = total + number
    count = count + 1
average = total / 5
if average > 50:
    print("დიდი საშუალო")
else:
    print("პატარა საშუალო")
print("რიცხვების საშუალო არის:", average)