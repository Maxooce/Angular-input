import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public developer: Developer;
  public skillArray: Skill[] =
  [new Skill('Angular', 'https://angular.io/assets/images/logos/angular/angular.svg', 'https://angular.io/'),
  new Skill('Github', 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', 'https://github.com/'),
  new Skill('NodeJs', 'https://www.samuelprovost.com/img/nodejs.png', 'https://nodejs.org/en/')];

  constructor() { }

  ngOnInit() {
    this.developer = new Developer('Court', 'Maxence', 28, 'masculin', 'En formation à la Wild', this.skillArray);
  }

}
