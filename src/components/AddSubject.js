import React from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../actions/events';
import { addSubject } from '../actions/subjects';
import axios from 'axios';
import cheerio from 'cheerio';
import tableParser from 'cheerio-tableparser';
import moment from 'moment';

class AddSubject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            text: '',
            events: [],
        }
    }

    handleTextChange = (e) => {
        const text = e.target.value;

        // if (!text || text.match(/^([A-Z]{4})(\d{5})$/)) {
            this.setState(() => ({ text }));
        //   }
    }


    handleOnSubmit = (e) => {
        e.preventDefault();

        if (!this.state.text) {
            this.setState(() => ({ error: 'Please enter a subject code.'}));
        } else {
            this.setState(() => ({ error: ''}));
            const subject = this.state.text;
            const URL_BASE = `https://sws.unimelb.edu.au/2018/Reports/List.aspx?objects=${subject}&weeks=1-23&days=1-7&periods=1-21&template=module_by_group_list`;
            axios.get(URL_BASE)
            .then((response) => {
                if (response.status === 200) {
                    const html = response.data;
                    const $ = cheerio.load(html, {
                        normalizeWhitespace: true,
                        xmlMode: true
                    });
            
                    tableParser($);
                    const table = $('.cyon_table').parsetable();
            
                    if (table.length != 0) {
                        let classList = [];
            
                        for(let i=1; i<=table[1].length; i++) {
                            const event = {
                                title: table[1][i],
                                startTime: table[3][i],
                                endTime: table[4][i],
                                date: table[9][i],
                                subject: table[0][1].substr(0,9)
                            }
                            classList.push(event);
                        }
                        const filteredClassList = classList.filter((element) => element.title != undefined && element.title != "Description");
                        this.setState(() => ({ events: filteredClassList}));

                        this.props.addSubject(filteredClassList[0].subject);

                        this.state.events.map((element) => {
                            const date = moment(element.date).format("YYYY-MM-DD");
                            this.props.addEvents({
                                title: `${element.title} - ${element.subject}`,
                                start: `${date}T${element.startTime}:00`,
                                end: `${date}T${element.endTime}:00`,
                                subject: element.subject
                            });
                        });
                    } else {
                        this.setState(() => ({ error: 'Subject could not be found, or no data is available.'}));
                        console.log(this.state.error);
                    } 
                }
            }, (error) => error);
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Subject Code" 
                        onChange={this.handleTextChange} 
                        value={this.state.text}
                    />
                    <button onClick={this.handleOnSubmit}>Add Subject</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    subjects: state.subjects
});

const mapDispatchToProps = (dispatch) => ({
    addEvents: (event) => dispatch(addEvent(event)),
    addSubject: (subject) => dispatch(addSubject(subject))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSubject);