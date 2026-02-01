import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';
import { ApiService } from 'src/app/Service/api.service';

export interface TrainingOption {
  id: number;
  name: string;
  description: string;
  duration: string;
  maxAttendees: number;
}

export interface SessionOption {
  id: number;
  trainingId: number;
  date: string;
  days: string;
}

export interface TrainingFormValue {
  client: {
    clientType: 'organization' | 'individual';
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
  training: {
    selectedTrainings: number[];
    trainingDetails: {
      [trainingId: number]: {
        attendees: number;
        preferredSessions: number[];
      };
    };
  };
}

@Component({
  selector: 'app-training-stepper',
  templateUrl: './training-stepper.component.html',
  styleUrls: ['./training-stepper.component.css'],
})
export class TrainingStepperComponent implements OnInit {
  step = 1;
  maxStep = 4;
  isLoading = false;
  trainingForm!: FormGroup;
  sessionValidationState: { [trainingId: number]: boolean } = {};

  // Training options with your provided data
  trainingOptions: TrainingOption[] = [
    {
      id: 1,
      name: 'Hostile Environment Awareness Training (HEAT)',
      description:
        'Personal safety, situational awareness, and survival skills in high-risk environments',
      duration: '2 Days',
      maxAttendees: 20,
    },
    {
      id: 2,
      name: 'Defensive Driving',
      description:
        'Vehicle-based threat avoidance, protective driving, and incident prevention',
      duration: '2 Days',
      maxAttendees: 15,
    },
    {
      id: 3,
      name: 'Close Protection Officers Training',
      description:
        'Professional protective operations for high-value individuals',
      duration: '3 Days',
      maxAttendees: 15,
    },
    {
      id: 4,
      name: 'Security Awareness Training & Emergency Preparedness',
      description:
        'Threat awareness, prevention mindset, and readiness for emergencies',
      duration: '2 Days',
      maxAttendees: 25,
    },
    {
      id: 5,
      name: 'Crisis Management & Emergency Response',
      description:
        'Command, coordination, and response during critical incidents',
      duration: '2 Days',
      maxAttendees: 20,
    },
    {
      id: 6,
      name: 'Corporate Investigation & Intelligence',
      description:
        'Investigation techniques, intelligence gathering, and analytical reporting',
      duration: '2 Days',
      maxAttendees: 20,
    },
    {
      id: 7,
      name: 'Security Risk & Threat Assessment',
      description:
        'Risk identification, threat analysis, and mitigation planning',
      duration: '2 Days',
      maxAttendees: 20,
    },
    {
      id: 8,
      name: 'Security Operations & Standard Operating Procedures (SOPs)',
      description:
        'Day-to-day security operations management and procedural compliance',
      duration: '2 Days',
      maxAttendees: 20,
    },
    {
      id: 9,
      name: 'Strategic Thinking & Decision-Making Skills',
      description:
        'Judgement, risk-informed decision-making, and leadership thinking',
      duration: '2 Days',
      maxAttendees: 20,
    },
    {
      id: 10,
      name: 'Security Communications & Report Writing',
      description:
        'Professional security reporting, documentation, and communication',
      duration: '2 Days',
      maxAttendees: 20,
    },
  ];

