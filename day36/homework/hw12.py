# 12) დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.
def sumDigits():
    number=int(input("შეიყვანეთ რიცხვი: "))
    sum=0
    for digit in range(len(str(number))):
        sum=sum+int(str(number)[digit])
    return sum
print("რიცხვის ციფრების ჯამი: ", sumDigits())