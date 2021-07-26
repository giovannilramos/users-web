import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../shared';
import { Users } from '../shared';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  form: FormGroup;
  users: Array<any> = new Array();

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getTodos();
    this.initForm();
  }

  insert(): void {
    this.usersService.insert(this.form.value).subscribe(user=> {
      this.form.reset();
      this.getTodos();
    }, err=> {
      console.log('erro');
    });
  }

  getTodos(): void {
    this.usersService.getTodos().subscribe(users=> {
      this.users = users;
    }, err=> {
      console.log('erro', err);
    });
  }

  private initForm(): void {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cel: new FormControl('', [Validators.required])
    });
  }

}
