# 2)შექმენი სია სადაც იქნება ადამიანის სახელები პატარა ასოებით დაწერილი,შემდეგ შექმენი ცარიელი სია და ამ ახალ სიაში ჩაამატე ძველი სიიდან იგივე სახელები ოპღონდ დიდი ასოები ქონდეთ დიდი


name_list=['tato', 'sofo', 'nika', 'andria', 'levan']
new_name_list=[]
for name in range(len(name_list)):
    new_name_list.append(name_list[name].upper())
print(new_name_list)