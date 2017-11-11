//
//  MentorStore.swift
//  insightTEK
//
//  Created by Madushani Lekam Wasam Liyanage on 11/11/17.
//  Copyright © 2017 Madushani Lekam Wasam Liyanage. All rights reserved.
//

import Foundation
import Alamofire
import SwiftyJSON

class MentorStore {
    
    func getMentor(APIEndPoint: String, parameters: [String:Any], completion: @escaping ([Mentor]) -> Void) {
        
        let url = URL(string: APIEndPoint)
        //var mentor: Mentor?
        var mentors: [Mentor]!
        Alamofire.request("\(url!)/search", method: .post, parameters: parameters).responseJSON { (dataResponse) in
            if let jsonData = dataResponse.data,
                let dict = try? JSON(data: jsonData).dictionaryObject,
                let mentorsArr = dict!["data"] as? [AnyObject]  {
                for mentorDict in mentorsArr {
                    if let mentorId = mentorDict["user"] as? String,
                        let mentorName = mentorDict["first"] as? String,
                        let mentorAge = mentorDict["age"] as? Int,
                        let mentorCity = mentorDict["mentorCity"] as? String,
                        let mentorCompany = mentorDict["company"] as? String,
                        let mentorDescription = mentorDict["description"] as? String {
                        
                        let mentorObject = Mentor(mentorId: mentorId, mentorName: mentorName, mentorAge: mentorAge, mentorCity: mentorCity, mentorCompany: mentorCompany, mentorDescription: mentorDescription)
                        mentors.append(mentorObject)
                    }
                }
            }
        }
        if let mentors = mentors {
            completion(mentors)
        }
        
    }
    
}
