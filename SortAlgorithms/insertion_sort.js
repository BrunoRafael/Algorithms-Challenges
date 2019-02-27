#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the countInversions function below.
def countInversions(arr):
    return insertionSort(arr)

def insertionSort(arr):
    for i in range(1, len(arr)):
        actual = arr[i]
        k = i - 1
        while (k >= 0 and arr[k] > actual):
            arr[k + 1] = arr[k]
            k -= 1

        arr[k + 1] = actual
    return arr

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input())

    for t_itr in range(t):
        n = int(input())

        arr = list(map(int, input().rstrip().split()))

        result = countInversions(arr)

        fptr.write(str(result) + '\n')

    fptr.close()
