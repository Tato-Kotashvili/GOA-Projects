# 6) შექმენით ფუნქცია. მომხმარებელს შემოატანინე წინადადება. იპოვე და დაბეჭდე ყველაზე გრძელი სიტყვა ამ წინადადებაში. გამოიყენეთ while ციკლი. გამოიძახეთ ფუნქცია.

def longest_word():
    sentence=input("Enter a sentence: ")
    words=sentence.split()
    max_length=0
    longest=""
    i=0
    while i<len(words):
        if len(words[i])>max_length:
            max_length=len(words[i])
            longest=words[i]
        i=i+1
    print("longest word:", longest)
longest_word()