import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
//import { CarouselModule } from '@coreui/angular';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'visible',
        style({
          opacity: 1,
        })
      ),
      state(
        'hidden',
        style({
          opacity: 0,
        })
      ),
      transition('visible <=> hidden', animate('1s')),
    ]),
  ],
})
export class LandingpageComponent implements OnInit {
   currentSlideIndex = 0;
  welcomeDataList = [
    {
      image:
        'https://cdn.pixabay.com/photo/2016/04/27/16/24/maldives-1357020_640.jpg',
      text: 'Explore Kenya!',
      heading1: 'Find your next stay',
      heading2: 'Search low prices on tours, hotels, homes and much more...',
    },
    {
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/05/48/45/10/wasini-boat-operators.jpg',
      text: 'Explore Kenya!',
      heading1: 'Life is an adventure, make the best of it',
      heading2:
        'Planning for a trip? We will organize your trip with the best places and within the best budget',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2021/08/02/16/22/beach-6517214_1280.jpg',
      text: 'Explore Kenya!',
      heading1: 'Relishing the wonders of travel',
      heading2:
        'Enjoy the breathtaking view of nature. Relax and cherish your dreams to the fullest',
    },
  ];

  ngOnInit() {
    setInterval(() => {
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.welcomeDataList.length;
    }, 5000); // Change slide every 5 seconds
  }
}
