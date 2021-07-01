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
    console.log(this.balanceNumber("33271344"))
    this.combination([1,2,3,4,5,6,7,8,9], 10);
  }


  increment(arr,n){
    function main(arr, n) {
        if(arr[n] < 9) {
            arr[n] += 1;
            return;
        } else {
            arr[n] = 0;
            return main(arr, n-1);
        }
    }
    let newArr = [0, ...arr];
    main(newArr, n-1);
    if(newArr[0] === 0) {
        return newArr.slice(1);
    } else {
        return newArr;
    }    
  }


  mainFunction(l, sum, K, local, A) {
    if(sum == K) {
      console.log(local);
      return;
    }
    for(let i=l; i<A.length; i++) {
      if(A[i] + sum > K) 
        continue;

      if(i>l && A[i-1] == A[i])
        continue;
      local.push(A[i]);
      this.mainFunction(i+1, sum + A[i], K, local, A);
      local.pop();
    }
  }

  combination(A, K) {
    let local = [];
    let sortedArr = A.sort((a, b) => a-b);
    this.mainFunction(0, 0, K, local, sortedArr);
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

  balanceNumber(numb) {
    let split = numb.split('');
    let leftPart = 0;
    let rightPart = 0;
    for(let i=0; i<Math.floor(split.length/2); i++) {
      leftPart += +split[i];
      rightPart += +split[split.length-i-1];
    }
    return leftPart == rightPart;

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
