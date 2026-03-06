# code wars 1 (gougebari)
# def accum(st):
#     new = ''
#     for i in st:
#         new = new + i.upper() + i.lower() * st.index(i) + '-'
#     return new[:-1]

# code wars 2
# def litres(time):
#     return int(time*0.5)

# code wars 3  (gougebari)
# def to_jaden_case(string):
#     new = ''
#     for i in string:
#         if string.index(i) == 0 or string[string.index(i)-1] == ' ':
#             new = new + i.upper()
#         else:
#             new = new + i
#     return '"' + new + '"'
# print(to_jaden_case("join goal oriented academy"))

# code wars 4
# def lovefunc(flower1, flower2):
#     if flower1 % 2 == 0 and flower2 % 2 != 0:
#         return True
#     elif flower1 % 2 != 0 and flower2 % 2 == 0:
#         return True
#     else:
#         return False

# code wars 5
# def maps(a):
#     new = []
#     for i in a:
#         new.append(i*2)
#     return new

# code wars 6
# def solution(string, ending):
#     if string[-len(ending):] == ending:
#         return True
#     else:
#         return False