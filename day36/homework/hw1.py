# 1) შექმენი ფუნქცია რომელიც მიიღებს რაღაც ტექსტს და დააბრუნებს ტექსტში სიმბოლოების რაოდენობას
def count_characters():
    text=input("შეიყვანეთ ტექსტი: ")
    count=0
    for char in text:
        count=count+1
    return count
print("ტექსტში სიმბოლოების რაოდენობაა: ", count_characters())