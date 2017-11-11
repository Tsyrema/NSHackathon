//
//  Mentor.swift
//  insightTEK
//
//  Created by Madushani Lekam Wasam Liyanage on 11/10/17.
//  Copyright © 2017 Madushani Lekam Wasam Liyanage. All rights reserved.
//

import Foundation

class Mentor {
    
    let mentorId: String
    let mentorName: String
    let mentorAge: Int
    let mentorType: String
    let mentorCompany: String
    let mentorDescription: String
    
    init(mentorId: String, mentorName: String, mentorAge: Int, mentorType: String,
         mentorCompany: String, mentorDescription: String) {
        self.mentorId = mentorId
        self.mentorName = mentorName
        self.mentorAge = mentorAge
        self.mentorType = mentorType
        self.mentorCompany = mentorCompany
        self.mentorDescription = mentorDescription
    }
    
}
