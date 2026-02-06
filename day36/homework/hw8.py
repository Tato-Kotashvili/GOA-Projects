# 8) შექმენი ფუქნცია რომელიც მიიღებს რაღაც ტექსტს და ასევე რაღაც რიცხვს, ტექსტსში ყველა ასოა აქციე დიდად და რიცხვითი მნიშვნელობა გადააქცია სტრინგის ტიპად.

def string_and_number():
    text=str(input("შეიყვანეთ ტექსტი: "))
    number=int(input("შეიყვანეთ რიცხვი: "))
    print(text.upper())
    print(str(number))
string_and_number()