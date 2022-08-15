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


#SCRIPT TO COMPARE ROWS WITHIN ONE DOCUMENT AND RETURN 1 FILE

import pandas as pd 
import numpy as np
from pathlib import Path

input = input('Select:')

# excel_file = 'DocA.xlsx'
initial_version = Path.cwd() / "DocA.xlsx"

df_initial = pd.read_excel(initial_version)

df = pd.read_excel("DocA.xlsx")

#To take a look at duplication in dataframe
df1 = df.duplicated()

#To calculate duplicate rows
df2 = df.duplicated().sum()

#Extract duplicated rows
df3 = df.loc[df.duplicated(), :]

#To drop duplicated rows
df4 = df.drop_duplicates(keep=False)

print(df4)

#To take print out of Non-Duplicates to excel
df4.to_excel(Path.cwd() / "Non-Duplicates.xlsx")


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


#SCRIPT TO COMPARE 2 DOCUMENTS AND RETURN 2 FILES HIGHLIGHTED

from pathlib import Path
import pandas as pd
import xlwings as xw

initial_version = Path.cwd() / "DocA.xlsx"
updated_version = Path.cwd() / "DocB.xlsx"

df_initial = pd.read_excel(initial_version)

df_updated = pd.read_excel(updated_version)

diff = df_updated.compare(df_initial, align_axis=1)

diff = df_updated.compare(df_initial, keep_shape=True, keep_equal=False)
diff
diff = df_updated.compare(df_initial, align_axis=1)
diff.to_excel(Path.cwd() / "Difference.xlsx")

with xw.App(visible=False) as app:
    initial_wb = app.books.open(initial_version)
    initial_ws = initial_wb.sheets(1)

    updated_wb = app.books.open(updated_version)
    updated_ws = updated_wb.sheets(1)


    for cell in updated_ws.used_range:
        old_value = initial_ws.range((cell.row, cell.column)).value
        if cell.value != old_value:
            cell.api.AddComment(f"Value from {initial_wb.name}: {old_value}")  # WARNING: Platform specific (!)
            cell.color = (255, 234, 0)  # light yellow
       
    updated_wb.save(Path.cwd() / "Duplicates_with_Non_Duplicates_Highlighted.xlsx")

    