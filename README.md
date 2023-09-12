# ProfessorMatch

2023 Howdy Hack Project!

##Our Mission:
At ProfMatch, our mission is to empower students to take control of their education. We believe that accurate data from students about professors and courses can lead to better academic choices and improved learning experiences.

## What is it?
Our user-friendly interface allows you to search for course names and report to you the professors best suited to your preferences for that course. Whether you're selecting your classes for the upcoming semester or just curious about your current instructors, finding the right information is a breeze. Our platform thrives on the feedback of students like you. We use AEFIS course evaluation data from students, published in a public and frequently updated Kaggle dataset, to give more thorough and objective feedback. Get an inside look into teaching styles, course content, grading criteria, and overall classroom experiences.

##Personalize ratings for each student based on preferences 
Users can dynamically change and get ratings specifically for them, versus one-size-fits-all ratings on other sites, based on subjective metrics (people more likely to use if they are extremely like or dislike a professor causing voluntary bias)

## How we built it
- Next.js React-based framework for the front-end web development.
- Tailwind CSS for easier implementation of styling, color, and design.
-Axios library and Flask backend to communicate between front-end and data science and analytics.
-Python scripts implementing data science life cycle- preprocessing, feature engineering and normalization, and development of an algorithm to recommend and rank professors based on how they match the preferences and priorities of each student.
-Pandas data frame for organization and manipulation of data.
-Sqlite3 database for planned storage of user preferences- not fully implemented yet.

## Challenges we ran into
Developing an algorithm that takes into account the importance of each feature to gauge preferences- backtesting to ensure that each step works and that data manipulation is accurate
Implementing a full-stack website in less than 24 hours- heavily data science-dependent, so lots of time spent on back-end and algorithm development

## Accomplishments that we're proud of
We're proud to have built a functional website offering extensive data coverage in our chosen domain. Our dedication to collecting and organizing a wide range of information ensures that users can conveniently find the data they need. One of our major accomplishments is our meticulous attention to constantly updated data accuracy and quality. We've implemented rigorous validation processes to ensure that the data provided is reliable and error-free.

## What we learned
-Pandas application adds data preprocessing and manipulation for large datasets, with a focus on efficiency (over 40000 entries).
-Communicating between front-end and back-end using Axios and Flask.
-Project ideation through identifying problems with existing resources and technologies.

## What's next for ProfMatch
-Finishing login system so users can save preferences and do not have to enter personalization information each time they search
-Visualization- Plot professor rating trends over years in the clean graph for certain courses so users can see trends and changes in scores over time
-Deployment to the web 


