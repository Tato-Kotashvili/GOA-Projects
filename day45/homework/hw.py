# code wars 1 (gougebari)
# def accum(st):
#     new = ''
#     count = 0
#     for i in st:
#         new = new + i.upper() + i.lower() * count + '-'
#         count += 1
#     return new[:len(new)-1]

# code wars 2
# def litres(time):
#     return int(time*0.5)

# code wars 3
# def to_jaden_case(string):
    # words = string.split()
    # new = ''
    # for word in range(len(words)):
    #     new = new + words[word].capitalize()
    #     if word != len(words)-1:
    #         new = new + ' '
    # return new

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