  // Session options grouped by training ID
  sessionOptions: SessionOption[] = [
    // HEAT Sessions
    { id: 1, trainingId: 1, date: 'Jan 29–30, 2026', days: 'Thu–Fri' },
    { id: 2, trainingId: 1, date: 'Apr 9–10, 2026', days: 'Thu–Fri' },
    { id: 3, trainingId: 1, date: 'Jul 9–10, 2026', days: 'Thu–Fri' },
    { id: 4, trainingId: 1, date: 'Oct 8–9, 2026', days: 'Thu–Fri' },

    // Defensive Driving Sessions
    { id: 5, trainingId: 2, date: 'Feb 12–13, 2026', days: 'Thu–Fri' },
    { id: 6, trainingId: 2, date: 'Apr 23–24, 2026', days: 'Thu–Fri' },
    { id: 7, trainingId: 2, date: 'Jul 23–24, 2026', days: 'Thu–Fri' },
    { id: 8, trainingId: 2, date: 'Oct 22–23, 2026', days: 'Thu–Fri' },

    // Close Protection Sessions
    { id: 9, trainingId: 3, date: 'Mar 12–14, 2026', days: 'Thu–Sat' },
    { id: 10, trainingId: 3, date: 'Sep 10–12, 2026', days: 'Thu–Sat' },

    // Security Awareness Sessions
    { id: 11, trainingId: 4, date: 'Feb 26–27, 2026', days: 'Thu–Fri' },
    { id: 12, trainingId: 4, date: 'Aug 20-21, 2026', days: 'Thu–Fri' },

    // Crisis Management Sessions
    { id: 13, trainingId: 5, date: 'Aug 6–7, 2026', days: 'Thu–Fri' },
    { id: 14, trainingId: 5, date: 'Oct 15-16, 2026', days: 'Thu–Fri' },

    // Corporate Investigation Sessions
    { id: 15, trainingId: 6, date: 'May 7–8, 2026', days: 'Thu–Fri' },
    { id: 16, trainingId: 6, date: 'Aug 13-14, 2026', days: 'Thu–Fri' },

    // Security Operations (SOPs) Sessions
    { id: 17, trainingId: 8, date: 'Jun 4–5, 2026', days: 'Thu–Fri' },
    { id: 18, trainingId: 8, date: 'Sep 3-4, 2026', days: 'Thu–Fri' },

    // Strategic Thinking Sessions
    { id: 19, trainingId: 9, date: 'Mar 26–27, 2026', days: 'Thu–Fri' },
    { id: 20, trainingId: 9, date: 'Nov 5–6, 2026', days: 'Thu–Fri' },

    // Security Communications Sessions
    { id: 21, trainingId: 10, date: 'May 14-15, 2026', days: 'Thu–Fri' },
    { id: 22, trainingId: 10, date: 'Dec 3–4, 2026', days: 'Thu–Fri' },

    // Security Risk Assessment Sessions
    { id: 23, trainingId: 7, date: 'May 21-22, 2026', days: 'Thu–Fri' },
    { id: 24, trainingId: 7, date: 'Dec 10–11, 2026', days: 'Thu–Fri' },
  ];

  selectedTrainings: number[] = [];

  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.trainingForm = this.fb.group({
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

      training: this.fb.group({
        selectedTrainings: this.fb.array([]),
      }),
    });

    // Initialize form controls for all training options
    this.trainingOptions.forEach((training) => {
      // Add attendees control - disabled by default
      this.trainingGroup.addControl(
        `attendees_${training.id}`,
        this.fb.control({ value: null, disabled: true }, [
          Validators.required,
          Validators.min(1),
          Validators.max(training.maxAttendees),
        ])
      );

      // Initialize session controls as empty arrays - disabled by default
      this.trainingGroup.addControl(
        `sessions_${training.id}`,
        this.fb.array([])
      );
      this.trainingGroup.get(`sessions_${training.id}`)?.disable();
    });
  }

  get clientGroup(): FormGroup {
    return this.trainingForm.get('client')! as FormGroup;
  }

  get preferredContactGroup(): FormGroup {
    return this.clientGroup.get('preferredContact')! as FormGroup;
  }

  get trainingGroup(): FormGroup {
    return this.trainingForm.get('training')! as FormGroup;
  }

  get selectedTrainingsArray(): FormArray {
    return this.trainingGroup.get('selectedTrainings')! as FormArray;
  }

  getSessionArray(trainingId: number): FormArray {
    return this.trainingGroup.get(`sessions_${trainingId}`)! as FormArray;
  }

  getAttendeesControl(trainingId: number): AbstractControl {
    return this.trainingGroup.get(`attendees_${trainingId}`)!;
  }

  isTrainingSelected(trainingId: number): boolean {
    return this.selectedTrainings.includes(trainingId);
  }

  isSessionSelected(trainingId: number, sessionId: number): boolean {
    const sessionArray = this.getSessionArray(trainingId);
    return sessionArray.value.includes(sessionId);
  }

