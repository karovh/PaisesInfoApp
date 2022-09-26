import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
;

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',

})
export class PaisInputComponent {

  @Output() OnEnter: EventEmitter<string> = new EventEmitter
  @Output() onDebounce: EventEmitter<string> = new EventEmitter
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject()

  termino: string = ''

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor)
      });
  }

  buscar() {
    this.OnEnter.emit(this.termino);
  }

  teclaPresionada(event: any) {
    this.debouncer.next(this.termino)
  }

}
