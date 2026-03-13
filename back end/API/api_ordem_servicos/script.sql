create table usuario (
  id_usuario serial primary key,
  nome varchar(100) not null,
  email varchar(150) not null,
  senha varchar(255) not null
);

create table departamento (
  id_departamento serial primary key,
  nome varchar(100) not null,
  descricao varchar(150) not null
);

create table ordem_servico (
  id_ordem serial primary key,
  nr_ordem int unique ,
  titulo varchar(255) not null,
  descricao varchar(200) not null,
  prioridade varchar(200) not null,
  status varchar(200) not null,
  data date not null,
  id_usuario int not null references usuario(id_usuario),
  id_departamento  int not null references departamento(id_departamento)
);

insert into usuario(nome, email, senha) values('boldo', 'boldo@sesi.br', 'boldo122');
insert into usuario(nome, email, senha) values('fellipe', 'fellipe@sesi.br', 'fellipe122');


insert into departamento(nome, descricao) values('RH', 'local onde contrata e manda embora funcionarios');
insert into departamento(nome, descricao) values('financeiro', 'local onde controla finanças da empresa');


insert into ordem_servico(nr_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento) values('2026001', 'Computador travando no login', 'Após atualização do Windows, o PC do setor financeiro trava na tela de login. Já tentado modo de segurança.', 'Alta', 'Em andamento', '2026-02-25', '1', '2');
insert into ordem_servico(nr_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento) values('2026002', 'Impressora sem toner preto', 'Impressora multifuncional HP LaserJet no 1º andar indica toner esgotado. Necessário reposição urgente.', 'Média', 'Aberto', '2026-02-26', '1', '2');