  onTrainingSelectionChange(trainingId: number, isChecked: boolean) {
    if (isChecked) {
      if (!this.selectedTrainings.includes(trainingId)) {
        this.selectedTrainings.push(trainingId);
        this.selectedTrainingsArray.push(new FormControl(trainingId));

        // Enable and set validators for this training
        const attendeesControl = this.getAttendeesControl(trainingId);
        const sessionsArray = this.getSessionArray(trainingId);

        attendeesControl.enable();
        attendeesControl.setValidators([
          Validators.required,
          Validators.min(1),
          Validators.max(
            this.trainingOptions.find((t) => t.id === trainingId)
              ?.maxAttendees || 50
          ),
        ]);

        sessionsArray.enable();
        sessionsArray.setValidators(Validators.required);

        attendeesControl.updateValueAndValidity();
        sessionsArray.updateValueAndValidity();
      }
    } else {
      const index = this.selectedTrainings.indexOf(trainingId);
      if (index > -1) {
        this.selectedTrainings.splice(index, 1);
        this.selectedTrainingsArray.removeAt(index);

        // Reset and disable the controls for this training
        const attendeesControl = this.getAttendeesControl(trainingId);
        const sessionsArray = this.getSessionArray(trainingId);

        attendeesControl.reset();
        attendeesControl.disable();
        attendeesControl.clearValidators();

        sessionsArray.clear();
        sessionsArray.disable();
        sessionsArray.clearValidators();

        attendeesControl.updateValueAndValidity();
        sessionsArray.updateValueAndValidity();

        // Clear validation state
        delete this.sessionValidationState[trainingId];
      }
    }
  }

  onSessionSelectionChange(
    trainingId: number,
    sessionId: number,
    isChecked: boolean
  ) {
    const sessionArray = this.getSessionArray(trainingId);

    if (isChecked) {
      // Check if session already exists
      const existingIndex = sessionArray.value.indexOf(sessionId);

      if (existingIndex === -1) {
        sessionArray.push(new FormControl(sessionId));
      }
    } else {
      // Find and remove the session
      const index = sessionArray.value.indexOf(sessionId);
      if (index > -1) {
        sessionArray.removeAt(index);
      }
    }

    // Mark as touched for validation
    sessionArray.markAsTouched();
    this.sessionValidationState[trainingId] = true;
  }

  getSelectedTrainingDetails() {
    return this.trainingOptions.filter((training) =>
      this.selectedTrainings.includes(training.id)
    );
  }

  getSessionsForTraining(trainingId: number): SessionOption[] {
    return this.sessionOptions.filter(
      (session) => session.trainingId === trainingId
    );
  }

  getSessionNames(trainingId: number): string {
    const sessionArray = this.getSessionArray(trainingId);
    return sessionArray.value
      .map((sessionId: number) => {
        const session = this.sessionOptions.find((s) => s.id === sessionId);
        return session ? `${session.days} | ${session.date}` : '';
      })
      .filter((name: string) => name)
      .join('; ');
  }

  canProceedToNextStep(): boolean {
    if (this.step === 1) {
      return this.clientGroup.valid;
    } else if (this.step === 2) {
      return this.selectedTrainings.length > 0;
    }
    return true;
  }

  validateStepForNavigation(): boolean {
    if (this.step === 1) {
      this.clientGroup.markAllAsTouched();
      return this.clientGroup.valid;
    } else if (this.step === 2) {
      return this.selectedTrainings.length > 0;
    }
    return true;
  }

  validateStepForNavigationAtStep(stepNum: number): boolean {
    if (stepNum === 1) {
      return this.clientGroup.valid;
    } else if (stepNum === 2) {
      return this.selectedTrainings.length > 0;
    }
    return true;
  }

  isStep3Valid(): boolean {
    if (this.selectedTrainings.length === 0) return false;

    let isValid = true;

    this.selectedTrainings.forEach((trainingId) => {
      const attendeesControl = this.getAttendeesControl(trainingId);
      const sessionsArray = this.getSessionArray(trainingId);

      if (!attendeesControl.valid || sessionsArray.length === 0) {
        isValid = false;

        // Mark controls as touched to show errors
        if (attendeesControl.invalid) {
          attendeesControl.markAsTouched();
        }
        if (sessionsArray.length === 0) {
          sessionsArray.markAsTouched();
          this.sessionValidationState[trainingId] = true;
        }
      }
    });

    return isValid;
  }

