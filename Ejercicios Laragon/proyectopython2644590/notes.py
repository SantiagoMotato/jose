notas = []

while len(notas) < 3:
    print(f"Write the data {len(notas)+1}")
    numero = float(input("Input a number: "))
    if numero >= 0 and numero <= 5:
        notas.append(numero)
    else:
        print("Input a valid data")

""" for num in range(1,4):
    numero = float(input("Ingrese un numero: "))
    notas.append(numero) """

suma = 0
for nota in notas:
    suma += nota

promedio = suma/3

print(f"Your average is {promedio}")

if promedio >= 3.5:
    print("Approved")
else:
    print("Failed")
