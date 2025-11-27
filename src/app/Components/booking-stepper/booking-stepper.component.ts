import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { ApiService } from 'src/app/Service/api.service';

/** ---- TYPES (Matches your PPT structure) ---- */
export type ClientType = 'organization' | 'individual';
export type DurationType =
  | 'day'
  | 'weekly'
  | 'monthly'
  | 'temporary'
  | 'permanent';
export type VehicleType =
  | 'prime-exec-suv'
  | 'prime-armoured-suv'
  | 'prime-mini-suv'
  | 'executive-sedan'
  | 'prime-sprinter'
  | 'prime-comfort-cruiser';

export interface BookingFormValue {
  client: {
    clientType: ClientType;
    organizationOrName: string;
    contactPerson?: string;
    phone: string;
    altPhone?: string;
    email: string;
    preferredContact: {
      phone: boolean;
      email: boolean;
      whatsapp: boolean;
    };
  };
  service: {
    serviceType: string;
    service: string;
    serviceDuration: DurationType | null;
    // Event-specific fields
    securityNeeds?: string;
    supportNeeds?: string;
  };
  movement: {
    tripDate?: string;
    eventDate?: string; // New field for events
    expectedDuration?: string;
    pickupAddress?: string;
    eventVenueLocation?: string; // New field for events
    destinationAddress?: string;
    numberofVehicles?: number;
    highProfileGuestsExpected?: string; // New field for events
    knownRisksOrConcerns?: string; // New field for events
    optionalAddOns: string[];
    serviceLevel: string;
  };
}

@Component({
  selector: 'app-booking-stepper',
  templateUrl: './booking-stepper.component.html',
  styleUrls: ['./booking-stepper.component.css'],
})
export class BookingStepperComponent implements OnInit {
  step = 1;
  maxStep = 4;
  isLoading = false;
  bookingForm!: FormGroup;

  services: any[] = [
    {
      id: 1,
      name: 'Driver Support Services',
    },
    {
      id: 2,
      name: 'Premium Vehicle Services',
    },
    {
      id: 3,
      name: 'Secured Escort Services',
    },
    {
      id: 4,
      name: 'Secured Mobility Services',
    },
    {
      id: 5,
      name: 'Close Protection Detail',
    },
    {
      id: 6,
      name: 'Event Security Services',
    },
  ];
  driverServices: any[] = [
    {
      name: 'SPY-Trained Driver',
    },
    {
      name: 'Executive Driver',
    },
    {
      name: 'Coporate Driver',
    },
    {
      name: 'Operational  Driver',
    },
  ];
  premiumServices: any[] = [
    { name: 'Prime Executive SUV ', title: 'Seats up to 3 persons' },
    { name: 'Prime Armoured SUV ', title: 'Seats up to 3 persons' },
    { name: 'Prime Mini SUV ', title: 'Seats up to 2 persons' },
    { name: 'Executive Sedan ', title: 'Seats up to 3 persons' },
    {
      name: 'Prime Executive Sprinter',
      title: 'Hummer Bus- Seats up to 3 persons',
    },
    {
      name: 'Prime Comfort Cruiser',
      title: 'Coaster Bus - Seats up to 20 persons',
    },
  ];

  securedEscortServices: any[] = [
    {
      name: 'Lead or Chase',
    },
    {
      name: 'Duo [Lead + Chase]',
    },
  ];

  mobilityServices: any[] = [
    {
      name: 'Pick-Up / Drop Off',
    },
    {
      name: 'Half Day [1-6 hours]',
    },
    {
      name: 'Full Day [6-12 hours]',
    },
  ];

  cpoServices: any[] = [
    {
      name: 'Full Options CPO',
    },
    { name: 'Unarmed CPO' },
  ];

  eventServices: any[] = [
    { name: 'Concerts & Festivals' },
    { name: 'Charity & Fundraising Events' },
    { name: 'Corporate Events (Conferences, Workshops, Media Briefings etc)' },
    { name: 'Sporting Events' },
    { name: 'Exhibitions & Trade Shows' },
    { name: 'Political Rallies & Campaigns' },
    { name: 'Religious Gatherings' },
    { name: 'Birthday Parties' },
    { name: 'Weddings' },
    { name: 'Film & TV Productions' },
    { name: 'Funerals & Memorial Services' },
    { name: 'Others' },
  ];

