import pandas as pd 
import numpy as np

input = input('Select:')

excel_file = 'DocA.xlsx'

df = pd.read_excel(excel_file)
df.duplicated()
df.loc[df.duplicated(), :]
df.loc[df.duplicated(keep=False), :]

df = df.loc[df.duplicated(keep=False), :]

# function definition
def highlight_cols(x):
      
# copy df to new - original data is not changed
    df = x.copy()
      
# To highlight duplicated values in yellow
    df.loc[:, :] = 'background-color: yellow'
      
# To return file df with colour
    return df 
  
print("Highlighted dataframe:")
display = (df.style.apply(highlight_cols, axis = None))

display.to_excel("Highlighted_Duplicates.xlsx")