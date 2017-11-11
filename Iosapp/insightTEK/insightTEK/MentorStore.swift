//
//  MentorStore.swift
//  insightTEK
//
//  Created by Madushani Lekam Wasam Liyanage on 11/11/17.
//  Copyright © 2017 Madushani Lekam Wasam Liyanage. All rights reserved.
//

import Foundation
import Alamofire

class MentorStore {
    
//    class func getData(APIEndPoint: String, callback: @escaping ([Taco]?) -> Void){
//        let url = URL(string: APIEndPoint)
//
//        var tacoLayersToReturn: [Taco]?
//        Alamofire.request(url!).responseJSON { (dataResponse) in
//            if let jsonData = dataResponse.data {
//                let swiftyJSON = JSON(data: jsonData)
    
    func getMentor(APIEndPoint: String, completion: @escaping (Mentor) -> Void) {
        
        let url = URL(String: APIEndPoint)
        var mentor: Mentor?
        
        Alamofire.request(url!).responseJSON { (dataResponse) in
            if let jsonData = dataResponse.data {
               let dict = JSON(data: jsonData)
                
                if let mentorId = dict["username"] as? String,
                    let mentorName = dict["first"] as? String,
                    let mentorAge = dict["age"] as? Int,
                    let mentorCity = dict["mentorCity"] as? String,
                    let mentorCompany = dict["company"] as? String,
                    let mentorDescription = dict["description"] as? String {
                    
                    let mentorObject = Mentor(mentorId: mentorId, mentorName: mentorName, mentorAge: mentorAge, mentorCity: mentorCity, mentorCompany: mentorCompany, mentorDescription: mentorDescription)
                    mentor = mentorObject
                    
                }
                if let mentor = mentor {
                    completion(mentor)
                }
            }
            
        }
        
        
    }
    
}
