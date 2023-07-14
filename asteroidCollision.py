class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        i = 1
        #print('hit 1')
        while i < len(asteroids):
            #print('hit 2')
            # (asteroids[i] > 0 and asteroids[i - 1] < 0) or
            if(asteroids[i] < 0 and asteroids[i - 1] > 0):
                if abs(asteroids[i]) == abs(asteroids[i - 1]):
                    del asteroids[i - 1]
                    del asteroids[i - 1]
                    if i != 1:
                            i -= 1
                else:
                    if abs(asteroids[i]) > abs(asteroids[i - 1]):
                        del asteroids[i - 1]
                        #print(asteroids, i, "13")
                        if i != 1:
                            i -= 1
                    else:
                        del asteroids[i]
                        #print(asteroids, i)
                        if i != 1:
                            i -= 1
            else:
                i += 1
        return asteroids