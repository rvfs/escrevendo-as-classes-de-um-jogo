class hero{
    constructor (name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    attack (){
        switch (this.type){
            case "mago":
                console.log (`o ${this.name}, ${this.type}, atacou usando magia, no auge dos seus ${this.age} anos!!!`)
                break
            case "guerreiro":
                console.log (`o ${this.name}, ${this.type}, atacou usando espada, no auge dos seus ${this.age} anos!!!`)
                break
            case "monge":
                console.log (`o ${this.name}, ${this.type}, atacou usando artes maciais, no auge dos seus ${this.age} anos!!!`)
                break
            default:
                console.log (`o ${this.name}, ${this.type}, atacou usando shuriken, no auge dos seus ${this.age} anos!!!`)
                break
        }
    }
}

let myHero = new hero ("Zé do Pão", 60, "mago")
myHero.attack()