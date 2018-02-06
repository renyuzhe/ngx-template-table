# ng-template-table

datatable base on Angular5 ng-zorro0.6.0

# Install

You can get it on npm.

```shell
npm install ngx-template-table --save
```

# Usage

You need to install ng-zorro and import BrowserAnimationsModule from @angular/platform-browser/animations, NgZorroAntdModule from ng-zorro-antd in app.module.ts

```shell
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
*.component.html
```shell
<app-ex-table [totel]="totel" [pageSizeSelectorValues]="pageSizeSelectorValues" [searchConfig]="searchConfig" [tableConfig]="tableConfig"
        [tableData]="tableData" [buttonConfig]="buttonConfig" (onSearch)="onSearch($event)" (onBtnClick)="onBtnClick($event)">
    </app-ex-table>
```

totel: the sum of datatable
```shell
totel: number;
```

pageSizeSelectorValues: the array of eachPage
```shell
pageSizeSelectorValues = [6, 8, 10, 15, 20];
```

searchConfig: search condition list,
type, label, key are required fields, 'type' is the type of the search term, including 'text', 'time', 'timeBetween', 'select'. When the type is 'select', 'searchList' field must to be added.
```
searchConfig: Search[] = [
        {
            type: 'select',
            label: '组类型',
            key: 'type',
            searchList: [
                {
                    label: '优质',
                    value: 1
                },
                {
                    label: '普通',
                    value: 0
                }
            ]
        }
    ];
```
