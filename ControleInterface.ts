interface ControleInterface<T> {
  cadastrar(item: T);

  atualizar(item: T);

  excluir(item: T);
}
