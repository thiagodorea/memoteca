import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'E agora José',
      autoria: 'Thiago',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Poucos conseguem.',
      autoria: 'Thiago',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Dorme agora É só o vento lá fora Quero colo, vou fugir de casa Posso dormir aqui com vocês? Estou com medo tive um pesadelo Só vou voltar depois das trêsMeu filho vai ter nome de santo Quero o nome mais bonitoÉ preciso amar as pessoasComo se não houvesse amanhãPor que se você parar pra pensar Na verdade não há',
      autoria: 'Thiago',
      modelo: 'modelo2'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
