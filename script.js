const alunos = [
  {
    nome: "Guilherme",
    av1: 10,
    av2: 6,
  },
  {
    nome: "Julia",
    av1: 10,
    av2: 10,
  },
  {
    nome: "Estenio",
    av1: 4,
    av2: 6,
  },
  {
    nome:"Larissa",
    av1: 6,
    av2: 8,
  }
]

alunos.forEach((aluno)=>{
  let media = (aluno.av1 + aluno.av2)/2;
  let passouOuReprovou = media >= 7 ? `Parabéns ${aluno.nome}! Você foi aprovado(a) no concurso.`: `Não foi dessa vez, ${aluno.nome}! Tente novamente!`;
  alert(`A média do(a) aluno(a) ${aluno.nome} é: ${media}\n${passouOuReprovou}`);
})