  securityNeeds: any[] = [
    { name: 'Planning & Assesment' },
    { name: 'Safety Preparation' },
    { name: 'Response & Soulution' },
    { name: 'Protection & Monitoring' },
    { name: 'All of the above' },
  ];
  supportNeeds: any[] = [
    { name: 'I Know what i need' },
    { name: 'I need guidance' },
  ];

  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.buildForm();
    this.updateValidators(); // Add this line

    // Also update validators when service type changes
    this.serviceGroup.get('serviceType')?.valueChanges.subscribe(() => {
      this.updateValidators();
    });
  }
  formatLabel(text: string): string {
    return text.replace(/([A-Z])/g, ' $1').trim();
  }

  /** ---------- FORM MODEL ---------- */
  buildForm() {
    this.bookingForm = this.fb.group({
      client: this.fb.group({
        clientType: ['individual', Validators.required],
        organizationOrName: ['', Validators.required],
        contactPerson: [''],
        phone: ['', Validators.required],
        altPhone: [''],
        email: ['', [Validators.required, Validators.email]],
        preferredContact: this.fb.group(
          {
            phone: [true],
            email: [false],
            whatsapp: [false],
          },
          { validators: this.preferredContactValidator }
        ),
      }),

      service: this.fb.group({
        serviceType: ['', Validators.required],
        service: ['', Validators.required],
        serviceDuration: [null],
        // Event-specific fields
        customEventType: [''],
        securityNeeds: [''],
        supportNeeds: [''],
      }),

      movement: this.fb.group({
        tripDate: [''],
        eventDate: [''], // New field
        expectedDuration: ['', Validators.required],
        pickupAddress: [''],
        eventVenueLocation: [''], // New field
        destinationAddress: [''],
        numberofVehicles: [null],
        highProfileGuestsExpected: [null], // New field
        knownRisksOrConcerns: [''], // New field
        optionalAddOns: this.fb.array([]),
        serviceLevel: ['', Validators.required],
      }),
    });
  }
  /** ---------- GETTERS (solve TS errors permanently) ---------- */

  get clientGroup(): FormGroup {
    return this.bookingForm.get('client')! as FormGroup;
  }
  get preferredContactGroup(): FormGroup {
    return this.clientGroup.get('preferredContact')! as FormGroup;
  }
  get serviceGroup(): FormGroup {
    return this.bookingForm.get('service')! as FormGroup;
  }
  get movementGroup(): FormGroup {
    return this.bookingForm.get('movement')! as FormGroup;
  }

  // get ServiceType(){

  // }
  // get serviceLevelsArray(): FormArray {
  //   return this.movementGroup.get('serviceLevels')! as FormArray;
  // }

  get optionalAddOnsArray(): FormArray {
    return this.movementGroup.get('optionalAddOns')! as FormArray;
  }

  toggleAddOn(addon: string, checked: boolean) {
    if (checked) this.optionalAddOnsArray.push(new FormControl(addon));
    else {
      const index = this.optionalAddOnsArray.value.indexOf(addon);
      if (index !== -1) this.optionalAddOnsArray.removeAt(index);
    }
  }

  /** ---------- STEPPER NAVIGATION ---------- */
  next() {
    if (!this.validateStep()) return;
    if (this.step < this.maxStep) this.step++;
  }

  back() {
    if (this.step > 1) this.step--;
  }

  goTo(stepNum: number) {
    if (stepNum < this.step) {
      this.step = stepNum;
      return;
    }
    if (!this.validateStep()) return;
    this.step = stepNum;
  }

  /** Validate only controls in the current step */
  validateStep(): boolean {
    let group: FormGroup | null = null;

    if (this.step === 1) group = this.clientGroup;
    if (this.step === 2) group = this.serviceGroup;
    if (this.step === 3) group = this.movementGroup;

    if (group) {
      console.log(group);
      group.markAllAsTouched();
      return group.valid;
    }

    return true;
  }

  updateValidators() {
    const isEventService =
      this.serviceGroup.get('serviceType')?.value === 'Event Security Services';

    // Service group validators

    const securityNeedsControl = this.serviceGroup.get('securityNeeds');
    const supportNeedsControl = this.serviceGroup.get('supportNeeds');
    const isOtherEvent =
      this.serviceGroup.get('eventService')?.value === 'Others';
    if (isEventService) {
      securityNeedsControl?.setValidators([Validators.required]);
      supportNeedsControl?.setValidators([Validators.required]);
    } else {
      securityNeedsControl?.clearValidators();
      supportNeedsControl?.clearValidators();
    }
    const customEventTypeControl = this.serviceGroup.get('customEventType');
    if (isEventService && isOtherEvent) {
      customEventTypeControl?.setValidators([Validators.required]);
    } else {
      customEventTypeControl?.clearValidators();
    }
    customEventTypeControl?.updateValueAndValidity();

    securityNeedsControl?.updateValueAndValidity();
    supportNeedsControl?.updateValueAndValidity();

    // Movement group validators
    const eventDateControl = this.movementGroup.get('eventDate');
    const eventVenueControl = this.movementGroup.get('eventVenueLocation');
    const highProfileGuestsControl = this.movementGroup.get(
      'highProfileGuestsExpected'
    );
    const knownRisksControl = this.movementGroup.get('knownRisksOrConcerns');
    const tripDateControl = this.movementGroup.get('tripDate');
    const pickupAddressControl = this.movementGroup.get('pickupAddress');
    const destinationAddressControl =
      this.movementGroup.get('destinationAddress');
    const vehiclesControl = this.movementGroup.get('numberofVehicles');

    if (isEventService) {
      eventDateControl?.setValidators([Validators.required]);
      eventVenueControl?.setValidators([Validators.required]);
      highProfileGuestsControl?.setValidators([Validators.required]);
      knownRisksControl?.setValidators([Validators.required]);

      // Clear regular validators
      tripDateControl?.clearValidators();
      pickupAddressControl?.clearValidators();
      destinationAddressControl?.clearValidators();
      vehiclesControl?.clearValidators();
    } else {
      eventDateControl?.clearValidators();
      eventVenueControl?.clearValidators();
      highProfileGuestsControl?.clearValidators();
      knownRisksControl?.clearValidators();

      // Set regular validators
      tripDateControl?.setValidators([Validators.required]);
      pickupAddressControl?.setValidators([Validators.required]);
      destinationAddressControl?.setValidators([Validators.required]);
      vehiclesControl?.setValidators([Validators.required]);
    }

    // Update all controls
    eventDateControl?.updateValueAndValidity();
    eventVenueControl?.updateValueAndValidity();
    highProfileGuestsControl?.updateValueAndValidity();
    knownRisksControl?.updateValueAndValidity();
    tripDateControl?.updateValueAndValidity();
    pickupAddressControl?.updateValueAndValidity();
    destinationAddressControl?.updateValueAndValidity();
    vehiclesControl?.updateValueAndValidity();
  }

  /** ---------- SUBMIT ---------- */

  // In your submitForm method, create the email template like this:
  submitForm() {
    // Prevent multiple submissions
    if (this.isLoading) {
      return;
    }

    this.bookingForm.markAllAsTouched();
    if (this.bookingForm.invalid) {
      return;
    }

    // Set loading state
    this.isLoading = true;

    const formValue = this.bookingForm.value;

    const emailPayload = {
      customerEmailInfo: {
        name: formValue.client.organizationOrName,
        customerEmail: [formValue.client.email],
        subject: `Service Booking Confirmation - ${formValue.service.serviceType}`,
      },
      halogenEmailInfo: {
        name: formValue.client.organizationOrName,
        mobileNumber: formValue.client.phone,
        message: this.generateEmailTemplate(formValue),
        halogenEmail: ['jubril.muritala@halogen-group.com'],
      },
    };

    console.log('Email Payload:', emailPayload);

    this.api.bookService(emailPayload).subscribe({
      next: (res: any) => {
        console.log(res);
        this.isLoading = false; // Reset loading state
        this.step = 4;
        this.bookingForm.reset();
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false; // Reset loading state even on error
        // Optional: Show error message to user
      },
      complete: () => {
        this.isLoading = false; // Ensure loading state is reset
      },
    });
  }

  // Add this method to your component class
  // Update the generateEmailTemplate method in your component
  // Update the generateEmailTemplate method in your component
  generateEmailTemplate(formData: any): string {
    const preferredContact = [];
    if (formData.client.preferredContact.phone) preferredContact.push('Phone');
    if (formData.client.preferredContact.email) preferredContact.push('Email');
    if (formData.client.preferredContact.whatsapp)
      preferredContact.push('WhatsApp');

    const isEventService =
      formData.service.serviceType === 'Event Security Services';
    const isOtherEvent = formData.service.service === 'Others';
    const displayEventService =
      isOtherEvent && formData.service.customEventType
        ? formData.service.customEventType
        : formData.service.service;
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Service Booking Request</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8fafc;
            padding: 20px;
        }
        .email-container {
            max-width: 680px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            background: linear-gradient(135deg, #1c2b66 0%, #2d3b8b 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .email-header h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
        }
        .email-header p {
            opacity: 0.9;
            font-size: 16px;
        }
        .email-body {
            padding: 40px 30px;
        }
        .section {
            margin-bottom: 32px;
        }
        .section-title {
            font-size: 20px;
            font-weight: 600;
            color: #1c2b66;
            margin-bottom: 20px;
            padding-bottom: 12px;
            border-bottom: 2px solid #f1f5f9;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .section-title i {
            font-size: 18px;
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .info-item {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        .info-label {
            font-size: 14px;
            font-weight: 600;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .info-value {
            font-size: 16px;
            font-weight: 500;
            color: #1e293b;
            padding: 12px 16px;
            background: #f8fafc;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
        }
        .highlight-box {
            background: linear-gradient(135deg, #fff9e6 0%, #fff3cd 100%);
            border: 1px solid #ffc20e;
            border-radius: 12px;
            padding: 24px;
            margin: 24px 0;
        }
        .service-badge {
            display: inline-block;
            padding: 8px 16px;
            background: #ffc20e;
            color: #000;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 12px;
        }
        .addon-list, .service-levels {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 12px;
        }
        .addon-tag {
            padding: 6px 12px;
            background: #e8f4ff;
            color: #1c2b66;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
        }
        .event-badge {
            padding: 6px 12px;
            background: #dcfce7;
            color: #166534;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            border: 1px solid #bbf7d0;
        }
        .footer {
            background: #f1f5f9;
            padding: 30px;
            text-align: center;
            color: #64748b;
            font-size: 14px;
        }
        .urgent-badge {
            background: #dc2626;
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 16px;
        }
        .full-width {
            grid-column: 1 / -1;
        }
        .risk-concern {
            background: #fef2f2;
            border: 1px solid #fecaca;
            border-radius: 8px;
            padding: 16px;
            margin-top: 8px;
        }
        @media (max-width: 600px) {
            .info-grid {
                grid-template-columns: 1fr;
            }
            .email-body {
                padding: 24px 20px;
            }
            .email-header {
                padding: 30px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>🎯 New ${
              isEventService ? 'Event Security' : 'Service'
            } Booking</h1>
            <p>${
              isEventService
                ? 'Event Security & Protection Services Request'
                : 'Security & Mobility Services Request'
            }</p>
        </div>
        
        <div class="email-body">
            <div class="urgent-badge">
                ⚡ ACTION REQUIRED - New Booking Request
            </div>

            <!-- Client Information Section -->
            <div class="section">
                <div class="section-title">
                    👤 Client Information
                </div>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Client Type</span>
                        <div class="info-value">${this.formatLabel(
                          formData.client.clientType
                        )}</div>
                    </div>
                    <div class="info-item">
                        <span class="info-label">${
                          formData.client.clientType === 'organization'
                            ? 'Organization'
                            : 'Full Name'
                        }</span>
                        <div class="info-value">${
                          formData.client.organizationOrName
                        }</div>
                    </div>
                    ${
                      formData.client.contactPerson
                        ? `
                    <div class="info-item">
                        <span class="info-label">Contact Person</span>
                        <div class="info-value">${formData.client.contactPerson}</div>
                    </div>
                    `
                        : ''
                    }
                    <div class="info-item">
                        <span class="info-label">Primary Phone</span>
                        <div class="info-value">${formData.client.phone}</div>
                    </div>
                    ${
                      formData.client.altPhone
                        ? `
                    <div class="info-item">
                        <span class="info-label">Alternative Phone</span>
                        <div class="info-value">${formData.client.altPhone}</div>
                    </div>
                    `
                        : ''
                    }
                    <div class="info-item">
                        <span class="info-label">Email</span>
                        <div class="info-value">${formData.client.email}</div>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Preferred Contact</span>
                        <div class="info-value">${
                          preferredContact.join(', ') || 'Not specified'
                        }</div>
                    </div>
                </div>
            </div>

            <!-- Service Details Section -->
    <div class="section">
                <div class="section-title">
                    🚗 Service Details
                </div>
                <div class="highlight-box">
                    <div class="service-badge">MAIN SERVICE</div>
                    <div style="font-size: 18px; font-weight: 600; color: #1c2b66; margin-bottom: 8px;">
                        ${formData.service.serviceType}
                    </div>
                    <div style="font-size: 16px; color: #475569;">
                        ${
                          isEventService
                            ? displayEventService
                            : formData.service.service
                        }
                    </div>
                    ${
                      isOtherEvent && formData.service.customEventType
                        ? `
                    <div style="margin-top: 8px; font-size: 14px; color: #64748b;">
                        <strong>Custom Event Type:</strong> ${formData.service.customEventType}
                    </div>
                    `
                        : ''
                    }
                </div>
             ${
               isEventService
                 ? `
                <!-- Event Service Specific Details -->
                <div class="info-grid">
                    ${
                      displayEventService
                        ? `
                    <div class="info-item">
                        <span class="info-label">Event Service Type</span>
                        <div class="info-value">${displayEventService}</div>
                    </div>
                    `
                        : ''
                    }
                    ${
                      formData.service.securityNeeds
                        ? `
                    <div class="info-item">
                        <span class="info-label">Security Needs</span>
                        <div class="info-value">${formData.service.securityNeeds}</div>
                    </div>
                    `
                        : ''
                    }
                    ${
                      formData.service.supportNeeds
                        ? `
                    <div class="info-item">
                        <span class="info-label">Support Needs</span>
                        <div class="info-value">${formData.service.supportNeeds}</div>
                    </div>
                    `
                        : ''
                    }
                </div>
                `
                 : `
                <!-- Regular Service Details -->
                <div class="info-grid">
                    ${
                      formData.service.serviceDuration
                        ? `
                    <div class="info-item">
                        <span class="info-label">Service Duration</span>
                        <div class="info-value">${this.formatLabel(
                          formData.service.serviceDuration
                        )}</div>
                    </div>
                    `
                        : ''
                    }
                </div>
                `
             }
                
                ${
                  !isEventService &&
                  formData.movement.optionalAddOns?.length > 0
                    ? `
                <div style="margin-top: 16px;">
                    <span class="info-label">OPTIONAL ADD-ONS</span>
                    <div class="addon-list">
                        ${formData.movement.optionalAddOns
                          .map(
                            (addon: string) =>
                              `<span class="addon-tag">${this.formatLabel(
                                addon
                              )}</span>`
                          )
                          .join('')}
                    </div>
                </div>
                `
                    : ''
                }
            </div>

            <!-- Movement & Logistics Section -->
            <div class="section">
                <div class="section-title">
                    ${
                      isEventService
                        ? '📅 Event Details'
                        : '📍 Movement & Logistics'
                    }
                </div>
                <div class="info-grid">
                    ${
                      isEventService && formData.movement.eventDate
                        ? `
                    <div class="info-item">
                        <span class="info-label">Event Date</span>
                        <div class="info-value">${new Date(
                          formData.movement.eventDate
                        ).toLocaleDateString()}</div>
                    </div>
                    `
                        : !isEventService && formData.movement.tripDate
                        ? `
                    <div class="info-item">
                        <span class="info-label">Trip Date</span>
                        <div class="info-value">${new Date(
                          formData.movement.tripDate
                        ).toLocaleDateString()}</div>
                    </div>
                    `
                        : ''
                    }
                    
                    ${
                      formData.movement.expectedDuration
                        ? `
                    <div class="info-item">
                        <span class="info-label">Expected Duration</span>
                        <div class="info-value">${formData.movement.expectedDuration}</div>
                    </div>
                    `
                        : ''
                    }
                    
                    ${
                      isEventService &&
                      formData.movement.highProfileGuestsExpected
                        ? `
                    <div class="info-item">
                        <span class="info-label">High Profile Guests</span>
                        <div class="info-value">${formData.movement.highProfileGuestsExpected}</div>
                    </div>
                    `
                        : !isEventService && formData.movement.numberofVehicles
                        ? `
                    <div class="info-item">
                        <span class="info-label">Number of Vehicles</span>
                        <div class="info-value">${formData.movement.numberofVehicles}</div>
                    </div>
                    `
                        : ''
                    }
                </div>
                
                ${
                  isEventService && formData.movement.eventVenueLocation
                    ? `
                <div style="margin-top: 16px;">
                    <span class="info-label">EVENT VENUE LOCATION</span>
                    <div class="info-value">${formData.movement.eventVenueLocation}</div>
                </div>
                `
                    : !isEventService && formData.movement.pickupAddress
                    ? `
                <div style="margin-top: 16px;">
                    <span class="info-label">PICKUP LOCATION</span>
                    <div class="info-value">${formData.movement.pickupAddress}</div>
                </div>
                `
                    : ''
                }
                
                ${
                  !isEventService && formData.movement.destinationAddress
                    ? `
                <div style="margin-top: 16px;">
                    <span class="info-label">DESTINATION</span>
                    <div class="info-value">${formData.movement.destinationAddress}</div>
                </div>
                `
                    : ''
                }
                
                ${
                  formData.movement.serviceLevel
                    ? `
                <div style="margin-top: 16px;">
                    <span class="info-label">SERVICE LEVEL</span>
                    <div class="info-value">${formData.movement.serviceLevel}</div>
                </div>
                `
                    : ''
                }
                
                ${
                  isEventService && formData.movement.knownRisksOrConcerns
                    ? `
                <div style="margin-top: 16px;">
                    <span class="info-label">KNOWN RISKS OR CONCERNS</span>
                    <div class="risk-concern">${formData.movement.knownRisksOrConcerns}</div>
                </div>
                `
                    : ''
                }
            </div>

            <!-- Special Event Notice -->
            ${
              isEventService
                ? `
            <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 20px; border-radius: 12px; border: 1px solid #0ea5e9; margin-top: 24px;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <span style="font-size: 20px;">🎪</span>
                    <h4 style="margin: 0; color: #0369a1;">Event Security Requirements</h4>
                </div>
                <p style="margin: 0; color: #0369a1; font-size: 14px;">
                    This booking requires special event security coordination. Please ensure proper risk assessment and resource allocation for this event.
                </p>
            </div>
            `
                : ''
            }

            <!-- Action Required -->
            <div style="background: #eff6ff; padding: 20px; border-radius: 12px; text-align: center; margin-top: 32px;">
                <p style="margin: 0; color: #1c2b66; font-weight: 600; font-size: 16px;">
                    📞 Please contact client within the next 2 hours to confirm booking details
                </p>
            </div>
        </div>
        
        <div class="footer">
            <p style="margin: 0 0 8px 0;">
                <strong>Halogen Group Service Booking System</strong>
            </p>
            <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                Request received on ${new Date().toLocaleString()} • 
                Booking ID: #${Math.random()
                  .toString(36)
                  .substr(2, 9)
                  .toUpperCase()}
            </p>
        </div>
    </div>
</body>
</html>
  `;
  }

  isInvalid(group: FormGroup, controlName: string): boolean {
    const control = group.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  errorMessage(group: FormGroup, controlName: string): string | null {
    const control = group.get(controlName);
    if (!control || !control.errors) return null;

    if (control.errors['required']) return 'This field is required';
    if (control.errors['email']) return 'Invalid email format';
    if (control.errors['pattern']) return 'Invalid format';

    return 'Invalid value';
  }
  preferredContactValidator(group: FormGroup) {
    const phone = group.get('phone')?.value;
    const email = group.get('email')?.value;
    const whatsapp = group.get('whatsapp')?.value;

    return phone || email || whatsapp ? null : { required: true };
  }
  isGroupInvalid(group: FormGroup): boolean {
    return group.invalid && (group.dirty || group.touched);
  }
}
