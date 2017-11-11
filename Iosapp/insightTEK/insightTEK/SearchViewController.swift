//
//  SearchViewController.swift
//  insightTEK
//
//  Created by Madushani Lekam Wasam Liyanage on 11/10/17.
//  Copyright © 2017 Madushani Lekam Wasam Liyanage. All rights reserved.
//

import UIKit

class SearchViewController: UIViewController, UITableViewDelegate, UITableViewDataSource, UISearchBarDelegate {
    
    @IBOutlet var resultsTableView: UITableView!
    
    let searchBar = UISearchBar()
    var userType: String = ""
    var mentors: [Mentor] = []
    var schools: [School] = []
    var searchedMentors: [Mentor] = []
    var searchedSchools: [School] = []
    
    let mentor = MentorStore()
    let school = SchoolStore()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        resultsTableView.dataSource = self
        resultsTableView.delegate = self
        createSearchBar()
        loadResults()
        
    }
    
    override func viewWillAppear(_ animated: Bool) {
        self.navigationItem.setHidesBackButton(true, animated: true)
    }
    
    func createSearchBar() {
        searchBar.delegate = self
        self.navigationItem.titleView = searchBar
        searchBar.showsCancelButton = false
        searchBar.placeholder = "Enter Text..."
        
    }
    
    func loadResults() {
        print(userType)
        if userType == "school" {
            let mentorEndPoint = "http://localhost:8080"
            let parameters = ["type":"mentor","field":""]
            mentor.getMentor(APIEndPoint: mentorEndPoint, parameters: parameters, completion: { (mentors) in
                self.mentors = mentors
                self.resultsTableView.reloadData()
            })
        
            
        }
        else {
            let schoolEndPoint = "http://localhost:8080"
            let parameters = ["type":"school","field":""]
            school.getSchools(APIEndPoint: schoolEndPoint, parameters: parameters, completion: { (schools) in
                self.schools = schools
                self.resultsTableView.reloadData()
            })
        }
    }
    
    @IBAction func dismissViewOnTap(_ sender: UITapGestureRecognizer) {
        searchBar.resignFirstResponder()
        searchedMentors.removeAll()
        searchedSchools.removeAll()
        
        if let searchText = searchBar.text {
            let keywordsArr = searchText.lowercased().components(separatedBy: " ")
            
            if userType == "Mentor" {
                
                
                
            }
            else {
                
            }
        }
        
    }
    
    func searchBarCancelButtonClicked(_ searchBar: UISearchBar) {
        
    }
    
    func searchBarSearchButtonClicked(_ searchBar: UISearchBar) {
        searchBar.resignFirstResponder()
        
    }
    
    
    func numberOfSections(in tableView: UITableView) -> Int {
        
        return 1
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if userType == "mentor" {
            return schools.count
        }
        else {
            return mentors.count
        }
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        let cell = resultsTableView.dequeueReusableCell(withIdentifier: "resultCell") as! UITableViewCell
        if userType == "mentor" {
            let result = schools[indexPath.row]
            cell.textLabel?.text = result.schoolName
        }
        else {
            let result = mentors[indexPath.row]
            cell.textLabel?.text = result.mentorName
        }
        return cell
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
