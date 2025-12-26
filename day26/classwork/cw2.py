# შექმენი ცარიელი სია, for ციკლით 1 დაან 10-მდე დაამატე სიაში რიცხვები, remove-ის გამოყენებით წაშალე ყველა კენტი რიცხვი  და ბოლოს დაბეჭდე საბოლოო სია]~


numbers = []
for i in range(1, 11):
    numbers.append(i)
    
for number in numbers:
    if number % 2 != 0:
        numbers.remove(number)
print("საბოლოო სია არის:", numbers)