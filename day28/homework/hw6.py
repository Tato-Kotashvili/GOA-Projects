# 6) მომხმარებელს შეაყვანინე ასაკი მანამ, სანამ არ შეიყვანს -1. დაბეჭდე რამდენი ადამიანი იყო არასრულწლოვანი, სრულწლოვანი, პენსიონერი. გამოიყენე while loop + if/elif/else

minor_count = 0
adult_count = 0
senior_count = 0
age = int(input("შეიყვანეთ ასაკი (-1 გამოსასვლელად): "))
while age != -1:
    if age < 18:
        minor_count += 1
    elif age < 65:
        adult_count += 1
    else:
        senior_count += 1
    age = int(input("შეიყვანეთ ასაკი (-1 გამოსასვლელად): "))
print("არასრულწლოვნების რაოდენობა:", minor_count)
print("სრულწლოვნების რაოდენობა:", adult_count)
print("პენსიონერების რაოდენობა:", senior_count)