//
//  School.swift
//  insightTEK
//
//  Created by Madushani Lekam Wasam Liyanage on 11/10/17.
//  Copyright © 2017 Madushani Lekam Wasam Liyanage. All rights reserved.
//

import Foundation

class School {
    
    let schoolId: String
    let schoolName: String
    let schoolCity: String
    let schoolZip: String
    
    init(schoolId: String, schoolName: String, schoolCity: String, schoolZip: String) {
        self.schoolId = schoolId
        self.schoolName = schoolName
        self.schoolCity = schoolCity
        self.schoolZip = schoolZip
    }
    
}
