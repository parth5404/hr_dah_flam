export function getRandomRating(){
    return Math.floor(Math.random() * 5)+1;
}
export function getRandomDepartment(){
    const departments=["IT","HR","Marketing","Sales","Finance"];
    return departments[Math.floor(Math.random() * departments.length)];
}   

export function getRandomBio(){
    const bios=["Passionate about innovation and continuous learning","Team player with strong communication skills","Detail-oriented professional with leadership experience","Creative problem solver who thrives in collaborative environments","Results-driven individual with a focus on excellence"];
    return bios[Math.floor(Math.random() * bios.length)];
}

export function getPerformance(dept:string){
    const pastPerformancesByDepartment = {
        HR: [
          { testName: "Compliance Training", date: "2025-03-05", score: 92 },
          { testName: "Recruitment Strategy Quiz", date: "2025-04-12", score: 85 },
          { testName: "Employee Relations Case Study", date: "2025-05-20", score: 78 },
          { testName: "Conflict Resolution Assessment", date: "2025-06-14", score: 88 },
          { testName: "HR Analytics Basics", date: "2025-07-05", score: 81 },
          { testName: "Onboarding Process Review", date: "2025-07-10", score: 76 },
        ],
        Finance: [
          { testName: "Budgeting Basics", date: "2025-03-15", score: 88 },
          { testName: "Financial Forecasting Exam", date: "2025-04-25", score: 79 },
          { testName: "Compliance Audit Test", date: "2025-06-01", score: 90 },
          { testName: "Taxation and Policy Quiz", date: "2025-06-18", score: 85 },
          { testName: "Risk Management Workshop", date: "2025-07-04", score: 82 },
          { testName: "Cost-Benefit Analysis Task", date: "2025-07-14", score: 87 },
        ],
        IT: [
          { testName: "Cybersecurity Drill", date: "2025-02-20", score: 95 },
          { testName: "System Architecture Quiz", date: "2025-03-30", score: 82 },
          { testName: "DevOps Fundamentals", date: "2025-05-10", score: 87 },
          { testName: "Cloud Infrastructure Evaluation", date: "2025-06-05", score: 91 },
          { testName: "Database Optimization Test", date: "2025-07-01", score: 83 },
          { testName: "API Integration Project", date: "2025-07-12", score: 89 },
        ],
        Marketing: [
          { testName: "SEO Strategy Test", date: "2025-04-18", score: 89 },
          { testName: "Content Marketing Assessment", date: "2025-05-25", score: 84 },
          { testName: "Branding Workshop", date: "2025-06-15", score: 91 },
          { testName: "Digital Campaign Review", date: "2025-06-28", score: 77 },
          { testName: "Social Media KPIs Evaluation", date: "2025-07-08", score: 86 },
          { testName: "Email Strategy A/B Test", date: "2025-07-15", score: 88 },
        ],
        Sales: [
          { testName: "Client Handling Simulation", date: "2025-03-10", score: 86 },
          { testName: "Sales Pitch Evaluation", date: "2025-04-22", score: 90 },
          { testName: "Negotiation Tactics Test", date: "2025-06-05", score: 80 },
          { testName: "Cold Call Roleplay", date: "2025-06-20", score: 84 },
          { testName: "CRM Usage Assessment", date: "2025-07-03", score: 79 },
          { testName: "Q2 Sales Review", date: "2025-07-13", score: 92 },
        ]
      };
      return pastPerformancesByDepartment[dept as keyof typeof pastPerformancesByDepartment];
}
