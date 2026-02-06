# 11) დაწერეთ ფუქნცია, სახელად celsiusToFahrenheit, რომელიც პარამეტრად მიიღებს ცელსიუსს და გადაიყვანს ფარენჰეიტში. ფორმულა - (Celsius * 9/5) + 32

def celsiusToFahrenheit(celsius):
    fahrenheit=(celsius * 9/5)+32
    return fahrenheit
celsius=float(input("შეიყვანეთ ცელსიუსი: "))
print("ფარენჰეიტში: ", celsiusToFahrenheit(celsius))