import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { ConstantsService } from "../services/constants.service";
<<<<<<< HEAD
import { Model } from '../Models/app.types';
import { HttpClientService } from '../services/http-client.service';
=======
>>>>>>> 23dd60d9d7b36966fecb1b67539c0520bcdcc777
import { ToastrService } from 'ngx-toastr';
import { Model } from '../Models/app.types';

@Component({
  selector: 'autorun',
  templateUrl: './autorun.component.html',
  styleUrls: ['./autorun.component.css']
})

export class AutorunComponent implements OnInit {
  
<<<<<<< HEAD
  constructor(private constantsService: ConstantsService, private httpClientService: HttpClientService,
    private toastr: ToastrService) { }
=======
  constructor(private constantsService: ConstantsService) { }
>>>>>>> 23dd60d9d7b36966fecb1b67539c0520bcdcc777

  ngOnInit(): void {
    this.initialize()
  }


  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  inputFtpUrl: string;
  inputFtpUsername: string;
  inputFtpPassword: string;
  outputFtpUrl: string;
  outputFtpUsername: string;
  outputFtpPassword: string;
<<<<<<< HEAD

  inputFile: any;
  jobStatus: string;

  jobName:string;
  shiftLength:string;
  lowerUtilization: string;
  upperUtilization: string;
  cronExpression: string;
  emailId:string;
   
  inputTypes: Array<string> = ["FTP URL", "File Upload"];
  inputFormat: string
  outputTypes: Array<string> = ["FTP URL", "Email"];
  outputFormat: string

  model1: Model[] = this.constantsService.model;
  model:Model[] = JSON.parse(JSON.stringify(this.model1));
=======
  cronExpression: string;
   
  inputTypes: Array<string> = ["FTP URL", "File Upload"];
  inputFormat: string
  outputTypes: Array<string> = ["FTP URL", "Excel"];
  outputFormat: string

  model: Model[]
>>>>>>> 23dd60d9d7b36966fecb1b67539c0520bcdcc777
  columnDefs:any

  defaultColDef = {
    editable: true,
    resizable: true
  }

<<<<<<< HEAD
  requestBody: any = {
    "id": "2",
    "name": "",
    "userId": "osatadmin",

    "shiftLengthPreferences": "8, 10, 4",
    "lowerUtilizationFactor": 0.85,
    "upperUtilizationFactor": 1.10,
    "chronExpression": "",
    
    "inputFormat": "",
    "inputId": "",
    "inputFtpDetails": {
        "fileUrl": "",
        "username": "",
        "password": "",
        "id": "",
    },
    "inputFileDetails": {
      "inputFile": null,
    },
    "outputFormat": "",
    "outputId": "",
    "outputFtpDetails": {
      "fileUrl": "",
      "username": "",
      "password": "",
      "id": "",
    },
    "outputEmailId": "",
    "status": "",
  }

  createRequestBody(){
    this.requestBody.shiftLengthPPreferences = this.shiftLength != "" ? this.shiftLength.split(',') : this.requestBody.shiftLength;
    this.requestBody.lowerUtilizationFactor = this.lowerUtilization != "" ? this.lowerUtilization : this.requestBody.lowerUtilizationFactor;
    this.requestBody.upperUtilizationFactor = this.upperUtilization != "" ? this.upperUtilization : this.requestBody.upperUtilizationFactor;
    this.requestBody.name = this.jobName;
    if(this.inputFormat == "FTP_URL"){
      this.requestBody.ftpDetails.fileUrl = this.inputFtpUrl;
      this.requestBody.ftpDetails.username = this.inputFtpUsername;
      this.requestBody.ftpDetails.password = this.inputFtpPassword;
    }
    else{
      this.requestBody.ftpDetails = null;
    }
    if(this.inputFormat == "FTP_URL"){
      this.requestBody.inputFileDetails.inputFile = this.inputFile;
    }
    else{
      this.requestBody.inputFileDetails.inputFile = null;
    }
  }

=======
>>>>>>> 23dd60d9d7b36966fecb1b67539c0520bcdcc777

  initialize(){
    this.inputFtpUrl = null;
    this.inputFtpUsername = null;
    this.inputFtpPassword = null;
    this.outputFtpUrl = null;
    this.outputFtpUsername = null;
    this.outputFtpPassword = null;
    this.cronExpression = null;
    this.inputFormat = "";
    this.outputFormat = "";

    this.shiftLength = "";
    this.lowerUtilization = "";
    this.upperUtilization = "";
    this.jobName = "";
    this.emailId = "";

    this.columnDefs = [
      { headerName: 'Role', field: 'name', editable: true },
      {
        headerName: 'Patients Per Hr', valueGetter: function (params) {
          return params.data.patientsPerHour;
        },
        valueSetter: function (params) {
          if (params.data.patientsPerHour !== params.newValue) {
            params.data.patientsPerHour = params.newValue;
            return true;
          } else {
            return false;
          }
        }
      },
      {
        headerName: 'Price',
        valueGetter: function (params) {
          return params.data.cost;
        },
        valueSetter: function (params) {
          if (params.data.cost !== params.newValue) {
            params.data.cost = params.newValue;
            return true;
          } else {
            return false;
          }
        },
      }
    ];
  }

<<<<<<< HEAD
  showToaster(text){
    this.toastr.success("Successfully saved '"+text+"'")
  }

=======
>>>>>>> 23dd60d9d7b36966fecb1b67539c0520bcdcc777
  onReset(){
    this.initialize();
  }

  onSubmit() {
<<<<<<< HEAD
    this.createRequestBody();
    this.showToaster("dummy");
    this.httpClientService.saveJobDetails(this.requestBody).subscribe(data=> console.log()
      // todo display on toaster inside subscribe
      );
  }

  onSaveDraft(){
    this.createRequestBody();
    // todo create service to save draft
  }

  inputformatChanged(value) {
    this.inputFormat = value;
  }
  
  outputformatChanged(value) {
    this.outputFormat = value;
  }

=======
    console.log(this.inputFtpUrl, this.inputFtpUsername, this.inputFtpPassword);
  }


  inputformatChanged(value) {
    this.inputFormat = value;
  }

  
  outputformatChanged(value) {
    this.outputFormat = value;
  }

>>>>>>> 23dd60d9d7b36966fecb1b67539c0520bcdcc777




}
