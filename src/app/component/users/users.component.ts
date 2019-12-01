import { Component, OnInit, ViewChild } from "@angular/core";
import { User } from "../../Models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    email: ""
  };
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild("userForm", { static: false }) form: any;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@yahoo.com",
        isActive: true,
        registered: new Date("01/02/2018 08:30:00"),
        hide: true
      },
      {
        firstName: "Kevin",
        lastName: "Johnson",
        email: "kevin@yahoo.com",
        isActive: false,
        registered: new Date("03/11/2017 06:20:00"),
        hide: true
      },
      {
        firstName: "Karen",
        lastName: "Williams",
        email: "karen@email.com",
        isActive: true,
        registered: new Date("11/02/2016 20:30:00"),
        hide: true
      }
    ];
    this.loaded = true;
    //paarticles import code
    this.myStyle = {
      position: "fixed",
      width: "100%",
      height: "100%",
      "z-index": -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    this.myParams = {
      particles: {
        number: {
          value: 500
        },
        color: {
          value: "#ff0000"
        },
        shape: {
          type: "circle"
        }
      }
    };
  }
  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      alert("form is not valid");
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);

      this.form.reset();
    }
  }
}
