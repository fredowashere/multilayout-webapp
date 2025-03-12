import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: `gen-form-eba-cust-customers`,
    standalone: true,
    imports: [ CommonModule, SharedModule ],
    template: `
<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <h4 class="m-0">Form for table EBA_CUST_CUSTOMERS</h4>
        </div>
        
        <div class="card-body">
            <div class="d-grid gap-3 mb-4">
                
                <app-input
                    name="id"
                    label="Id"
                    data-column-name="ID"
                    [ngControl]="form.controls.id"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="parent-customer-id"
                    label="Parent Customer Id"
                    data-column-name="PARENT_CUSTOMER_ID"
                    [ngControl]="form.controls.parentCustomerId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="row-version-number"
                    label="Row Version Number"
                    data-column-name="ROW_VERSION_NUMBER"
                    [ngControl]="form.controls.rowVersionNumber"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="row-key"
                    label="Row Key"
                    data-column-name="ROW_KEY"
                    [ngControl]="form.controls.rowKey"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="customer-name"
                    label="Customer Name"
                    data-column-name="CUSTOMER_NAME"
                    [ngControl]="form.controls.customerName"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="customer-name-upper"
                    label="Customer Name Upper"
                    data-column-name="CUSTOMER_NAME_UPPER"
                    [ngControl]="form.controls.customerNameUpper"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="customer-account-number"
                    label="Customer Account Number"
                    data-column-name="CUSTOMER_ACCOUNT_NUMBER"
                    [ngControl]="form.controls.customerAccountNumber"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="industry-id"
                    label="Industry Id"
                    data-column-name="INDUSTRY_ID"
                    [ngControl]="form.controls.industryId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="category-id"
                    label="Category Id"
                    data-column-name="CATEGORY_ID"
                    [ngControl]="form.controls.categoryId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="status-id"
                    label="Status Id"
                    data-column-name="STATUS_ID"
                    [ngControl]="form.controls.statusId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="type-id"
                    label="Type Id"
                    data-column-name="TYPE_ID"
                    [ngControl]="form.controls.typeId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="use-case-id"
                    label="Use Case Id"
                    data-column-name="USE_CASE_ID"
                    [ngControl]="form.controls.useCaseId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="geography-id"
                    label="Geography Id"
                    data-column-name="GEOGRAPHY_ID"
                    [ngControl]="form.controls.geographyId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="country-id"
                    label="Country Id"
                    data-column-name="COUNTRY_ID"
                    [ngControl]="form.controls.countryId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="default-timezone"
                    label="Default Timezone"
                    data-column-name="DEFAULT_TIMEZONE"
                    [ngControl]="form.controls.defaultTimezone"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="referencable"
                    label="Referencable"
                    data-column-name="REFERENCABLE"
                    [ngControl]="form.controls.referencable"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="marquee-customer-yn"
                    label="Marquee Customer Yn"
                    data-column-name="MARQUEE_CUSTOMER_YN"
                    [ngControl]="form.controls.marqueeCustomerYn"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="reference-phase-id"
                    label="Reference Phase Id"
                    data-column-name="REFERENCE_PHASE_ID"
                    [ngControl]="form.controls.referencePhaseId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="ref-recruitment-owner"
                    label="Ref Recruitment Owner"
                    data-column-name="REF_RECRUITMENT_OWNER"
                    [ngControl]="form.controls.refRecruitmentOwner"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="strategic-customer-program-yn"
                    label="Strategic Customer Program Yn"
                    data-column-name="STRATEGIC_CUSTOMER_PROGRAM_YN"
                    [ngControl]="form.controls.strategicCustomerProgramYn"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="tags"
                    label="Tags"
                    data-column-name="TAGS"
                    [ngControl]="form.controls.tags"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="sales-channel-id"
                    label="Sales Channel Id"
                    data-column-name="SALES_CHANNEL_ID"
                    [ngControl]="form.controls.salesChannelId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="customer-products"
                    label="Customer Products"
                    data-column-name="CUSTOMER_PRODUCTS"
                    [ngControl]="form.controls.customerProducts"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="number-of-users"
                    label="Number Of Users"
                    data-column-name="NUMBER_OF_USERS"
                    [ngControl]="form.controls.numberOfUsers"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="summary"
                    label="Summary"
                    data-column-name="SUMMARY"
                    [ngControl]="form.controls.summary"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="customer-profile"
                    label="Customer Profile"
                    data-column-name="CUSTOMER_PROFILE"
                    [ngControl]="form.controls.customerProfile"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="applications"
                    label="Applications"
                    data-column-name="APPLICATIONS"
                    [ngControl]="form.controls.applications"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="logo-blob"
                    label="Logo Blob"
                    data-column-name="LOGO_BLOB"
                    [ngControl]="form.controls.logoBlob"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="logo-name"
                    label="Logo Name"
                    data-column-name="LOGO_NAME"
                    [ngControl]="form.controls.logoName"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="logo-mimetype"
                    label="Logo Mimetype"
                    data-column-name="LOGO_MIMETYPE"
                    [ngControl]="form.controls.logoMimetype"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="logo-charset"
                    label="Logo Charset"
                    data-column-name="LOGO_CHARSET"
                    [ngControl]="form.controls.logoCharset"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="logo-lastupd"
                    label="Logo Lastupd"
                    data-column-name="LOGO_LASTUPD"
                    [ngControl]="form.controls.logoLastupd"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="web-site"
                    label="Web Site"
                    data-column-name="WEB_SITE"
                    [ngControl]="form.controls.webSite"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="linkedin"
                    label="Linkedin"
                    data-column-name="LINKEDIN"
                    [ngControl]="form.controls.linkedin"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="facebook"
                    label="Facebook"
                    data-column-name="FACEBOOK"
                    [ngControl]="form.controls.facebook"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="twitter"
                    label="Twitter"
                    data-column-name="TWITTER"
                    [ngControl]="form.controls.twitter"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="stock-symbol"
                    label="Stock Symbol"
                    data-column-name="STOCK_SYMBOL"
                    [ngControl]="form.controls.stockSymbol"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="total-contract-value"
                    label="Total Contract Value"
                    data-column-name="TOTAL_CONTRACT_VALUE"
                    [ngControl]="form.controls.totalContractValue"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="annual-recurring-revenue"
                    label="Annual Recurring Revenue"
                    data-column-name="ANNUAL_RECURRING_REVENUE"
                    [ngControl]="form.controls.annualRecurringRevenue"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="currency"
                    label="Currency"
                    data-column-name="CURRENCY"
                    [ngControl]="form.controls.currency"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="discount-level"
                    label="Discount Level"
                    data-column-name="DISCOUNT_LEVEL"
                    [ngControl]="form.controls.discountLevel"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="sic"
                    label="Sic"
                    data-column-name="SIC"
                    [ngControl]="form.controls.sic"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="duns"
                    label="Duns"
                    data-column-name="DUNS"
                    [ngControl]="form.controls.duns"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="support-id"
                    label="Support Id"
                    data-column-name="SUPPORT_ID"
                    [ngControl]="form.controls.supportId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="party-id"
                    label="Party Id"
                    data-column-name="PARTY_ID"
                    [ngControl]="form.controls.partyId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="parent-party-id"
                    label="Parent Party Id"
                    data-column-name="PARENT_PARTY_ID"
                    [ngControl]="form.controls.parentPartyId"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="party-name"
                    label="Party Name"
                    data-column-name="PARTY_NAME"
                    [ngControl]="form.controls.partyName"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="partent-party-name"
                    label="Partent Party Name"
                    data-column-name="PARTENT_PARTY_NAME"
                    [ngControl]="form.controls.partentPartyName"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="created"
                    label="Created"
                    data-column-name="CREATED"
                    [ngControl]="form.controls.created"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="created-by"
                    label="Created By"
                    data-column-name="CREATED_BY"
                    [ngControl]="form.controls.createdBy"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="updated"
                    label="Updated"
                    data-column-name="UPDATED"
                    [ngControl]="form.controls.updated"
                    [floatingLabel]="true"
                />
    
                <app-input
                    name="updated-by"
                    label="Updated By"
                    data-column-name="UPDATED_BY"
                    [ngControl]="form.controls.updatedBy"
                    [floatingLabel]="true"
                />
    
            </div>

            <div class="text-center">
                <button
                    class="btn btn-primary"
                    [disabled]="form.disabled ? true : form.invalid"
                    (click)="submit()"
                >
                    Submit
                </button>
            </div>
        </div>
    </div>
</div>
`,
})
export class GenFormEbaCustCustomers {

