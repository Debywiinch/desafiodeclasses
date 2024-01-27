class Heroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
        this.nomeHeroi = nomeHeroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoHeroi = tipoHeroi;
    }
    atacar() {
        let ataque;
        switch (this.tipoHeroi) {
            case 'Ninja':
                ataque = 'shuriken';
                break;
            case 'Mago':
                ataque = 'magia';
                break;
            case 'Guerreiro':
                ataque = 'espada';
                break;
            case 'Monge':
                ataque = 'artes marciais';
                break;
        }
        console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`);
    }
}
const Ninja = new Heroi("Rafa", 22, "Ninja");
Ninja.atacar();