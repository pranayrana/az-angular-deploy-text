import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../core/customers.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  customerForm!: FormGroup;

  name:string='';
  email:string='';
  @ViewChild('custTemplateFrom')
  custTemplateFrom!: NgForm;

  get nameCtrl(){
    return this.customerForm.get('name');
  }

  constructor(private fb : FormBuilder, private router:ActivatedRoute, private customersService: CustomersService) {
    this.customerForm = this.fb.group({
      name : new FormControl('', { validators: [Validators.required, Validators.minLength(3), this.testValidator(5)], updateOn: 'blur'} ),
      email : new FormControl()
     });
   }

  ngOnInit(): void {
   
   this.router.data.subscribe(data =>{ 
      const cust = data['cust'];
      console.log(cust);
      this.customerForm.patchValue(cust);
  });

  }

  submit(data:any){
    console.log(data);
    console.log(this.custTemplateFrom.value)
  }

  testValidator(val:number) {
    return (ctrl:AbstractControl): {[key:string]: boolean } | null => {
      if(ctrl.value.length > val)
        return {'lengthError': true};
      return null;
    };
  }

}
