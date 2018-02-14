import {Component, EventEmitter, Input, OnInit, AfterViewInit, Output, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() elementId: string;
  @Input() content: string;
  @Output() onEditorKeyup = new EventEmitter<any>();
  @Output() contentChange: EventEmitter<string> = new EventEmitter();
  editor;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'http://localhost:4200/assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const newContent = editor.getContent();
          this.onEditorKeyup.emit(newContent);
        });
      },
    });
    this.onEditorKeyup.emit(this.content);
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  onChange(newContent) {
    this.content = newContent;
    this.contentChange.emit(this.content);
  }

}
