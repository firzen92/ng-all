import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algo-one',
  templateUrl: './algo-one.component.html',
  styleUrls: ['./algo-one.component.css']
})
export class AlgoOneComponent implements OnInit {

  arr = [1,2,4,5,7,8,9]
  arr2 = [1]
  string = "ABCD"

  constructor() { }

  ngOnInit() {
    console.log(this.missingNumber(this.arr2, 2));
    console.log(this.permut(this.string));
  }


  removeDupes(S) {
    let newStr = "";
    for(let i=0; i<S.length; i++) {
      var char = S[i];
      if(S.indexOf(char) == i) 
        newStr += char;
    }
    return newStr;
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
  
  permut(S) {
    if(S.length < 2) {
      return S;
    }
    var permutations = [];
    for(let i=0; i<S.length; i++) {
      let char = S[i];

      if(S.indexOf(char) != i) 
        continue;

      let remainingPart = S.slice(0,i) + S.slice(i+1, S.length);

      for(let subString of this.permut(remainingPart)) {
        permutations.push(char + subString);
      }
    }

    return permutations;
  }




}
