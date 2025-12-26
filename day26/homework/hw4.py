# 4) შექმენი ცარიელი სია. მომხმარებელს შემოაყვანინე რიცხვები, თუ რიცხვი უკვე არსებობს სიაში შეწყვიტე შეყვანა, სხვა შემთხვევაში დაამატე რიცხვები სიაში, ბოლოს დაბეჭდე მთლიანი სია


numbers = []
while True:
    user_number = int(input("Enter a number: "))
    if int(user_number) in numbers:
        break
    else:
        numbers.append(int(user_number))
print(numbers)