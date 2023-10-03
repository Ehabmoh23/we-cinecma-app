import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../services/home.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  sub: Subscription = new Subscription
  id!: number
  constructor(private activeRoute: ActivatedRoute, private _HomeService: HomeService) { }
  ngOnInit(): void {
    this._HomeService.getAyHaga().subscribe({ next: (data: any) => { this.id = data } })
  }
}
