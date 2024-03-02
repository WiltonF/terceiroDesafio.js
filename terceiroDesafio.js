class hero {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
        }
    
    atacar (nameInstrumento){
        console.log(`O ${this.type} atacou usando ${nameInstrumento}`)
    }

        
    instrumentoDeAtaque() {
        let nameInstrumento
        if ( this.type == "mago"){
            nameInstrumento = "magia";
        } else if (this.type == "guerreiro"){
            nameInstrumento = "espada";
        } else if (this.type == "monge"){
            nameInstrumento = "artes marciais";
        } else if (this.type == "ninja"){
            nameInstrumento = "shuriken";
        }
        return nameInstrumento
    }
}

let userHero = new hero("Dumber", 39, "guerreiro")
const instrumento = userHero.instrumentoDeAtaque();
userHero.atacar(instrumento);