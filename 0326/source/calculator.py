def calc(func, *args):
    def add(num):
        return sum(num)
    def sub(num):
        return num[0] - add(num[1:])
    def mul(num):
        for i in num[1:]:
            num[0]*=i
        return num[0] 
    def div(num):
        return num[0] / mul(num[1:])
    num = list(map(int,args[0]))
    pre = func.join(str(n) for n in num) + '='
    if func == '+':
       return pre + str(add(num))
    elif func == '-':
        return pre + str(sub(num))
    elif func == '*':
        return pre + str(mul(num))
    elif func == '/':
        return pre + str(div(num))
    else:
        return 'Nope'