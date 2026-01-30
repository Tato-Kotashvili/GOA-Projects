# 8) შექმენით ფუნქცია. მომხმარებელს შემოატანინეთ ტექსტი, სტრინგი, სადაც იქნება ასოებიც და ციფრებიც. დაბეჭდეთ ტექსტში არსებული ყველა ციფრის ჯამი. მაგალითად: თუ მოცემული გვქონდა სტრინგი "a2b5c1", უნდა დავბეჭდოთ 8, რადგან 2 + 5 + 1 = 8.  გამოიძახეთ ფუნქცია.

def sum_of_digits():
    text=input("Enter a string containing letters and digits: ")
    total=0
    for i in range(len(text)):
        if text[i].isdigit():
            total=total+int(text[i])
    print(total)
sum_of_digits()