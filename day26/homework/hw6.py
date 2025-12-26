# 6) მომხმარებელს შემოაყვანინე რიცხვები, შექმენი ორი სია დადებითი და უარყოფითი სიებისთვის, დადებითი რიცხვები დაამატე დადებითი რიცხვებისთვის განკუთვნილ სიაში, უარყოფითი რიცხვები კი პირიქით


positive_numbers = []
negative_numbers = []
while True:
    user_number = (input("Enter a number: "))
    if int(user_number) > 0:
        positive_numbers.append(user_number)
    elif int(user_number) < 0:
        negative_numbers.append(user_number)
    else:
        break
print(positive_numbers)
print(negative_numbers)