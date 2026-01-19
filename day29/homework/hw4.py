# 4)შექმენი სია და შეიყვანე სტრიგნები პატარა ასოებით,შენი დავალებაა შეამოწმო,თუ სტრინგი შეიცავს 5 ასოზე მეტს მაშინ ასეთი სიტყვები ჩაამატე ახალ სიაში ოღონდ პირველი ასო ქონდეთ დიდი ,ხოლო თუ სიტყვა შეიცავს 5 ასოზე ნაკლებს მაშინ დაამატე ეს ელემენტებიც სიაში ოღონდ ყველა ასო ქონდეთ დიდი


string_list=['apple', 'banana', 'kiwi', 'strawberry', 'grape', 'watermelon', 'fig', 'blueberry']
new_string_list=[]
for item in range(len(string_list)):
    if len(string_list[item])>5:
        new_string_list.append(string_list[item].capitalize())
    else:
        new_string_list.append(string_list[item].upper())
print(new_string_list)