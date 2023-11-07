import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnChanges, OnDestroy {

  @Input() quienSeQueja: string = 'true'
  formularioQueja!: FormGroup

  constructor( private fb: FormBuilder ){
    this.formularioQueja = this.fb.group({
      queja: ['', [Validators.required, Validators.minLength(5)]], //formControllers
    })
  }
  ngOnDestroy(): void {
    console.log('Se destruyó el componente')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['quienSeQueja'].currentValue)
  }

  validarQueja(controller: string, tipoError: string){
    return this.formularioQueja.get(controller)?.hasError(tipoError) as boolean && this.formularioQueja.get(controller)?.touched
  }

  enviar(){
    console.log(this.formularioQueja)
  }

}
