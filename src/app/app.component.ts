import { Component, OnInit } from '@angular/core';
import * as fs from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
   fs.readFile('app/browserslist', { encoding: 'UTF-8' }, (err, data) => {
    console.log(data);
   });
  }
}
