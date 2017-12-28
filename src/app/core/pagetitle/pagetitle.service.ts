import { Injectable } from '@angular/core';

@Injectable()
export class PagetitleService {

    private page = {
        title: ''
    };

    constructor() {}

    setTitle(newTitle: string) {
      // console.log(newTitle);
        this.page.title = newTitle;
    }

    getTitle(): string {
      // console.log(this);
        return this.page.title;
    }

}
