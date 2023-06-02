class Person{

    constructor(name, age){
      this.name = name;
      this.age = age;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setAge(age){
        this.age = age;
    }
    getAge(){
        return this.age;
    }

}



const person1 = new Person("per1", 20)
console.log(person1)

const person2 = new Person("per2", 30)
console.log(person2)


{
    "name":"per1",
    "age": 20
}