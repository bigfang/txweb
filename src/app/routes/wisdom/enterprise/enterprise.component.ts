import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-wisdom-enterprise',
  templateUrl: './enterprise.component.html',
})
export class WisdomEnterpriseComponent implements OnInit {
  url = `graphql`;

  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号',
      },
    },
  };

  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    { title: 'id', index: 'id' },
    { title: 'name', index: 'name' },
    { title: 'registeredPlace', index: 'registeredPlace' },
    { title: 'registeredDate', type: 'date', index: 'registeredDate', dateFormat: 'yyyy-MM-dd' },
    { title: 'registeredCapital', index: 'registeredCapital' },
    { title: 'legalPerson', index: 'legalPerson' },
    { title: 'legalPersonPhone', index: 'legalPersonPhone' },
    {
      title: 'xxoo',
      buttons: [
        { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ],
    },
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) {}

  ngOnInit(): void {}

  add(): void {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }
}
