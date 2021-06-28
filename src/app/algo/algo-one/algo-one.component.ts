import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algo-one',
  templateUrl: './algo-one.component.html',
  styleUrls: ['./algo-one.component.css']
})
export class AlgoOneComponent implements OnInit {

  arr = [1,2,4,5,7,8,9]
  arr2 = [1]

  constructor() { }

  ngOnInit() {
    console.log(this.missingNumber(this.arr2, 2));
  }

  missingNumber(array,n){
    //code here
    let newArr = new Array(n).fill(false);
    
    array.forEach(function(val) {
        if(val > -1 && val<n) {
            newArr[val] = true;
        }
    });
    
    for(var i =1; i< n; i++) {
        if(!newArr[i]) {
            return i;
        } 
    }
    return i;
}


}
