# ng-template-table

datatable base on Angular5 ng-zorro0.6.0

# Install

You can get it on npm.

```
npm install ngx-template-table --save
```

# Usage

You need to install ng-zorro and import BrowserAnimationsModule from @angular/platform-browser/animations, NgZorroAntdModule from ng-zorro-antd in app.module.ts

```
npm install ng-zorro-antd --save

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
```

```
<app-ex-table [totel]="totel" [pageSizeSelectorValues]="pageSizeSelectorValues" [searchConfig]="searchConfig" [tableConfig]="tableConfig"
        [tableData]="tableData" [buttonConfig]="buttonConfig" (onSearch)="onSearch($event)" (onBtnClick)="onBtnClick($event)">
    </app-ex-table>
```

totel: the sum of datatable
```
totel: number;
```

pageSizeSelectorValues: the array of eachPage
```
pageSizeSelectorValues = [6, 8, 10, 15, 20];
```

searchConfig: search condition list,
type, label, key are required fields, 'type' is the type of the search term, including 'text', 'time', 'timeBetween', 'select'. When the type is 'select', 'searchList' field must to be added.
```
import { Search } from 'ngx-template-table';

searchConfig: Search[] = [
        {
            type: 'select',
            label: 'type',
            key: 'type',
            searchList: [
                {
                    label: 'perfect',
                    value: 1
                },
                {
                    label: 'good',
                    value: 0
                }
            ]
        }
    ];
```

tableConfig: Table header type and field list
```
import { TableItem } from 'ngx-template-table';

tableConfig: TableItem[] = [
this.tableConfig = [
          {
              name: 'id',
              type: 'text',
              key: 'id'
          },
          {
              name: 'name',
              type: 'text',
              key: 'name'
          }
      ];
    ];

```
If you use ng-template to customize the contents of the table, you need to assign tableConfig in ngOnInit ().
```
<ng-template #operate let-row="row" let-index="index">
      <a (click)="edit(row)">edit</a>
  </ng-template>
```
The row variable is the entire row of the form element.
```
import { ViewChild, TemplateRef } from '@angular/core';

@ViewChild('operate') operate: TemplateRef<any>;

ngOnInit() {
        this.tableConfig = [
            {
                name: 'id',
                type: 'text',
                key: 'id'
            },
            {
                name: 'name',
                type: 'text',
                key: 'name'
            },
            {
                name: 'operate',
                type: 'cell',
                key: 'operate',
                cell: this.operate
            }
        ];
    }
```
tableData: The attributes of the object in the array must be same as the key in tableConfig.
```
tableData = [
    {
        id: 1,
        name: name1
    },
    {
        id: 2,
        name: name2
    }
    ];
```
When the data in the tableData changes, the table will be automatically updated.

buttonConfig: Buttons displayed in the search area in the table
```
buttonConfig: BottonItem[] = [
        {
            key: 'add',
            labal: 'addItem'
        }
    ];
```

onSearch: click on the search event triggered, you can get all the search options
```
onSearch(event) {
        console.log(event);
    }
```
onBtnClick: click the button triggered by the search area event, return type selected in buttonConfig
```
onBtnClick(event) {
        console.log(event);
    }
```
