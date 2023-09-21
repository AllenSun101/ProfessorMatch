from flask import Flask
import analysis
import pandas as pd

app = Flask(__name__)
app.config["JSON_SORT_KEYS"] = False


@app.route('/Temporary_Fetch/<course>/<feedback>/<learn>/<expectations>/<critical>/<diverse>/<clear>/<grade>', methods=['GET'])
def temp_ratings(course, feedback, learn, expectations, critical, diverse, clear, grade):
    
    course_info = course.split(" ")
    if len(course_info) != 2:
        return {"Error" : "Invalid Course"}
    
    subject_code = course_info[0]
    course = course_info[1]

    data = analysis.stats_for_project(course, subject_code, grade, expectations, learn, critical, clear, diverse, feedback)
    
    if data.empty:
        return {"Error" : "Invalid Course"}
    
    result_dict = data.set_index(data.index)['final_scoring_normal'].to_dict()

    print(result_dict)
    return result_dict



@app.route('/Visualizations_Fetch/<course>/<feedback>/<learn>/<expectations>/<critical>/<diverse>/<clear>/<grade>', methods=['GET'])
def visualization_ratings(course, feedback, learn, expectations, critical, diverse, clear, grade):
    course_info = course.split(" ")
    if len(course_info) != 2:
        return {"Error" : "Invalid Course"}
    
    subject_code = course_info[0]
    course = course_info[1]

    data = analysis.visualization_stats(course, subject_code, grade, expectations, learn, critical, clear, diverse, feedback)
    
    if len(data) == 0:
        return {"Error" : "Invalid Course"}
    
    print(data)

    result_profs = {}

    for prof in data:
        #print(prof)
        prof_name = prof['professor_name'].iloc[0]
        #print(prof_name)

        prof['index'] = prof['semester'].astype(str) + ' ' + prof['year'].astype(str)
        result_dict = prof.set_index('index')['final_scoring_normal'].to_dict()
        #print(result_dict)
        result_profs[prof_name] = result_dict

    #print(result_profs)
    return result_profs


if __name__ == '__main__':
   app.run(debug = True)
