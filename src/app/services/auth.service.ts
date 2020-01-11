	import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
test(): string {
    return 'working';
  }
  constructor() { }
	private userinfo;

  UserData(userinfo,password){
  	 var data =  JSON.stringify({username: userinfo, password: password});
  	this.userinfo = data;
  }
  UsergetData(){
  	let info = this.userinfo;
  	console.log("password",typeof(info));
  	this.clearData();
  	return info;
  }
  clearData(){
  	this.userinfo = undefined;
  }
}
