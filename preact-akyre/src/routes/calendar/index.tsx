import { FunctionalComponent, h } from "preact";
import "moment/locale/fr";
import moment from "moment";
import { useState } from "preact/hooks";

moment.locale("fr");

const Events = [
    {
        label: "Fin du confinement",
        hour: "16h20",
        date: "2020-05-11"
    },
    {
        label: "Fumer tu tar",
        hour: "16h40",
        date: "2020-05-11"
    }
];

const Calendar: FunctionalComponent = () => {
    const weekDays = moment.weekdaysShort();

    const listOfWeekDays = weekDays.map((day, i) => (
        <div style={{
            flex: "1 1 0px",
            borderRight: i !== 6 ? "solid 2px #91AFFF" : "none",
            height: "130px",
            "fontSize": "26px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {day}
        </div>
    ));

    const today = moment();

    const [selectedMonth, setSelectedMonth] = useState({date: moment()});

    const blanks = [];

    const getStartOfMonth = () => {
        return moment(selectedMonth.date)
            .startOf("month")
            .format("d");
    };

    for (let i = 0; i < Number(getStartOfMonth()); i++) {
        blanks.push(
            <div style={{flex: "1 1 0px", borderRight: "solid 2px #91AFFF"}} className="calendar-day empty">
                {""}
            </div>
        );
    }

    const daysInMonth = [];
    for (let d = 1; d <= selectedMonth.date.daysInMonth(); d++) {
        daysInMonth.push(
            <div
                style={{
                    flex: "1 1 0px",
                    borderRight: (Number(getStartOfMonth()) + d) % 7 !== 0 ? "solid 2px #91AFFF" : "none",
                    height: "130px"
                }}
                key={d}
                className="calendar-day"
            >
                <div style={{"height": "auto", "paddingTop": "20px", "fontSize": "26px"}}>
                    <div
                        style={d === Number(today.format("D")) && today.format("M GGGG") === selectedMonth.date.format("M GGGG") ? {
                            "backgroundColor": "#FF1053",
                            "border": "10px solid #FF1053",
                            "borderRadius": "50%",
                            "width": "50px",
                            "height": "50px",
                            "display": "flex",
                            "justifyContent": "center",
                            "alignItems": "center",
                            "color": "#F6F9FC",
                            marginLeft: "20px"
                        } : {marginLeft: "20px"}}>
                        {d === 4 ? "" : d}
                    </div>
                    {
                        Events.map((evt) => {
                            if (moment(evt.date).format("M GGGG") === selectedMonth.date.format("M GGGG") && Number(moment(evt.date).format("D")) === d)
                                return (<div style={{display: "flex", color: "white", backgroundColor: "#6689E6", "fontSize":"20px","padding":"3px", marginTop: "3px"}}>{evt.hour} - {evt.label}</div>)
                        })
                    }
                </div>
            </div>
        );
    }

    const totalSlots = [...blanks, ...daysInMonth];
    const rows: h.JSX.Element[][] = [];
    let cells: h.JSX.Element[] = [];

    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row); // if index not equal 7 that means not go to next week
        } else {
            rows.push(cells); // when reach next week we contain all td in last week to rows
            cells = []; // empty container
            cells.push(row); // in current loop we still push current row to new container
        }
        if (i === totalSlots.length - 1) {
            // when end loop we add remain date
            rows.push(cells);
        }
    });

    if (rows[rows.length - 1].length !== 7) {
        for (
            let missingCells = 7 - rows[rows.length - 1].length;
            missingCells;
            missingCells--
        ) {
            rows[rows.length - 1].push(
                <div style={{flex: "1 1 0px", borderRight: missingCells !== 1 ? "solid 2px #91AFFF" : "none"}}
                     className="calendar-day empty">
                    {""}
                </div>
            );
        }
    }

    const daysinmonth = rows.map((d, i) => {
        if (i === 0) return;
        return (
            <div style={{display: "flex", justifyContent: "space-between"}}>
                {d}
            </div>
        );
    });

    console.log(rows);

    return (
        <div
            style={{
                marginTop: "56px",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{"alignItems":"center","display":"flex","width":"25%","justifyContent":"space-around", color: "#91AFFF", fontSize: "30px"}}>
                    <div
                        style={{textAlign: "center", cursor: "pointer"}}
                        onClick={() => {
                            setSelectedMonth({
                                date: selectedMonth.date.subtract(1, "month")
                            });
                        }}
                    >
                        {"<"}
                    </div>
                    <div style={{textAlign: "center", textTransform: "capitalize"}}>
                        {selectedMonth.date.format("MMMM")}
                    </div>
                    <div
                        style={{textAlign: "center", cursor: "pointer"}}
                        onClick={() => {
                            setSelectedMonth({
                                date: selectedMonth.date.add(1, "month")
                            });
                        }}
                    >
                        {">"}
                    </div>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                {listOfWeekDays}
            </div>
            <div>{daysinmonth}</div>
        </div>
    );
};

export default Calendar;
