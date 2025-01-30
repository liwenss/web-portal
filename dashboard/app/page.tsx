
import * as React from 'react';
import Dashboard from './dashboard';
import { StyledEngineProvider } from '@mui/material/styles';



const data = [
  {
    key: 0,
    progress: 20,
    taskCategory: "Balance",
    task: "ADV Static Standing",
    active: "Active",
    Frequency: "3 Times / Week",
    lastAttempt: 2,
    date: "10 / 26 / 2024",
    minRange:  40,
    maxRange: 60,
    avgTime: 49
  },
  {
    key: 1,
    progress: 55,
    taskCategory: "Combo",
    task: "ADV Dynamic stance, upper extremity",
    active: "Active",
    Frequency: "3 Times / Week",
    lastAttempt: 5,
    date: "10 / 20 / 2024",
    minRange:  36,
    maxRange: 55,
    avgTime: 40
  },
  {
    key: 2,
    progress: 24,
    taskCategory: "Balance",
    task: "ADV Static Standing",
    active: "Active",
    Frequency: "5 Times / Week",
    lastAttempt: 8,
    date: "10 / 20 / 2024",
    minRange:  42,
    maxRange: 52,
    avgTime: 49
  },
  {
    key: 3,
    progress: 76,
    taskCategory: "Combo",
    task: "Dynamic stance, upper extremify",
    active: "Active",
    Frequency: "5 Times / Week",
    lastAttempt: 12,
    date: "10 / 20 / 2024",
    avgTime: 27,
    minRange: 14,
    maxRange: 32,
  },
  {
    key: 4,
    progress: 70,
    taskCategory: "Balance",
    task: "Static Standing",
    active: "Active",
    Frequency: "10 Times / Week",
    lastAttempt: 25,
    date: "10 / 20 / 2024",
    avgTime: 43,
    minRange:  40,
    maxRange: 56,
  },
  {
    key: 5,
    progress: 96,
    taskCategory: "Upper Ex",
    task: "Sit to Stand",
    active: "Inactive",
    Frequency: "5 Times / Week",
    lastAttempt: 34,
    date: "10 / 20 / 2024",
    avgTime: 15,
    minRange: 10,
    maxRange: 40,
  },
  {
    key: 6,
    progress: 90,
    taskCategory: "Balance",
    task: "Sit to Stand",
    active: "Inactive",
    Frequency: "5 Times / Week",
    lastAttempt: 58,
    date: "10 / 20 / 2024",
    avgTime: 35,
    minRange: 20,
    maxRange: 55,
  },
  {
    key: 7,
    progress: 99,
    taskCategory: "Balance",
    task: "Sit to Stand",
    active: "Inactive",
    Frequency: "5 Times / Week",
    lastAttempt: 60,
    date: "10 / 20 / 2024",
    avgTime: 25,
    minRange: 20,
    maxRange: 40,
  },
  {
    key: 8,
    progress: 10,
    taskCategory: "Balance",
    task: "ADV Static Standing",
    active: "Inactive",
    Frequency: "3 Times / Week",
    lastAttempt: 65,
    date: "10 / 26 / 2024",
    avgTime: 49,
    minRange:  40,
    maxRange: 50,
  },
  {
    key: 9,
    progress: 8,
    taskCategory: "Combo",
    task: "ADV Dynamic stance, upper extremity",
    active: "Inactive",
    Frequency: "3 Times / Week",
    lastAttempt: 70,
    date: "10 / 20 / 2024",
    avgTime: 40,
    minRange:  30,
    maxRange: 60,
  },


];

export default function Home() {
  return (
    <StyledEngineProvider injectFirst>
    <div>
    <Dashboard data={data}/>
  </div>
  </StyledEngineProvider>

  )
  
}
