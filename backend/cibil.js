

const cheakCAT = (iscompanylisted, isformNo16, isLasttwoyear, isbankstatement1year, MAB, agency, DPD, libility, cibilscore) => {

    if (iscompanylisted && isformNo16 && isLasttwoyear && isbankstatement1year && MAB >= 20000 && DPD && libility && (
        (agency === "cibil" && cibilscore >= 750) ||
        (agency === "crispin" && cibilscore >= 550) ||
        (agency === "transunion" && cibilscore >= 650)
    )) {

        console.log("CAT A");

    } else if (isbankstatement1year && MAB >= 10000 && DPD && (
        (agency === "cibil" && cibilscore >= 750) ||
        (agency === "crispin" && cibilscore >= 550) ||
        (agency === "transunion" && cibilscore >= 650)
    )) {

        console.log("CAT B")
    } else {
        console.log("CAT C")
    }
}

const iscompanylisted = true;
const isformNo16 = true;
const isLasttwoyear = true;
const isbankstatement1year = true
const MAB = 20000;
const agency = "cibil";
const cibilscore = 600;
const DPD = true;
const libility = true;

cheakCAT(iscompanylisted, isformNo16, isLasttwoyear, isbankstatement1year, MAB, agency, DPD, libility, cibilscore)
