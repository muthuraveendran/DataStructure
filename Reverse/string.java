class string {

    public static void reverse(String data) {

        char ch[]=data.toCharArray();  
        String rev="";  
        // for(int i=ch.length-1;i>=0;i--){  
            for(int i=0;i<=ch.length-1;i++){  
            // rev+=ch[i];  
            System.out.println("The CH is " + ch[i]);
            // rev = rev + ch[i];
            rev =   ch[i] + rev;
            System.out.println("The output is " + rev);
        }

        System.out.println("The output is " + rev);

    }



    public static void main(String[] args) {

        string str = new string();
        str.reverse("Muthu");
        
    }
}