class Person{
    
    constructor(firstName, lastName, age, email){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.email = email

        
    }
    
    
    
    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

function getPerson(){
    class Person{
    
        constructor(firstName, lastName, age, email){
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.email = email
    
            
        }
        
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    let result = []
    result.push(new Person("Anna", "Simpson", 22, "anna@yahoo.com"))
        result.push(new Person("SoftUni"))
        result.push(new Person("Stephan", "Johnson", 25))
        result.push(new Person("Gabriel", "Peterson", 24, "g.p@gmail.com"))

    return result
    // getPerson(){
    //     let result = []
    //     result.push(new Person("Anna", "Sumpson", 22, "anna@yahoo.com"))
    //     result.push(new Person("SoftUni"))
    //     result.push(new Person("Stephan", "Johnson", 25))
    //     result.push(new Person("Gabriel", "Peterson", 24, "g.p@gmail.com"))
    //     return result
    // }
}