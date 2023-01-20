import { Subscription } from 'rxjs';
import { HierarchiesDetailsService } from './../../services/hierarchies-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subordinates-tab',
  templateUrl: './subordinates-tab.component.html',
  styleUrls: ['./subordinates-tab.component.scss'],
})
export class SUBORDINATESTabComponent implements OnInit {
  subordinates!: Subscription;
  subordinatesArray:any=[]
  constructor(private HierarchiesDetailsService: HierarchiesDetailsService) {}

  ngOnInit(): void {
    this.subordinates =
      this.HierarchiesDetailsService.getSubordinates().subscribe({
        next: (res: any) => {
          console.log(res);
          this.subordinatesArray  = res.data
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  ngOnDestroy(): void {
    if (this.subordinates) this.subordinates.unsubscribe();
  }
}
