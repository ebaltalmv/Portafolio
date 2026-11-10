
import numpy as np


# 2020 -> 1, 2021 -> 2, 2022 -> 3
x = np.array([1, 2, 3])

y = np.array([
    437291629.9,
    483235395.8,
    489781871
])


n = len(x)

sum_x = np.sum(x)
sum_y = np.sum(y)
sum_xy = np.sum(x * y)
sum_x2 = np.sum(x ** 2)


m = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x ** 2)

b = np.mean(y) - m * np.mean(x)

print("Pendiente (m):", m)
print("Intercepción (b):", b)


x_2023 = 4
y_2023 = m * x_2023 + b
print("Predicción ventas 2023:", y_2023)

import numpy as np


# 2020 -> 1, 2021 -> 2, 2022 -> 3
x = np.array([10, 20, 30, 40])

y = np.array([
    200,
    350,
    500,
    650
])


n = len(x)

sum_x = np.sum(x)
sum_y = np.sum(y)
sum_xy = np.sum(x * y)
sum_x2 = np.sum(x ** 2)


m = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x ** 2)

b = np.mean(y) - m * np.mean(x)

print("Pendiente (m):", m)
print("Intercepción (b):", b)


x_2023 = 70
y_2023 = m * x_2023 + b
print("Predicción ventas de acuerdo a la inversión en anuncios:", y_2023)

import numpy as np


# 2020 -> 1, 2021 -> 2, 2022 -> 3
x = np.array([200, 350, 500, 650])

y = np.array([
    10,
    20,
    30,
    40
])


n = len(x)

sum_x = np.sum(x)
sum_y = np.sum(y)
sum_xy = np.sum(x * y)
sum_x2 = np.sum(x ** 2)


m = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x ** 2)

b = np.mean(y) - m * np.mean(x)

print("Pendiente (m):", m)
print("Intercepción (b):", b)


x_2023 = 1000
y_2023 = m * x_2023 + b
print("Predicción ventas de acuerdo a la inversión en anuncios:", y_2023)

import numpy as np


# 2020 -> 1, 2021 -> 2, 2022 -> 3
x = np.array([1200000, 1230000, 1260000, 1290000])

y = np.array([
    1,
    2,
    3,
    4
])


n = len(x)

sum_x = np.sum(x)
sum_y = np.sum(y)
sum_xy = np.sum(x * y)
sum_x2 = np.sum(x ** 2)


m = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x ** 2)

b = np.mean(y) - m * np.mean(x)

print("Pendiente (m):", m)
print("Intercepción (b):", b)


x_2023 = 1390000
y_2023 = m * x_2023 + b
print("Predicción del año de acuerdo a la población:", y_2023)

import numpy as np


# 2020 -> 1, 2021 -> 2, 2022 -> 3
x = np.array([220, 260, 310, 370])

y = np.array([
    18,
    22,
    26,
    30
])


n = len(x)

sum_x = np.sum(x)
sum_y = np.sum(y)
sum_xy = np.sum(x * y)
sum_x2 = np.sum(x ** 2)


m = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x ** 2)

b = np.mean(y) - m * np.mean(x)

print("Pendiente (m):", m)
print("Intercepción (b):", b)


x_2023 = 500
y_2023 = m * x_2023 + b
print("Predicción de temperatura de acuerdo al consumo(kWh):", y_2023)

import numpy as np


# 2020 -> 1, 2021 -> 2, 2022 -> 3
x = np.array([150, 260, 380, 510])

y = np.array([
    2,
    4,
    6,
    8
])


n = len(x)

sum_x = np.sum(x)
sum_y = np.sum(y)
sum_xy = np.sum(x * y)
sum_x2 = np.sum(x ** 2)


m = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x ** 2)

b = np.mean(y) - m * np.mean(x)

print("Pendiente (m):", m)
print("Intercepción (b):", b)


x_2023 = 700
y_2023 = m * x_2023 + b
print("Predicción de post de acuerdo a las ventas:", y_2023)

import numpy as np


# 2020 -> 1, 2021 -> 2, 2022 -> 3
x = np.array([150, 180, 210, 240, 270, 300, 330, 360])

y = np.array([
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5
])


n = len(x)

sum_x = np.sum(x)
sum_y = np.sum(y)
sum_xy = np.sum(x * y)
sum_x2 = np.sum(x ** 2)


m = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x ** 2)

b = np.mean(y) - m * np.mean(x)

print("Pendiente (m):", m)
print("Intercepción (b):", b)


x_2023 = 500
y_2023 = m * x_2023 + b
print("Predicción de habitaciones de acuerdo al precio:", y_2023)

import numpy as np


# 2020 -> 1, 2021 -> 2, 2022 -> 3
x = np.array([60, 75, 85, 95, 100, 110, 120, 130])

y = np.array([
    3,
    5,
    7,
    10,
    12,
    15,
    18,
    20
])


n = len(x)

sum_x = np.sum(x)
sum_y = np.sum(y)
sum_xy = np.sum(x * y)
sum_x2 = np.sum(x ** 2)


m = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x ** 2)

b = np.mean(y) - m * np.mean(x)

print("Pendiente (m):", m)
print("Intercepción (b):", b)


x_2023 = 180
y_2023 = m * x_2023 + b
print("Predicción de años de experiencia de acuerdo a la productividad:", y_2023)

import numpy as np


# 2020 -> 1, 2021 -> 2, 2022 -> 3
x = np.array([1,2,3,4,5,6,7,8,9,10,11,12])

y = np.array([
    77258018.19,
    81086982.5,
    86078050.92,
    86166931.64,
    77791113.85,
    74891335.71,
    74281900.64,
    112071743.2,
    60608226.3,
    61605667.01,
    68539527.78,
    46697019.61
])


n = len(x)

sum_x = np.sum(x)
sum_y = np.sum(y)
sum_xy = np.sum(x * y)
sum_x2 = np.sum(x ** 2)


m = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x ** 2)

b = np.mean(y) - m * np.mean(x)

print("Pendiente (m):", m)
print("Intercepción (b):", b)


x_2023 = 9
y_2023 = m * x_2023 + b
print("Predicción de importe de coste total de acuerdo al mes:", y_2023)

import numpy as np


# 2020 -> 1, 2021 -> 2, 2022 -> 3
x = np.array([2, 12, 15, 20])

y = np.array([
    2,
    4,
    6,
    8
])


n = len(x)

sum_x = np.sum(x)
sum_y = np.sum(y)
sum_xy = np.sum(x * y)
sum_x2 = np.sum(x ** 2)


m = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x ** 2)

b = np.mean(y) - m * np.mean(x)

print("Pendiente (m):", m)
print("Intercepción (b):", b)


x_2023 = 35
y_2023 = m * x_2023 + b
print("Predicción de horas trabajadas de acuerdo a los días:", y_2023)