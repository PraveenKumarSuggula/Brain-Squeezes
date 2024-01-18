import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appFileDragDrop]'
})
export class FileDragDropDirective {

  @Output() draggedFile = new EventEmitter();
  constructor() { }

  @HostListener('dragover', ['$event']) onDragOver(event: any){
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files.length > 0){
    }
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event: any){
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop', ['$event']) public onDrop(event: any){
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files.length > 0){
      this.draggedFile.emit(files);
    }
  }

}
