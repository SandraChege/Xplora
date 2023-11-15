import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentIndex = 0;
  testimonials = [
    {
      text: 'Our tour was amazing. We loved the scenary in kenya, learnt about their culture and of course tasted some amazing food',
      person: 'Rachel Njeri',
      date: 'June 2023',
    },
    {
      text: "The Maasai Mara is beautiful. The immense open landscape just takes your breath away. I was worried that perhaps it might feel like a large zoo, but no, these animals are living their normal lives, the only caveat to that is that of course they have become fairly accustomed to safari tour trucks... meaning they don't run away. You do get to see them in their natural habitats.",
      person: 'Douglas Njiriani',
      date: 'April 2023',
    },
    {
      text: 'I visited Kenya between 11 Sep 2023 and 21 Sep 2023. Overall we enjoyed our trip with friendly and helpful Kenyan staff, good food, top class and interesting wildlife and beautiful scenery.',
      person: 'Rachel Njeri',
      date: 'MAY 2023',
    },
  ];

  ngOnInit() {
    if (this.testimonials.length > 0) {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      }, 5000); // Change testimonies every 5 seconds
    }
  }
}
