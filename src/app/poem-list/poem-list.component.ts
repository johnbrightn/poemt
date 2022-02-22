import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.css']
})
export class PoemListComponent implements OnInit {

  selectedValue = "";
  poemList = [];
  hideProgress = true;
  isFavSelected = false;

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private shared: SharedService) { }

  ngOnInit(): void {

    this.shared.poemList.subscribe(list => {
      if (this.isFavSelected)
        this.poemList = list;
    })
  }


  fetchFavorites() {
    this.isFavSelected = true;
    if (localStorage.getItem('poems')) {
      this.shared.poemList.next(JSON.parse(localStorage.getItem('poems')))
    }
  }

  fetchPoems() {
    this.isFavSelected = false;
    this.hideProgress = false;
    this.http.get('https://poetrydb.org/random/20').subscribe(
      (response: any) => {
        this.hideProgress = true;
        this.poemList = response;
        this.shared.poemList.next(response)
      },
      (error) => {
        this.hideProgress = true;
        console.log(error);
      }
    )
  }

  displayPoem(poem) {
    this.shared.poem.next(poem)
  }


  sortData(sort) {
    const sort_type = sort.target.options[sort.target.options.selectedIndex].innerText
    if (sort_type != 'Select')
      this.poemList.sort((a, b) => a[sort_type] > b[sort_type] && 1 || -1)
  }

}
