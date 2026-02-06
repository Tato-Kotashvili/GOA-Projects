# 10) დაწერეთ ფუქნცია, რომელიც პარამეტრად მიიღებს იმ რაოდენობას, რამდენჯერად უნდა გამოკონსოლდეს "Hello, World".
def print_hello_world(times):
    for i in range(times):
        print("Hello, World")
count=int(input("რამდენჯერ გსურთ რომ გამოკონსოლდეს 'Hello, World': "))
print_hello_world(count)