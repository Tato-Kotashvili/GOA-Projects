# 13) დაწერეთ ფუნქცია, სახელად calculateArea, რომელიც არგუმენტად მიიღებს ოთხკუთხედის სიგრესა და სიგანეს და დააბრუნებს მის ფართობს. შედეგი გამოიტანეთ ტერმინალში.

def calculateArea():
    length=float(input("შეიყვანეთ ოთხკუთხედის სიგრესი: "))
    width=float(input("შეიყვანეთ ოთხკუთხედის სიგანე: "))
    area=length*width
    return area
print("ოთხკუთხედის ფართობი: ", calculateArea())