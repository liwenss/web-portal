'use client'
import * as React from 'react';
import Image from "next/image";
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
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
import Myslider from './myslider';
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import { SxProps } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircleIcon from '@mui/icons-material/Circle';
import Box from '@mui/material/Box';
import Marker from './marker';
import ProgressBar from './progressBar';




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
        minRange: number;
        maxRange: number;
        avgTime: number;
    }>;
}>) {
    const selectFieldStyles = {
        display: "flex",
        alignItems: "center",
        borderRadius: "30px",
        marginBottom: "5%",
        marginLeft: 0,
        ".MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none !important",
        },
        backgroundColor: 'white',
        '& .MuiOutlinedInput-root': {
            backgroundColor: 'white',
        }
    };

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
                ? [...new Set([...prev, ...labels])]
                : prev.filter((item) => !labels.includes(item))
        );
    };

    const morefilteredData = filteredData.filter((item) =>
        selectedLabels.length === 0 || selectedLabels.includes(item.task)
    );
    const sortedData = (sort === "Recently Updated")
        ? [...morefilteredData].sort((a, b) => a.lastAttempt - b.lastAttempt)
        : (sort === "Progress")
            ? [...morefilteredData].sort((a, b) => b.progress - a.progress)
            : filteredData;
    const displayedData = sortedData.slice(0, Number(results));
    const MIN = 0;
    const MAX = 600;
    const [values, setValues] = React.useState([MIN, MAX]);

    const containerStyle = {
        width: '106.5%',  
        maxWidth: '1400px',
        maxHeight: '620px',
        overflowY: 'auto',
        scrollbarWidth: 'auto',  
        scrollbarColor: 'rgba(0, 0, 0, 0.2) rgba(255, 255, 255, 0.1)', // Corrected syntax
    };

    return (
        <div className={styles["entire-page"]}>
            <div className={styles["content"]}>
                <form noValidate autoComplete="off">
                    <FormControl sx={{ width: '25ch' }} className={styles.searchbar}>
                        <OutlinedInput placeholder="Search Exercise"
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            }
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '30px',
                                },
                                '& .MuiOutlinedInput-input': {
                                    paddingTop: '8px',
                                    paddingBottom: '8px',
                                },
                            }}
                        />

                    </FormControl>
                </form>
                <div className={styles.sorting}>
                    <p className={styles.sortby}>Sorted by</p>

                    <FormControl sx={{ m: 1, minWidth: 180, display: 'flex', alignItems: 'center' }} size="small">
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={sort}
                            onChange={handleChange}
                            sx={selectFieldStyles}

                        >
                            <MenuItem className={styles.dropdown} value="Recently Updated">Recently Updated</MenuItem>
                            <MenuItem value="Progress">Progress</MenuItem>
                        </Select>
                    </FormControl>

                    <p className={styles.viewresults}>View Results</p>
                    <FormControl sx={{ minWidth: 120, display: 'flex', alignItems: 'center' }} size="small">
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={results}
                            onChange={handleResultsChange}
                            sx={selectFieldStyles}
                        >
                            <MenuItem value="5">5</MenuItem>
                            <MenuItem value="10">10</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={styles.headers}>
                    <p className={styles.progressTitle}>Progress</p>
                    <p className={styles.taskTitle}>Tasks</p>
                    <p className={styles.frequencyTitle}>Frequency</p>
                    <p className={styles.lastattempTitle}>Last Attempt</p>
                    <p>Average Time to Complete</p>
                </div>


                <div >
                    <Box sx={{
                        height: '620px',
                        maxWidth: '1400px',
                        width: '106.5%',
                        overflow: "auto",
                        scrollbarColor: 'rgb(68, 1, 155) rgba(255, 255, 255, 0.1)',
                    }}>
                        {displayedData.length > 0 ? (
                            displayedData.map((item) => {
                                const categoryColor = item.taskCategory === "Balance" ? "rgb(59, 199, 194)"
                                    : item.taskCategory === "Combo" ? "rgb(177, 68, 202)" //purple
                                        : item.taskCategory === "Upper Ex" ? "orange" : "red"; //organge, red
                                const activewords = item.active === "Active" ? "rgb(74, 57, 225)" : "grey"; //purple, grey
                                const activebackground = item.active === "Active" ? "white" : "rgb(211, 208, 218)"; //white, grey
                                const lastColor = item.active === "Inactive" ? "rgb(119, 124, 130)"
                                    : item.lastAttempt <= 10 ? "rgb(1, 145, 1)" //green
                                        : item.lastAttempt > 10 && item.lastAttempt <= 20 ? "rgb(219, 142, 0)" : "rgb(226, 0, 0)"; //orange
                                const lastBackground = item.active === "Inactive" ? "rgb(211, 208, 218)"
                                    : item.lastAttempt <= 10 ? "rgb(210, 247, 204)" //light green
                                        : item.lastAttempt > 10 && item.lastAttempt <= 20 ? "#f9ecc8" : "#fdd9d9"; //light orange, light red
                                const progressColor = item.progress <= 25 ? "red"
                                    : item.progress <= 75 ? "orange" : "rgb(0, 188, 0)"
                                    const progressBackground= item.progress <= 25 ? "rgb(226, 164, 164)"
                                    : item.progress <= 75 ? "rgb(254, 209, 153)" : "rgb(172, 200, 172)" //ligth orange, ligth green

                                return (
                                    <div key={item.key}>
                                        <Card className={styles["my-card"]}>
                                            <CardContent>
                                                <div className={styles["my-progress"]}>
                                            <ProgressBar color1={progressColor} color2={progressBackground} progress={item.progress}/>
                                            </div>
                                            </CardContent>
                                            <div className={styles["first-item"]}>
                                                <p className={styles.category} style={{ color: categoryColor }}><CircleIcon style={{ fontSize: '10px', marginRight: '4px' }} />{item.taskCategory}</p>
                                                <p className={styles.smalllabel}>{item.task}</p>
                                            </div>
                                            <div className={styles["second-item"]}>
                                                <p className={styles.active} style={{ color: activewords, backgroundColor: activebackground }}> <CircleIcon style={{ fontSize: '10px', marginRight: '4px' }} />{item.active}</p>
                                                <p className={styles.smalllabel}>{item.Frequency}</p>
                                            </div>
                                            <div className={styles["third-item"]}>
                                                <p className={styles.daysago} style={{ color: lastColor, backgroundColor: lastBackground }}>{item.lastAttempt} days ago</p>
                                                <p className={styles.smalllabel}>{item.date}</p>
                                            </div>
                                            <div className={styles["myslider"]}>
                                                <Myslider value1={item.minRange} value2={item.avgTime} value3={item.maxRange} />
                                            </div>
                                            <p className={styles["viewmore"]}>View More <MoreVertIcon sx={{ fontSize: '34px' }} /> </p>

                                        </Card>
                                    </div>


                                );
                            })
                        ) : (
                            <p>No matching tasks found.</p>
                        )}
                    </Box>
                </div>
            </div>


            <div className={styles["filter"]}>
                <div className={styles["filter-title"]}>
                    <p className={styles["all-categories"]}>All Categories</p>
                    <p className={styles["clear-filters"]}>Clear filters</p>
                </div>
                <div className={styles["custom-divider"]}></div>
                <Accordion className={styles["accordion"]} >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" >
                        <FormControlLabel control={<Checkbox
                            defaultChecked={false}
                            sx={{
                                paddingTop: '0',
                                paddingBottom: '0',
                            }}
                            onChange={(e) => handleLabelChange(e, ["ADV Static Standing", "ADV Dynamic stance, upper extremity"])}
                        />} label="Workout (23)" />
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className={styles["expanded-text"]}>ADV Static Standing</p>
                    </AccordionDetails>
                    <AccordionDetails>
                        <p className={styles["expanded-text"]}>ADV Dynamic Stance</p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={styles["accordion"]}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
                        <Typography component="span">
                            <FormControlLabel control={<Checkbox
                                defaultChecked={false}
                                sx={{
                                    paddingTop: '0',
                                    paddingBottom: '0',
                                }}
                                onChange={(e) => handleLabelChange(e, ["Sit to Stand"])}
                            />} label="Basic ADL (17)" />
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className={styles["expanded-text"]}>Sit to Stand</p>
                    </AccordionDetails>

                </Accordion>
                <Accordion className={styles["accordion"]}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
                        <Typography component="span">
                            <FormControlLabel control={<Checkbox
                                defaultChecked={false}
                                sx={{
                                    paddingTop: '0',
                                    paddingBottom: '0',
                                }}
                                onChange={(e) => handleLabelChange(e, ["Dynamic stance, upper extremify", "Static Standing"])}
                            />} label="Instrumental ADL (5)" />

                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className={styles["expanded-text"]}>Dynamic Stance</p>
                    </AccordionDetails>
                    <AccordionDetails>
                        <p className={styles["expanded-text"]}>Static Standing</p>
                    </AccordionDetails>
                </Accordion>
            </div>

        </div>

    );
}