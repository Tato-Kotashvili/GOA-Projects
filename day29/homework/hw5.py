# 5)შექმენი სია სადაც შეიყვანთ როგორდც დადებით ასევე უარყოფით რიცხვებს,შენი დავალებაა გაიგო სიაშ მყოფი დადებით რიცხვების ჯამი და უარყოფით რიცხვების რაოდენობა


number_list=[10, -5, 23, -8, 0, 15, -42, 7, -1]
positive_number_count=0
negative_number_count=0
for number in range(len(number_list)):
    if number_list[number]>0:
        positive_number_count=positive_number_count+1
    elif number_list[number]<0:
        negative_number_count=negative_number_count+1
print("სიაში მყოფი დადებითი რიცხვების რაოდენობა არის:",positive_number_count)
print("სიაში მყოფი უარყოფითი რიცხვების რაოდენობა არის:",negative_number_count)