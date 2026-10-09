const express=require("express");
const mongoose=require("mongoose");
const undertrial=require("./models/undertrial.js");
const data=require("./init/data.js");
const path=require("path");
const ejsMate=require("ejs-Mate");
const methodoverride=require("method-override");
const app=express();
app.set("view engine","ejs");
app.use(express.static("public"));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Rihaee");
};
main()
      .then(async()=>{
        console.log("MongoDB connected");
        const result=await undertrial.insertMany(data);
      })
      .catch((err)=>{
        console.log(err);
      });

app.engine("ejs",ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));
/*app.get("/",(req,res)=>{
    const prisoner = new undertrial({
    undertrial_name: "Aarav Patil",
    jail_name: "Yerwada Central Jail",
    offense_details: {
        Offense_name: "IPC 379 - Theft",
        maxCustodyPeriodForOffense: 3
    },
    case_details: {
        case_name: "IPC 379 - Theft",
        case_no: "CR 184/2025",
        custody_start_date: new Date("2025-04-04")
    },
    status: "approaching",
    data_quality: "clean",
    Review_status: "pending status"
});
prisoner.save()
    .then(() => {
        res.send("Prisoner saved");
    })
    .catch((err) => {
        console.log(err);
    });
});*/
app.get("/undertrials",async(req,res)=>{
    let allUndertrials=await undertrial.find({});
    res.render("./overview.ejs",{allUndertrials});
});
app.get("/undertrials/priorityQueue",async(req,res)=>{
    let allUndertrials=await undertrial.find({});
    res.render("./priorityQueue.ejs",{allUndertrials});
});
app.get("/undertrials/priorityQueue/:id/auditTrail", async (req, res) => {
    let { id } = req.params;
    let prisoner = await undertrial.findById(id);
    res.render("./auditTrail.ejs", { prisoner });
});
app.get("/undertrials/priorityQueue/:id/caseIntelligence", async (req, res) => {

    const prisoner = await undertrial.findById(req.params.id);

    res.render("./caseIntelligence.ejs", {prisoner});

});
app.listen(8080,(req,res)=>{
    console.log("server is listening to port 8080");
});