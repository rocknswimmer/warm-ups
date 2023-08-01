class Solution {
    public String reverseVowels(String s) {
        int front = 0;
        int back = s.length() - 1;
        String vowels = "aeiouAEIOU";
        while(front <= back){
            forward:
            while(front < back){
                //System.out.println("oops" + front);
                if(vowels.contains(String.valueOf(s.charAt(front)))){
                    break forward;
                }
                front += 1;
            }
            reverse:
            while(front < back){
                //System.out.println("spoo" + back);
                if(vowels.contains(String.valueOf(s.charAt(back)))){
                    break reverse;
                }
                back--;
            }
            String temp = String.valueOf(s.charAt(front));
            s = s.substring(0, front) + String.valueOf(s.charAt(back)) + s.substring(front + 1);
            s = s.substring(0, back) + temp + s.substring(back + 1);
            front++;
            back--;
        }
        // System.out.println(s.substring(0,0));
        return s;
    }
}