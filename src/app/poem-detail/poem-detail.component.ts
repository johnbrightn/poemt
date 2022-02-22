import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-poem-detail',
  templateUrl: './poem-detail.component.html',
  styleUrls: ['./poem-detail.component.css']
})
export class PoemDetailComponent implements OnInit {
  poem = {
    title: '',
    author: '',
    lines: []
  }

  inFavorite = false;

  constructor(private shared: SharedService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.shared.poem.subscribe(value => {
      this.poem = value;
    })

    this.isPoemInFavorite()
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.isPoemInFavorite()
  }

  /**
   * Check if the poem is in favorite or not
   * @returns boolean
   */
  isPoemInFavorite(){
    if (localStorage.getItem('poems')) {
      let favPoem = [];
      favPoem = JSON.parse(localStorage.getItem('poems'))

      for (let i = 0; i < favPoem.length; i++) {
        //if the item is already in the list, remove it
        if (this.poem.author == favPoem[i].author && this.poem.title == favPoem[i].title) {
          this.inFavorite = true;
          return;
        }
      }

    }

    this.inFavorite = false;

  }

  /**
   * Add to or remove poem from favorite
   */
  onFavButtonClicked() {
    let favPoem = [];
    //check if the favorite poem is in local storage
    if (localStorage.getItem('poems')) {

      favPoem = JSON.parse(localStorage.getItem('poems'))

      for (let i = 0; i < favPoem.length; i++) {
        //if the item is already in the list, remove it
        if (this.poem.author == favPoem[i].author && this.poem.title == favPoem[i].title) {
          favPoem = favPoem.filter((value, index) => { return value.author != this.poem.author && value.title != this.poem.title })
          this.snackBar.open('Removed', null, {duration: 1000})
          localStorage.setItem('poems', JSON.stringify(favPoem))
          this.poem = {
            title: '',
            author: '',
            lines: []};
            this.shared.poemList.next(JSON.parse(localStorage.getItem('poems')))
          return;
        }
      }

      this.addToFavorite(favPoem)
      return;
    }

    this.addToFavorite(favPoem)
  }


  addToFavorite(favPoem: Array<any>) {
    //poem is not in favorite list. add new poem
    const pm = {
      author: this.poem.author,
      title: this.poem.title
    }

    favPoem.push(this.poem);

    this.snackBar.open('Added to favorite', null, {duration: 1000})

    localStorage.setItem('poems', JSON.stringify(favPoem))

  }


}
