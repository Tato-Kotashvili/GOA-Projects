# 2) შექმენით ფუნქცია. შექმენით რიცხვებით სავსე სია, დაბეჭდეთ სიის უდიდესი ელემენტი. არ გამოიყენოთ max() ფუნქცია, გამოიყენეთ for ციკლი. გამოიძახეთ ფუნქცია

def find_largest_number():
    num_list=[12, 45, 7, 23, 89, 34]
    for i in range(len(num_list)):
        if i==0:
            largest=num_list[i]
        elif num_list[i]>largest:
            largest=num_list[i]
    print("The largest number:", largest)
find_largest_number()