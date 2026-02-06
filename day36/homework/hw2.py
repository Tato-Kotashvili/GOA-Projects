# 2) შექმენი ფუქნცია რომელიც მიიღებს რაღაც ტექსტს და დაითვლის ამ ტექსტში ხმოვნების რაოდენობას
def count_vowels(text):
    count=0
    vowels='aeiou'
    for char in text:
        if char in vowels:
            count=count+1
    return count
text=input("შეიყვანეთ ტექსტი: ")
print("ტექსტში ხმოვნების რაოდენობაა: ", count_vowels(text))
count_vowels(text)