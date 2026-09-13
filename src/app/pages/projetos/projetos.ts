import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projetos',
  imports: [RouterLink],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css'
})
export class Projetos {
  projetos = [
    {
      numero: '01',
      titulo: 'API To-Do List',
      descricao:
        'API REST para gerenciamento de usuários e tarefas, com operações CRUD, autenticação, autorização e persistência de dados.',
      tecnologias:
        'Java · Spring Boot · PostgreSQL · Spring Security · JWT · JPA',
      github: 'https://github.com/ViniciusV3nancio/Projeto-API-To-Do-List',
      status: 'Em Andamento'
    },
    {
      numero: '02',
      titulo: 'Constructo',
      descricao:
        'Plataforma web para criação de plantas baixas e cálculo automatizado de materiais de construção.',
      tecnologias:
        'PHP · JavaScript · MySQL · Modelagem de dados',
      github: 'https://github.com/caiom4754/Constructo',
      status: 'Concluído'
    },
    {
      numero: '03',
      titulo: 'Projeto Java em desenvolvimento',
      descricao:
        'Novo projeto para praticar regras de negócio, testes automatizados e integração com banco de dados.',
      tecnologias:
        'Java · Spring Boot · Testes',
      github: '',
      status: 'Em desenvolvimento'
    },
    {
      numero: '04',
      titulo: 'Projeto Angular em desenvolvimento',
      descricao:
        'Aplicação frontend para praticar componentes, rotas, formulários e consumo de uma API REST.',
      tecnologias:
        'Angular · TypeScript · HTML · CSS',
      github: '',
      status: 'Em desenvolvimento'
    },
    {
      numero: '05',
      titulo: 'Sistema de chamados',
      descricao:
        'Aplicação inspirada na experiência com suporte de TI, com abertura, acompanhamento e atualização de chamados.',
      tecnologias:
        'Java · Spring Boot · PostgreSQL · Angular',
      github: '',
      status: 'Próximo projeto'
    },
    {
      numero: '06',
      titulo: 'Projeto de estudos',
      descricao:
        'Espaço reservado para um experimento técnico ou prova de conceito relevante.',
      tecnologias:
        'A definir',
      github: '',
      status: 'Planejado'
    }
  ];
}