    form = new FormGroup({
        id: new FormControl<string | null>(null),
        parentCustomerId: new FormControl<string | null>(null),
        rowVersionNumber: new FormControl<string | null>(null),
        rowKey: new FormControl<string | null>(null),
        customerName: new FormControl<string | null>(null),
        customerNameUpper: new FormControl<string | null>(null),
        customerAccountNumber: new FormControl<string | null>(null),
        industryId: new FormControl<string | null>(null),
        categoryId: new FormControl<string | null>(null),
        statusId: new FormControl<string | null>(null),
        typeId: new FormControl<string | null>(null),
        useCaseId: new FormControl<string | null>(null),
        geographyId: new FormControl<string | null>(null),
        countryId: new FormControl<string | null>(null),
        defaultTimezone: new FormControl<string | null>(null),
        referencable: new FormControl<string | null>(null),
        marqueeCustomerYn: new FormControl<string | null>(null),
        referencePhaseId: new FormControl<string | null>(null),
        refRecruitmentOwner: new FormControl<string | null>(null),
        strategicCustomerProgramYn: new FormControl<string | null>(null),
        tags: new FormControl<string | null>(null),
        salesChannelId: new FormControl<string | null>(null),
        customerProducts: new FormControl<string | null>(null),
        numberOfUsers: new FormControl<string | null>(null),
        summary: new FormControl<string | null>(null),
        customerProfile: new FormControl<string | null>(null),
        applications: new FormControl<string | null>(null),
        logoBlob: new FormControl<string | null>(null),
        logoName: new FormControl<string | null>(null),
        logoMimetype: new FormControl<string | null>(null),
        logoCharset: new FormControl<string | null>(null),
        logoLastupd: new FormControl<string | null>(null),
        webSite: new FormControl<string | null>(null),
        linkedin: new FormControl<string | null>(null),
        facebook: new FormControl<string | null>(null),
        twitter: new FormControl<string | null>(null),
        stockSymbol: new FormControl<string | null>(null),
        totalContractValue: new FormControl<string | null>(null),
        annualRecurringRevenue: new FormControl<string | null>(null),
        currency: new FormControl<string | null>(null),
        discountLevel: new FormControl<string | null>(null),
        sic: new FormControl<string | null>(null),
        duns: new FormControl<string | null>(null),
        supportId: new FormControl<string | null>(null),
        partyId: new FormControl<string | null>(null),
        parentPartyId: new FormControl<string | null>(null),
        partyName: new FormControl<string | null>(null),
        partentPartyName: new FormControl<string | null>(null),
        created: new FormControl<string | null>(null),
        createdBy: new FormControl<string | null>(null),
        updated: new FormControl<string | null>(null),
        updatedBy: new FormControl<string | null>(null),

    });

    ngOnInit() {}

    submit() {
        alert("Submitted!");
    }
}
