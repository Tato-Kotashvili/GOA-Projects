# 1)შექმენი სია სადაც მოათავსებთ განსხვავებული ტიპის მონაცემებს,შენი დავალებაა რომ გაიგო თუ რამდენი ცალი სტრინგ ტიპის მონაცემი გვხვდება სიაში


list=[True, 5, "hello", 3.14, "world", False, "python", 42 , "Tato"]
count=0
for item in range(len(list)):
    if type(list[item])==str:
        count=count+1
print("სტრინგ ტიპის მონაცემების რაოდენობა არის:",count)