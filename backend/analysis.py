import pandas as pd

def stats_for_project(course, subject_code, grade_importance,expected_importance,objective_importance,critical_importance,organization_importance,diverse_importance,feedback_importance):
    df = pd.read_csv('sections.csv')

    #Go through each column case by case
    df['GPA'] = df.apply(lambda row: (row['a'] * 4.0 + row['b'] * 3.0 + row['c'] * 2.0 + row['d'] * 1.0 + row['f'] * 0.0 + row['q'] * 0.0) / (row['total_graded_students'] + row['q']) / 4.0, axis=1)
    df['expected'] = df.apply(lambda row: (row['expected_1'] * 1.0 + row['expected_2'] * 2.0 + row['expected_3'] * 3.0) / max(1, row['expected_1']+row['expected_2']+row['expected_3']) / 3.0, axis=1)
    df['objectives'] = df.apply(lambda row: (row['objectives_1'] * 1.0 + row['objectives_2'] * 2.0 + row['objectives_3'] * 3.0 + row['objectives_4'] *4.0) / max(1, row['objectives_1']+row['objectives_2']+row['objectives_3']+row['objectives_4']) / 4.0, axis=1)
    df['criticalthinking'] = df.apply(lambda row: (row['critical_thinking_1'] * 1.0 + row['critical_thinking_2'] * 2.0 + row['critical_thinking_3'] * 3.0 + row['critical_thinking_4'] * 4.0) / max(1, row['critical_thinking_1']+row['critical_thinking_2']+row['critical_thinking_3']+row['critical_thinking_4']) / 4.0, axis=1)
    df['organizerranking'] = df.apply(lambda row: (row['organization_1'] * 1.0 + row['organization_2'] * 2.0 + row['organization_3'] * 3.0 + row['organization_4'] * 4.0) / max(1, row['organization_1']+row['organization_2']+row['organization_3']+row['organization_4']) / 4.0, axis=1)
    df['diverse'] = df.apply(lambda row: (row['diverse_1'] * 1.0 + row['diverse_2'] * 2.0 + row['diverse_3'] * 3.0 + row['diverse_4'] * 4.0 + row['diverse_5'] * 5.0) / max(1, row['diverse_1']+row['diverse_2']+row['diverse_3']+row['diverse_4']+row['diverse_5'] + row['diverse_0']) / 5.0, axis=1)
    df['feedback'] = df.apply(lambda row: (row['feedback_1'] * 1.0 + row['feedback_2'] * 2.0 + row['feedback_3'] * 3.0 + row['feedback_4'] * 4.0 + row['feedback_5'] * 5.0 + row['feedback_6'] * 6.0) / max(1, row['feedback_1']+row['feedback_2']+row['feedback_3']+row['feedback_4']+row['feedback_5']+row['feedback_6']) / 6.0, axis=1)

    keep_list = ['GPA', 'expected', 'objectives', 'criticalthinking', 'organizerranking', 'diverse', 'feedback', 'semester', 'year', 'subject_code', 'course_number', 'section_number', 'professor_name']

    df = df.loc[:, keep_list]

    df = df[df["course_number"] == int(course)]
    df = df[df["subject_code"] == subject_code]

    if df.empty:
        return df
        
    df['final_scoring'] = df.apply(lambda row: round((row['GPA'] * int(grade_importance) + row['expected'] * int(expected_importance) + row['objectives'] * int(objective_importance) + row['criticalthinking'] * int(critical_importance) + row['organizerranking'] * int(organization_importance) + row['diverse'] * int(diverse_importance) + row['feedback'] * int(feedback_importance)), 2), axis=1)
    
    df['max_score'] = df.apply(lambda row: sum([
        int(grade_importance) if row['GPA'] != 0 else 0,
        int(expected_importance) if row['expected'] != 0 else 0,
        int(objective_importance) if row['objectives'] != 0 else 0,
        int(critical_importance) if row['criticalthinking'] != 0 else 0,
        int(organization_importance) if row['organizerranking'] != 0 else 0,
        int(feedback_importance) if row['feedback'] != 0 else 0,
        int(diverse_importance) if row['diverse'] != 0 else 0
    ]), axis=1)

    df['final_scoring_normal'] = df.apply(lambda row: round(5 * row['final_scoring'] / row['max_score'], 2) if row['max_score'] > 0 else 0.00, axis=1)

    final_df=df.loc[:,["professor_name","final_scoring_normal"]]
    final_df = final_df.groupby(['professor_name']).mean()
    final_df = final_df.sort_values(by='final_scoring_normal', ascending=False)
    final_df['final_scoring_normal'] = [round(i, 2) for i in final_df['final_scoring_normal']]
    #print("Choose Professor: " + final_df.index[0], "with score:", final_df.iloc[0].final_scoring_normal)
    return(final_df)


def visualization_stats():
    pass


# print(stats_for_project(304, 'MATH', 1,1,1,1,1,1,1))
