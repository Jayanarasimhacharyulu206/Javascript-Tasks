let OnePiece = {
    Crew: {
        StrawHat: {
            Captain: {
                Name: "Monkey D. Luffy",
                NumberofCrewMembers: 10,
                DevilFruit: "Gomu Gomu no Mi",
                Bounty: "3 Billion",
            },
            Swordsman: "Roronoa Zoro",
            Cook: "Sanji",
            Navigator: "Nami",
            Ship: {
                Name: "Thousand Sunny",
                Type: "Brigantine",
                Members: 10
            }
        },

        HeartPirates: "Trafalgar Law",
        RedHairPirates: "Shanks",
        BlackbeardPirates: "Marshall D Teach",

        Characters: {
            Zoro: {
                SwordStyle: {
                    Name: "Three Sword Style",
                    Swords: 3,
                    Bounty: "1.1 Billion",
                    Nationality: "Japanese"
                },
                Position: "Swordsman",
                Specialty: "Sword Fighting"
            },

            Sanji: {
                Position: "Cook",
                FightingStyle: "Black Leg Style"
            }
        }
    }
}


// Retrieving

console.log(OnePiece.Crew.StrawHat);

console.log(OnePiece.Crew.StrawHat.Captain);

console.log(OnePiece.Crew.StrawHat.Captain.Name);

console.log(OnePiece.Crew.StrawHat.Ship);

console.log(OnePiece.Crew.Characters.Zoro);

console.log(OnePiece.Crew.Characters.Zoro.SwordStyle.Swords);


// Updating

OnePiece.Crew.StrawHat.Captain.Bounty = "3.5 Billion";

console.log(OnePiece.Crew.StrawHat.Captain.Bounty);


OnePiece.Crew.StrawHat.Ship.Members = 11;

console.log(OnePiece.Crew.StrawHat.Ship.Members);


OnePiece.Crew.Characters.Zoro.SwordStyle.Swords = 4;

console.log(OnePiece.Crew.Characters.Zoro.SwordStyle.Swords);


OnePiece.Crew.Characters.Zoro.NewTitle = "King of Hell";

console.log(OnePiece.Crew.Characters.Zoro.NewTitle);


// Adding a new object

OnePiece.Crew.Marines = {
    Admiral: "Akainu",
    ViceAdmiral: "Garp",
    Headquarters: "Marineford"
};

console.log(OnePiece.Crew.Marines);


// Deleting

delete OnePiece.Crew.StrawHat.Captain.NumberofCrewMembers;

console.log(OnePiece.Crew.StrawHat.Captain);


delete OnePiece.Crew.Characters.Zoro.SwordStyle.Nationality;

console.log(OnePiece.Crew.Characters.Zoro.SwordStyle);


delete OnePiece.Crew.Marines;

console.log(OnePiece.Crew);