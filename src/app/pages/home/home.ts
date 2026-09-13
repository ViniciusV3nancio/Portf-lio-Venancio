import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  tecnologias = [
    'Java ',
    'Spring Boot ',
    'APIs REST ',
    'PostgreSQL ',
    'Spring Security ',
    'Angular ',
    'TypeScript ',
    'Git'
  ];

  links = [
    {
      nome: 'GitHub ',
      url: 'https://github.com/ViniciusV3nancio'
    },
    {
      nome: 'LinkedIn ',
      url: 'https://linkedin.com/in/vvenanciodev'
    },
    {
      nome: 'E-mail',
      url: 'mailto:viniciusvenancio143@outlook.com'
    }
  ];
}
