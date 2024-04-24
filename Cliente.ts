class Cliente {
  constructor(
    private nome: string,
    private telefone: string,
    private endereco: string,
    private cpf: string
  ) {}

  public getNome() {
    return this.nome;
  }

  public setNome(nome: string) {
    this.nome = nome;
  }

  public getTelefone() {
    return this.telefone;
  }

  public setTelefone(telefone: string) {
    this.telefone = telefone;
  }

  public getEndereco() {
    return this.endereco;
  }

  public setEndereco(endereco: string) {
    this.endereco = endereco;
  }

  public getCpf() {
    return this.cpf;
  }

  public setCpf(cpf: string) {
    this.cpf = cpf;
  }
}
