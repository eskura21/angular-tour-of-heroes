import { Component } from '@angular/core';

@Component({
    selector: 'app-titulo',
    template: `<h1>{{titulo}}</h1>
               <h2>{{subtitulo}}</h2>`,
    styles: [`h1 {
        color: darkblue;
    }`]
})
export class TituloComponent {
    titulo = 'Título por defecto';
    subtitulo = 'Subtítulo por defecto';
}
