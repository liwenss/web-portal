
import * as React from 'react';
import Dashboard from './dashboard';


const data = [
  {
    key: 0,
    progress: 20,
    taskCategory: "Balance",
    task: "ADV Static Standing",
    active: "Active",
    Frequency: "3 Times/ Week",
    lastAttempt: 2,
    date: "10/26/2024",
    avgTime: 49
  },
  {
    key: 1,
    progress: 55,
    taskCategory: "Combo",
    task: "ADV Dynamic stance, upper extremity",
    active: "Active",
    Frequency: "3 Times/ Week",
    lastAttempt: 5,
    date: "10/20/2024",
    avgTime: 40
  },
  {
    key: 2,
    progress: 24,
    taskCategory: "Balance",
    task: "ADV Static Standing",
    active: "Active",
    Frequency: "5 Times/ Week",
    lastAttempt: 8,
    date: "10/20/2024",
    avgTime: 49
  },
  {
    key: 3,
    progress: 75,
    taskCategory: "Combo",
    task: "Dynamic stance, upper extremify",
    active: "Active",
    Frequency: "5 Times/ Week",
    lastAttempt: 12,
    date: "10/20/2024",
    avgTime: 27
  },
  {
    key: 4,
    progress: 70,
    taskCategory: "Balance",
    task: "Static Standing",
    active: "Active",
    Frequency: "10 Times/ Week",
    lastAttempt: 25,
    date: "10/20/2024",
    avgTime: 43
  },
  {
    key: 5,
    progress: 96,
    taskCategory: "Upper Ex",
    task: "Sit to Stand",
    active: "Inactive",
    Frequency: "5 Times/ Week",
    lastAttempt: 34,
    date: "10/20/2024",
    avgTime: 15
  },
  {
    key: 6,
    progress: 90,
    taskCategory: "Balance",
    task: "Sit to Stand",
    active: "Inactive",
    Frequency: "5 Times/ Week",
    lastAttempt: 58,
    date: "10/20/2024",
    avgTime: 35
  },
  {
    key: 7,
    progress: 99,
    taskCategory: "Balance",
    task: "Sit to Stand",
    active: "Inactive",
    Frequency: "5 Times/ Week",
    lastAttempt: 60,
    date: "10/20/2024",
    avgTime: 25
  },
  {
    key: 8,
    progress: 10,
    taskCategory: "Balance",
    task: "ADV Static Standing",
    active: "Active",
    Frequency: "3 Times/ Week",
    lastAttempt: 65,
    date: "10/26/2024",
    avgTime: 49
  },
  {
    key: 9,
    progress: 8,
    taskCategory: "Combo",
    task: "ADV Dynamic stance, upper extremity",
    active: "Active",
    Frequency: "3 Times/ Week",
    lastAttempt: 70,
    date: "10/20/2024",
    avgTime: 40
  },
  {
    key: 10,
    progress: 3,
    taskCategory: "Balance",
    task: "ADV Static Standing",
    active: "Active",
    Frequency: "5 Times/ Week",
    lastAttempt: 72,
    date: "10/20/2024",
    avgTime: 49
  },
  {
    key: 11,
    progress: 4,
    taskCategory: "Combo",
    task: "Dynamic stance, upper extremify",
    active: "Active",
    Frequency: "5 Times/ Week",
    lastAttempt: 73,
    date: "10/20/2024",
    avgTime: 27
  },
  {
    key: 12,
    progress: 21,
    taskCategory: "Balance",
    task: "Static Standing",
    active: "Active",
    Frequency: "10 Times/ Week",
    lastAttempt: 80,
    date: "10/20/2024",
    avgTime: 43
  },
  {
    key: 13,
    progress: 20,
    taskCategory: "Upper Ex",
    task: "Sit to Stand",
    active: "Inactive",
    Frequency: "5 Times/ Week",
    lastAttempt: 82,
    date: "10/20/2024",
    avgTime: 15
  },
  {
    key: 14,
    progress: 10,
    taskCategory: "Balance",
    task: "Sit to Stand",
    active: "Inactive",
    Frequency: "5 Times/ Week",
    lastAttempt: 84,
    date: "10/20/2024",
    avgTime: 35
  },
  {
    key: 15,
    progress: 5,
    taskCategory: "Balance",
    task: "Sit to Stand",
    active: "Inactive",
    Frequency: "5 Times/ Week",
    lastAttempt: 90,
    date: "10/20/2024",
    avgTime: 25
  },

];

export default function Home() {
  return (
    <div>
    <Dashboard data={data}/>
  </div>

  )
  
}
