// localStorage.clear();

const Employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "a.@me.com",
    password: "a123",
    taskCount: {
      active: 2,
      completed: 1,
      newTask: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Team Meeting",
        description: "Weekly catch-up meeting with the team.",
        date: "2025-04-08",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Submit Expense Report",
        description: "Prepare and submit Q1 expenses.",
        date: "2025-04-06",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client Proposal",
        description: "Draft proposal for the new client project.",
        date: "2025-04-10",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Kabir",
    email: "b.@me.com",
    password: "b123",
    taskCount: {
      active: 0,
      completed: 1,
      newTask: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Fix Login Bug",
        description: "Resolve the login redirect issue.",
        date: "2025-04-07",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update Dependencies",
        description: "Upgrade project dependencies and test.",
        date: "2025-04-05",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review teammate's pull request.",
        date: "2025-04-09",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Sneha",
    email: "c.@me.com",
    password: "c123",
    taskCount: {
      active: 3,
      completed: 1,
      newTask: 0,
      failed: 1
    },
    tasks: [
      {
        title: "Write Test Cases",
        description: "Write test cases for the API endpoints.",
        date: "2025-04-06",
        category: "QA",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Run Regression Tests",
        description: "Test existing features before new release.",
        date: "2025-04-07",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Bug Verification",
        description: "Verify fixed bugs in the bug tracker.",
        date: "2025-04-10",
        category: "QA",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Riya",
    email: "d.@me.com",
    password: "d123",
    taskCount: {
      active: 1,
      completed: 1,
      newTask: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design Mockups",
        description: "Create mockups for new dashboard UI.",
        date: "2025-04-06",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Feedback Review",
        description: "Go through recent design feedback.",
        date: "2025-04-08",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Design System Cleanup",
        description: "Remove unused styles and assets.",
        date: "2025-04-05",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Dev",
    email: "e.@me.com",
    password: "e123",
    taskCount: {
      active: 1,
      completed: 1,
      newTask: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Server Security Audit",
        description: "Check logs and verify firewall rules.",
        date: "2025-04-09",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update SSL Certs",
        description: "Renew and install SSL certificates.",
        date: "2025-04-07",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Backup System Test",
        description: "Test disaster recovery process.",
        date: "2025-04-06",
        category: "Infrastructure",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "admin123"
    }
  ];

//   to get and set local storage

export const setLocalStorage = () => {
    // put data in array with stringify method
    localStorage.setItem('Employees', JSON.stringify(Employees))
    localStorage.setItem('Admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    // const data = localStorage.getItem('Employees')
    const employees = JSON.parse(localStorage.getItem('Employees'))
    const admin = JSON.parse(localStorage.getItem('Admin'))

    // to get the data in array
    // console.log(JSON.parse(data))

    // console.log(employees,admin)
    return {employees, admin}
}