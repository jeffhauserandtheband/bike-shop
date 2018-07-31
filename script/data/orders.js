const orders = [{
  "userId": 45,
  "state": "completed",
  "shippingEmail": "ahudghton0@prlog.org",
  "shippingAddress": "985 Norway Maple Junction",
  "shippingCity": "Paterson",
  "shippingState": "New Jersey",
  "shippingZip": 1773,
  "orderCost": 1269
}, {
  "userId": 45,
  "state": "completed",
  "shippingEmail": "ageorgi1@cargocollective.com",
  "shippingAddress": "0 Maryland Drive",
  "shippingCity": "Tulsa",
  "shippingState": "Oklahoma",
  "shippingZip": 7330,
  "orderCost": 2543
}, {
  "userId": 82,
  "state": "processing",
  "shippingEmail": "mtite2@vistaprint.com",
  "shippingAddress": "3116 Lindbergh Trail",
  "shippingCity": "Evansville",
  "shippingState": "Indiana",
  "shippingZip": 3129,
  "orderCost": 3785
}, {
  "userId": 45,
  "state": "created",
  "shippingEmail": "tbarron3@liveinternet.ru",
  "shippingAddress": "5 Meadow Vale Point",
  "shippingCity": "San Jose",
  "shippingState": "California",
  "shippingZip": 4571,
  "orderCost": 3934
}, {
  "userId": 56,
  "state": "cancelled",
  "shippingEmail": "slangthorne4@cpanel.net",
  "shippingAddress": "09202 Sycamore Alley",
  "shippingCity": "Kent",
  "shippingState": "Washington",
  "shippingZip": 1247,
  "orderCost": 3534
}, {
  "userId": 74,
  "state": "completed",
  "shippingEmail": "gbowdidge5@people.com.cn",
  "shippingAddress": "4 Cordelia Hill",
  "shippingCity": "San Francisco",
  "shippingState": "California",
  "shippingZip": 3081,
  "orderCost": 2007
}, {
  "userId": 49,
  "state": "completed",
  "shippingEmail": "rgiff6@hud.gov",
  "shippingAddress": "4440 Union Avenue",
  "shippingCity": "Denver",
  "shippingState": "Colorado",
  "shippingZip": 3251,
  "orderCost": 4482
}, {
  "userId": 64,
  "state": "created",
  "shippingEmail": "agreatham7@miitbeian.gov.cn",
  "shippingAddress": "73 Blackbird Junction",
  "shippingCity": "Springfield",
  "shippingState": "Massachusetts",
  "shippingZip": 3193,
  "orderCost": 588
}, {
  "userId": 65,
  "state": "created",
  "shippingEmail": "kklouz8@last.fm",
  "shippingAddress": "5668 Golf Point",
  "shippingCity": "Fresno",
  "shippingState": "California",
  "shippingZip": 8282,
  "orderCost": 4
}, {
  "userId": 22,
  "state": "cancelled",
  "shippingEmail": "ekell9@jimdo.com",
  "shippingAddress": "93836 Dahle Hill",
  "shippingCity": "Dallas",
  "shippingState": "Texas",
  "shippingZip": 3174,
  "orderCost": 4047
}, {
  "userId": 94,
  "state": "created",
  "shippingEmail": "smunseya@soup.io",
  "shippingAddress": "42761 Village Terrace",
  "shippingCity": "Fayetteville",
  "shippingState": "North Carolina",
  "shippingZip": 3694,
  "orderCost": 2588
}, {
  "userId": 50,
  "state": "completed",
  "shippingEmail": "ccopasb@loc.gov",
  "shippingAddress": "3975 Ruskin Street",
  "shippingCity": "Arlington",
  "shippingState": "Texas",
  "shippingZip": 5932,
  "orderCost": 4931
}, {
  "userId": 6,
  "state": "processing",
  "shippingEmail": "vmcgouganc@creativecommons.org",
  "shippingAddress": "5 Vahlen Plaza",
  "shippingCity": "Saginaw",
  "shippingState": "Michigan",
  "shippingZip": 2180,
  "orderCost": 2171
}, {
  "userId": 64,
  "state": "cancelled",
  "shippingEmail": "agathwaited@intel.com",
  "shippingAddress": "7 Nova Drive",
  "shippingCity": "Killeen",
  "shippingState": "Texas",
  "shippingZip": 2928,
  "orderCost": 3706
}, {
  "userId": 81,
  "state": "created",
  "shippingEmail": "dvaughtone@ucoz.com",
  "shippingAddress": "86454 Sunbrook Alley",
  "shippingCity": "Kansas City",
  "shippingState": "Kansas",
  "shippingZip": 4260,
  "orderCost": 990
}, {
  "userId": 31,
  "state": "cancelled",
  "shippingEmail": "gpynnerf@cpanel.net",
  "shippingAddress": "39097 Towne Road",
  "shippingCity": "New Castle",
  "shippingState": "Pennsylvania",
  "shippingZip": 5448,
  "orderCost": 4068
}, {
  "userId": 17,
  "state": "completed",
  "shippingEmail": "ecolteng@goodreads.com",
  "shippingAddress": "7374 Ilene Junction",
  "shippingCity": "Fairfield",
  "shippingState": "Connecticut",
  "shippingZip": 3943,
  "orderCost": 2409
}, {
  "userId": 99,
  "state": "created",
  "shippingEmail": "fviolleth@yale.edu",
  "shippingAddress": "19 Melvin Drive",
  "shippingCity": "Mobile",
  "shippingState": "Alabama",
  "shippingZip": 6175,
  "orderCost": 3006
}, {
  "userId": 83,
  "state": "completed",
  "shippingEmail": "bcoddingtoni@ft.com",
  "shippingAddress": "71 Thierer Street",
  "shippingCity": "Sioux Falls",
  "shippingState": "South Dakota",
  "shippingZip": 1994,
  "orderCost": 4203
}, {
  "userId": 67,
  "state": "cancelled",
  "shippingEmail": "cmcgavinj@abc.net.au",
  "shippingAddress": "37 Stoughton Point",
  "shippingCity": "Syracuse",
  "shippingState": "New York",
  "shippingZip": 6749,
  "orderCost": 2065
}, {
  "userId": 89,
  "state": "cancelled",
  "shippingEmail": "qbolfk@wired.com",
  "shippingAddress": "5 Hoffman Parkway",
  "shippingCity": "Fort Wayne",
  "shippingState": "Indiana",
  "shippingZip": 1127,
  "orderCost": 3972
}, {
  "userId": 31,
  "state": "created",
  "shippingEmail": "zhoundsoml@meetup.com",
  "shippingAddress": "62870 Becker Lane",
  "shippingCity": "El Paso",
  "shippingState": "Texas",
  "shippingZip": 6828,
  "orderCost": 1669
}, {
  "userId": 51,
  "state": "processing",
  "shippingEmail": "tshimminm@studiopress.com",
  "shippingAddress": "25218 Welch Crossing",
  "shippingCity": "Washington",
  "shippingState": "District of Columbia",
  "shippingZip": 5740,
  "orderCost": 266
}, {
  "userId": 51,
  "state": "processing",
  "shippingEmail": "owimpn@vimeo.com",
  "shippingAddress": "1608 Elmside Crossing",
  "shippingCity": "New York City",
  "shippingState": "New York",
  "shippingZip": 8158,
  "orderCost": 537
}, {
  "userId": 81,
  "state": "completed",
  "shippingEmail": "ltritteno@shutterfly.com",
  "shippingAddress": "233 Cottonwood Park",
  "shippingCity": "Sioux Falls",
  "shippingState": "South Dakota",
  "shippingZip": 5262,
  "orderCost": 2960
}, {
  "userId": 2,
  "state": "cancelled",
  "shippingEmail": "bbourgourp@spiegel.de",
  "shippingAddress": "8769 Loftsgordon Junction",
  "shippingCity": "Huntsville",
  "shippingState": "Alabama",
  "shippingZip": 6963,
  "orderCost": 4836
}, {
  "userId": 50,
  "state": "completed",
  "shippingEmail": "battleq@ycombinator.com",
  "shippingAddress": "91904 Banding Road",
  "shippingCity": "Meridian",
  "shippingState": "Mississippi",
  "shippingZip": 5174,
  "orderCost": 2460
}, {
  "userId": 96,
  "state": "created",
  "shippingEmail": "kquinnetr@microsoft.com",
  "shippingAddress": "78230 Grim Trail",
  "shippingCity": "Temple",
  "shippingState": "Texas",
  "shippingZip": 5494,
  "orderCost": 2827
}, {
  "userId": 50,
  "state": "processing",
  "shippingEmail": "wroos@admin.ch",
  "shippingAddress": "57970 Messerschmidt Trail",
  "shippingCity": "Bradenton",
  "shippingState": "Florida",
  "shippingZip": 1037,
  "orderCost": 1497
}, {
  "userId": 70,
  "state": "completed",
  "shippingEmail": "sbenitot@csmonitor.com",
  "shippingAddress": "05007 Grover Hill",
  "shippingCity": "Boston",
  "shippingState": "Massachusetts",
  "shippingZip": 6763,
  "orderCost": 447
}, {
  "userId": 8,
  "state": "created",
  "shippingEmail": "ndrableu@behance.net",
  "shippingAddress": "981 Meadow Ridge Way",
  "shippingCity": "Washington",
  "shippingState": "District of Columbia",
  "shippingZip": 5782,
  "orderCost": 2726
}, {
  "userId": 95,
  "state": "processing",
  "shippingEmail": "ajordesonv@a8.net",
  "shippingAddress": "2420 Lawn Circle",
  "shippingCity": "Pensacola",
  "shippingState": "Florida",
  "shippingZip": 7938,
  "orderCost": 3379
}, {
  "userId": 68,
  "state": "completed",
  "shippingEmail": "ypritchettw@list-manage.com",
  "shippingAddress": "8 Laurel Court",
  "shippingCity": "Chicago",
  "shippingState": "Illinois",
  "shippingZip": 2868,
  "orderCost": 231
}, {
  "userId": 18,
  "state": "completed",
  "shippingEmail": "bhartnellx@indiatimes.com",
  "shippingAddress": "58924 Welch Street",
  "shippingCity": "White Plains",
  "shippingState": "New York",
  "shippingZip": 6483,
  "orderCost": 338
}, {
  "userId": 45,
  "state": "cancelled",
  "shippingEmail": "ihardwicky@ucla.edu",
  "shippingAddress": "89 Transport Crossing",
  "shippingCity": "Detroit",
  "shippingState": "Michigan",
  "shippingZip": 4542,
  "orderCost": 2710
}, {
  "userId": 66,
  "state": "completed",
  "shippingEmail": "agrestiez@state.gov",
  "shippingAddress": "6 Gateway Plaza",
  "shippingCity": "Denver",
  "shippingState": "Colorado",
  "shippingZip": 3269,
  "orderCost": 4876
}, {
  "userId": 55,
  "state": "created",
  "shippingEmail": "jgrady10@pcworld.com",
  "shippingAddress": "72 Packers Circle",
  "shippingCity": "San Diego",
  "shippingState": "California",
  "shippingZip": 3760,
  "orderCost": 4311
}, {
  "userId": 91,
  "state": "completed",
  "shippingEmail": "ndevitt11@weebly.com",
  "shippingAddress": "15334 Cordelia Park",
  "shippingCity": "Nashville",
  "shippingState": "Tennessee",
  "shippingZip": 1206,
  "orderCost": 4754
}, {
  "userId": 55,
  "state": "processing",
  "shippingEmail": "cgillanders12@loc.gov",
  "shippingAddress": "43 Carpenter Road",
  "shippingCity": "Brooklyn",
  "shippingState": "New York",
  "shippingZip": 1168,
  "orderCost": 3654
}, {
  "userId": 63,
  "state": "completed",
  "shippingEmail": "clucks13@bbc.co.uk",
  "shippingAddress": "8179 Farmco Way",
  "shippingCity": "Odessa",
  "shippingState": "Texas",
  "shippingZip": 5205,
  "orderCost": 65
}, {
  "userId": 64,
  "state": "created",
  "shippingEmail": "pgallehawk14@spotify.com",
  "shippingAddress": "084 Reindahl Drive",
  "shippingCity": "Suffolk",
  "shippingState": "Virginia",
  "shippingZip": 3309,
  "orderCost": 1947
}, {
  "userId": 88,
  "state": "cancelled",
  "shippingEmail": "adavenport15@seattletimes.com",
  "shippingAddress": "956 Forest Park",
  "shippingCity": "Las Vegas",
  "shippingState": "Nevada",
  "shippingZip": 6626,
  "orderCost": 4265
}, {
  "userId": 32,
  "state": "completed",
  "shippingEmail": "kcaney16@stanford.edu",
  "shippingAddress": "251 Ryan Terrace",
  "shippingCity": "Seattle",
  "shippingState": "Washington",
  "shippingZip": 4053,
  "orderCost": 3039
}, {
  "userId": 97,
  "state": "completed",
  "shippingEmail": "pwhayman17@ustream.tv",
  "shippingAddress": "617 North Way",
  "shippingCity": "Farmington",
  "shippingState": "Michigan",
  "shippingZip": 2897,
  "orderCost": 4135
}, {
  "userId": 13,
  "state": "processing",
  "shippingEmail": "fbellam18@oracle.com",
  "shippingAddress": "48 Lotheville Circle",
  "shippingCity": "Baltimore",
  "shippingState": "Maryland",
  "shippingZip": 8826,
  "orderCost": 4358
}, {
  "userId": 74,
  "state": "processing",
  "shippingEmail": "bmartusov19@disqus.com",
  "shippingAddress": "3519 Dahle Circle",
  "shippingCity": "San Diego",
  "shippingState": "California",
  "shippingZip": 5841,
  "orderCost": 568
}, {
  "userId": 98,
  "state": "processing",
  "shippingEmail": "cosmond1a@seesaa.net",
  "shippingAddress": "171 6th Way",
  "shippingCity": "Arlington",
  "shippingState": "Texas",
  "shippingZip": 1380,
  "orderCost": 3778
}, {
  "userId": 37,
  "state": "processing",
  "shippingEmail": "acolquitt1b@bigcartel.com",
  "shippingAddress": "0 Mandrake Trail",
  "shippingCity": "Jacksonville",
  "shippingState": "Florida",
  "shippingZip": 4151,
  "orderCost": 3828
}, {
  "userId": 66,
  "state": "completed",
  "shippingEmail": "hbugdall1c@unblog.fr",
  "shippingAddress": "44 Fairfield Place",
  "shippingCity": "Palm Bay",
  "shippingState": "Florida",
  "shippingZip": 3133,
  "orderCost": 1677
}, {
  "userId": 39,
  "state": "processing",
  "shippingEmail": "icockrell1d@stanford.edu",
  "shippingAddress": "84 Quincy Hill",
  "shippingCity": "Tuscaloosa",
  "shippingState": "Alabama",
  "shippingZip": 2760,
  "orderCost": 1717
}, {
  "userId": 3,
  "state": "processing",
  "shippingEmail": "wscyner1e@flickr.com",
  "shippingAddress": "00203 High Crossing Hill",
  "shippingCity": "Brockton",
  "shippingState": "Massachusetts",
  "shippingZip": 2649,
  "orderCost": 3091
}, {
  "userId": 73,
  "state": "completed",
  "shippingEmail": "efeldstein1f@jimdo.com",
  "shippingAddress": "35141 Sugar Parkway",
  "shippingCity": "Omaha",
  "shippingState": "Nebraska",
  "shippingZip": 2299,
  "orderCost": 375
}, {
  "userId": 11,
  "state": "created",
  "shippingEmail": "dpenrith1g@google.co.uk",
  "shippingAddress": "673 Crest Line Avenue",
  "shippingCity": "Atlanta",
  "shippingState": "Georgia",
  "shippingZip": 3334,
  "orderCost": 1590
}, {
  "userId": 45,
  "state": "created",
  "shippingEmail": "nschruyers1h@odnoklassniki.ru",
  "shippingAddress": "4 Rutledge Way",
  "shippingCity": "Shawnee Mission",
  "shippingState": "Kansas",
  "shippingZip": 5320,
  "orderCost": 4730
}, {
  "userId": 44,
  "state": "cancelled",
  "shippingEmail": "tledrane1i@blogs.com",
  "shippingAddress": "9879 Sunnyside Drive",
  "shippingCity": "Canton",
  "shippingState": "Ohio",
  "shippingZip": 1241,
  "orderCost": 881
}, {
  "userId": 3,
  "state": "processing",
  "shippingEmail": "agreatrex1j@mail.ru",
  "shippingAddress": "4602 Kingsford Alley",
  "shippingCity": "Milwaukee",
  "shippingState": "Wisconsin",
  "shippingZip": 6185,
  "orderCost": 2139
}, {
  "userId": 8,
  "state": "processing",
  "shippingEmail": "dschaffler1k@infoseek.co.jp",
  "shippingAddress": "913 Kenwood Pass",
  "shippingCity": "Boston",
  "shippingState": "Massachusetts",
  "shippingZip": 6641,
  "orderCost": 4734
}, {
  "userId": 42,
  "state": "created",
  "shippingEmail": "dguilleton1l@addtoany.com",
  "shippingAddress": "6 Miller Point",
  "shippingCity": "Austin",
  "shippingState": "Texas",
  "shippingZip": 8429,
  "orderCost": 2912
}, {
  "userId": 33,
  "state": "completed",
  "shippingEmail": "scrier1m@sun.com",
  "shippingAddress": "46000 Ridge Oak Pass",
  "shippingCity": "Portland",
  "shippingState": "Oregon",
  "shippingZip": 6505,
  "orderCost": 1478
}, {
  "userId": 85,
  "state": "created",
  "shippingEmail": "ahiseman1n@baidu.com",
  "shippingAddress": "31 Steensland Park",
  "shippingCity": "Indianapolis",
  "shippingState": "Indiana",
  "shippingZip": 8182,
  "orderCost": 3164
}, {
  "userId": 2,
  "state": "cancelled",
  "shippingEmail": "bcudby1o@blogs.com",
  "shippingAddress": "584 Ronald Regan Lane",
  "shippingCity": "Cleveland",
  "shippingState": "Ohio",
  "shippingZip": 6989,
  "orderCost": 2874
}, {
  "userId": 37,
  "state": "created",
  "shippingEmail": "cdepaepe1p@xrea.com",
  "shippingAddress": "70 Rusk Road",
  "shippingCity": "El Paso",
  "shippingState": "Texas",
  "shippingZip": 5925,
  "orderCost": 1
}, {
  "userId": 22,
  "state": "cancelled",
  "shippingEmail": "kwaitland1q@dmoz.org",
  "shippingAddress": "519 Granby Pass",
  "shippingCity": "Des Moines",
  "shippingState": "Iowa",
  "shippingZip": 7063,
  "orderCost": 2534
}, {
  "userId": 7,
  "state": "created",
  "shippingEmail": "cagiolfinger1r@ft.com",
  "shippingAddress": "61 Grover Street",
  "shippingCity": "Durham",
  "shippingState": "North Carolina",
  "shippingZip": 6593,
  "orderCost": 1252
}, {
  "userId": 74,
  "state": "completed",
  "shippingEmail": "rhollingsbee1s@chron.com",
  "shippingAddress": "322 Hoffman Center",
  "shippingCity": "Sacramento",
  "shippingState": "California",
  "shippingZip": 3624,
  "orderCost": 3613
}, {
  "userId": 79,
  "state": "created",
  "shippingEmail": "kpetheridge1t@sciencedaily.com",
  "shippingAddress": "097 Jenna Parkway",
  "shippingCity": "Jacksonville",
  "shippingState": "Florida",
  "shippingZip": 4502,
  "orderCost": 2544
}, {
  "userId": 94,
  "state": "completed",
  "shippingEmail": "cminshall1u@cbc.ca",
  "shippingAddress": "077 Delaware Alley",
  "shippingCity": "Spokane",
  "shippingState": "Washington",
  "shippingZip": 5391,
  "orderCost": 650
}, {
  "userId": 90,
  "state": "processing",
  "shippingEmail": "rkunisch1v@symantec.com",
  "shippingAddress": "047 Walton Road",
  "shippingCity": "Washington",
  "shippingState": "District of Columbia",
  "shippingZip": 7973,
  "orderCost": 811
}, {
  "userId": 50,
  "state": "completed",
  "shippingEmail": "tandreucci1w@hhs.gov",
  "shippingAddress": "2 Dexter Circle",
  "shippingCity": "Lincoln",
  "shippingState": "Nebraska",
  "shippingZip": 1552,
  "orderCost": 2469
}, {
  "userId": 97,
  "state": "processing",
  "shippingEmail": "ebuckberry1x@flickr.com",
  "shippingAddress": "14707 Main Way",
  "shippingCity": "Shreveport",
  "shippingState": "Louisiana",
  "shippingZip": 1659,
  "orderCost": 3748
}, {
  "userId": 85,
  "state": "completed",
  "shippingEmail": "spowland1y@harvard.edu",
  "shippingAddress": "2 Meadow Ridge Parkway",
  "shippingCity": "San Francisco",
  "shippingState": "California",
  "shippingZip": 3895,
  "orderCost": 2368
}, {
  "userId": 75,
  "state": "processing",
  "shippingEmail": "kkinney1z@netvibes.com",
  "shippingAddress": "77119 Schurz Junction",
  "shippingCity": "Birmingham",
  "shippingState": "Alabama",
  "shippingZip": 3263,
  "orderCost": 4745
}, {
  "userId": 42,
  "state": "created",
  "shippingEmail": "ametcalf20@artisteer.com",
  "shippingAddress": "3 Shasta Alley",
  "shippingCity": "Raleigh",
  "shippingState": "North Carolina",
  "shippingZip": 5669,
  "orderCost": 134
}, {
  "userId": 75,
  "state": "created",
  "shippingEmail": "styce21@mail.ru",
  "shippingAddress": "8 Forest Way",
  "shippingCity": "Arlington",
  "shippingState": "Virginia",
  "shippingZip": 1441,
  "orderCost": 1988
}, {
  "userId": 81,
  "state": "processing",
  "shippingEmail": "gbagger22@wired.com",
  "shippingAddress": "47674 Birchwood Avenue",
  "shippingCity": "Brooklyn",
  "shippingState": "New York",
  "shippingZip": 1985,
  "orderCost": 3997
}, {
  "userId": 83,
  "state": "created",
  "shippingEmail": "mshine23@bloglovin.com",
  "shippingAddress": "44 Trailsway Road",
  "shippingCity": "Oklahoma City",
  "shippingState": "Oklahoma",
  "shippingZip": 6960,
  "orderCost": 2172
}, {
  "userId": 30,
  "state": "completed",
  "shippingEmail": "gcambden24@economist.com",
  "shippingAddress": "0907 Blackbird Road",
  "shippingCity": "El Paso",
  "shippingState": "Texas",
  "shippingZip": 5758,
  "orderCost": 2863
}, {
  "userId": 41,
  "state": "cancelled",
  "shippingEmail": "gdonat25@ucla.edu",
  "shippingAddress": "14275 Daystar Street",
  "shippingCity": "Anchorage",
  "shippingState": "Alaska",
  "shippingZip": 5732,
  "orderCost": 2227
}, {
  "userId": 94,
  "state": "cancelled",
  "shippingEmail": "apleming26@harvard.edu",
  "shippingAddress": "1 Canary Junction",
  "shippingCity": "Warren",
  "shippingState": "Ohio",
  "shippingZip": 7186,
  "orderCost": 4912
}, {
  "userId": 23,
  "state": "processing",
  "shippingEmail": "ecardwell27@parallels.com",
  "shippingAddress": "63806 Bowman Avenue",
  "shippingCity": "Cleveland",
  "shippingState": "Ohio",
  "shippingZip": 2582,
  "orderCost": 2587
}, {
  "userId": 36,
  "state": "processing",
  "shippingEmail": "ajeandin28@theguardian.com",
  "shippingAddress": "52416 Summit Plaza",
  "shippingCity": "Monticello",
  "shippingState": "Minnesota",
  "shippingZip": 4294,
  "orderCost": 2167
}, {
  "userId": 12,
  "state": "created",
  "shippingEmail": "elamshead29@diigo.com",
  "shippingAddress": "90975 Blackbird Hill",
  "shippingCity": "San Diego",
  "shippingState": "California",
  "shippingZip": 3903,
  "orderCost": 4631
}, {
  "userId": 55,
  "state": "created",
  "shippingEmail": "pberends2a@deviantart.com",
  "shippingAddress": "1 Bowman Lane",
  "shippingCity": "Mesa",
  "shippingState": "Arizona",
  "shippingZip": 6739,
  "orderCost": 4168
}, {
  "userId": 80,
  "state": "created",
  "shippingEmail": "slampett2b@bloglovin.com",
  "shippingAddress": "1467 Utah Park",
  "shippingCity": "Muskegon",
  "shippingState": "Michigan",
  "shippingZip": 3899,
  "orderCost": 2713
}, {
  "userId": 95,
  "state": "created",
  "shippingEmail": "beyckel2c@webnode.com",
  "shippingAddress": "53073 Little Fleur Avenue",
  "shippingCity": "Las Vegas",
  "shippingState": "Nevada",
  "shippingZip": 3436,
  "orderCost": 1633
}, {
  "userId": 27,
  "state": "completed",
  "shippingEmail": "ithursfield2d@people.com.cn",
  "shippingAddress": "8533 Glendale Street",
  "shippingCity": "Pueblo",
  "shippingState": "Colorado",
  "shippingZip": 7448,
  "orderCost": 3768
}, {
  "userId": 59,
  "state": "processing",
  "shippingEmail": "stivenan2e@mozilla.com",
  "shippingAddress": "2 Maple Wood Crossing",
  "shippingCity": "Jacksonville",
  "shippingState": "Florida",
  "shippingZip": 8032,
  "orderCost": 4016
}, {
  "userId": 45,
  "state": "completed",
  "shippingEmail": "mboshell2f@ocn.ne.jp",
  "shippingAddress": "64832 Mallard Trail",
  "shippingCity": "Kansas City",
  "shippingState": "Missouri",
  "shippingZip": 8804,
  "orderCost": 4064
}, {
  "userId": 79,
  "state": "cancelled",
  "shippingEmail": "kardley2g@china.com.cn",
  "shippingAddress": "533 Anzinger Avenue",
  "shippingCity": "Sacramento",
  "shippingState": "California",
  "shippingZip": 4866,
  "orderCost": 588
}, {
  "userId": 80,
  "state": "created",
  "shippingEmail": "jiston2h@stumbleupon.com",
  "shippingAddress": "76 Huxley Court",
  "shippingCity": "Columbus",
  "shippingState": "Ohio",
  "shippingZip": 4881,
  "orderCost": 3978
}, {
  "userId": 20,
  "state": "completed",
  "shippingEmail": "uhallmark2i@businesswire.com",
  "shippingAddress": "839 Mayer Pass",
  "shippingCity": "Sioux Falls",
  "shippingState": "South Dakota",
  "shippingZip": 8042,
  "orderCost": 3919
}, {
  "userId": 21,
  "state": "cancelled",
  "shippingEmail": "mabbate2j@stumbleupon.com",
  "shippingAddress": "623 Hayes Street",
  "shippingCity": "Macon",
  "shippingState": "Georgia",
  "shippingZip": 4614,
  "orderCost": 220
}, {
  "userId": 38,
  "state": "completed",
  "shippingEmail": "ggalbraeth2k@scientificamerican.com",
  "shippingAddress": "7901 Hoepker Trail",
  "shippingCity": "Charleston",
  "shippingState": "West Virginia",
  "shippingZip": 6949,
  "orderCost": 1895
}, {
  "userId": 43,
  "state": "cancelled",
  "shippingEmail": "ethody2l@patch.com",
  "shippingAddress": "85 Northport Way",
  "shippingCity": "Birmingham",
  "shippingState": "Alabama",
  "shippingZip": 8695,
  "orderCost": 4440
}, {
  "userId": 61,
  "state": "cancelled",
  "shippingEmail": "kshah2m@smugmug.com",
  "shippingAddress": "192 David Center",
  "shippingCity": "Seattle",
  "shippingState": "Washington",
  "shippingZip": 7595,
  "orderCost": 2697
}, {
  "userId": 88,
  "state": "created",
  "shippingEmail": "crockell2n@bbc.co.uk",
  "shippingAddress": "02 Dennis Place",
  "shippingCity": "Memphis",
  "shippingState": "Tennessee",
  "shippingZip": 7382,
  "orderCost": 2251
}, {
  "userId": 47,
  "state": "created",
  "shippingEmail": "dbarbie2o@moonfruit.com",
  "shippingAddress": "58565 Shelley Place",
  "shippingCity": "Sacramento",
  "shippingState": "California",
  "shippingZip": 3257,
  "orderCost": 3075
}, {
  "userId": 34,
  "state": "completed",
  "shippingEmail": "ghutable2p@dailymotion.com",
  "shippingAddress": "1 Anhalt Alley",
  "shippingCity": "Battle Creek",
  "shippingState": "Michigan",
  "shippingZip": 5261,
  "orderCost": 1184
}, {
  "userId": 39,
  "state": "processing",
  "shippingEmail": "amatantsev2q@accuweather.com",
  "shippingAddress": "54691 Mosinee Street",
  "shippingCity": "Bloomington",
  "shippingState": "Indiana",
  "shippingZip": 3705,
  "orderCost": 2145
}, {
  "userId": 82,
  "state": "created",
  "shippingEmail": "mheustace2r@facebook.com",
  "shippingAddress": "34233 Jay Trail",
  "shippingCity": "Hartford",
  "shippingState": "Connecticut",
  "shippingZip": 5085,
  "orderCost": 4165
},
{
  "userId": 63,
  "state": "cancelled",
  "shippingEmail": "hwickey0@hhs.gov",
  "shippingAddress": "57 Kedzie Lane",
  "shippingCity": "Los Angeles",
  "shippingState": "California",
  "shippingZip": 4381,
  "orderCost": 4605
}, {
  "userId": 96,
  "state": "created",
  "shippingEmail": "tvasnetsov1@yellowbook.com",
  "shippingAddress": "76186 Ryan Avenue",
  "shippingCity": "Memphis",
  "shippingState": "Tennessee",
  "shippingZip": 3773,
  "orderCost": 2363
}, {
  "userId": 81,
  "state": "created",
  "shippingEmail": "rstiff2@de.vu",
  "shippingAddress": "2 Sage Point",
  "shippingCity": "Savannah",
  "shippingState": "Georgia",
  "shippingZip": 7727,
  "orderCost": 1358
}, {
  "userId": 71,
  "state": "processing",
  "shippingEmail": "spostle3@dropbox.com",
  "shippingAddress": "73 Hansons Center",
  "shippingCity": "Omaha",
  "shippingState": "Nebraska",
  "shippingZip": 5752,
  "orderCost": 4467
}, {
  "userId": 20,
  "state": "cancelled",
  "shippingEmail": "ksweatman4@wunderground.com",
  "shippingAddress": "12010 Dakota Alley",
  "shippingCity": "Memphis",
  "shippingState": "Tennessee",
  "shippingZip": 2382,
  "orderCost": 2381
}, {
  "userId": 70,
  "state": "processing",
  "shippingEmail": "rfarrand5@senate.gov",
  "shippingAddress": "592 Katie Trail",
  "shippingCity": "Brooklyn",
  "shippingState": "New York",
  "shippingZip": 8521,
  "orderCost": 3022
}, {
  "userId": 87,
  "state": "created",
  "shippingEmail": "lgamlyn6@soundcloud.com",
  "shippingAddress": "6 Elgar Road",
  "shippingCity": "Hot Springs National Park",
  "shippingState": "Arkansas",
  "shippingZip": 2131,
  "orderCost": 825
}, {
  "userId": 81,
  "state": "completed",
  "shippingEmail": "mfilinkov7@pinterest.com",
  "shippingAddress": "2460 Transport Park",
  "shippingCity": "Pompano Beach",
  "shippingState": "Florida",
  "shippingZip": 6762,
  "orderCost": 867
}, {
  "userId": 36,
  "state": "created",
  "shippingEmail": "efleckney8@amazon.co.jp",
  "shippingAddress": "540 Derek Plaza",
  "shippingCity": "Richmond",
  "shippingState": "Virginia",
  "shippingZip": 4199,
  "orderCost": 2960
}, {
  "userId": 84,
  "state": "completed",
  "shippingEmail": "lbrahmer9@123-reg.co.uk",
  "shippingAddress": "5809 Westridge Way",
  "shippingCity": "Lansing",
  "shippingState": "Michigan",
  "shippingZip": 6744,
  "orderCost": 3346
}, {
  "userId": 83,
  "state": "completed",
  "shippingEmail": "pmacallestera@nps.gov",
  "shippingAddress": "800 Charing Cross Place",
  "shippingCity": "Los Angeles",
  "shippingState": "California",
  "shippingZip": 2317,
  "orderCost": 3782
}, {
  "userId": 19,
  "state": "completed",
  "shippingEmail": "tbattyeb@uol.com.br",
  "shippingAddress": "1 Johnson Circle",
  "shippingCity": "San Francisco",
  "shippingState": "California",
  "shippingZip": 8315,
  "orderCost": 4785
}, {
  "userId": 44,
  "state": "created",
  "shippingEmail": "plashamc@samsung.com",
  "shippingAddress": "951 Orin Road",
  "shippingCity": "Tampa",
  "shippingState": "Florida",
  "shippingZip": 6635,
  "orderCost": 790
}, {
  "userId": 27,
  "state": "completed",
  "shippingEmail": "tdiganced@geocities.jp",
  "shippingAddress": "140 Graedel Court",
  "shippingCity": "Charlotte",
  "shippingState": "North Carolina",
  "shippingZip": 3258,
  "orderCost": 3672
}, {
  "userId": 25,
  "state": "completed",
  "shippingEmail": "ekaesmanse@fc2.com",
  "shippingAddress": "7596 Elka Pass",
  "shippingCity": "Madison",
  "shippingState": "Wisconsin",
  "shippingZip": 8494,
  "orderCost": 174
}, {
  "userId": 97,
  "state": "completed",
  "shippingEmail": "dgreenleyf@photobucket.com",
  "shippingAddress": "7182 Loftsgordon Hill",
  "shippingCity": "Akron",
  "shippingState": "Ohio",
  "shippingZip": 2230,
  "orderCost": 731
}, {
  "userId": 22,
  "state": "created",
  "shippingEmail": "eseegerg@oracle.com",
  "shippingAddress": "9979 Eggendart Alley",
  "shippingCity": "Portland",
  "shippingState": "Oregon",
  "shippingZip": 3475,
  "orderCost": 1489
}, {
  "userId": 49,
  "state": "completed",
  "shippingEmail": "ftrinkwonh@cnn.com",
  "shippingAddress": "73 Rusk Park",
  "shippingCity": "Chicago",
  "shippingState": "Illinois",
  "shippingZip": 2146,
  "orderCost": 3296
}, {
  "userId": 100,
  "state": "processing",
  "shippingEmail": "cheinkei@php.net",
  "shippingAddress": "3243 Arkansas Way",
  "shippingCity": "Vienna",
  "shippingState": "Virginia",
  "shippingZip": 1983,
  "orderCost": 711
}, {
  "userId": 44,
  "state": "created",
  "shippingEmail": "cmaxsteadj@utexas.edu",
  "shippingAddress": "7 John Wall Pass",
  "shippingCity": "Tucson",
  "shippingState": "Arizona",
  "shippingZip": 4090,
  "orderCost": 1919
}, {
  "userId": 62,
  "state": "processing",
  "shippingEmail": "bcaddank@hud.gov",
  "shippingAddress": "58879 Havey Point",
  "shippingCity": "Grand Forks",
  "shippingState": "North Dakota",
  "shippingZip": 1828,
  "orderCost": 3017
}, {
  "userId": 80,
  "state": "processing",
  "shippingEmail": "amccarthyl@cyberchimps.com",
  "shippingAddress": "6163 Vahlen Point",
  "shippingCity": "Katy",
  "shippingState": "Texas",
  "shippingZip": 5206,
  "orderCost": 4852
}, {
  "userId": 20,
  "state": "completed",
  "shippingEmail": "tcastledinem@hao123.com",
  "shippingAddress": "2562 Sutherland Pass",
  "shippingCity": "San Jose",
  "shippingState": "California",
  "shippingZip": 3271,
  "orderCost": 1459
}, {
  "userId": 42,
  "state": "cancelled",
  "shippingEmail": "kcossemn@wunderground.com",
  "shippingAddress": "4 Esch Alley",
  "shippingCity": "Washington",
  "shippingState": "District of Columbia",
  "shippingZip": 5448,
  "orderCost": 2329
}, {
  "userId": 77,
  "state": "cancelled",
  "shippingEmail": "rboldto@abc.net.au",
  "shippingAddress": "6225 1st Center",
  "shippingCity": "Spokane",
  "shippingState": "Washington",
  "shippingZip": 2156,
  "orderCost": 3220
}, {
  "userId": 45,
  "state": "completed",
  "shippingEmail": "rstenbridgep@psu.edu",
  "shippingAddress": "57 Golf Course Point",
  "shippingCity": "Buffalo",
  "shippingState": "New York",
  "shippingZip": 8939,
  "orderCost": 898
}, {
  "userId": 78,
  "state": "cancelled",
  "shippingEmail": "bknightq@theguardian.com",
  "shippingAddress": "55819 Anthes Trail",
  "shippingCity": "Spokane",
  "shippingState": "Washington",
  "shippingZip": 6747,
  "orderCost": 797
}, {
  "userId": 31,
  "state": "cancelled",
  "shippingEmail": "amcalpiner@google.co.jp",
  "shippingAddress": "7 Hallows Parkway",
  "shippingCity": "Memphis",
  "shippingState": "Tennessee",
  "shippingZip": 6907,
  "orderCost": 1203
}, {
  "userId": 91,
  "state": "created",
  "shippingEmail": "sselveys@hugedomains.com",
  "shippingAddress": "0166 Dexter Plaza",
  "shippingCity": "Santa Barbara",
  "shippingState": "California",
  "shippingZip": 4072,
  "orderCost": 4285
}, {
  "userId": 24,
  "state": "processing",
  "shippingEmail": "afiket@fastcompany.com",
  "shippingAddress": "67 Bluestem Circle",
  "shippingCity": "Washington",
  "shippingState": "District of Columbia",
  "shippingZip": 6666,
  "orderCost": 2194
}, {
  "userId": 92,
  "state": "cancelled",
  "shippingEmail": "jemneyu@sourceforge.net",
  "shippingAddress": "46 Twin Pines Alley",
  "shippingCity": "Hartford",
  "shippingState": "Connecticut",
  "shippingZip": 3832,
  "orderCost": 1753
}, {
  "userId": 82,
  "state": "created",
  "shippingEmail": "jjeanneauv@yandex.ru",
  "shippingAddress": "91976 Superior Hill",
  "shippingCity": "Jersey City",
  "shippingState": "New Jersey",
  "shippingZip": 5649,
  "orderCost": 2749
}, {
  "userId": 2,
  "state": "processing",
  "shippingEmail": "wdyzartw@furl.net",
  "shippingAddress": "121 Autumn Leaf Place",
  "shippingCity": "Erie",
  "shippingState": "Pennsylvania",
  "shippingZip": 8465,
  "orderCost": 441
}, {
  "userId": 83,
  "state": "processing",
  "shippingEmail": "epitrassox@army.mil",
  "shippingAddress": "2 Bashford Parkway",
  "shippingCity": "Buffalo",
  "shippingState": "New York",
  "shippingZip": 2926,
  "orderCost": 3242
}, {
  "userId": 74,
  "state": "completed",
  "shippingEmail": "cdearmany@diigo.com",
  "shippingAddress": "65 Sloan Drive",
  "shippingCity": "Huntington",
  "shippingState": "West Virginia",
  "shippingZip": 1734,
  "orderCost": 4151
}, {
  "userId": 66,
  "state": "processing",
  "shippingEmail": "fpuzeyz@tinypic.com",
  "shippingAddress": "7021 Eagan Plaza",
  "shippingCity": "Hayward",
  "shippingState": "California",
  "shippingZip": 1087,
  "orderCost": 3597
}, {
  "userId": 98,
  "state": "cancelled",
  "shippingEmail": "hdevonish10@yolasite.com",
  "shippingAddress": "47687 Oxford Pass",
  "shippingCity": "Tampa",
  "shippingState": "Florida",
  "shippingZip": 8571,
  "orderCost": 2483
}, {
  "userId": 74,
  "state": "processing",
  "shippingEmail": "avalek11@fda.gov",
  "shippingAddress": "1 Hayes Street",
  "shippingCity": "Bakersfield",
  "shippingState": "California",
  "shippingZip": 8482,
  "orderCost": 1767
}, {
  "userId": 40,
  "state": "processing",
  "shippingEmail": "kproudman12@eventbrite.com",
  "shippingAddress": "833 Grasskamp Lane",
  "shippingCity": "Virginia Beach",
  "shippingState": "Virginia",
  "shippingZip": 5391,
  "orderCost": 279
}, {
  "userId": 22,
  "state": "created",
  "shippingEmail": "babrahams13@nps.gov",
  "shippingAddress": "23801 Meadow Ridge Trail",
  "shippingCity": "Baton Rouge",
  "shippingState": "Louisiana",
  "shippingZip": 3691,
  "orderCost": 2706
}, {
  "userId": 59,
  "state": "completed",
  "shippingEmail": "aransley14@oaic.gov.au",
  "shippingAddress": "4 Dovetail Trail",
  "shippingCity": "Topeka",
  "shippingState": "Kansas",
  "shippingZip": 4978,
  "orderCost": 4188
}, {
  "userId": 10,
  "state": "processing",
  "shippingEmail": "rknight15@cnet.com",
  "shippingAddress": "98 Merry Street",
  "shippingCity": "Erie",
  "shippingState": "Pennsylvania",
  "shippingZip": 1001,
  "orderCost": 4231
}, {
  "userId": 35,
  "state": "completed",
  "shippingEmail": "aarnholz16@tuttocitta.it",
  "shippingAddress": "48385 Tomscot Park",
  "shippingCity": "Washington",
  "shippingState": "District of Columbia",
  "shippingZip": 6257,
  "orderCost": 1201
}, {
  "userId": 53,
  "state": "completed",
  "shippingEmail": "mgrant17@i2i.jp",
  "shippingAddress": "648 Barby Road",
  "shippingCity": "San Francisco",
  "shippingState": "California",
  "shippingZip": 7513,
  "orderCost": 1830
}, {
  "userId": 28,
  "state": "cancelled",
  "shippingEmail": "tburtt18@wikia.com",
  "shippingAddress": "3 Marquette Hill",
  "shippingCity": "Las Vegas",
  "shippingState": "Nevada",
  "shippingZip": 4314,
  "orderCost": 3947
}, {
  "userId": 25,
  "state": "cancelled",
  "shippingEmail": "gflawith19@youtu.be",
  "shippingAddress": "37 High Crossing Crossing",
  "shippingCity": "El Paso",
  "shippingState": "Texas",
  "shippingZip": 7517,
  "orderCost": 4557
}, {
  "userId": 95,
  "state": "processing",
  "shippingEmail": "dconboy1a@microsoft.com",
  "shippingAddress": "956 Messerschmidt Drive",
  "shippingCity": "Baltimore",
  "shippingState": "Maryland",
  "shippingZip": 7895,
  "orderCost": 1400
}, {
  "userId": 96,
  "state": "cancelled",
  "shippingEmail": "bstreatley1b@spotify.com",
  "shippingAddress": "830 Anzinger Lane",
  "shippingCity": "Springfield",
  "shippingState": "Massachusetts",
  "shippingZip": 2474,
  "orderCost": 4236
}, {
  "userId": 21,
  "state": "processing",
  "shippingEmail": "goneary1c@goo.gl",
  "shippingAddress": "80 Gateway Parkway",
  "shippingCity": "San Antonio",
  "shippingState": "Texas",
  "shippingZip": 6855,
  "orderCost": 4401
}, {
  "userId": 24,
  "state": "cancelled",
  "shippingEmail": "khallifax1d@archive.org",
  "shippingAddress": "7096 Bashford Terrace",
  "shippingCity": "Reno",
  "shippingState": "Nevada",
  "shippingZip": 5817,
  "orderCost": 317
}, {
  "userId": 54,
  "state": "completed",
  "shippingEmail": "rtreadwell1e@mapquest.com",
  "shippingAddress": "60 Tomscot Center",
  "shippingCity": "Atlanta",
  "shippingState": "Georgia",
  "shippingZip": 8796,
  "orderCost": 2139
}, {
  "userId": 63,
  "state": "created",
  "shippingEmail": "mconnolly1f@tinyurl.com",
  "shippingAddress": "9 Pennsylvania Trail",
  "shippingCity": "New York City",
  "shippingState": "New York",
  "shippingZip": 5365,
  "orderCost": 2046
}, {
  "userId": 13,
  "state": "processing",
  "shippingEmail": "mbeckett1g@wikispaces.com",
  "shippingAddress": "866 Debra Court",
  "shippingCity": "Sacramento",
  "shippingState": "California",
  "shippingZip": 7641,
  "orderCost": 2565
}, {
  "userId": 73,
  "state": "processing",
  "shippingEmail": "rgrabham1h@chicagotribune.com",
  "shippingAddress": "0 Erie Pass",
  "shippingCity": "Springfield",
  "shippingState": "Massachusetts",
  "shippingZip": 3308,
  "orderCost": 3951
}, {
  "userId": 87,
  "state": "created",
  "shippingEmail": "mollett1i@senate.gov",
  "shippingAddress": "1349 Alpine Junction",
  "shippingCity": "Philadelphia",
  "shippingState": "Pennsylvania",
  "shippingZip": 3622,
  "orderCost": 2044
}, {
  "userId": 26,
  "state": "cancelled",
  "shippingEmail": "gbuckthorpe1j@i2i.jp",
  "shippingAddress": "98919 Coolidge Terrace",
  "shippingCity": "Bronx",
  "shippingState": "New York",
  "shippingZip": 6522,
  "orderCost": 801
}, {
  "userId": 14,
  "state": "cancelled",
  "shippingEmail": "dbahl1k@joomla.org",
  "shippingAddress": "847 Brown Street",
  "shippingCity": "Minneapolis",
  "shippingState": "Minnesota",
  "shippingZip": 2376,
  "orderCost": 1172
}, {
  "userId": 63,
  "state": "processing",
  "shippingEmail": "tchatan1l@psu.edu",
  "shippingAddress": "878 Stoughton Drive",
  "shippingCity": "Cincinnati",
  "shippingState": "Ohio",
  "shippingZip": 4338,
  "orderCost": 4879
}, {
  "userId": 21,
  "state": "created",
  "shippingEmail": "ncoppin1m@discovery.com",
  "shippingAddress": "73 Hoepker Hill",
  "shippingCity": "El Paso",
  "shippingState": "Texas",
  "shippingZip": 6720,
  "orderCost": 3620
}, {
  "userId": 81,
  "state": "created",
  "shippingEmail": "bphidgin1n@wired.com",
  "shippingAddress": "5 Lien Drive",
  "shippingCity": "Tallahassee",
  "shippingState": "Florida",
  "shippingZip": 5642,
  "orderCost": 806
}, {
  "userId": 76,
  "state": "cancelled",
  "shippingEmail": "rclampin1o@rambler.ru",
  "shippingAddress": "783 Acker Terrace",
  "shippingCity": "Fort Worth",
  "shippingState": "Texas",
  "shippingZip": 1752,
  "orderCost": 408
}, {
  "userId": 92,
  "state": "created",
  "shippingEmail": "bgasker1p@pen.io",
  "shippingAddress": "20 Hudson Plaza",
  "shippingCity": "Washington",
  "shippingState": "District of Columbia",
  "shippingZip": 4384,
  "orderCost": 1609
}, {
  "userId": 15,
  "state": "created",
  "shippingEmail": "pwareham1q@istockphoto.com",
  "shippingAddress": "93 Warbler Crossing",
  "shippingCity": "Des Moines",
  "shippingState": "Iowa",
  "shippingZip": 6189,
  "orderCost": 1677
}, {
  "userId": 35,
  "state": "created",
  "shippingEmail": "ddezamudio1r@sfgate.com",
  "shippingAddress": "49094 Thackeray Center",
  "shippingCity": "Laurel",
  "shippingState": "Maryland",
  "shippingZip": 4806,
  "orderCost": 1881
}, {
  "userId": 90,
  "state": "processing",
  "shippingEmail": "jcane1s@scribd.com",
  "shippingAddress": "29548 Thompson Place",
  "shippingCity": "Milwaukee",
  "shippingState": "Wisconsin",
  "shippingZip": 1439,
  "orderCost": 65
}, {
  "userId": 95,
  "state": "completed",
  "shippingEmail": "pdungay1t@dailymotion.com",
  "shippingAddress": "4 American Ash Park",
  "shippingCity": "Newton",
  "shippingState": "Massachusetts",
  "shippingZip": 3574,
  "orderCost": 2048
}, {
  "userId": 28,
  "state": "created",
  "shippingEmail": "tscade1u@gravatar.com",
  "shippingAddress": "191 Carioca Pass",
  "shippingCity": "Mansfield",
  "shippingState": "Ohio",
  "shippingZip": 1365,
  "orderCost": 3288
}, {
  "userId": 46,
  "state": "completed",
  "shippingEmail": "pbraiden1v@aol.com",
  "shippingAddress": "42312 1st Pass",
  "shippingCity": "New York City",
  "shippingState": "New York",
  "shippingZip": 7671,
  "orderCost": 1524
}, {
  "userId": 33,
  "state": "created",
  "shippingEmail": "dweiss1w@booking.com",
  "shippingAddress": "7042 Bartillon Crossing",
  "shippingCity": "Tulsa",
  "shippingState": "Oklahoma",
  "shippingZip": 2596,
  "orderCost": 4250
}, {
  "userId": 24,
  "state": "created",
  "shippingEmail": "darstingall1x@privacy.gov.au",
  "shippingAddress": "940 Northland Alley",
  "shippingCity": "Portland",
  "shippingState": "Oregon",
  "shippingZip": 2721,
  "orderCost": 1591
}, {
  "userId": 33,
  "state": "created",
  "shippingEmail": "ofewkes1y@unc.edu",
  "shippingAddress": "2 Hermina Way",
  "shippingCity": "Portland",
  "shippingState": "Maine",
  "shippingZip": 5716,
  "orderCost": 3769
}, {
  "userId": 10,
  "state": "completed",
  "shippingEmail": "mpeet1z@hubpages.com",
  "shippingAddress": "6061 Lawn Street",
  "shippingCity": "San Francisco",
  "shippingState": "California",
  "shippingZip": 1409,
  "orderCost": 413
}, {
  "userId": 2,
  "state": "cancelled",
  "shippingEmail": "cgreenhow20@rakuten.co.jp",
  "shippingAddress": "68 Village Green Junction",
  "shippingCity": "Akron",
  "shippingState": "Ohio",
  "shippingZip": 5357,
  "orderCost": 4868
}, {
  "userId": 9,
  "state": "completed",
  "shippingEmail": "dashwood21@msu.edu",
  "shippingAddress": "68372 Butternut Way",
  "shippingCity": "Washington",
  "shippingState": "District of Columbia",
  "shippingZip": 6930,
  "orderCost": 1601
}, {
  "userId": 23,
  "state": "completed",
  "shippingEmail": "cjimenez22@reverbnation.com",
  "shippingAddress": "6 Scofield Crossing",
  "shippingCity": "Raleigh",
  "shippingState": "North Carolina",
  "shippingZip": 6562,
  "orderCost": 1622
}, {
  "userId": 100,
  "state": "created",
  "shippingEmail": "bclem23@infoseek.co.jp",
  "shippingAddress": "60084 Darwin Avenue",
  "shippingCity": "Madison",
  "shippingState": "Wisconsin",
  "shippingZip": 3212,
  "orderCost": 4530
}, {
  "userId": 12,
  "state": "cancelled",
  "shippingEmail": "jgoodayle24@latimes.com",
  "shippingAddress": "7 Bluejay Lane",
  "shippingCity": "Saint Paul",
  "shippingState": "Minnesota",
  "shippingZip": 3418,
  "orderCost": 785
}, {
  "userId": 71,
  "state": "completed",
  "shippingEmail": "eskylett25@oaic.gov.au",
  "shippingAddress": "9185 Di Loreto Circle",
  "shippingCity": "Chicago",
  "shippingState": "Illinois",
  "shippingZip": 7858,
  "orderCost": 31
}, {
  "userId": 32,
  "state": "processing",
  "shippingEmail": "nstocky26@mit.edu",
  "shippingAddress": "9619 Basil Trail",
  "shippingCity": "Columbus",
  "shippingState": "Ohio",
  "shippingZip": 2136,
  "orderCost": 2173
}, {
  "userId": 35,
  "state": "processing",
  "shippingEmail": "wstoneham27@irs.gov",
  "shippingAddress": "7920 La Follette Way",
  "shippingCity": "Birmingham",
  "shippingState": "Alabama",
  "shippingZip": 7716,
  "orderCost": 2724
}, {
  "userId": 39,
  "state": "processing",
  "shippingEmail": "medgeson28@imdb.com",
  "shippingAddress": "371 Mayfield Court",
  "shippingCity": "Las Vegas",
  "shippingState": "Nevada",
  "shippingZip": 7238,
  "orderCost": 133
}, {
  "userId": 20,
  "state": "created",
  "shippingEmail": "dstirman29@a8.net",
  "shippingAddress": "7197 Dorton Street",
  "shippingCity": "Gastonia",
  "shippingState": "North Carolina",
  "shippingZip": 7343,
  "orderCost": 597
}, {
  "userId": 42,
  "state": "processing",
  "shippingEmail": "dstanaway2a@google.com.br",
  "shippingAddress": "34 Blue Bill Park Park",
  "shippingCity": "Orlando",
  "shippingState": "Florida",
  "shippingZip": 1342,
  "orderCost": 3912
}, {
  "userId": 28,
  "state": "completed",
  "shippingEmail": "bbalassa2b@youku.com",
  "shippingAddress": "21096 Grayhawk Avenue",
  "shippingCity": "Pasadena",
  "shippingState": "California",
  "shippingZip": 8289,
  "orderCost": 2632
}, {
  "userId": 53,
  "state": "created",
  "shippingEmail": "trenak2c@cornell.edu",
  "shippingAddress": "03 Clyde Gallagher Plaza",
  "shippingCity": "Phoenix",
  "shippingState": "Arizona",
  "shippingZip": 4945,
  "orderCost": 797
}, {
  "userId": 2,
  "state": "processing",
  "shippingEmail": "lwenden2d@google.ca",
  "shippingAddress": "5807 Shelley Way",
  "shippingCity": "Carson City",
  "shippingState": "Nevada",
  "shippingZip": 6182,
  "orderCost": 4544
}, {
  "userId": 6,
  "state": "cancelled",
  "shippingEmail": "mmaryin2e@sciencedirect.com",
  "shippingAddress": "93968 Montana Terrace",
  "shippingCity": "Portland",
  "shippingState": "Oregon",
  "shippingZip": 5075,
  "orderCost": 3531
}, {
  "userId": 20,
  "state": "completed",
  "shippingEmail": "dbenitti2f@mashable.com",
  "shippingAddress": "1062 Towne Plaza",
  "shippingCity": "Orlando",
  "shippingState": "Florida",
  "shippingZip": 4399,
  "orderCost": 2053
}, {
  "userId": 96,
  "state": "created",
  "shippingEmail": "hpinor2g@epa.gov",
  "shippingAddress": "2 Kingsford Alley",
  "shippingCity": "Akron",
  "shippingState": "Ohio",
  "shippingZip": 3911,
  "orderCost": 571
}, {
  "userId": 97,
  "state": "processing",
  "shippingEmail": "wcullimore2h@unc.edu",
  "shippingAddress": "86 Sommers Circle",
  "shippingCity": "Phoenix",
  "shippingState": "Arizona",
  "shippingZip": 3015,
  "orderCost": 4612
}, {
  "userId": 25,
  "state": "processing",
  "shippingEmail": "clutas2i@msu.edu",
  "shippingAddress": "20624 Kingsford Park",
  "shippingCity": "Jefferson City",
  "shippingState": "Missouri",
  "shippingZip": 8823,
  "orderCost": 613
}, {
  "userId": 48,
  "state": "cancelled",
  "shippingEmail": "rballinghall2j@altervista.org",
  "shippingAddress": "02 Crest Line Place",
  "shippingCity": "Amarillo",
  "shippingState": "Texas",
  "shippingZip": 5018,
  "orderCost": 279
}, {
  "userId": 12,
  "state": "cancelled",
  "shippingEmail": "bgantlett2k@networksolutions.com",
  "shippingAddress": "0451 Manufacturers Street",
  "shippingCity": "Glendale",
  "shippingState": "Arizona",
  "shippingZip": 3562,
  "orderCost": 4874
}, {
  "userId": 93,
  "state": "completed",
  "shippingEmail": "dpattison2l@shutterfly.com",
  "shippingAddress": "00 Beilfuss Way",
  "shippingCity": "Katy",
  "shippingState": "Texas",
  "shippingZip": 8314,
  "orderCost": 3736
}, {
  "userId": 26,
  "state": "processing",
  "shippingEmail": "vhappel2m@gnu.org",
  "shippingAddress": "93 Buell Parkway",
  "shippingCity": "Saint Paul",
  "shippingState": "Minnesota",
  "shippingZip": 1824,
  "orderCost": 116
}, {
  "userId": 31,
  "state": "created",
  "shippingEmail": "cbisiker2n@dedecms.com",
  "shippingAddress": "3360 Buena Vista Way",
  "shippingCity": "Long Beach",
  "shippingState": "California",
  "shippingZip": 2393,
  "orderCost": 2563
}, {
  "userId": 14,
  "state": "cancelled",
  "shippingEmail": "vstuckes2o@vk.com",
  "shippingAddress": "2 Maywood Point",
  "shippingCity": "Kansas City",
  "shippingState": "Missouri",
  "shippingZip": 3646,
  "orderCost": 1696
}, {
  "userId": 26,
  "state": "cancelled",
  "shippingEmail": "sshiers2p@wikipedia.org",
  "shippingAddress": "59009 Bluejay Point",
  "shippingCity": "Fort Lauderdale",
  "shippingState": "Florida",
  "shippingZip": 2448,
  "orderCost": 4097
}, {
  "userId": 29,
  "state": "processing",
  "shippingEmail": "lfilippov2q@odnoklassniki.ru",
  "shippingAddress": "62050 Forster Alley",
  "shippingCity": "Washington",
  "shippingState": "District of Columbia",
  "shippingZip": 5612,
  "orderCost": 3077
}, {
  "userId": 81,
  "state": "cancelled",
  "shippingEmail": "cscola2r@liveinternet.ru",
  "shippingAddress": "6883 Raven Street",
  "shippingCity": "Memphis",
  "shippingState": "Tennessee",
  "shippingZip": 1505,
  "orderCost": 1306
}]

module.exports = orders