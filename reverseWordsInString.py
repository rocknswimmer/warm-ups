class Solution:
    def reverseWords(self, s: str) -> str:
        words = s.split()
        result = ''
        index = len(words) - 1
        while index >= 0:
            if index == len(words) - 1:
                result += words[index]
            else:
                result = result + ' ' + words[index]
            index -= 1
        return result