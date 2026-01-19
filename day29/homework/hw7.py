# 7)შექმენი ცვლადი სადაც შეინახავ სამ ციფრა ინტეჯერს,შენი დავალებაამ რომ გაიგო ამ რიცხვში მყოოფი ციფრების ჯამი, მაგ გვაქვს "751" შენი დავალებაა გაიგო ამ რიცხვში მყოფო ციფრების ჯამი ანუ ---> 7 + 5 + 1 = 13 

user_number=input("შეიყვანე რიცხვი: ")
user_number_digit_sum=0
for digit in range(len(user_number)):
    user_number_digit_sum=user_number_digit_sum+int(user_number[digit])
print("ციფრების ჯამი არის:",user_number_digit_sum)