# code wars1
# def reverse_words(text):
#     new = ''
#     start = []
#     for i in text:
#         if i != ' ':
#             new += i
#         else:
#             start.append(new[::-1])
#             new = ''
#     start.append(new[::-1])
#     return ' '.join(start)

# code wars2
# def tail_swap(strings):
#     new1 = strings[0].split(":")
#     new2 = strings[1].split(":")
#     return [new1[0] + ':' + new2[1], new2[0] + ':' + new1[1]]

# code wars3
# def is_pangram(st):
#     alphabet = "abcdefghijklmnopqrstuvwxyz"
#     st = st.lower()
#     for le in alphabet:
#         if le not in st:
#             return False
#     return True

# code wars4
# def to_camel_case(text):
#     word = ''
#     words = []
    
#     for i in text:
#         if i == '-' or i == '_':
#             words.append(word)
#             word = ''
#         else:
#             word += i
        
#     words.append(word)
#     result = ''
    
#     for i in words [1:]:
#         result += i.capitalize()
        
#     return words[0] + result

# code wars5
# def multi(l_st):
#     result = 1
#     for i in l_st:
#         result *= i
#     return result

# def add(l_st):
#     sum = 0
#     for j in l_st:
#         sum += j
#     return sum

# def reverse(st):
#     return st[::-1]

# code wars6
# def DNA_strand(dna):
#     new = ''
#     for i in range(len(dna)):
#         if dna[i] == 'A':
#             new += 'T'
#         elif dna[i] == 'T':
#             new += 'A'
#         elif dna[i] == 'C':
#             new += 'G'
#         elif dna[i] == 'G':
#             new += 'C'
            
#     return new

