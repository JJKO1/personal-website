import pandas as pd
import os

os.chdir()
#top 10 rows
df=pd.head(10)

#columns 
df.shape[1]
df.columns
df.describe()
#for numbers to do analysis
df.index
df.info()
df['item_name','quantity'].groupby(['item_name'],as_index=False)
sort_values(['quantity'])