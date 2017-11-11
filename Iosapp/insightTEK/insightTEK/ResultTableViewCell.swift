//
//  resultTableViewCell.swift
//  insightTEK
//
//  Created by Madushani Lekam Wasam Liyanage on 11/11/17.
//  Copyright © 2017 Madushani Lekam Wasam Liyanage. All rights reserved.
//

import UIKit

class ResultTableViewCell: UITableViewCell {
    
    @IBOutlet var titleLabel: UILabel!
    @IBOutlet var subtitleLabel: UILabel!
    @IBOutlet var descrpLabel: UILabel!
    @IBOutlet var mainImageView: UIImageView!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
