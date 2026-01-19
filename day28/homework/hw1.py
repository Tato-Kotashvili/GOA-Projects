# 1) მომხმარებელს შემოაყვანინე წინადადება. დაბეჭდე თითოეული სიტყვა ცალ–ცალკე for loop-ის გამოყენებით. თითოეული სიტყვა დაბეჭდე capitalize()-ით.

sentence=input("შეიყვანეთ წინადადება: ")
words=sentence.split()
for i in range(len(words)):
    print(words[i].capitalize())