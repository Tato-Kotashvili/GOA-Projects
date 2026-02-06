# 5) შექმენი ფუქნცია რომელიც იღებს რიცხვების სიას და აბრუნებს მათ საშუალოს

def avg():
    sia=[1, 2, 3, 4, 5]
    sum=0
    for num in range(len(sia)):
        sum=sum+sia[num]
    average=sum/len(sia)
    return average
print(avg())