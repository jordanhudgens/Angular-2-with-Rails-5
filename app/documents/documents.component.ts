import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
  pageTitle: string = "Document Dashboard";
  documents: Document[] = [
    {
      title: 'My First Doc',
      description: 'Hell well shall',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/1024px-Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: 'My Second Doc',
      description: 'Hell well shall',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://cdn.pixabay.com/photo/2015/01/26/10/23/office-612532_960_720.jpg',
    },
    {
      title: 'My Last Doc',
      description: 'Hell well shall',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://assets.rockefellerfoundation.org/app/uploads/20161128175954/startup-photos2.jpg',
    }
  ]
}
