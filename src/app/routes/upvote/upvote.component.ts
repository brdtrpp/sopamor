import { Component, OnInit } from '@angular/core';
import { PagetitleService } from '../../core/pagetitle/pagetitle.service';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.scss']
})
export class UpvoteComponent implements OnInit {

  constructor(pt: PagetitleService) {
    pt.setTitle('Upvote');
  }

  ngOnInit() {
  }

}
