# 11)შექმენი ცვლადი სადაც მომხმარებელი შემოიყვანს სახელს

# შენი დავალებაა რომ შეამოწმო-->

# თუ სახელის პირველი ასო არის "g" :
    # დაპრინტე --> შენი სახელი იწყება "გ" ზე
# სხვა შემთხვევაში:
    # დაპრინტე--> შენი სახელი არიწყება "გ"ზე
    
    
user_name=input('Enter Your Name==>  ')

if user_name[0]=='g':
    print('Your name starts with g')
else:
    print('Your name doesnt start with g')