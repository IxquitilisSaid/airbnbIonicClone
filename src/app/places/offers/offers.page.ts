import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from '../places.model';
import { PlacesService } from '../places.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[];

  constructor(
    private placesService: PlacesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.offers = this.placesService.places;
  }

  onEdit(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
    console.log(offerId);
  }

}
