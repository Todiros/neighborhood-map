const chargingStation = {  
    "ID":107383,
    "UUID":"F8754C93-7CC5-4C7F-99C7-35E5003B864F",
    "ParentChargePointID":null,
    "DataProviderID":1,
    "DataProvider":{  
       "WebsiteURL":"http://openchargemap.org",
       "Comments":null,
       "DataProviderStatusType":{  
          "IsProviderEnabled":true,
          "ID":1,
          "Title":"Manual Data Entry"
       },
       "IsRestrictedEdit":false,
       "IsOpenDataLicensed":true,
       "IsApprovedImport":true,
       "License":"Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)",
       "DateLastImported":null,
       "ID":1,
       "Title":"Open Charge Map Contributors"
    },
    "DataProvidersReference":null,
    "OperatorID":45,
    "OperatorInfo":{  
       "WebsiteURL":null,
       "Comments":"For use when the operator of the equipment is a single business owner connected to the location and equipment is not part of a larger network",
       "PhonePrimaryContact":null,
       "PhoneSecondaryContact":null,
       "IsPrivateIndividual":false,
       "AddressInfo":null,
       "BookingURL":null,
       "ContactEmail":null,
       "FaultReportEmail":null,
       "IsRestrictedEdit":null,
       "ID":45,
       "Title":"(Business Owner at Location)"
    },
    "OperatorsReference":null,
    "UsageTypeID":6,
    "UsageType":{  
       "IsPayAtLocation":false,
       "IsMembershipRequired":false,
       "IsAccessKeyRequired":false,
       "ID":6,
       "Title":"Private - For Staff, Visitors or Customers"
    },
    "UsageCost":"-",
    "AddressInfo":{  
       "ID":107729,
       "Title":"Hotel Marinela Sofia",
       "AddressLine1":"100, James Bourchier Boulevard",
       "AddressLine2":null,
       "Town":"Sofia",
       "StateOrProvince":null,
       "Postcode":"1407",
       "CountryID":39,
       "Country":{  
          "ISOCode":"BG",
          "ContinentCode":"EU",
          "ID":39,
          "Title":"Bulgaria"
       },
       "Latitude":42.6722178309861,
       "Longitude":23.3197738335441,
       "ContactTelephone1":"+35 929692222",
       "ContactTelephone2":null,
       "ContactEmail":"reservations@hotel-marinela.com",
       "AccessComments":"Available to hotel/restaurant/bar clients for free.\r\n7.3kW type2 charging station with no cable attached (bring your own cable).\r\nYou need a card from the reception to enter hotel parking.",
       "RelatedURL":"http://www.hotel-marinela.com/en/home-en/home-en.htm",
       "Distance":null,
       "DistanceUnit":0
    },
    "NumberOfPoints":1,
    "GeneralComments":"Available to hotel/restaurant/bar clients for free.\r\n7.3kW type2 charging station with no cable attached (bring your own cable).\r\nYou need a card from the reception to enter hotel parking.",
    "DatePlanned":null,
    "DateLastConfirmed":null,
    "StatusTypeID":50,
    "StatusType":{  
       "IsOperational":true,
       "IsUserSelectable":true,
       "ID":50,
       "Title":"Operational"
    },
    "DateLastStatusUpdate":"2018-07-27T20:13:00Z",
    "DataQualityLevel":1,
    "DateCreated":"2018-07-27T10:51:00Z",
    "SubmissionStatusTypeID":200,
    "SubmissionStatus":{  
       "IsLive":true,
       "ID":200,
       "Title":"Submission Published"
    },
    "UserComments":null,
    "PercentageSimilarity":null,
    "Connections":[  
       {  
          "ID":151515,
          "ConnectionTypeID":25,
          "ConnectionType":{  
             "FormalName":"IEC 62196-2 Type 2",
             "IsDiscontinued":false,
             "IsObsolete":false,
             "ID":25,
             "Title":"Mennekes (Type 2)"
          },
          "Reference":null,
          "StatusTypeID":50,
          "StatusType":{  
             "IsOperational":true,
             "IsUserSelectable":true,
             "ID":50,
             "Title":"Operational"
          },
          "LevelID":2,
          "Level":{  
             "Comments":"Over 2 kW, usually non-domestic socket type",
             "IsFastChargeCapable":false,
             "ID":2,
             "Title":"Level 2 : Medium (Over 2kW)"
          },
          "Amps":32,
          "Voltage":230,
          "PowerKW":7.3,
          "CurrentTypeID":10,
          "CurrentType":{  
             "Description":"Alternating Current - Single Phase",
             "ID":10,
             "Title":"AC (Single-Phase)"
          },
          "Quantity":1,
          "Comments":null
       }
    ],
    "MediaItems":[  
       {  
          "ID":16050,
          "ChargePointID":107383,
          "ItemURL":"https://s3-ap-southeast-2.amazonaws.com/openchargemap/images/BG/OCM107383/OCM-107383.orig.2018072710514269.jpeg",
          "ItemThumbnailURL":"https://s3-ap-southeast-2.amazonaws.com/openchargemap/images/BG/OCM107383/OCM-107383.thmb.2018072710514269.jpeg",
          "Comment":"Dave's Tesla P100DL charging @7.3kW on July 26th, 2018.",
          "IsEnabled":true,
          "IsVideo":false,
          "IsFeaturedItem":false,
          "IsExternalResource":false,
          "MetadataValue":null,
          "User":{  
             "ID":15962,
             "IdentityProvider":null,
             "Identifier":null,
             "CurrentSessionToken":null,
             "Username":"thanar",
             "Profile":null,
             "Location":null,
             "WebsiteURL":null,
             "ReputationPoints":16,
             "Permissions":null,
             "PermissionsRequested":null,
             "DateCreated":null,
             "DateLastLogin":null,
             "IsProfilePublic":null,
             "IsEmergencyChargingProvider":null,
             "IsPublicChargingProvider":null,
             "Latitude":null,
             "Longitude":null,
             "EmailAddress":null,
             "EmailHash":null,
             "ProfileImageURL":"https://www.gravatar.com/avatar/82a022be8f047197130822c73a5139fc?s=80&d=mm",
             "IsCurrentSessionTokenValid":null,
             "APIKey":null,
             "SyncedSettings":null
          },
          "DateCreated":"2018-07-27T10:52:00Z"
       }
    ],
    "MetadataValues":null,
    "IsRecentlyVerified":false,
    "DateLastVerified":null
 }

 export default chargingStation