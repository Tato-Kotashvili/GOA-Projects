# 3) შექმენით ქვეყნების სია, წაშალეთ pop() ან remove() ფუნქციით ყველა ის სიტყვა რომლის ყველა ასო არის დიდი, ხოლო ყველა სხვა სიტყვას ყველა ასო გაუხადეთ დიდი. დაპრინტეთ საბოლოო შედეგი. გამოიყენეთ while ციკლი.


countries = ['GEORGIA', 'france', 'ITALY', 'Spain', 'PORTUGAL', 'gErmany']

country = 0
while country < len(countries):
    if countries[country] == countries[country].upper():
        countries.pop(country)
        country -= 1
    else:
        countries[country] = countries[country].upper()
    country += 1
print(countries)