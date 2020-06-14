import { Component, OnInit } from '@angular/core';
import { Formulario } from 'src/app/models/formulario';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  formGroup: FormGroup;
  formulario: Formulario;


  constructor() { }

  ngOnInit(): void {
    this.setFormGroup();
  }

  setFormGroup(formulario: Formulario = new Formulario('', '', [])) {
    this.formGroup = new FormGroup({
      responsavel: new FormControl(formulario.responsavel, [Validators.required]),
      cpf: new FormControl(formulario.cpf, [Validators.required]),
      portadoresTEA: new FormControl(formulario.portadoresTEA, [Validators.required]),
    });
  }
}
