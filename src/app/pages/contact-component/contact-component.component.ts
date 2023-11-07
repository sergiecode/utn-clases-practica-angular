import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponent implements OnInit {

  formularioContacto!: FormGroup
  mostrarQueja: boolean = false
  isObligatorio: boolean = true

  quienSeQueja: string = ''

  constructor(private fb: FormBuilder) {
    this.formularioContacto = this.fb.group({
      name: [''], //formControllers
      email: ['', Validators.email], //formControllers
      motivo: [''] //formControllers
    })
  }

  ngOnInit(): void {
    this.formularioContacto.get('name')?.setValidators([Validators.required])
    this.formularioContacto.get('email')?.setValidators([Validators.required, Validators.email])
    this.formularioContacto?.get('motivo')?.valueChanges.subscribe((value: string) => {
      this.mostrarQueja = value == 'Queja'
    })
  }

  tieneErrores(formControl:string, errorType: string){
    return this.formularioContacto.get(formControl)?.hasError(errorType) && this.formularioContacto.get(formControl)?.touched
  }

  // emailValido(formControl:string){
  //   return this.formularioContacto.get(formControl)?.hasError('email')
  // }

  enviar() {
    this.quienSeQueja = this.formularioContacto.get('name')?.value
  }

}
