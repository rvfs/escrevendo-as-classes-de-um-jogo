class hero{
    constructor (name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    attack (){
        switch (this.type){
            case "mago":
                console.log (`o ${this.name}, ${this.type}, atacou usando magia`)
                break
            case "guerreiro":
                console.log (`o ${this.name}, ${this.type}, atacou usando espada`)
                break
            case "monge":
                console.log (`o ${this.name}, ${this.type}, atacou usando artes maciais`)
                break
            default:
                console.log (`o ${this.name}, ${this.type}, atacou usando shuriken`)
                break
        }
    }
}

let myHero = new hero ("Zé do Pão", 60, "ninja")
myHero.attack()