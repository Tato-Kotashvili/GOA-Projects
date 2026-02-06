# 3) შექმენით ფუნცქცია სახელად sum_numbers რომელიც პარამეტრად მიიღებს რიცხვების სიას [10, 20,30, 100, 200, 500 ] დაწერე ფუნქცია რომელიც დააბრუნებს მოცემული რიცხვების ჯამს

def sum_numbers():
    sia=[10, 20, 30, 100, 200, 500]
    sum=0
    for num in range(len(sia)):
        sum=sum+sia[num]
    return sum
print(sum_numbers())