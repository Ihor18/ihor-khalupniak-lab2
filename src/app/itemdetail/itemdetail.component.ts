import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../shared/item';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss'],
})
export class ItemdetailComponent implements OnInit {
  titleItem = 'ItemDetail';

  @Input()
  item: Item = null as any;

  constructor() {}

  ngOnInit(): void {}
}
