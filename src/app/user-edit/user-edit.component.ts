import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserEditComponent implements OnInit {

  user = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUser(this.route.snapshot.params['id']);
  }

  getUser(id) {
    this.http.get('/user/'+id).subscribe(data => {
      this.user = data;
    });
  }

  updateUser(id, user) {
    this.http.put('/user/'+id, this.user)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/user-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
