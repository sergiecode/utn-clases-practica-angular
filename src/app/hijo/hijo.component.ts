import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  formularioQueja!: FormGroup

  constructor( private fb: FormBuilder ){
    this.formularioQueja = this.fb.group({
      queja: ['', [Validators.required, Validators.minLength(5)]], //formControllers
    })
  }

  validarQueja(controller: string, tipoError: string){
    return this.formularioQueja.get(controller)?.hasError(tipoError) as boolean && this.formularioQueja.get(controller)?.touched
  }

  enviar(){
    console.log(this.formularioQueja)
  }

}
