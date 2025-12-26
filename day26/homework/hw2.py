# 2) შექმენი ცარიელი სია. მომხმარებელს შეაყვანინე რიცხვები სანამ "stop"-ს არ დაბეჭდავს, ყოველი ახალი რიცხვი: თუ ნაკლებია 50-ზე → ჩასვი სიის დასაწყისში (insert), თუ მეტია ან ტოლია 50-ის → დაამატე ბოლოში (append), ბოლოს დაბეჭდე სია


numbers=[]
while True:
    user_number=input("Enter a number (or 'stop' to finish): ")
    if user_number == 'stop':
        break
    elif int(user_number) < 50:
        numbers.insert(0, int(user_number))
    else:
        numbers.append(int(user_number))
print(numbers)