# 1) შექმენით ფუნქცია. მომხმარებელს შემოატანინეთ ერთი მთელი რიცხვი n. დაბეჭდეთ თუ რამდენი ლუწი რიცხვია 1-დან n-მდე. გამოიძახეთ ფუნქცია.

n=int(input("Enter an integer: "))
def count_even_numbers():
    count=0
    for i in range(1, n):
        if i % 2==0:
            count=count+1
    print(count)
count_even_numbers()