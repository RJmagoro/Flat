
import { SignupPage } from './../signup/signup';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login: FormGroup;
  email;
  password;
  
  human={
   
    email:"",
    password:"",
  }
  lgn: boolean;
  sign: boolean;
  gogle: boolean;
  rest:boolean;
 
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder) {
    this.login = this.fb.group({
      
      email:['',Validators.compose([Validators.maxLength(25),Validators.pattern('[a-zA-Z0-9@]'),Validators.required])],
      password:['',Validators.compose([Validators.minLength(8),Validators.pattern('[a-zA-Z0-9!@#$%^&*]'),Validators.required])]
    });
    this.lgn = false;
    this.sign=false;
    this.gogle=false;
    this.rest=false;
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  reset(){

      

    
    this.navCtrl.push("ResetPage");
  
}
  navg(){

      

    
      this.navCtrl.push("SignupPage");
    
  }
  logins(){
    firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(user => {
      this.navCtrl.push("HomePage")
    })
  }
  // google(){
  //   var provider = new firebase.auth.GoogleAuthProvider();
  //   firebase.auth().signInWithPopup(provider).then(User =>{
  //     this.navCtrl.push("HomePage");
  //   })
 
  // }
//   onreset(){
//     var auth = firebase.auth();
//     var emailAddress = "user@example.com";

//     auth.sendPasswordResetEmail(emailAddress).then(function() {
//   // Email sent.
// }).catch(function(error) {
//   // An error happened.
// }); 

//   }
  
  
  
 

    }

