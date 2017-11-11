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
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

        resultsTableView.dataSource = self
        resultsTableView.delegate = self
        createSearchBar()

    }
    
    func createSearchBar() {
        searchBar.delegate = self
        self.navigationItem.titleView = searchBar
        searchBar.showsCancelButton = false
        searchBar.placeholder = "Enter Text..."
     
    }
    
    func loadResults() {
        if userType == "Mentor" {
            
        }
        else {
            
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
        return mentors.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        return UITableViewCell()
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
