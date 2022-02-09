import { Component } from '@angular/core';
import faker from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  RandomText:string=faker.lorem.sentence();
  InputText:string='';

  onChangeInput(text:any) {
    this.InputText=text.target.value;
  }

  onCompare(item: string, inputTextElement: string):string {
    if(!inputTextElement) {
      return 'pending';
    }
    return item === inputTextElement ? 'equal' : 'notEqual';

  }
}
