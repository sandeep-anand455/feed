import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { StreamsService } from '../streams.service';
import { SaveStreamService } from '../save-stream.service';

@Component({
  selector: 'app-update-streams',
  templateUrl: './update-streams.component.html',
  styleUrls: ['./update-streams.component.css']
})
export class UpdateStreamsComponent implements OnInit {
  public employeeList = [];
  public streamList = [];

  constructor(private employeeService: EmployeeService, private streamService: StreamsService, private saveStream: SaveStreamService) { }

  ngOnInit() {
    this.employeeService.getEmployeeData().subscribe(data => {
      this.employeeList.push(...data);
    });

    this.streamService.getStreams().subscribe(data => {
      this.streamList.push(...data);
    });

  }
  onSubmit(updateStream) {
    console.log(updateStream.value);
    this.saveStream.updateStream(updateStream.value)
    .subscribe(
      data => console.log('Stream Updated Successfully', data),
      error => console.error('Stream Updation failed', error )
      );
  }

}
