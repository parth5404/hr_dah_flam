export function getRandomRating() {
  return Math.floor(Math.random() * 5) + 1;
}
export function getRandomDepartment() {
  const departments = ["IT", "HR", "Marketing", "Sales", "Finance"];
  return departments[Math.floor(Math.random() * departments.length)];
}

export function getRandomBio() {
  const bios = [
    "Passionate about innovation and continuous learning",
    "Team player with strong communication skills",
    "Detail-oriented professional with leadership experience",
    "Creative problem solver who thrives in collaborative environments",
    "Results-driven individual with a focus on excellence",
  ];
  return bios[Math.floor(Math.random() * bios.length)];
}

export function getPerformance(dept: string) {
  const pastPerformancesByDepartment = {
    HR: [
      { testName: "Compliance Training", date: "2025-03-05", score: 92 },
      { testName: "Recruitment Strategy Quiz", date: "2025-04-12", score: 85 },
      {
        testName: "Employee Relations Case Study",
        date: "2025-05-20",
        score: 78,
      },
      {
        testName: "Conflict Resolution Assessment",
        date: "2025-06-14",
        score: 88,
      },
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
      {
        testName: "Cloud Infrastructure Evaluation",
        date: "2025-06-05",
        score: 91,
      },
      { testName: "Database Optimization Test", date: "2025-07-01", score: 83 },
      { testName: "API Integration Project", date: "2025-07-12", score: 89 },
    ],
    Marketing: [
      { testName: "SEO Strategy Test", date: "2025-04-18", score: 89 },
      {
        testName: "Content Marketing Assessment",
        date: "2025-05-25",
        score: 84,
      },
      { testName: "Branding Workshop", date: "2025-06-15", score: 91 },
      { testName: "Digital Campaign Review", date: "2025-06-28", score: 77 },
      {
        testName: "Social Media KPIs Evaluation",
        date: "2025-07-08",
        score: 86,
      },
      { testName: "Email Strategy A/B Test", date: "2025-07-15", score: 88 },
    ],
    Sales: [
      { testName: "Client Handling Simulation", date: "2025-03-10", score: 86 },
      { testName: "Sales Pitch Evaluation", date: "2025-04-22", score: 90 },
      { testName: "Negotiation Tactics Test", date: "2025-06-05", score: 80 },
      { testName: "Cold Call Roleplay", date: "2025-06-20", score: 84 },
      { testName: "CRM Usage Assessment", date: "2025-07-03", score: 79 },
      { testName: "Q2 Sales Review", date: "2025-07-13", score: 92 },
    ],
  };
  return pastPerformancesByDepartment[
    dept as keyof typeof pastPerformancesByDepartment
  ];
}

export function getRandomProjects(dept: string) {
  const projectsByDepartment = {
    HR: [
      {
        name: "Employee Wellness Program",
        status: "Completed",
        progress: 100,
        startDate: "2024-01-15",
        endDate: "2024-06-30",
        description:
          "Comprehensive wellness initiative to improve employee health and satisfaction",
      },
      {
        name: "Talent Acquisition Revamp",
        status: "In Progress",
        progress: 75,
        startDate: "2024-03-01",
        endDate: "2024-12-31",
        description:
          "Modernizing recruitment processes and implementing new hiring strategies",
      },
      {
        name: "Performance Review System Update",
        status: "Planning",
        progress: 25,
        startDate: "2024-08-01",
        endDate: "2025-02-28",
        description:
          "Upgrading annual review process with new digital tools and feedback mechanisms",
      },
    ],
    Finance: [
      {
        name: "Budget Automation System",
        status: "Completed",
        progress: 100,
        startDate: "2024-02-01",
        endDate: "2024-07-15",
        description:
          "Implementing automated budgeting tools to streamline financial planning",
      },
      {
        name: "Cost Reduction Initiative",
        status: "In Progress",
        progress: 60,
        startDate: "2024-04-01",
        endDate: "2024-11-30",
        description:
          "Identifying and implementing cost-saving measures across all departments",
      },
      {
        name: "Financial Reporting Dashboard",
        status: "In Progress",
        progress: 80,
        startDate: "2024-05-15",
        endDate: "2024-10-31",
        description:
          "Creating real-time financial dashboards for executive decision making",
      },
    ],
    IT: [
      {
        name: "Cloud Migration Project",
        status: "In Progress",
        progress: 85,
        startDate: "2024-01-01",
        endDate: "2024-09-30",
        description:
          "Migrating legacy systems to cloud infrastructure for improved scalability",
      },
      {
        name: "Cybersecurity Enhancement",
        status: "Completed",
        progress: 100,
        startDate: "2024-02-15",
        endDate: "2024-06-15",
        description:
          "Implementing advanced security protocols and employee training programs",
      },
      {
        name: "API Integration Platform",
        status: "Planning",
        progress: 15,
        startDate: "2024-09-01",
        endDate: "2025-03-31",
        description:
          "Developing unified API platform for seamless system integrations",
      },
    ],
    Marketing: [
      {
        name: "Brand Refresh Campaign",
        status: "Completed",
        progress: 100,
        startDate: "2024-01-10",
        endDate: "2024-05-30",
        description:
          "Complete brand identity overhaul including logo, messaging, and visual guidelines",
      },
      {
        name: "Digital Marketing Automation",
        status: "In Progress",
        progress: 70,
        startDate: "2024-03-15",
        endDate: "2024-12-15",
        description:
          "Implementing marketing automation tools for lead nurturing and customer engagement",
      },
      {
        name: "Content Strategy Overhaul",
        status: "In Progress",
        progress: 45,
        startDate: "2024-06-01",
        endDate: "2025-01-31",
        description:
          "Developing comprehensive content strategy across all digital platforms",
      },
    ],
    Sales: [
      {
        name: "CRM System Upgrade",
        status: "Completed",
        progress: 100,
        startDate: "2024-02-01",
        endDate: "2024-06-30",
        description:
          "Upgrading CRM platform with advanced analytics and automation features",
      },
      {
        name: "Sales Training Program",
        status: "In Progress",
        progress: 65,
        startDate: "2024-04-01",
        endDate: "2024-11-30",
        description:
          "Comprehensive sales training program focusing on consultative selling techniques",
      },
      {
        name: "Territory Expansion Plan",
        status: "Planning",
        progress: 30,
        startDate: "2024-08-15",
        endDate: "2025-06-30",
        description:
          "Strategic expansion into new geographical markets and customer segments",
      },
    ],
  };

  return projectsByDepartment[dept as keyof typeof projectsByDepartment] || [];
}

