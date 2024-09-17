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
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignServiceService } from 'src/app/Service/campaign-service.service';
import { NavbarService } from 'src/app/Service/navbar.service';
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
  headerText: string = '';
  headerDescription: string = '';
  additionalDescription: string = '';
  formHeader: string = '';
  formDescription: string = '';

  constructor(
    private fb: FormBuilder,
    private formService: CampaignServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private navbarService: NavbarService
  ) {}
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getDate();
    this.navbarService.hide();
    this.canonicalUrl();
    this.id = this.route.snapshot.params['id'];
    const pageTitle = `Halogen | Camapaign ${this.id}`;
    this.setPageTitle(pageTitle);
    this.formService.getForm(this.id).subscribe((data) => {
      console.log(data?.data);
      this.formData = data?.data?.attributes?.formFields.forms[0];
      this.imageUrl = data?.data?.attributes?.formImage?.data?.attributes.url;
      this.formHeader = data?.data?.attributes?.formHeaderText;
      this.formDescription = data?.data?.attributes?.formDescription;
      this.buildForm();
      this.initialFormValues = this.form.getRawValue();
      if (this.id === '3') {
        this.headerText = '';
        this.headerDescription = '';
        this.additionalDescription = '';
      } else {
        this.headerText = data?.data?.attributes?.formHeaderText;
        this.headerDescription = data?.data?.attributes?.formDescriptionText;
        this.additionalDescription =
          data?.data?.attributes?.additional_description;
      }
    });
  }
  scrolll(data: any) {
    var element = document.getElementById(data)?.getBoundingClientRect().top;
    var headerOffset = 125;
    var offsetPosition = element! + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }

  setPageTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  canonicalUrl(): string {
    // Get the current route
    const currentRoute = this.router.url;
    // Construct the canonical URL based on the current route
    return `https://halogen-group.com${currentRoute}`;
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
      if (this.id === '3') {
        this.router.navigate(['/payments-info']);
      } else {
        this.router.navigate(['/thanks']);
      }
    } else {
      console.log('Form is invalid');
    }
  }
  getDate() {
    const time = new Date();

    return time;
  }
}
