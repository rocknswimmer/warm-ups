class Solution:
    def countBits(self, n: int) -> List[int]:
        results = []
        current = 0
        while current <= n:
            currBi = len(bin(current)[2:].replace('0', ''))
            #print(type(currBi), )
            results.append(currBi)
            current += 1

        return results