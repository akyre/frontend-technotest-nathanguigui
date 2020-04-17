import { FunctionalComponent, h } from "preact";
import "moment/locale/fr";
import moment from "moment";
import { useState } from "preact/hooks";

moment.locale("fr");

const Calendar: FunctionalComponent = () => {
    const weekDays = moment.weekdaysShort();

    const listOfWeekDays = weekDays.map(day => (
        <div style={{ flex: "1 1 0px", textAlign: "center" }}>{day}</div>
    ));

    const today = moment();

    const [selectedMonth, setSelectedMonth] = useState({ date: moment() });

    const blanks = [];

    const getStartOfMonth = () => {
        return moment(selectedMonth.date)
            .startOf("month")
            .format("d");
    };

    for (let i = 0; i < Number(getStartOfMonth()); i++) {
        blanks.push(
            <div style={{ flex: "1 1 0px" }} className="calendar-day empty">
                {""}
            </div>
        );
    }

    const daysInMonth = [];
    for (let d = 1; d <= selectedMonth.date.daysInMonth(); d++) {
        daysInMonth.push(
            <div
                style={{ flex: "1 1 0px", textAlign: "center" }}
                key={d}
                className="calendar-day"
            >
                {d}
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
                <div style={{ flex: "1 1 0px" }} className="calendar-day empty">
                    {""}
                </div>
            );
        }
    }

    const daysinmonth = rows.map((d, i) => {
        return (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {d}
            </div>
        );
    });

    console.log(selectedMonth);

    return (
        <div
            style={{
                marginTop: "56px",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <div style={{ display: "flex" }}>
                <div
                    style={{ flex: "1 1 0px", textAlign: "center" }}
                    onClick={() => {
                        setSelectedMonth({
                            date: selectedMonth.date.subtract(1, "month")
                        });
                    }}
                >
                    {"<"}
                </div>
                <div style={{ flex: "1 1 0px", textAlign: "center" }}>
                    {selectedMonth.date.format("MMMM gggg")}
                </div>
                <div
                    style={{ flex: "1 1 0px", textAlign: "center" }}
                    onClick={() => {
                        setSelectedMonth({
                            date: selectedMonth.date.add(1, "month")
                        });
                    }}
                >
                    {">"}
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {listOfWeekDays}
            </div>
            <div>{daysinmonth}</div>
        </div>
    );
};

export default Calendar;
