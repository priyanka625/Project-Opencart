package com.cts.test;

public class Ex2 {
	
	private int var;
	//default constructor
	Ex2(){
		this.var=10;
	}
	//parameterized constructor
	Ex2(int num){
		this.var=num;
	}
	public int getvalue() {
	       return var;
	}
	public static void main(String []args) {
		Ex2 obj1 = new Ex2();
		Ex2 obj2 = new Ex2(100);
		System.out.println("var is :"+obj1.getvalue());
		System.out.println("var is :" +obj2.getvalue());
	}
}
