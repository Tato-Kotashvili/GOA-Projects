# 2) შექმენით სიტყვებით სავსე სია, თუ სიტყვის ყველა ასო არის პატარა, ანუ წერია lowercase-ში, ამ სიტყვის ყველა ასო გახადეთ დიდი.
# თუ სიტყვა შეიცავს თუნდაც ერთ uppercase ასოს, ეს სიტყვა ამოშალეთ სიიდან. ბოლოს დაპრინტეთ მიღებული სია. (არ შექმნათ ახალი სია, იმუშავეთ იგივე სიტყვების სიაში) გამოიყენეთ while ციკლი.


words = ['strawberry', 'Banana', 'potAto', 'gela', 'jarji', 'zurA']

word = 0
while word < len(words):
    if words[word] == words[word].lower():
        words[word] = words[word].upper()
    else:
        words.pop(word)
        word -= 1
    word += 1
print(words)