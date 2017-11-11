//
//  SchoolStore.swift
//  insightTEK
//
//  Created by Madushani Lekam Wasam Liyanage on 11/11/17.
//  Copyright © 2017 Madushani Lekam Wasam Liyanage. All rights reserved.
//

import Foundation
import Alamofire
import SwiftyJSON

class SchoolStore {
    
    func getSchools(APIEndPoint: String, parameters: [String:Any], completion: @escaping ([School]) -> Void) {
        
        let url = URL(string: APIEndPoint)
        var schools: [School] = []
        Alamofire.request("\(url!)/search", method: .post, parameters: parameters).responseJSON { (dataResponse) in
            if let jsonData = dataResponse.data,
                let dict = try? JSON(data: jsonData).dictionaryObject,
                let schoolsArr = dict!["data"] as? [AnyObject]  {
             
                for schoolDict in schoolsArr {
                    if let schoolId = schoolDict["user"] as? String,
                        let schoolName = schoolDict["name"] as? String,
                        let schoolCity = schoolDict["city"] as? String{
                        
                        var school: School?
                        school = School(schoolId: schoolId, schoolName: schoolName, schoolCity: schoolCity)
                        if let school = school {
                            schools.append(school)
                        }
                    }
                }
                completion(schools)
            }
        }
    }
}
