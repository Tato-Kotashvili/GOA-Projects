# 4) შექმენი ცარიელი სია. მომხმარებელს შემოაყვანინე რიცხვები, თუ რიცხვი უკვე არსებობს სიაში შეწყვიტე შეყვანა, სხვა შემთხვევაში დაამატე რიცხვები სიაში, ბოლოს დაბეჭდე მთლიანი სია


numbers = []
while True:
    user_number = int(input("Enter a number: "))
    if user_number in numbers:
        break
    else:
        numbers.append(user_number)
print(numbers)