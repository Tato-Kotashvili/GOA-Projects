
# 7) მომხმარებელს შემოაყვანინე რიცხვები, ეს რიცხვები დაამატე სიაში, თუ ორი მეზობელი ელემენტის ჯამი <50-ზე მაშინ წაშალე მეორე ელემენტი, დაბეჭდე საბოლოო სია.


numbers = []
while True:
    user_number=input("Enter a number (or 'stop' to finish): ")
    if user_number == 'stop':
        break
    numbers.append(int(user_number))
    if len(numbers) >= 2:
        if numbers[-1] + numbers[-2] < 50:
            numbers.pop()
print(numbers)