  next() {
    if (this.step === 2 && this.selectedTrainings.length === 0) {
      alert('Please select at least one training program to continue.');
      return;
    }

    if (this.step < this.maxStep) {
      this.step++;
    }
  }

  back() {
    if (this.step > 1) this.step--;
  }

  goTo(stepNum: number) {
    if (stepNum < this.step) {
      this.step = stepNum;
      return;
    }

    // Validate all previous steps
    for (let i = 1; i < stepNum; i++) {
      if (i === 1 && !this.clientGroup.valid) {
        this.clientGroup.markAllAsTouched();
        alert(`Please complete step ${i} before proceeding.`);
        return;
      } else if (i === 2 && this.selectedTrainings.length === 0) {
        alert(`Please complete step ${i} before proceeding.`);
        return;
      }
    }

    this.step = stepNum;
  }

  submitForm() {
    if (this.isLoading) {
      return;
    }

    if (!this.isStep3Valid()) {
      alert('Please complete all required fields before submitting.');
      return;
    }

    this.isLoading = true;

    const formValue = this.trainingForm.getRawValue();

    // Prepare training details
    const trainingDetails: any = {};
    this.selectedTrainings.forEach((trainingId) => {
      const training = this.trainingOptions.find((t) => t.id === trainingId);
      if (training) {
        trainingDetails[trainingId] = {
          trainingName: training.name,
          attendees: this.getAttendeesControl(trainingId).value,
          preferredSessions: this.getSessionArray(trainingId).value,
          sessionNames: this.getSessionNames(trainingId),
        };
      }
    });

    const emailPayload = {
      customerEmailInfo: {
        name: formValue.client.organizationOrName,
        customerEmail: [formValue.client.email],
        subject: `Training Request - ${this.selectedTrainings.length} Program(s) Selected`,
      },
      halogenEmailInfo: {
        name: formValue.client.organizationOrName,
        mobileNumber: formValue.client.phone,
        message: this.generateEmailTemplate(formValue, trainingDetails),
        halogenEmail: [
          // 'training@halogen-group.com',
          // 'services@halogen-group.com',
          'jubril.muritala@halogen-group.com',
        ],
      },
    };

    console.log('Training Request Payload:', emailPayload);

    this.api.bookService(emailPayload).subscribe({
      next: (res: any) => {
        console.log(res);
        this.isLoading = false;
        this.step = 4;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
        alert('There was an error submitting your request. Please try again.');
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  generateEmailTemplate(formData: any, trainingDetails: any): string {
    const preferredContact = [];
    if (formData.client?.preferredContact?.phone)
      preferredContact.push('Phone');
    if (formData.client?.preferredContact?.email)
      preferredContact.push('Email');
    if (formData.client?.preferredContact?.whatsapp)
      preferredContact.push('WhatsApp');

    const selectedTrainingNames = this.selectedTrainings
      .map((id) => this.trainingOptions.find((t) => t.id === id)?.name)
      .filter((name) => name);

    // Calculate total attendees
    const totalAttendees = Object.values(trainingDetails).reduce(
      (total: number, detail: any) => total + (detail.attendees || 0),
      0
    );

    // Format date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Training Request - Halogen Group</title>
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
            max-width: 700px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            background: linear-gradient(135deg, #1c2b66 0%, #2d3b8b 100%);
            color: black;
            padding: 40px 30px;
            text-align: center;
        }
        .email-header h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        .email-header p {
            opacity: 0.9;
            font-size: 16px;
            margin-bottom: 5px;
        }
        .email-body {
            padding: 40px 30px;
        }
        .section {
            margin-bottom: 30px;
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
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 20px;
        }
        .info-item {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        .info-label {
            font-size: 13px;
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
        .training-card {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 25px;
            margin-bottom: 20px;
            border-left: 4px solid #1c2b66;
        }
        .training-card h4 {
            color: #1c2b66;
            margin-bottom: 10px;
            font-size: 18px;
        }
        .training-details {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 15px;
        }
        .detail-item {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        .detail-label {
            font-size: 13px;
            color: #64748b;
            font-weight: 600;
        }
        .detail-value {
            font-size: 15px;
            color: #1e293b;
            font-weight: 500;
        }
        .summary-box {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            border: 1px solid #bae6fd;
            border-radius: 10px;
            padding: 25px;
            margin: 30px 0;
        }
        .summary-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .summary-item {
            text-align: center;
        }
        .summary-number {
            font-size: 32px;
            font-weight: 800;
            color: #1c2b66;
            line-height: 1;
        }
        .summary-label {
            font-size: 14px;
            color: #64748b;
            margin-top: 5px;
        }
        .urgent-badge {
            background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
            color: black;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 25px;
        }
        .action-box {
            background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
            border: 1px solid #fbbf24;
            border-radius: 10px;
            padding: 25px;
            text-align: center;
            margin-top: 30px;
        }
        .footer {
            background: #f1f5f9;
            padding: 30px;
            text-align: center;
            color: #64748b;
            font-size: 14px;
        }
        .logo {
            max-width: 200px;
            margin-bottom: 20px;
        }
        .request-id {
            background: #1c2b66;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            display: inline-block;
            margin-top: 10px;
        }
        @media (max-width: 600px) {
            .info-grid, .training-details {
                grid-template-columns: 1fr;
            }
            .email-body {
                padding: 25px 20px;
            }
            .email-header {
                padding: 30px 20px;
            }
            .summary-content {
                flex-direction: column;
                gap: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>🎓 Training Program Request</h1>
            <p>Halogen Group Security Training Services</p>
            <p>${selectedTrainingNames.length} Program(s) Selected</p>
        </div>
        
        <div class="email-body">
            <div class="urgent-badge">
                <span>⚡</span>
                <span>ACTION REQUIRED - New Training Request</span>
            </div>

            <!-- Client Information -->
            <div class="section">
                <div class="section-title">
                    <span>👤</span>
                    <span>Client Information</span>
                </div>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Client Type</span>
                        <div class="info-value">${this.formatLabel(
                          formData.client?.clientType
                        )}</div>
                    </div>
                    <div class="info-item">
                        <span class="info-label">${
                          formData.client?.clientType === 'organization'
                            ? 'Organization'
                            : 'Full Name'
                        }</span>
                        <div class="info-value">${
                          formData.client?.organizationOrName || 'Not provided'
                        }</div>
                    </div>
                    ${
                      formData.client?.contactPerson
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
                        <div class="info-value">${
                          formData.client?.phone || 'Not provided'
                        }</div>
                    </div>
                    ${
                      formData.client?.altPhone
                        ? `
                    <div class="info-item">
                        <span class="info-label">Alternative Phone</span>
                        <div class="info-value">${formData.client.altPhone}</div>
                    </div>
                    `
                        : ''
                    }
                    <div class="info-item">
                        <span class="info-label">Email Address</span>
                        <div class="info-value">${
                          formData.client?.email || 'Not provided'
                        }</div>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Preferred Contact</span>
                        <div class="info-value">${
                          preferredContact.join(', ') || 'Not specified'
                        }</div>
                    </div>
                </div>
            </div>

            <!-- Training Programs Details -->
            <div class="section">
                <div class="section-title">
                    <span>📚</span>
                    <span>Training Program Details</span>
                </div>
                
                ${Object.keys(trainingDetails)
                  .map((trainingId) => {
                    const detail = trainingDetails[trainingId];
                    const training = this.trainingOptions.find(
                      (t) => t.id === parseInt(trainingId)
                    );
                    return `
                  <div class="training-card">
                      <h4>${detail.trainingName}</h4>
                      ${
                        training
                          ? `<p style="color: #64748b; margin-bottom: 15px;">${training.description}</p>`
                          : ''
                      }
                      <div class="training-details">
                          <div class="detail-item">
                              <span class="detail-label">Number of Attendees</span>
                              <span class="detail-value">${
                                detail.attendees
                              } participant(s)</span>
                          </div>
                          <div class="detail-item">
                              <span class="detail-label">Program Duration</span>
                              <span class="detail-value">${
                                training?.duration || 'N/A'
                              }</span>
                          </div>
                          <div class="detail-item" style="grid-column: 1 / -1;">
                              <span class="detail-label">Preferred Session(s)</span>
                              <span class="detail-value">${
                                detail.sessionNames
                              }</span>
                          </div>
                      </div>
                  </div>
                  `;
                  })
                  .join('')}
                
                <div class="summary-box">
                    <div class="summary-content">
                        <div class="summary-item">
                            <div class="summary-number">${
                              selectedTrainingNames.length
                            }</div>
                            <div class="summary-label">Total Programs</div>
                        </div>
                        <div class="summary-item">
                            <div class="summary-number">${totalAttendees}</div>
                            <div class="summary-label">Total Attendees</div>
                        </div>
                        <div class="summary-item">
                            <div class="summary-number">${this.selectedTrainings.reduce(
                              (total, trainingId) => {
                                const training = this.trainingOptions.find(
                                  (t) => t.id === trainingId
                                );
                                return total + (training?.maxAttendees || 0);
                              },
                              0
                            )}</div>
                            <div class="summary-label">Max Capacity</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Action Required -->
            <div class="action-box">
                <h3 style="color: #1c2b66; margin-bottom: 15px;">📞 Immediate Action Required</h3>
                <p style="color: #1c2b66; font-weight: 500; margin-bottom: 20px;">
                    Please contact the client within the next 2 hours to:
                </p>
                <div style="text-align: left; max-width: 500px; margin: 0 auto;">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                        <span style="color: #1c2b66; font-weight: bold;">1.</span>
                        <span>Confirm training schedule availability</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                        <span style="color: #1c2b66; font-weight: bold;">2.</span>
                        <span>Discuss customization requirements</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                        <span style="color: #1c2b66; font-weight: bold;">3.</span>
                        <span>Provide quotation and next steps</span>
                    </div>
                </div>
            </div>

            <!-- Priority Information -->
            <div style="margin-top: 30px; padding: 20px; background: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0;">
                <h4 style="color: #1c2b66; margin-bottom: 10px;">Priority Information</h4>
                <p style="color: #64748b; margin-bottom: 10px;">
                    <strong>Submission Time:</strong> ${formattedDate}
                </p>
                <p style="color: #64748b;">
                    <strong>Client Expectations:</strong> Expecting response within 24 hours
                </p>
            </div>
        </div>
        
        <div class="footer">
            <p style="margin: 0 0 10px 0; font-size: 16px;">
                <strong>Halogen Group - Security Training Division</strong>
            </p>
            <p style="margin: 0 0 20px 0; font-size: 14px; color: #94a3b8;">
                Professional Security Training & Capacity Building
            </p>
            <div class="request-id">
                Request ID: TR${Math.random()
                  .toString(36)
                  .substr(2, 6)
                  .toUpperCase()}${new Date()
      .getFullYear()
      .toString()
      .substr(2, 2)}
            </div>
            <p style="margin: 20px 0 0 0; font-size: 12px; color: #94a3b8;">
                This is an automated training request notification. Please do not reply to this email.
            </p>
        </div>
    </div>
</body>
</html>
    `;
  }

  startNewRequest() {
    this.step = 1;
    this.trainingForm.reset({
      client: {
        clientType: 'individual',
        preferredContact: {
          phone: true,
          email: false,
          whatsapp: false,
        },
      },
    });
    this.selectedTrainings = [];
    this.selectedTrainingsArray.clear();
    this.sessionValidationState = {};

    // Reset all training controls
    this.trainingOptions.forEach((training) => {
      const attendeesControl = this.getAttendeesControl(training.id);
      const sessionsArray = this.getSessionArray(training.id);

      attendeesControl.reset();
      attendeesControl.disable();

      sessionsArray.clear();
      sessionsArray.disable();
    });
  }

  formatLabel(text: string | null | undefined): string {
    if (!text) return '';
    const textStr = String(text);
    return textStr
      .replace(/([A-Z])/g, ' $1')
      .replace(/[_-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  isInvalid(group: FormGroup, controlName: string): boolean {
    const control = group.get(controlName);
    return !!(control && control.invalid && control.dirty);
  }

  errorMessage(group: FormGroup, controlName: string): string | null {
    const control = group.get(controlName);
    if (!control || !control.errors) return null;

    if (control.errors['required']) return 'This field is required';
    if (control.errors['email']) return 'Invalid email format';
    if (control.errors['min'])
      return `Minimum value is ${control.errors['min'].min}`;
    if (control.errors['max'])
      return `Maximum value is ${control.errors['max'].max}`;

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
