# 9)შექმენით კალკულატორი როგორიც ჩვენ გავაკეთეთ,დაუმატეთ სხვა მათემატიკური ოპერატორები,ასევე დაუმატეთ შედარების ოპერატორებიც 



number1=int(input('Enter your first number: '))
number2=int(input('Enter your second number: '))
action=input('Enter *, +, -, / or **: ')

if action == '+':
    print(number1+number2)

elif action == '-':
    print(number1-number2)

elif action == '*':
    print(number1*number2)

elif action == '/':
    print(number1/number2)

elif action == '**':
    print(number1**number2)