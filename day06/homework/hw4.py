#4) მოცემულია რიცხვი x. თუ რიცხვი ნაკლებია 10-ზე ან უდრის 0-ს, დაბეჭდე "პატარა ან ნულია", სხვა შემთხვევაში — "არ აკმაყოფილებს".

x= int(input("Enter your number: "))
if x<10 or x==0:
    print("Your number is Small or zero")

else:
    print("Does not satisfy")