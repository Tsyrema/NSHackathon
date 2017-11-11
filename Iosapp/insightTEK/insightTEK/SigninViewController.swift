//
//  SigninViewController.swift
//  insightTEK
//
//  Created by Madushani Lekam Wasam Liyanage on 11/10/17.
//  Copyright © 2017 Madushani Lekam Wasam Liyanage. All rights reserved.
//

import UIKit
import Alamofire
import SwiftyJSON

class SigninViewController: UIViewController {
    
    @IBOutlet var emailTextField: UITextField!
    @IBOutlet var passwordTextField: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        
    }
    
    @IBAction func signinTapped(_ sender: UIButton) {
        let signinEndPoint = "http://localhost:8080"
        if let username = emailTextField.text, let password = passwordTextField.text {
            login(username: username, password: password, APIEndPoint: signinEndPoint, completion: { (user) in
                dump(user)
            })
        }
        
        
    }
    
    @IBAction func tapToDismiss(_ sender: UITapGestureRecognizer) {
        emailTextField.resignFirstResponder()
        passwordTextField.resignFirstResponder()
        
    }
    func login(username: String, password: String, APIEndPoint: String, completion: @escaping (User) -> Void) {
        
        let dict = ["username":username, "password": password]
        var user: User?
        let url = URL(string: APIEndPoint)
        
        Alamofire.request("\(url!)/signin", method: .post, parameters: dict).responseJSON { (dataResponse) in
            if let jsonData = dataResponse.data,
                let dict = try? JSON(data: jsonData).dictionaryObject {
                if let success = dict!["success"] as? Bool {
                    if success == true {
                        if let userDict = dict!["data"] as? [String:Any] {
                            print(userDict)
                            if let username = userDict["user"] as? String,
                                let userType = userDict["type"] as? String {
                                user = User(username: username, userType: userType)
                                print(user)
                            }
                        }
                    }
                    else {
                        print("wrong credentials")
                    }
                    
                    
                }
                
            }
            if let user = user {
                completion(user)
            }
            
        }
    }
    
    /*
     // MARK: - Navigation
     
     // In a storyboard-based application, you will often want to do a little preparation before navigation
     override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
     // Get the new view controller using segue.destinationViewController.
     // Pass the selected object to the new view controller.
     }
     */
    
}
