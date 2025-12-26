# 1) შექმენი ცარიელი სია.მომხმარებელმა შეიყვანოს რიცხვები მანამ, სანამ არ დაწერს "stop".დაამატე მხოლოდ დადებითი რიცხვები სიაში, უარყოფითი რიცხვები არ დაამატო, ბოლოს დაბეჭდე სია


numbers = []
while True:
    user_number=input("Enter a number (or 'stop' to finish): ")
    if user_number == 'stop':
        break
    elif int(user_number) > 0:
        numbers.append(int(user_number))
print(numbers)