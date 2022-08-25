import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  @Input() type!: string;
  @Input() message!: string;

  constructor(
    public bsModalRef: BsModalRef,
    private location: Location
    ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.bsModalRef.hide();

    if (this.type == "success") {
      this.location.back()
    }
  }

}
