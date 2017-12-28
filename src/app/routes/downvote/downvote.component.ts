import { Component, OnInit } from '@angular/core';
import { PagetitleService } from '../../core/pagetitle/pagetitle.service';

@Component({
  selector: 'app-downvote',
  templateUrl: './downvote.component.html',
  styleUrls: ['./downvote.component.scss']
})
export class DownvoteComponent implements OnInit {

  constructor(pt: PagetitleService) {
    pt.setTitle('Downvote');
  }

  ngOnInit() {
  }

}
