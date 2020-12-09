import React, { Component } from 'react'

export default class Accordion extends Component {
    static defaultProps = {
        sections: [],
    };

    state = {
        activeSectionIndex: null,
    }

    handleActiveSection = (sectionIndex) => {
        this.setState({activeSectionIndex: sectionIndex})
    }

    renderListItem(section, index, activeSectionIndex) {
        return (
            <li key={index}>
                <button onClick={() => this.handleActiveSection(index)}>
                    {section.title}
                </button>
                {(activeSectionIndex === index) && <p>{section.content}</p>}
            </li>
        )
    }

    render() {
        const { activeSectionIndex} = this.state
        const { sections } = this.props 
        return (
            <ul>
                {sections.map((section, index) =>
                    this.renderListItem(section, index, activeSectionIndex)
                )}
            </ul>
        )
    }
}