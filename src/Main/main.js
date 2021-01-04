import React from "react";
import '../common/common.css'
import './main.css'
import HeaderBar from "../common/headerBar/headerBar";

import StringChecks from "../business/stringChecks";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.stringChecks = new StringChecks()

        this.state = {
            toLower : "is empty",
            toUpper : "is empty",
            isPalindrome : "is empty",
            showStrLen : "is empty"};
    }

    changeToLower = (event) => {
        let name = event.target.name;
        let val = event.target.value;

        if (this.stringChecks.isEmpty(val)) {
            this.setState({[name] : "is empty"});
        } else {
            this.setState({[name]: "is \"" + this.stringChecks.toLower(val) + "\""});
        }
    }

    changeToUpper = (event) => {
        let name = event.target.name;
        let val = event.target.value;

        if (this.stringChecks.isEmpty(val)) {
            this.setState({[name] : "is empty"});
        } else {
            this.setState({[name]: "is \"" + this.stringChecks.toUpper(val) + "\""});
        }
    }

    changeIsPalindrome = (event) => {
        let name = event.target.name;
        let val = event.target.value;

        if (this.stringChecks.isEmpty(val)) {
            this.setState({[name] : "is empty"});
        } else if (this.stringChecks.isPalindrome(val)) {
            this.setState({[name] : "is a palindrome!"});
        } else {
            this.setState({[name] : "is not a palindrome"});
        }
    }

    changeShowStrLen = (event) => {
        let name = event.target.name;
        let val = event.target.value;

        if (this.stringChecks.isEmpty(val)) {
            this.setState({[name]: "is empty"});
        } else if (this.stringChecks.len(val) === 1) {
            this.setState({[name]: "is 1 character long"});
        } else {
            this.setState({[name]: "is " + this.stringChecks.len(val) + " characters long"});
        }
    }

    render() {
        return (
            <div className="mainPage">
                <HeaderBar/>
                <div className="mainPageContent">
                    <div className="mainPageItem">
                        <a>Lowercase of</a>
                        <input id="toLowerField"
                               aria-label='toLowerField'
                               type="text"
                               className="textField"
                               placeholder="Enter any text here..."
                               name="toLower"
                               onChange={this.changeToLower}/>
                        <a aria-label="toLowerText">{this.state.toLower}</a>
                    </div>
                    <div className="mainPageItem">
                        <a>Uppercase of</a>
                        <input id="toUpperField"
                               aria-label='toUpperField'
                               type="text"
                               className="textField"
                               placeholder="Enter any text here..."
                               name="toUpper"
                               onChange={this.changeToUpper}/>
                        <a aria-label="toUpperText">{this.state.toUpper}</a>
                    </div>
                    <div className="mainPageItem">
                        <a>The text</a>
                        <input id="isPalindrome"
                               aria-label='isPalindromeField'
                               type="text"
                               className="textField"
                               placeholder="Enter any text here..."
                               name="isPalindrome"
                               onChange={this.changeIsPalindrome}/>
                        <a aria-label="isPalindromeText">{this.state.isPalindrome}</a>
                    </div>
                    <div className="mainPageItem">
                        <a>Length of</a>
                        <input id="showStrLen"
                               aria-label='showStrLenField'
                               type="text"
                               className="textField"
                               placeholder="Enter any text here..."
                               name="showStrLen"
                               onChange={this.changeShowStrLen}/>
                        <a aria-label="showStrLenText">{this.state.showStrLen}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main