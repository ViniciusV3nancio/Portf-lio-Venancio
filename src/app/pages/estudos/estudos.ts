import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-estudos',
  imports: [RouterLink],
  templateUrl: './estudos.html',
  styleUrl: './estudos.css'
})
export class Estudos {
  posts = [
    {
      data: 'Em preparação',
      categoria: 'Java',
      titulo: 'O que estou aprendendo ao construir uma API com Spring Boot',
      resumo:
        'Registro dos principais aprendizados sobre controllers, services, repositories, persistência de dados e organização de uma API REST.',
      tecnologias: 'Java · Spring Boot · PostgreSQL · JPA',
      projeto: true,
      publicado: false
    },
    {
      data: 'Em preparação',
      categoria: 'Angular',
      titulo: 'Como um frontend Angular consome uma API REST',
      resumo:
        'Anotações sobre rotas, componentes, requisições HTTP e integração entre Angular e Spring Boot.',
      tecnologias: 'Angular · TypeScript · HTTP · Spring Boot',
      projeto: false,
      publicado: false
    },
    {
      data: 'Planejado',
      categoria: 'Segurança',
      titulo: 'Diferença entre autenticação e autorização',
      resumo:
        'Uma explicação prática sobre login, permissões, JWT e controle de acesso em APIs.',
      tecnologias: 'Spring Security · JWT · APIs REST',
      projeto: false,
      publicado: false
    }
  ];
}
