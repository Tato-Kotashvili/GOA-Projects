# 1) შექმენით სახელებით სავსე სია, თუ სიტყვის ყველა ასო არის პატარა და პირველი ასო არის d, მაშინ ახალ სიაში ჩაამატეთ სახელი "NIKA", თუ სიტყვის ყველა ასო არის დიდი ან იწყება ასო K-თი, მაშინ სიაში ჩაამატეთ სახელი "GOGA", სხვა შემთხვევაში სიაში ჩაამატეთ სიტყვა "ლიდერი". დაპრინტეთ მიღებული სია.


names = ['gio', 'davit', 'DACHI', 'luka', 'gulnara', 'kote', 'KATO']
updated_names = []

for name in names:
    if name == name.lower() and name[0]=='d':
        updated_names.append('NIKA')
    elif name == name.upper() or name[0]=='k':
        updated_names.append('GOGA')
    else:
        updated_names.append('leader')
print(updated_names)