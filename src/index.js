import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// ПРЕЖДЕ ЧЕМ НАЧАТЬ РАБОТАТЬ

// cd for-alex
// npm install
// npm start
// далее в режиме онлайн можешь редактировать компонент и смотреть output

// в этом файле будут храниться данные
import { delegators } from "./data";

// outpuExample - это то, что от тебя хочет получить компонент, что бы отобразить все на экране.
const outputExample = [
    {
        tableName: "Первая делегация",
        persons: ["Sergey, Gruzin", "Ivan, Russkii"],
    },
    {
        tableName: "Первая делегация",
        persons: ["Sergey, Gruzin"],
    },
    {
        tableName: "Первая делегация",
        persons: ["Sergey, Gruzin", "Ivan, Russkii"],
    },
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: outputExample };
    }

    componentDidMount = () => {
        // Здесь ты пишешь всю логику, если хочешь - можешь вынести ее за компонент
        let result = [];
        // Помести все объекты в массив result
        let data = delegators;
        // Delegators - это обхект даты с файла data, бери данные только с него

        // МЕСТО ДЛЯ КОДА

        // Ниже ничего не трогай :)
        result.length || (result = outputExample);
        this.setState({ data: result });
    };

    render() {
        return (
            <div className="container">
                {this.state.data.map((a) => (
                    <div className="container__position">
                        <h1 className="container__table">{a.tableName}</h1>

                        <ol>
                            {a.persons.map((p) => (
                                <li className="container__name">{p}</li>
                            ))}
                        </ol>
                    </div>
                ))}
            </div>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
