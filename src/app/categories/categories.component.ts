import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ResourcesService} from '../services/resources.service';
import {AddDialogComponent} from '../add-dialog/add-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories = [
    {link: ['/categories', 'baby_foods'], name: 'Baby Foods'},
    {link: ['/categories', 'batteries'], name: 'Batteries'},
    {link: ['/categories', 'canned_foods'], name: 'Canned Foods'},
    {link: ['/categories', 'clothings'], name: 'Clothings'},
    {link: ['/categories', 'dry_foods'], name: 'Dry Foods'},
    {link: ['/categories', 'fuels'], name: 'Fuels'},
    {link: ['/categories', 'heavy_equipments'], name: 'Heavy Equipments'},
    {link: ['/categories', 'ices'], name: 'Ices'},
    {link: ['/categories', 'medical_devices'], name: 'Medical Devices'},
    {link: ['/categories', 'medications'], name: 'Medications'},
    {link: ['/categories', 'power_generators'], name: 'Power Generators'},
    {link: ['/categories', 'waters'], name: 'Waters'},
  ];
  catname = {
    baby_foods: 'Baby Foods',
    batteries: 'Batteries',
    canned_foods: 'Canned Foods',
    clothings: 'Clothings',
    dry_foods: 'Dry Foods',
    fuels: 'Fuels',
    heavy_equipments: 'Heavy Equipments',
    ices: 'Ices',
    medical_devices: 'Medical Devices',
    medications: 'Medications',
    power_generators: 'Power Generators',
    waters: 'Waters',
  };

  cat;
  data;
  keys;

  constructor(private activatedRoute: ActivatedRoute, private resourcesService: ResourcesService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.cat = params.get('category');
      this.resourcesService.getResource(this.cat).subscribe((data) => {
        this.data = data['Resources'];
        this.keys = Object.keys(this.data[0]);
      });
    });
  }

  addToCart(row) {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
