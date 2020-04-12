package com.cts.test;

public class Constructor {
	
	int EmpId;
	String Name;
	
	Constructor(int id,String name) {
		
		this.EmpId = id;
		this.Name = name;
	}
	void info() {
		System.out.println("Id: "+EmpId + "Name: "+Name);
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Constructor obj=new Constructor();
		Constructor obj1= new Constructor(86,"priya");
		Constructor obj2 =new Constructor(98,"pravali");
		obj1.info();
		obj2.info();
	}

}
