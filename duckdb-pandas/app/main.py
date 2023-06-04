import duckdb
import pandas

def main():
    my_df = pandas.DataFrame.from_dict({'a': [42]})
    con = duckdb.connect('file.db')
    con.sql("CREATE TABLE my_table AS SELECT * FROM my_df")
