#3) მოცემულია რიცხვი num. შეამოწმე, არის თუ არა რიცხვი დადებითი და ლუწი. თუ ორივე პირობა შესრულდა, დაბეჭდე "რიცხვი დადებითი და ლუწია", წინააღმდეგ შემთხვევაში —    "პირობა არ შესრულდა".

num=int(input("Enter your number: "))

if num>0 and num/2==int(num/2):
    print("Number is positive and even")

else:
    print("The statement is not true")