listar() {
  const sql = "SELECT * FROM atendimentos";
  return this.executaQuery(sql);
}