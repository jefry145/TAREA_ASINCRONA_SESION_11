import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ActividadadAA11';
//VALORES
 name!:string
 Email!:string
 textArea!:string


  show=true

  //EXPORTANDO VALIDACION
  validacion!:boolean  
  mostrarerror(){
    this.validacion = this.formLogin.valid
    switch (this.validacion) {
      case false:
        this.show = true
        break;
      case true:
        this.show = false 
        break;
    }
  }
  enviar(){
    alert("Datos ingresados correctamente")
  }
  //VALIDACION:
  public formLogin!: FormGroup;
  constructor(private formBuilder:FormBuilder){
  
  }
   ngOnInit():void{
    this.formLogin = this.formBuilder.group({
      name:['', 
      [
        Validators.required,
        Validators.minLength(10)
      ]
    ],
      email:['', 
      [
        Validators.required,
        Validators.email
      ]
    ],
      textarea:['', 
      [
        Validators.required,
        Validators.maxLength(500)
      ]
    ],
    })
  }
  
}
