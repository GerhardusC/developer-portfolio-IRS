import React from 'react'

const ProjectsSection = () => {
    const projects = [
        {
            name: "Tracker Advanced",
            descriptionParagraphs: [
                "This was the second plugin I built at Infinity Renewable Solutions. In this plugin, an engineer can configure a dynamic table that can read data from hundreds of trackers at a time. The plugin has options for engineers to configure certain cells to be styled based on the value displayed in the cell. Cells can also be configured to represent enumerative values.",
                "Cells can also be selected and historical data can be fetched and graphed using Highcharts per cell. Selection of cells works as you might expect, where you can select and deselect entire rows or columns at a time to graph more or fewer items. There is also a date-range picker to select the date-range for graphing data.",
                "I also created this plugin using vanilla HTML, CSS and JavaScript. There were two very interesting parts of this plugin’s initial development. One was trying to achieve good performance reading data from this many devices and the other was streamlining the configuration of this many devices so the engineers don’t have to spend too much time setting the configuration up.",
            ],
            funFactParagraphs: [
                "Before this plugin, I was writing HTML, CSS and JavaScript, and writing my code directly into an sshfs mount point. This was greatly inefficient, and was not really a great place to house the git repository.",
                "When I built this plugin, I also figured out how React code gets built down and how to create a webpack configuration for deploying plugins. I also wrote a simple script that would move the compiled files onto the local mount point whenever I want to move the plugin over to the controller. ",
                "I subsequently moved the development workflow over to ESBuild to reduce development build times. This project made me really understand more what is happening behind the scenes when a React application is compiled down to vanilla JavaScript.",
            ]
        },
        {
            name: "Financial Estimator",
            descriptionParagraphs: [
                "The Financial Estimator plugin was the first plugin where I was comfortable enough with my tooling to start integrating build tools such as ESbuild and libraries such as React.js to increase the quality, scalability and testability of my code.The Financial Estimator plugin was the first plugin where I was comfortable enough with my tooling to start integrating build tools such as ESbuild and libraries such as React.js to increase the quality, scalability and testability of my code.",
                "This plugin shows a client graphs of how much money they have saved with their energy system based on the sources and loads that they have on their site. This plugin has a page per source and shows interesting relationships between values using Highcharts.",
                "This is the first plugin to be built in TypeScript and React, using Redux for state management and Redux thunks to manage state for data collection.",
            ],
            funFactParagraphs: [
                "Before this plugin, I was writing HTML, CSS and JavaScript, and writing my code directly into an sshfs mount point. This was greatly inefficient, and was not really a great place to house the git repository.",
                "When I built this plugin, I also figured out how React code gets built down and how to create a webpack configuration for deploying plugins. I also wrote a simple script that would move the compiled files onto the local mount point whenever I want to move the plugin over to the controller. ",
                "I subsequently moved the development workflow over to ESBuild to reduce development build times. This project made me really understand more what is happening behind the scenes when a React application is compiled down to vanilla JavaScript.",
            ]
        },
        {
            name: "Dashboard",
            descriptionParagraphs: [
                "The Dashboard plugin is the most dynamic plugin I have created by far. The engineer who created the backend created a configuration page that allows the dragging and placing of elements to specific places on the screen and configuring them to show data in certain ways. Multiple tabs can be configured in this way.",
                "The plugin features components such as a historical chart, pie charts, donut charts, multiple KPI charts, instantaneous data display blocks, and the one that I am most proud of, the power-flow component. The power-flow component shows the flow of power between different sources and loads based on a priority system. SVG arrows between source and load nodes move at different speeds based on the amount of current flowing in each case.",
                "This plugin was also created using TypeScript and React with Redux for state management. In this project, Redux allowed me to control exactly the data that needs to be fetched on the devices to prevent me from making unnecessary reads from the controller for data that does not need to be displayed to the user.",
            ],
            funFactParagraphs: [
                "On the day that this plugin was shipped, we wanted to load it onto the HMI instead of the default HMI plugin. This is because the new HMI screen is bigger and allows us to show more fully fledged plugins.",
                "Upon loading it onto the HMI, we realised that none of the styles were working properly. Upon inspection, I saw that I was using modern CSS features, and the HMI is running a very old version of Firefox that is unable to be updated.",
                "Fortunately I was able to fix this problem fairly quickly, because I was able to use ESbuild to transpile the code to be compatible with an older browser. This reinforced for me how important it was that I spent the time learning how to transpile TypeScript code using modern tooling.",
            ]
        },
        {
            name: "Data Grid",
            descriptionParagraphs: [
                "This plugin is a dynamic table that can be set up by an engineer to visualise any real-time data in a configurable manner. The plugin features two columns on either side that can display any value or enumeration, and a large table in the center.",
                "Features of the table in the middle includes interpolating cells between colours based on the preconfigured minimum and maximum values configured per column, cells with bars in that change length based on configured minimum and maximum value per column, cells that show enumerative values, and simple default configurable cells that show fixed text.",
            ],
            funFactParagraphs: [
                "While building this plugin, I was getting tired of my sshfs workflow, which sometimes went wrong when my mountpoint disconnected. I decided to use node.js to build a simple sftp application that would move my code onto the controller at the specified IP address.",
                "I learnt a lot about the Node.js event loop and writing this code started a particular interest for me in systems and I wanted to know how these Node.js programs are written in lower level languages. I have now even gone so far as rebuilding a more robust version of this tool in Rust, and have thoroughly been enjoying working through the Rust book and learning a lower level language.",
            ]
        },
        {
            name: "HMI",
            descriptionParagraphs: [
                "The HMI plugin was the first plugin that I created while working at Infinity Renewable Solutions. This plugin is installed on the HMI of custom built panels and is used to monitor basic fixed information about a system.",
                "I created this plugin using vanilla HTML, CSS and JavaScript. One interesting part of this plugin was the inclusion of a small dynamic table per source which can be configured in the back-end by an engineer. ",
                "In addition to learning how the systems work that I create plugins for,",
            ],
            funFactParagraphs: [
                "It was interesting learning how to invert the rows and columns of data presented in a table using JavaScript before displaying it. Since I did this the first time, I’ve had to do it two more times, in different plugins.",
            ]
        },
        {
            name: "Sftp workflow automation",
            descriptionParagraphs: [
                "This is a project that I have been working on for a while and it has evolved significantly. Initially it was a simple Bash script that mounted an external file system onto my machine and moved files onto the externally mounted file system.",
                "This solution worked, but I felt like it had a lot of limitations, and the configuration was not very streamlined. Additionally, I wanted to make this program available to the rest of my team, so they would also be able to have an easier time developing plugins if they need to.",
                "I rewrote the program in Node.js using an SFTP package. It evolved into a CLI application, where you create a configuration file based on the controller and plugin version. It was now also able to work on Windows and Mac as well, allowing some of my team members that were not on Linux to also have access to it.",
                "Just as I thought it was good enough for what it needed to do, the core of our system moved over to a newer ssh authentication protocol. This in combination with some of the ssh libraries I was depending on to be deprecated had me considering rewriting this project one last time.",
                "Of course I am now at the point where I want to learn a system’s level language, so I decided that this was the perfect opportunity for me to learn Rust. I rewrote the application in Rust, and added some extra nice functionality.",
                "I have now cut down the amount of configuration that needs to be done by the developer. The configuration file is created if it does not exist, and the version number of the plugin is automatically detected instead of manually input by the developer. It also allows developers to use either the old or new versions of ssh to be able to develop for both the old and new core versions, as the old core will not be deprecated.",
            ],
            funFactParagraphs: [
                "Learning Rust has been an amazing journey so far. Wrapping my head around how memory is managed and how to please the borrow checker has been really exciting for me. The two most fun things I did in this project were writing recursive functions to remove and copy all files and directories in a certain directory, and finding out how to create an ssh2 session by performing a handshake between a TCP Stream and an SSH session.",
            ]
        }
    ];
    return (
        <div className='projects-section'>

        </div>
    )
}

export default ProjectsSection