export function getRandomFeedback(dept: string) {
  const feedbackByDepartment = {
    HR: [
      {
        from: "Sarah Johnson",
        role: "Director of Operations",
        date: "2024-07-15",
        rating: 5,
        comment:
          "Excellent work on the employee wellness program. Your attention to detail and proactive communication made the project a huge success.",
      },
      {
        from: "Michael Chen",
        role: "Team Lead",
        date: "2024-06-20",
        rating: 4,
        comment:
          "Great collaboration during the recruitment process. Your insights helped us find the perfect candidates for our team.",
      },
      {
        from: "Emily Davis",
        role: "Project Manager",
        date: "2024-05-10",
        rating: 5,
        comment:
          "Outstanding performance in handling employee relations. Your diplomatic approach resolved conflicts effectively.",
      },
    ],
    Finance: [
      {
        from: "Robert Williams",
        role: "CFO",
        date: "2024-07-20",
        rating: 5,
        comment:
          "Exceptional financial analysis and reporting. Your budget forecasts have been consistently accurate and insightful.",
      },
      {
        from: "Lisa Thompson",
        role: "Senior Accountant",
        date: "2024-06-15",
        rating: 4,
        comment:
          "Solid work on the cost reduction initiative. Your recommendations have already shown measurable results.",
      },
      {
        from: "David Park",
        role: "Controller",
        date: "2024-05-25",
        rating: 5,
        comment:
          "Impressive attention to detail in audit preparations. Your thorough documentation made the process seamless.",
      },
    ],
    IT: [
      {
        from: "Alex Rodriguez",
        role: "CTO",
        date: "2024-07-18",
        rating: 5,
        comment:
          "Outstanding technical expertise on the cloud migration project. Your problem-solving skills saved us weeks of development time.",
      },
      {
        from: "Jennifer Lee",
        role: "DevOps Engineer",
        date: "2024-06-25",
        rating: 4,
        comment:
          "Great collaboration on system architecture improvements. Your code reviews are thorough and constructive.",
      },
      {
        from: "Mark Taylor",
        role: "Security Specialist",
        date: "2024-05-30",
        rating: 5,
        comment:
          "Excellent work on cybersecurity protocols. Your proactive approach to threat detection has strengthened our defenses significantly.",
      },
    ],
    Marketing: [
      {
        from: "Amanda Wilson",
        role: "Marketing Director",
        date: "2024-07-22",
        rating: 5,
        comment:
          "Brilliant creative work on the brand refresh campaign. Your innovative ideas exceeded our expectations and drove great results.",
      },
      {
        from: "Chris Brown",
        role: "Digital Marketing Manager",
        date: "2024-06-18",
        rating: 4,
        comment:
          "Strong performance in content creation and strategy. Your campaigns have consistently improved our engagement metrics.",
      },
      {
        from: "Rachel Green",
        role: "Brand Manager",
        date: "2024-05-28",
        rating: 5,
        comment:
          "Exceptional understanding of our target audience. Your market research insights have shaped our strategic direction.",
      },
    ],
    Sales: [
      {
        from: "Kevin Martinez",
        role: "Sales Director",
        date: "2024-07-25",
        rating: 5,
        comment:
          "Outstanding sales performance this quarter. Your client relationship management skills are exemplary.",
      },
      {
        from: "Sophia Anderson",
        role: "Account Manager",
        date: "2024-06-12",
        rating: 4,
        comment:
          "Great teamwork on the enterprise client proposal. Your presentation skills really impressed the stakeholders.",
      },
      {
        from: "James Wilson",
        role: "Regional Manager",
        date: "2024-05-20",
        rating: 5,
        comment:
          "Impressive negotiation skills and deal closure rate. You consistently exceed targets while maintaining client satisfaction.",
      },
    ],
  };

  return feedbackByDepartment[dept as keyof typeof feedbackByDepartment] || [];
}
