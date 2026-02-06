# 2) შექმენი ფუქნცია სახელად numbers რომელიც მიიღებს პარამეტრად რაღაც რიცხვს და დაპრინტავს ეს რიცხვი კენტია თუ ლუწი

def numbers():
    a=int(input('Enter your number: '))
    if a%2==0:
        print('Even')
    else:
        print('odd')
numbers()