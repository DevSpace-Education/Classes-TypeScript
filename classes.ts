export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj
  }

  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador)
  }

  public mostrarColaboradores(): void {
    this.colaboradores.forEach(element => {
      console.log(element)
    });
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ){}
}

const empresa1 = new Empresa('Youtube', '123123123')
const colaborador1 = new Colaborador('Lucas', 'Souza')
const colaborador2 = new Colaborador('joao', 'silva')
const colaborador3 = new Colaborador('maria', 'bueno')
empresa1.adicionaColaborador(colaborador1)
empresa1.adicionaColaborador(colaborador2)
empresa1.adicionaColaborador(colaborador3)

empresa1.mostrarColaboradores()