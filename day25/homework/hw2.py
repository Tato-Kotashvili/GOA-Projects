# 2) შექმენი list: fruits = ["apple", "banana", "apple", "orange"] მომხმარებელს შეაყვანინე ხილი, თუ list-ში უკვე არის ეს ხილი remove()-ით წაშალე მხოლოდ პირველი შემხვედრი, თუ არ არის ლისტში მაშინ დაბეჭდე შესაბამისი შეტყობინება


fruits = ["apple", "banana", "apple", "orange"]
fruit = input("შეიყვანეთ ხილი: ")
if fruit in fruits:
    fruits.remove(fruit)
    print(fruits)
else:
    print("ხილი არ არის ლისტში")