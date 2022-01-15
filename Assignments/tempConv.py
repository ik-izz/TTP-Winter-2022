def temp(pick,num):
    pick=int(pick)
    num=int(num)
    if pick==1:
        celcius=(num-32)*5/9
        kelvin=(num-32)*5/9+273.15
        print("celcius="+str(celcius))
        print("kelvin="+str(kelvin))
    if pick==2:
        fahrenheit=(num*9/5)+32
        kelvin=num+273.15
        print("fahrenheit="+str(fahrenheit))
        print("kelvin="+str(kelvin))
    if pick==3:
        fahrenheit=(num-273.15)*9/5+32
        celcius=num-273.15
        print("fahrenheit="+str(fahrenheit))
        print("celcius="+str(celcius))



print("Pick a temperature 1.Fahrenheit 2.celsius 3.kelvin")
pick=input("input: ")
num=input("Enter the degrees: ")
temp(pick,num)