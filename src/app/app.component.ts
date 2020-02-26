import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [];
  itemss = [];
  title = 'newtodo';
  des;
  i;
  pri;
  com;
  flag = 0;
  flag1=0;
  m=0;
  ngOnInit() {
     localStorage.setItem('tasks',JSON.stringify(this.items));
  }
  removecompleted()
  {
    this.m=0;
    for(let l of this.items)
    {
      if(l[2]==true)
      {
        console.log(l);
        this.items.splice(this.m,1);
        localStorage.setItem('tasks',JSON.stringify(this.items));
      }
      this.m=this.m+1;
    }
  }
  saveit(des, pri,com) {
    if(des==null||pri==null)
       return;
    com=false;
    this.itemss.push(des);
    this.itemss.push(pri);
    this.itemss.push(com);
    this.items.push(this.itemss);
    localStorage.setItem('tasks', JSON.stringify(this.items));
    this.itemss = [];
  }
  Deleteit(i) {
    this.items.splice(i, 1);
    localStorage.setItem('tasks', JSON.stringify(this.items));
  }
  removeall() {
    this.items.splice(0);
    localStorage.setItem('tasks', JSON.stringify(this.items));
    this.itemss.splice(0);
  }
  mark(i)
  {
    if(this.items[i][2]==true)
    {
      this.items[i][2]=false;
      localStorage.setItem('tasks',JSON.stringify(this.items));
    }
    else
    {
    this.items[i][2]=true;
    localStorage.setItem('tasks',JSON.stringify(this.items));
    }
  }
  sortlist() {
    this.flag = this.flag + 1;
    if (this.flag % 2 == 0) {
      this.items.sort(function (a, b) {
        return b[1] - a[1];
      });
    }
    else {
      this.items.sort(function (a, b) {
        return a[1] - b[1];
      });
    }
  }
}