#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the countInversions function below.
def countInversions(arr):
    print(mergeSort(arr))

def mergeSort(arr):
    if(len(arr) == 1):
        return arr

    last_index = len(arr) - 1
    middle = int(last_index/2)

    left = mergeSort(arr[0:middle + 1])
    right = mergeSort(arr[middle + 1:len(arr)])

    return merge(left, right)

def merge(left, right):
    c = []
    while(len(left) > 0 and len(right) > 0):
        if(left[0] > right[0]):
            c.append(right[0])
            del right[0]
        else:
            c.append(left[0])
            del left[0]

    for i in range(len(left)):
        c.append(left[i])
        
    for j in range(len(right)):
        c.append(right[j])

    return c

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input())

    for t_itr in range(t):
        n = int(input())

        arr = list(map(int, input().rstrip().split()))

        result = countInversions(arr)

        fptr.write(str(result) + '\n')

    fptr.close()
