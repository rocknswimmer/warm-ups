class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        // get max of array, then for every kid check if their amount + extra is greater than or equal to that max
        int max = candies[0];
        ArrayList<Boolean> results =  new ArrayList<Boolean>();
        for (int i = 0; i < candies.length; i++) {
            if(candies[i] > max){
                max = candies[i];
            }
        }
        for (int j = 0; j < candies.length; j++){
            if(candies[j] + extraCandies >= max) {
                results.add(true);
            } else {
                results.add(false);
            }
        }
        System.out.println(max);
        return results;
    }
}
// similar to javascript, just stricter and with less built in functions.
// saw I could import utils but why not practice the basics while learning the differences