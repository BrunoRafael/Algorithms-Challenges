def maxMoney(n, k):
	# sum P.A.
	sum_money_students = ((n+1)*n)/2
	money_sum = 0
	bigger_sum = 0
	for i in range(1, n + 1):        
		# Sum actual value (i) with money_sum and verify if sum result is bigger than unlucky number(k)
		money_sum += i
		if(money_sum == k):
			# If money_sum is equals to unlucky value, so julia starts the remove students value process
			# Julia aways removes the first student value. 
			# In this way you will always have the highest value possible after removal because the 
			# first one is the one that donates the least money
			return (sum_money_students - 1)
		elif(money_sum > k):
			# If money_sum is bigger than k, else julia did not see unlucky number in no time
			return sum_money_students
    
	return bigger_sum

if __name__ == "__main__":
	n = int(input())
	k = int(input())

	result = maxMoney(n, k)
	print(str(result) + "\n")