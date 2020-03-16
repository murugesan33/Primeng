import { Valid } from './../valid';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import { CustomvalidationService } from '../customvalidation.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  HomeForm: FormGroup;
  fname = new FormControl('',[Validators.required]);
  pwd = new FormControl('',Validators.compose([Validators.required, this.customValidator.patternValidator()]));
 // pwd = new FormControl('',Validators.compose([Validators.required,Validators.minLength(8),Valid]))
  cnfpwd = new FormControl('',[Validators.required]);
  email =  new FormControl('',[Validators.required,Validators.email]);
  selectedGender = new FormControl('',[Validators.required]);
  topskills = new FormControl('',[Validators.required]);
  date =  new FormControl('',[Validators.required]);
  address = new FormControl('',[Validators.required]);
  gCity = new FormControl('',[Validators.required]);
//  date1: Date;
  selectedCities: string[] = ['New York','San Francisco','Los Angeles'];
  gender: any[] = [];
  skills: any[] = [ {name: 'C', value: "1"},
  {name: 'C++', value: "2"},
  {name: 'PHP', value: "3"},
  {name: 'MySQL', value: "4"}
];
cities: any[] =[{name: 'Bangalore', value: "1"},
{name: 'Chennai', value: "2"},
{name: 'Madurai', value: "3"}
]
  constructor(private formBuilder:FormBuilder, private customValidator: CustomvalidationService) {
      this.HomeForm = this.formBuilder.group({
        fname : this.fname,
        pwd: this.pwd,
        cnfpwd: this.cnfpwd,
        email: this.email,
        selectedGender: this.selectedGender,
        topskills: this.topskills,
        gCity: this.gCity,
        address: this.address,
        date: new Date()
      },{
        validator: this.customValidator.MatchPassword('pwd', 'cnfpwd'),
      });
      this.gender = [
        {label:'Select Gender', value:null},
        {label:'Male', value:{id:1, name: 'Male', code: 'M'}},
        {label:'FeMale', value:{id:2, name: 'FeMale', code: 'FM'}},
        {label:'Transgender', value:{id:3, name: 'Transgender', code: 'TG'}},
      ]
      //console.log(this.skills);
   }

  ngOnInit() {
  }

  onSubmit(){
    if (this.HomeForm.valid) {
     // console.log(this.topskills.value);
     console.log(this.HomeForm);
     console.log(this.date.value);
       //console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));
// expected output: 20/12/2012, 03:00:00
      //  console.log(this.pwd);
      //  console.log(this.cnfpwd);
    }else{
      console.log(this.HomeForm.controls.date.value);
      
      //console.log(this.HomeForm.controls.date.value.toLocaleString('en-GB', { timeZone: 'UTC' }));
      Object.keys(this.HomeForm.controls).forEach(key => {
        this.HomeForm.controls[key].markAsDirty();
      });
      console.log(this.HomeForm);
    }
  }

  getCheckbox(el){
    console.log(el);
  }

}
