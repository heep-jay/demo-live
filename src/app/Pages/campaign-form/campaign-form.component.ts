import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignServiceService } from 'src/app/Service/campaign-service.service';
// import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.css'],
})
export class CampaignFormComponent implements OnInit {
  form!: FormGroup;
  formData: any;
  id!: string;
  testId!: string;
  initialFormValues: any = {};
  loading: boolean = false;
  imageUrl: string = '';

  constructor(
    private fb: FormBuilder,
    private formService: CampaignServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.formService.getForm(this.id).subscribe((data) => {
      console.log(data?.data);
      this.formData = data?.data?.attributes?.formFields.forms[0];
      this.imageUrl = '';
      this.buildForm();
      this.initialFormValues = this.form.getRawValue();
    });
  }

  buildForm(): void {
    const group: any = {};
    this.formData.fields.forEach((field: any) => {
      const validators = [];
      if (field.required) {
        validators.push(Validators.required);
      }
      if (
        (field.type === 'text' ||
          field.type === 'email' ||
          field.type === 'tel') &&
        field.minLength
      ) {
        validators.push(Validators.minLength(field.minLength));
      }

      if (field.type === 'checkbox') {
        const options: any = {};
        field.options.forEach((option: any) => {
          options[option] = new FormControl(false);
        });
        group[field.label] = new FormGroup(
          options,
          field.required ? this.minSelectedCheckboxes(1) : null
        );
      } else {
        group[field.label] = new FormControl('', validators);
      }
    });
    this.form = this.fb.group(group);
  }

  minSelectedCheckboxes(min = 1): ValidatorFn {
    return (formGroup: AbstractControl) => {
      const totalSelected: any = Object.values(formGroup.value).reduce(
        (prev: any, next: any) => (next ? prev + 1 : prev),
        0
      );
      return totalSelected >= min ? null : { required: true };
    };
  }
  resetFormArrays(): void {
    this.formData.fields.forEach((field: any) => {
      if (field.type === 'checkbox') {
        const formArray = this.form.get(field.label) as FormArray;
        formArray.controls.forEach((control) => control.setValue(false));
      }
    });
  }
  get f() {
    return this.form.controls;
  }
  onSubmit(): void {
    console.log(this.form.value);
    if (this.form?.valid) {
      this.formService
        .submitForm({
          data: { campaign_form: this.id, formData: this.form.value },
        })
        .subscribe((response) => {
          this.form.reset();
          this.resetFormArrays();
        });
      this.router.navigate(['/']);
    } else {
      console.log('Form is invalid');
    }
  }
}
