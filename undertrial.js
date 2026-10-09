const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Undertrials = new Schema([{
    undertrial_name:{
        type:String,
        required:true
    },
    jail_name:{
        type:"String",
        required:true
    },
    offense_details:{
    Offense_name:{
        type:String,
        required:true
    },
    maxCustodyPeriodForOffense:{
        type:Number,
        required:true
    }
    },
    case_details:{
        case_name:{
            type:String,
            required:true
        },
        case_no:{
            type:String,
            required:true
        },
        custody_start_date:{
            type:Date,
            required:true
        }
    },
    previous_case:[{
        case_name: String,
        case_no: String,
        date: Date,
        status: String,
        outcome: String
    }
    ],
    status:{
        type:String,
        enum:["threshold reached","urgent review","data conflict arised","approaching"]
    },
    data_quality:{
        type:String,
        enum:["conflict","clean"]
    },
    Review_status:{
        type:String,
        enum:["pending status","awaiting officer"]
    }
}
]
);

const Prisoner = mongoose.model("Prisoner", Undertrials);

module.exports = Prisoner;