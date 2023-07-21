class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        len1 = len(word1)
        len2 = len(word2)
        result = ''
        current = 0

        if len1 > len2:
            while current < len2:
                result += word1[current]
                result += word2[current]
                current += 1
            #while current < len1:

            result += word1[current:]
                #current += 1
        else:
            while current < len1:
                result += word1[current]
                result += word2[current]
                current += 1
            #while current < len2:
            result += word2[current:]
               #current += 1

        return result