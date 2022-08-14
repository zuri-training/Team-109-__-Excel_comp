#SCRIPT TO COMPARE ROWS IN ONE FILE AND RETURN DUPLICATED ROWS HIGHLIGHTED

import pandas as pd 
import numpy as np

input = input('Select:')

excel_file = 'sample.xlsx'

#Dataframes
df = pd.read_excel(excel_file)
df.duplicated()
df.loc[df.duplicated(), :]
df.loc[df.duplicated(keep=False), :]

df = df.loc[df.duplicated(keep=False), :]

# function definition
def highlight_cols(x):
      
# To copy df info to a new file 
    df = x.copy()
      
# To highlight duplicated values in yellow
    df.loc[:, :] = 'background-color: yellow'
      
# To return file df with colour
    return df 
  
print("Returned rows file:")
display = (df.style.apply(highlight_cols, axis = None))

display.to_excel("Highlighted_Duplicates.xlsx")


#SCRIPT TO RETURN EXCEL FILES WITH DUPLICATES OR/AND NON-DUPLICATES

import pandas as pd
import numpy as np

firstinput = input('File 1: ')
secondinput = input('File 2: ')
duplicates = input('input "b" for both or "d" for duplicates or "n" for non-duplicates: ')

#Function to read excel files
DocA = pd.read_excel(firstinput + ".xlsx")
DocB = pd.read_excel(secondinput + ".xlsx")

#Function to check for duplicates & non-duplicates on file rows, depending on user selection
def rowcomparison(number, is_dupes):
    if is_dupes and (np.array_equal(DocA.values[number], DocB.values[number])):
        return DocA.values[number]
    elif not(is_dupes) and not(np.array_equal(DocA.values[number], DocB.values[number])):
        return DocA.values[number]
    else: return []
    
#Function to return an excel doc depending on user request
def return_document(is_duplicate, name):
    rows = DocA.index.stop + 1
    values = []

#Row comparison
    for i in range(0, rows - 1):
#To get list of duplicates or non-duplicates
        if len(rowcomparison(i, is_duplicate)): 
            values.append(rowcomparison(i, is_duplicate)) 

#Dataframes
    title = DocA.columns
    new_dataframe = pd.DataFrame(values)
    new_dataframe.to_excel(name + '.xlsx', index=False)
    new_dataframe.columns = DocA.columns
 
#Return excel doc or docs depending on condition
if duplicates == 'b': 
    return_document(True, 'duplicates')
    return_document(False, 'non-duplicates')
else:
    dup_c = (duplicates == 'd')
    return_document(True if dup_c else False,'duplicates' if dup_c else "non-duplicates")
print("Done")