/*const samplePrisoners = [
  {
    undertrial_name: "Rajesh Kumar",
    jail_name: "Arthur Road Central Jail",
    offense_details: {
      Offense_name: "IPC 379 - Theft",
      maxCustodyPeriodForOffense: 3
    },
    case_details: {
      case_name: "IPC 379 - Theft",
      case_no: "CR-1245/2024",
      custody_start_date: new Date("2025-04-15")
    },
    status: "threshold reached",
    data_quality: "clean",
    Review_status: "pending status"
  },

  {
    undertrial_name: "Amit Sharma",
    jail_name: "Yerwada Central Prison",
    offense_details: {
      Offense_name: "IPC 420 - Cheating",
      maxCustodyPeriodForOffense: 7
    },
    case_details: {
      case_name: "IPC 420 - Cheating",
      case_no: "CR-7821/2023",
      custody_start_date: new Date("2024-01-10")
    },
    status: "urgent review",
    data_quality: "clean",
    Review_status: "awaiting officer"
  },

  {
    undertrial_name: "Vikram Patil",
    jail_name: "Taloja Central Jail",
    offense_details: {
      Offense_name: "IPC 323 - Voluntarily Causing Hurt",
      maxCustodyPeriodForOffense: 1
    },
    case_details: {
      case_name: "IPC 323 - Voluntarily Causing Hurt",
      case_no: "CR-3412/2025",
      custody_start_date: new Date("2025-12-20")
    },
    status: "approaching",
    data_quality: "clean",
    Review_status: "pending status"
  },

  {
    undertrial_name: "Sanjay Verma",
    jail_name: "Nagpur Central Prison",
    offense_details: {
      Offense_name: "IPC 406 - Criminal Breach of Trust",
      maxCustodyPeriodForOffense: 3
    },
    case_details: {
      case_name: "IPC 406 - Criminal Breach of Trust",
      case_no: "CR-9187/2024",
      custody_start_date: new Date("2025-02-05")
    },
    status: "data conflict arised",
    data_quality: "conflict",
    Review_status: "awaiting officer"
  }
];

module.exports = samplePrisoners;*/
const samplePrisoners = [
  {
    undertrial_name: "Rajesh Kumar",
    jail_name: "Arthur Road Central Jail",

    offense_details: {
      Offense_name: "IPC 379 - Theft",
      maxCustodyPeriodForOffense: 3
    },

    case_details: {
      case_name: "IPC 379 - Theft",
      case_no: "CR-1245/2024",
      custody_start_date: new Date("2025-04-15")
    },

    previous_case: [
      {
        case_name: "IPC 323 - Voluntarily Causing Hurt",
        case_no: "CR-452/2021",
        date: new Date("2021-06-10"),
        status: "Convicted",
        outcome: "Fine"
      },
      {
        case_name: "IPC 504 - Intentional Insult",
        case_no: "CR-821/2023",
        date: new Date("2023-02-15"),
        status: "Acquitted",
        outcome: "Acquitted"
      }
    ],

    status: "threshold reached",
    data_quality: "clean",
    Review_status: "pending status"
  },


  {
    undertrial_name: "Amit Sharma",
    jail_name: "Yerwada Central Prison",

    offense_details: {
      Offense_name: "IPC 420 - Cheating",
      maxCustodyPeriodForOffense: 7
    },

    case_details: {
      case_name: "IPC 420 - Cheating",
      case_no: "CR-7821/2023",
      custody_start_date: new Date("2024-01-10")
    },

    previous_case: [
      {
        case_name: "IPC 406 - Criminal Breach of Trust",
        case_no: "CR-1122/2020",
        date: new Date("2020-08-20"),
        status: "Convicted",
        outcome: "Imprisonment"
      }
    ],

    status: "urgent review",
    data_quality: "clean",
    Review_status: "awaiting officer"
  },


  {
    undertrial_name: "Vikram Patil",
    jail_name: "Taloja Central Jail",

    offense_details: {
      Offense_name: "IPC 323 - Voluntarily Causing Hurt",
      maxCustodyPeriodForOffense: 1
    },

    case_details: {
      case_name: "IPC 323 - Voluntarily Causing Hurt",
      case_no: "CR-3412/2025",
      custody_start_date: new Date("2025-12-20")
    },

    // No previous cases
    previous_case: [],

    status: "approaching",
    data_quality: "clean",
    Review_status: "pending status"
  },


  {
    undertrial_name: "Sanjay Verma",
    jail_name: "Nagpur Central Prison",

    offense_details: {
      Offense_name: "IPC 406 - Criminal Breach of Trust",
      maxCustodyPeriodForOffense: 3
    },

    case_details: {
      case_name: "IPC 406 - Criminal Breach of Trust",
      case_no: "CR-9187/2024",
      custody_start_date: new Date("2025-02-05")
    },

    previous_case: [
      {
        case_name: "IPC 420 - Cheating",
        case_no: "CR-7711/2021",
        date: new Date("2021-04-12"),
        status: "Pending",
        outcome: "Case ongoing"
      },
      {
        case_name: "IPC 379 - Theft",
        case_no: "CR-3356/2022",
        date: new Date("2022-09-18"),
        status: "Convicted",
        outcome: "Imprisonment"
      }
    ],

    status: "data conflict arised",
    data_quality: "conflict",
    Review_status: "awaiting officer"
  }
];

module.exports = samplePrisoners;