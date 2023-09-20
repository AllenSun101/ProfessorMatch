# ProfessorMatch

2023 Howdy Hack Project (Second place overall)!

## Our Mission:
At ProfMatch, our mission is to empower students to take control of their education. We believe that accurate data from students about professors and courses can lead to better academic choices and improved learning experiences.

## What is it?
Our user-friendly interface allows you to search for course names and report to you the professors best suited to your preferences for that course. Whether you're selecting your classes for the upcoming semester or just curious about your current instructors, finding the right information is a breeze. Our platform thrives on the feedback of students like you. We use AEFIS course evaluation data from students, published in a public and frequently updated Kaggle dataset, to give more thorough and objective feedback. Get an inside look into teaching styles, course content, grading criteria, and overall classroom experiences.

## Personalize ratings for each student based on preferences 
Users can dynamically change preferences and get personalized ratings, as opposed to one-size-fits-all ratings on other sites. Additionally, those sites are commonly based on subjective metrics (people are more likely to contribute if they extremely like or dislike a professor).

## How we built it
We utilized Next.js, a React-based framework, for the front-end web development and Tailwind CSS. We leveraged the Axios library and a Flask backend. Python scripts and the Pandas library implemented the data science life cycle, which included preprocessing, feature engineering and normalization, and development of an algorithm to recommend and rank professors based on how closely they match the priorities of each student.

## Accomplishments that we're proud of
We're proud to have built a functional website offering extensive data coverage in our chosen domain. Our dedication to collecting and organizing a wide range of information ensures that users can conveniently find the data they need. One of our major accomplishments is our meticulous attention to constantly updated data accuracy and quality. We've implemented rigorous validation processes to ensure that the data provided is reliable and error-free.

## To run the project
- cd into the frontend folder and execute "npm run dev" (ensure node is installed)
- in a separate terminal, cd into the backend folder and execute "flask --app flask_app --debug run" (ensure Flask is installed)

