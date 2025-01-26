'use client'
import * as React from 'react';
import Image from "next/image";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
//import Slider from '@mui/material/Slider';
import styles from './dashboard.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Sort } from '@mui/icons-material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from 'react-slider';
import Myslider from './myslider';

export default function Dashboard({
    data,
}: Readonly<{
    data: ReadonlyArray<{
        key: number;
        progress: number;
        taskCategory: string;
        task: string;
        active: string;
        Frequency: string;
        lastAttempt: number;
        date: string;
        avgTime: number;
    }>;
}>) {
    const [sort, setSort] = React.useState("Recently Updated");
    const [results, setResults] = React.useState("10");

    //search functionality
    const [searchinput, setSearchinput] = React.useState("");
    const [submittedQuery, setSubmittedQuery] = React.useState("");
    const handleChange = (event: SelectChangeEvent) => {
        setSort(event.target.value);
    };
    const handleResultsChange = (event: SelectChangeEvent) => {
        setResults(event.target.value);
    };
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            setSubmittedQuery(searchinput);
        }
    };
    const filteredData = data.filter((item) =>
        item.task.toLowerCase().includes(submittedQuery.toLowerCase())
    );


    const [selectedLabels, setSelectedLabels] = React.useState<string[]>([]);
    const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>, labels: string[]) => {
        setSelectedLabels((prev) =>
            event.target.checked
                ? [...new Set([...prev, ...labels])] // Add multiple labels, ensuring uniqueness
                : prev.filter((item) => !labels.includes(item)) // Remove only the unchecked labels
        );
    };

    const morefilteredData = filteredData.filter((item) =>
        selectedLabels.length === 0 || selectedLabels.includes(item.task)


    );
    const sortedData = (sort === "Recently Updated")
        ? [...morefilteredData].sort((a, b) => a.lastAttempt - b.lastAttempt) // Sort by lastAttempt (ascending)
        : (sort === "Progress")
            ? [...morefilteredData].sort((a, b) => b.progress - a.progress) // Highest progress first
            : filteredData;
    const displayedData = sortedData.slice(0, Number(results));
    const MIN = 0;
    const MAX = 600;
    const [values, setValues] = React.useState([MIN, MAX]);



    return (
        <div className={styles["entire-page"]}>
            <Myslider/>
            
            <div>
                <TextField
                    id="searchbar"
                    label="Search Exercise"
                    variant="outlined"
                    onChange={(e) => setSearchinput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    value={searchinput}
                />

                <p>Sorted by</p>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Sort</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={sort}
                        label="Sort"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Recently Updated">Recently Updated</MenuItem>
                        <MenuItem value="Progress">Progress</MenuItem>
                    </Select>
                </FormControl>

                <p>View Results</p>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Results</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={results}
                        label="Results"
                        onChange={handleResultsChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="15">15</MenuItem>
                    </Select>
                </FormControl>


                {displayedData.length > 0 ? (
                    displayedData.map((item) => (
                        <div key={item.key}>
                            <Card className={styles["my-card"]}>
                                <CardContent>
                                    <CircularProgress variant="determinate" value={item.progress} />
                                </CardContent>
                                <div>
                                    <Button>{item.taskCategory}</Button>
                                    <p>{item.task}</p>
                                </div>
                                <div>
                                    <Button>{item.active}</Button>
                                    <p>{item.Frequency}</p>
                                </div>
                                <div>
                                    <Button>{item.lastAttempt} days ago</Button>
                                    <p>{item.date}</p>
                                </div>
                                <Slider
                                    className={styles["slider"]}
                                    value={values}
                                    min={200}
                                    max={300}
                                    onChange={setValues}
                                    thumbClassName={styles.thumb}  // Apply the thumb class
                                    trackClassName={`${styles.track}`} 

                                />
                                <h1>Custom CSS range slider</h1>

                                <p>View More</p>
                            </Card>
                        </div>
                    ))
                ) : (
                    <p>No matching tasks found.</p>
                )}
            </div>


            <div className={styles["filter"]}>
                <p>All Categories</p>
                <p>Clear filters</p>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                        <FormControlLabel control={<Checkbox
                            defaultChecked={false}
                            onChange={(e) => handleLabelChange(e, ["ADV Static Standing", "ADV Dynamic stance, upper extremity"])}
                        />} label="Workout (23)" />
                    </AccordionSummary>
                    <AccordionDetails>
                        ADV Static Standing
                    </AccordionDetails>
                    <AccordionDetails>
                        ADV Dynamic Stance
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
                        <Typography component="span">
                            <FormControlLabel control={<Checkbox
                                defaultChecked={false}
                                onChange={(e) => handleLabelChange(e, ["Sit to Stand"])}
                            />} label="Basic ADL (17)" />
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Sit to Stand
                    </AccordionDetails>

                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
                        <Typography component="span">
                            <FormControlLabel control={<Checkbox
                                defaultChecked={false}
                                onChange={(e) => handleLabelChange(e, ["Dynamic stance, upper extremify", "Static Standing"])}
                            />} label="Instrumental ADL (5)" />

                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Dynamic Stance
                    </AccordionDetails>
                    <AccordionDetails>
                        Static Standing
                    </AccordionDetails>

                </Accordion>
            </div>
        </div>
    );
}