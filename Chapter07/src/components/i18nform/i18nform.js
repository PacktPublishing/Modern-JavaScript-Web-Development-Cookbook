/* @flow */

import React from "react";

import "./styles.css";
import { i18n, t } from "./i18n";

export class I18nForm extends React.PureComponent<
    {},
    {
        delivery: String,
        howMany: Number,
        thingColor: String
    }
> {
    state = {
        delivery: "2018-09-22",
        howMany: 1,
        thingColor: "NC"
    };

    constructor(props) {
        super(props);
        this.rerender = () => this.forceUpdate();
    }

    componentDidMount() {
        i18n.on("languageChanged", this.rerender);
    }

    componentWillUnmount() {
        i18n.off("languageChanged", this.rerender);
    }

    render() {
        return (
            <div>
                <div>
                    <h2>{t("details")}</h2>
                    <button onClick={() => i18n.changeLanguage("es")}>
                        ES
                    </button>
                    <button onClick={() => i18n.changeLanguage("en")}>
                        EN
                    </button>
                </div>
                <br />
                <div>{t("please enter details")}</div>
                <br />
                <div>
                    {t("send it before")}:
                    <input
                        type="date"
                        value={this.state.delivery}
                        onChange={e =>
                            this.setState({ delivery: e.target.value })
                        }
                    />
                </div>
                <div>
                    {t("number")}:
                    <input
                        type="number"
                        min="1"
                        value={this.state.howMany}
                        onChange={e =>
                            this.setState({
                                howMany: Number(e.target.value)
                            })
                        }
                    />
                </div>
                <div>
                    {t("color")}:
                    <select
                        onChange={e =>
                            this.setState({ thingColor: e.target.value })
                        }
                    >
                        <option value="NC">{t("colors.none")}</option>
                        <option value="ST">{t("colors.steel")}</option>
                        <option value="SD">{t("colors.sand")}</option>
                    </select>
                </div>
                <br />
                <div>
                    {t("summary", {
                        count: this.state.howMany,
                        date: this.state.delivery
                    })}
                </div>
            </div>
        );
    }
}
