# 4) შექმენით ფუნქცია. მომხმარებელს შემოატანინეთ წინადადების სტრინგი. დათვალე, რამდენი სიტყვის სიგრძე არის 4-ზე მეტი. დაპრინტე ასეთი სიტყვების რაოდენობა. დაწერეთ ეს დავალება ორნაირად - split() ფუნქციით და split() ფუნქციის გარეშე.

def count_long_words_with_split():
    sentence=input("Enter a sentence: ")
    words=sentence.split()
    count=0
    for i in range(len(words)):
        if len(words[i])>4:
            count= count+1
    print("big ahh words:", count)
count_long_words_with_split()