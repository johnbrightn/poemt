import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class SharedService{

    poem: Subject<any> = new Subject<any>();

    poemList: Subject<any> = new Subject<any>()
}