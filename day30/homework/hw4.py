# 4) შექმენით სტრინგის ცვლადი და ცარიელი სია. სტრინგში მყოფი დიდი ასოები გახადეთ პატარა და ამ სიაში ჩაამატეთ, ხოლო სტრინგში მყოფი პატარა ასოები გახადეთ დიდი და ასევე ჩააგდეთ ამ სიაში. დაპრინტეთ საბოლოო სია, გამოიყენეთ while ციკლი.


word = input('Enter your string word: ')
empty_list = []

i=0
while i < len(word):
    if word[i] == word[i].lower():
        empty_list.append(word[i].upper())
    else:
        empty_list.append(word[i].lower())
    i = i + 1
print(empty_list)