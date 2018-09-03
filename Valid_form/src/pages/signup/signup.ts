import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AgeValidator } from '../../validator.age.ts/validator.age';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {



    name:string;
    surname:string;
    email:string;
    password;
    human={
      name:"",
      surname:"",
      email:"",
      password:"",
    }
    login: FormGroup;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder) {
    this.login = this.fb.group({
      name:['',Validators.compose([Validators.maxLength(25),Validators.pattern('[a-zA-Z]'),Validators.required])],
      surname:['',Validators.compose([Validators.maxLength(25),Validators.pattern('[a-zA-Z]'),Validators.required])],
    
      age:['',AgeValidator.isValid],
      email:['',Validators.compose([Validators.maxLength(25),Validators.pattern('[a-zA-Z0-9@]'),Validators.required])],
      password:['',Validators.compose([Validators.minLength(8),Validators.pattern('[a-zA-Z0-9!@#$%^&*]'),Validators.required])]
      
    });

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  submit(){
    firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user => {
      this.navCtrl.push("HomePage")
    })
    
  }
 
  logins(){
     
    this.navCtrl.push("LoginPage");
  
}
  
  

}
