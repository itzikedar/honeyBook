import { Component, OnInit, Input} from '@angular/core';
interface ContactStracture {
  name: string;
  job: string;
  company_name: string;
  phone: string;
  email: string;
  profile_image: string;
  icon: string;
}
@Component({
  selector: 'app-contactbox',
  templateUrl: './contactBox.html',
  styleUrls: ['./contactBox.scss']
})
export class ContactBoxComponent implements OnInit {
  public enter: null;
  @Input() public contact: ContactStracture;
  constructor(
  ) {}
  public ngOnInit() {}
}
