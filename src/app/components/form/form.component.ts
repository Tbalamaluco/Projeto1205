import { Component } from '@angular/core';
import axios  from "axios";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  cep!: string
  endereco!: string
  bairro!: string
  estado!: string
  cidade!: string

  search(value: string) {
    const options = {
      method: 'GET',
      url: `https://viacep.com.br/ws/${value}/json/`,
      headers: { 'Content-Type': 'application/json' }
    }
    axios.request(options).then((response) => {
      console.log(response.data);
      this.cep = (response.data.cep)
      this.endereco = (response.data.logradouro)
      this.bairro = (response.data.bairro)
      this.estado = (response.data.uf)
      this.cidade = (response.data.localidade)
    }).catch(function (error) {
      console.error(error);
    });
  }

}
